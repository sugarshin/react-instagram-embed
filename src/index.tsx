import * as React from 'react';
import { stringify } from 'querystring';
import { SetRequired } from 'type-fest';

interface DefaultProps<T extends React.ElementType = 'div'> {
  hideCaption: boolean;
  containerTagName: T;
  protocol: string;
  injectScript: boolean;
}

type Html = string;

interface Response {
  html: Html;
}

interface State {
  html: Html | null;
}

interface RequestPromise {
  promise: Promise<Response>;
  cancel(): void;
}

type PropsInternal = SetRequired<Props, keyof DefaultProps>;

export interface Props<T extends React.ElementType = 'div'> extends Partial<DefaultProps<T>> {
  url: string;
  clientAccessToken: string;
  maxWidth?: number;
  className?: string;
  onLoading?(): void;
  onSuccess?(response: Response): void;
  onAfterRender?(): void;
  onFailure?(error: Error): void;
}

export default class InstagramEmbed extends React.Component<PropsInternal, State> {
  public static defaultProps: DefaultProps = {
    hideCaption: false,
    containerTagName: 'div',
    protocol: 'https:',
    injectScript: true,
  };

  private request: RequestPromise | null = null;
  private timer?: number;

  constructor(props: PropsInternal) {
    super(props);
    this.state = { html: null };
  }

  componentDidMount(): void {
    if (window.instgrm) {
      this.fetchEmbed(this.getQueryParams(this.props));
    } else {
      if (this.props.injectScript && !document.getElementById('react-instagram-embed-script')) {
        this.injectScript();
      }
      this.checkAPI().then(() => {
        this.fetchEmbed(this.getQueryParams(this.props));
      });
    }
  }

  componentDidUpdate(prevProps: PropsInternal): void {
    const { url, clientAccessToken, hideCaption, maxWidth, containerTagName, className } = this.props;
    if (
      prevProps.url !== url ||
      prevProps.clientAccessToken !== clientAccessToken ||
      prevProps.hideCaption !== hideCaption ||
      prevProps.maxWidth !== maxWidth ||
      prevProps.containerTagName !== containerTagName ||
      prevProps.className !== className
    ) {
      (this.request as RequestPromise).cancel();
      this.fetchEmbed(this.getQueryParams(this.props));
    }
  }

  componentWillUnmount(): void {
    this.cancel();
  }

  public render(): React.ReactNode {
    const Element = this.props.containerTagName;
    return <Element {...this.omitComponentProps()} dangerouslySetInnerHTML={{ __html: this.state.html || '' }} />;
  }

  // Public
  public cancel = (): void => {
    if (this.request) {
      this.request.cancel();
    }
  };

  private fetchEmbed(queryParams: string): void {
    this.request = this.createRequestPromise(`https://graph.facebook.com/v11.0/instagram_oembed/?${queryParams}`);

    if (this.props.onLoading) {
      this.props.onLoading();
    }

    this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
  }

  private omitComponentProps() {
    const {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      url,
      clientAccessToken,
      hideCaption,
      maxWidth,
      containerTagName,
      onLoading,
      onSuccess,
      onAfterRender,
      onFailure,
      protocol,
      injectScript,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...rest
    } = this.props;
    return rest;
  }

  private injectScript(): void {
    const protocolToUse: string = window.location.protocol.indexOf('file') === 0 ? this.props.protocol : '';

    const s = document.createElement('script');
    s.async = s.defer = true;
    s.src = `${protocolToUse}//platform.instagram.com/en_US/embeds.js`;
    s.id = 'react-instagram-embed-script';
    const body: HTMLElement | null = document.body;
    if (body) {
      body.appendChild(s);
    }
  }

  private checkAPI(): Promise<void> {
    return new Promise((resolve) => {
      (function checkAPI(self: InstagramEmbed) {
        self.timer = window.setTimeout(() => {
          if (window.instgrm) {
            clearTimeout(self.timer);
            resolve();
          } else {
            checkAPI(self);
          }
        }, 20);
      })(this);
    });
  }

  private getQueryParams({ url, hideCaption, maxWidth }: PropsInternal): string {
    const query: { url: string; hidecaption: boolean; omitscript: true; fields: 'html'; maxwidth?: number } = {
      url,
      hidecaption: hideCaption,
      omitscript: true,
      fields: 'html',
    };

    // "The request parameter 'maxwidth' must be an integer between 320 and 658."
    if (typeof maxWidth === 'number' && 320 <= maxWidth && maxWidth <= 658) {
      query.maxwidth = maxWidth;
    }

    return stringify(query);
  }

  private handleFetchSuccess = (response: Response): void => {
    if (this.props.onSuccess) {
      this.props.onSuccess(response);
    }

    this.setState({ html: response.html }, () => {
      window.instgrm.Embeds.process();
      if (this.props.onAfterRender) {
        this.props.onAfterRender();
      }
    });
  };

  private handleFetchFailure = (error: Error): void => {
    clearTimeout(this.timer);
    if (this.props.onFailure) {
      this.props.onFailure(error);
    }
  };

  private createRequestPromise = (url: string): RequestPromise => {
    const request = {} as RequestPromise;

    request.promise = new Promise((resolve, reject) => {
      const promise = fetch(url, {
        headers: {
          Authorization: `Bearer ${this.props.clientAccessToken}`,
        },
      })
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((err) => reject(err));

      request.cancel = () => reject(new Error('Cancelled'));
      return promise;
    });

    return request;
  };
}

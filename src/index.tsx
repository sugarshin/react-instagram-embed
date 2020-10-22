import * as React from 'react';
import * as qs from 'query-string';

declare global {
  interface Window {
    instgrm: any;
  }
}

export interface Props<T = 'div'> {
  url: string;
  accessToken: string;
  hideCaption: boolean;
  containerTagName: T;
  protocol: string;
  injectScript: boolean;
  maxWidth?: number;
  className?: string; // TODO:
  onLoading?(): void;
  onSuccess?(response: Response): void;
  onAfterRender?(): void;
  onFailure?(arg: any): void;
}

type Html = string;

interface Response {
  version: string;
  title: string;
  author_name: string;
  author_url: string;
  author_id: number;
  media_id: string;
  provider_name: 'Instagram';
  provider_url: string;
  type: string; // "rich"
  width: number | null;
  height: number | null;
  html: Html;
  thumbnail_width: number;
  thumbnail_height: number;
}

interface State {
  html: Html | null;
}

interface RequestPromise {
  promise: Promise<Response>;
  cancel(): void;
}

export default class InstagramEmbed extends React.PureComponent<Props, State> {
  public static defaultProps = {
    hideCaption: false,
    containerTagName: 'div',
    protocol: 'https:',
    injectScript: true
  };

  private request: RequestPromise | null = null;
  private timer?: number;

  constructor(props: Props) {
    super(props);
    this.state = { html: null };
  }

  public componentDidMount() {
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

  public componentDidUpdate(prevProps: Props) {
    const { url, hideCaption, maxWidth, containerTagName } = this.props;
    if (
      prevProps.url !== url ||
      prevProps.hideCaption !== hideCaption ||
      prevProps.maxWidth !== maxWidth ||
      prevProps.containerTagName !== containerTagName
    ) {
      (this.request as RequestPromise).cancel();
      this.fetchEmbed(this.getQueryParams(this.props));
    }
  }

  public componentWillUnmount() {
    this.cancel();
  }

  public render(): React.ReactNode {
    const Tag = this.props.containerTagName;
    return <Tag {...this.omitComponentProps()} dangerouslySetInnerHTML={{ __html: this.state.html || '' }} />;
  }

  // Public
  public cancel = (): void => {
    if (this.request) {
      this.request.cancel();
    }
  };

  private fetchEmbed(queryParams: string): void {
    this.request = this.createRequestPromise(`https://graph.facebook.com/v8.0/instagram_oembed/?${queryParams}`);

    if (this.props.onLoading) {
      this.props.onLoading();
    }

    this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
  }

  private omitComponentProps() {
    const {
      url,
      accessToken,
      hideCaption,
      maxWidth,
      containerTagName,
      onLoading,
      onSuccess,
      onAfterRender,
      onFailure,
      protocol,
      injectScript,
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

  private checkAPI(): Promise<any> {
    return new Promise(resolve => {
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

  private getQueryParams({
    url,
    accessToken,
    hideCaption,
    maxWidth
  }: {
    url: string;
    accessToken: string;
    hideCaption: boolean;
    maxWidth?: number;
  }): string {
    return qs.stringify({
      url,
      access_token: accessToken,
      hidecaption: hideCaption,
      maxwidth: typeof maxWidth === 'number' && maxWidth >= 320 ? maxWidth : undefined,
      omitscript: true
    });
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

  private handleFetchFailure = (...args: any[]): void => {
    clearTimeout(this.timer);
    if (this.props.onFailure) {
      this.props.onFailure(args);
    }
  };

  private createRequestPromise = (url: string): RequestPromise => {
    const request = {} as RequestPromise;

    request.promise = new Promise((resolve, reject) => {
      const promise = fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => reject(err));

      request.cancel = () => reject(new Error('Cancelled'));
      return promise;
    });

    return request;
  };
}

(self.webpackChunkreact_instagram_embed=self.webpackChunkreact_instagram_embed||[]).push([[363],{8895:e=>{e.exports=function(e){return{name:"Mojolicious",subLanguage:"xml",contains:[{className:"meta",begin:"^__(END|DATA)__$"},{begin:"^\\s*%{1,2}={0,2}",end:"$",subLanguage:"perl"},{begin:"<%{1,2}={0,2}",end:"={0,1}%>",subLanguage:"perl",excludeBegin:!0,excludeEnd:!0}]}}},9676:e=>{e.exports=function(e){const n={className:"number",relevance:0,variants:[{begin:"[$][a-fA-F0-9]+"},e.NUMBER_MODE]};return{name:"Monkey",case_insensitive:!0,keywords:{keyword:"public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import",built_in:"DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI",literal:"true false null and or shl shr mod"},illegal:/\/\*/,contains:[e.COMMENT("#rem","#end"),e.COMMENT("'","$",{relevance:0}),{className:"function",beginKeywords:"function method",end:"[(=:]|$",illegal:/\n/,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"class",beginKeywords:"class interface",end:"$",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{className:"built_in",begin:"\\b(self|super)\\b"},{className:"meta",begin:"\\s*#",end:"$",keywords:{keyword:"if else elseif endif end then"}},{className:"meta",begin:"^\\s*strict\\b"},{beginKeywords:"alias",end:"=",contains:[e.UNDERSCORE_TITLE_MODE]},e.QUOTE_STRING_MODE,n]}}},6486:e=>{e.exports=function(e){const n={keyword:"if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",literal:"true false nil",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},t="[A-Za-z$_][0-9A-Za-z$_]*",i={className:"subst",begin:/#\{/,end:/\}/,keywords:n},a=[e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i]}]},{className:"built_in",begin:"@__"+e.IDENT_RE},{begin:"@"+e.IDENT_RE},{begin:e.IDENT_RE+"\\\\"+e.IDENT_RE}];i.contains=a;const r=e.inherit(e.TITLE_MODE,{begin:t}),s="(\\(.*\\)\\s*)?\\B[-=]>",o={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(a)}]};return{name:"MoonScript",aliases:["moon"],keywords:n,illegal:/\/\*/,contains:a.concat([e.COMMENT("--","$"),{className:"function",begin:"^\\s*"+t+"\\s*=\\s*"+s,end:"[-=]>",returnBegin:!0,contains:[r,o]},{begin:/[\(,:=]\s*/,relevance:0,contains:[{className:"function",begin:s,end:"[-=]>",returnBegin:!0,contains:[o]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[r]},r]},{className:"name",begin:t+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}},1414:e=>{e.exports=function(e){return{name:"N1QL",case_insensitive:!0,contains:[{beginKeywords:"build create index delete drop explain infer|10 insert merge prepare select update upsert|10",end:/;/,keywords:{keyword:["all","alter","analyze","and","any","array","as","asc","begin","between","binary","boolean","break","bucket","build","by","call","case","cast","cluster","collate","collection","commit","connect","continue","correlate","cover","create","database","dataset","datastore","declare","decrement","delete","derived","desc","describe","distinct","do","drop","each","element","else","end","every","except","exclude","execute","exists","explain","fetch","first","flatten","for","force","from","function","grant","group","gsi","having","if","ignore","ilike","in","include","increment","index","infer","inline","inner","insert","intersect","into","is","join","key","keys","keyspace","known","last","left","let","letting","like","limit","lsm","map","mapping","matched","materialized","merge","minus","namespace","nest","not","number","object","offset","on","option","or","order","outer","over","parse","partition","password","path","pool","prepare","primary","private","privilege","procedure","public","raw","realm","reduce","rename","return","returning","revoke","right","role","rollback","satisfies","schema","select","self","semi","set","show","some","start","statistics","string","system","then","to","transaction","trigger","truncate","under","union","unique","unknown","unnest","unset","update","upsert","use","user","using","validate","value","valued","values","via","view","when","where","while","with","within","work","xor"],literal:["true","false","null","missing|5"],built_in:["array_agg","array_append","array_concat","array_contains","array_count","array_distinct","array_ifnull","array_length","array_max","array_min","array_position","array_prepend","array_put","array_range","array_remove","array_repeat","array_replace","array_reverse","array_sort","array_sum","avg","count","max","min","sum","greatest","least","ifmissing","ifmissingornull","ifnull","missingif","nullif","ifinf","ifnan","ifnanorinf","naninf","neginfif","posinfif","clock_millis","clock_str","date_add_millis","date_add_str","date_diff_millis","date_diff_str","date_part_millis","date_part_str","date_trunc_millis","date_trunc_str","duration_to_str","millis","str_to_millis","millis_to_str","millis_to_utc","millis_to_zone_name","now_millis","now_str","str_to_duration","str_to_utc","str_to_zone_name","decode_json","encode_json","encoded_size","poly_length","base64","base64_encode","base64_decode","meta","uuid","abs","acos","asin","atan","atan2","ceil","cos","degrees","e","exp","ln","log","floor","pi","power","radians","random","round","sign","sin","sqrt","tan","trunc","object_length","object_names","object_pairs","object_inner_pairs","object_values","object_inner_values","object_add","object_put","object_remove","object_unwrap","regexp_contains","regexp_like","regexp_position","regexp_replace","contains","initcap","length","lower","ltrim","position","repeat","replace","rtrim","split","substr","title","trim","upper","isarray","isatom","isboolean","isnumber","isobject","isstring","type","toarray","toatom","toboolean","tonumber","toobject","tostring"]},contains:[{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE]},{className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{className:"symbol",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_BLOCK_COMMENT_MODE]}}},5384:e=>{e.exports=function(e){return{name:"Nested Text",aliases:["nt"],contains:[e.inherit(e.HASH_COMMENT_MODE,{begin:/^\s*(?=#)/,excludeBegin:!0}),{variants:[{match:[/^\s*/,/-/,/[ ]/,/.*$/]},{match:[/^\s*/,/-$/]}],className:{2:"bullet",4:"string"}},{match:[/^\s*/,/>/,/[ ]/,/.*$/],className:{2:"punctuation",4:"string"}},{match:[/^\s*(?=\S)/,/[^:]+/,/:\s*/,/$/],className:{2:"attribute",3:"punctuation"}},{match:[/^\s*(?=\S)/,/[^:]*[^: ]/,/[ ]*:/,/[ ]/,/.*$/],className:{2:"attribute",3:"punctuation",5:"string"}}]}}},4028:e=>{e.exports=function(e){const n=e.regex,t={className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{\w+\}/},{begin:n.concat(/[$@]/,e.UNDERSCORE_IDENT_RE)}]},i={endsWithParent:!0,keywords:{$pattern:/[a-z_]{2,}|\/dev\/poll/,literal:["on","off","yes","no","true","false","none","blocked","debug","info","notice","warn","error","crit","select","break","last","permanent","redirect","kqueue","rtsig","epoll","poll","/dev/poll"]},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[t]},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:"\\s\\^",end:"\\s|\\{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|\\{|;",returnEnd:!0},{begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{className:"number",begin:"\\b\\d+[kKmMgGdshdwy]?\\b",relevance:0},t]};return{name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{beginKeywords:"upstream location",end:/;|\{/,contains:i.contains,keywords:{section:"upstream location"}},{className:"section",begin:n.concat(e.UNDERSCORE_IDENT_RE+n.lookahead(/\s+\{/)),relevance:0},{begin:n.lookahead(e.UNDERSCORE_IDENT_RE+"\\s"),end:";|\\{",contains:[{className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:i}],relevance:0}],illegal:"[^\\s\\}\\{]"}}},5968:e=>{e.exports=function(e){return{name:"Nim",keywords:{keyword:["addr","and","as","asm","bind","block","break","case","cast","const","continue","converter","discard","distinct","div","do","elif","else","end","enum","except","export","finally","for","from","func","generic","guarded","if","import","in","include","interface","is","isnot","iterator","let","macro","method","mixin","mod","nil","not","notin","object","of","or","out","proc","ptr","raise","ref","return","shared","shl","shr","static","template","try","tuple","type","using","var","when","while","with","without","xor","yield"],literal:["true","false"],type:["int","int8","int16","int32","int64","uint","uint8","uint16","uint32","uint64","float","float32","float64","bool","char","string","cstring","pointer","expr","stmt","void","auto","any","range","array","openarray","varargs","seq","set","clong","culong","cchar","cschar","cshort","cint","csize","clonglong","cfloat","cdouble","clongdouble","cuchar","cushort","cuint","culonglong","cstringarray","semistatic"],built_in:["stdin","stdout","stderr","result"]},contains:[{className:"meta",begin:/\{\./,end:/\.\}/,relevance:10},{className:"string",begin:/[a-zA-Z]\w*"/,end:/"/,contains:[{begin:/""/}]},{className:"string",begin:/([a-zA-Z]\w*)?"""/,end:/"""/},e.QUOTE_STRING_MODE,{className:"type",begin:/\b[A-Z]\w+\b/,relevance:0},{className:"number",relevance:0,variants:[{begin:/\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/},{begin:/\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/},{begin:/\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/},{begin:/\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/}]},e.HASH_COMMENT_MODE]}}},4802:e=>{e.exports=function(e){const n={keyword:["rec","with","let","in","inherit","assert","if","else","then"],literal:["true","false","or","and","null"],built_in:["import","abort","baseNameOf","dirOf","isNull","builtins","map","removeAttrs","throw","toString","derivation"]},t={className:"subst",begin:/\$\{/,end:/\}/,keywords:n},i={className:"string",contains:[t],variants:[{begin:"''",end:"''"},{begin:'"',end:'"'}]},a=[e.NUMBER_MODE,e.HASH_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,{begin:/[a-zA-Z0-9-_]+(\s*=)/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/\S+/}]}];return t.contains=a,{name:"Nix",aliases:["nixos"],keywords:n,contains:a}}},9609:e=>{e.exports=function(e){return{name:"Node REPL",contains:[{className:"meta",starts:{end:/ |$/,starts:{end:"$",subLanguage:"javascript"}},variants:[{begin:/^>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]}}},9968:e=>{function n(e){return e?"string"==typeof e?e:e.source:null}function t(...e){return e.map((e=>n(e))).join("")}function i(...e){const t=function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e);return"("+(t.capture?"":"?:")+e.map((e=>n(e))).join("|")+")"}e.exports=function(e){const n={className:"variable.constant",begin:t(/\$/,i("ADMINTOOLS","APPDATA","CDBURN_AREA","CMDLINE","COMMONFILES32","COMMONFILES64","COMMONFILES","COOKIES","DESKTOP","DOCUMENTS","EXEDIR","EXEFILE","EXEPATH","FAVORITES","FONTS","HISTORY","HWNDPARENT","INSTDIR","INTERNET_CACHE","LANGUAGE","LOCALAPPDATA","MUSIC","NETHOOD","OUTDIR","PICTURES","PLUGINSDIR","PRINTHOOD","PROFILE","PROGRAMFILES32","PROGRAMFILES64","PROGRAMFILES","QUICKLAUNCH","RECENT","RESOURCES_LOCALIZED","RESOURCES","SENDTO","SMPROGRAMS","SMSTARTUP","STARTMENU","SYSDIR","TEMP","TEMPLATES","VIDEOS","WINDIR"))},a={className:"variable",begin:/\$+\{[\w.:-]+\}/},r={className:"variable",begin:/\$+\w+/,illegal:/\(\)\{\}/},s={className:"variable",begin:/\$+\([\w^.:-]+\)/},o={className:"params",begin:i("ARCHIVE","FILE_ATTRIBUTE_ARCHIVE","FILE_ATTRIBUTE_NORMAL","FILE_ATTRIBUTE_OFFLINE","FILE_ATTRIBUTE_READONLY","FILE_ATTRIBUTE_SYSTEM","FILE_ATTRIBUTE_TEMPORARY","HKCR","HKCU","HKDD","HKEY_CLASSES_ROOT","HKEY_CURRENT_CONFIG","HKEY_CURRENT_USER","HKEY_DYN_DATA","HKEY_LOCAL_MACHINE","HKEY_PERFORMANCE_DATA","HKEY_USERS","HKLM","HKPD","HKU","IDABORT","IDCANCEL","IDIGNORE","IDNO","IDOK","IDRETRY","IDYES","MB_ABORTRETRYIGNORE","MB_DEFBUTTON1","MB_DEFBUTTON2","MB_DEFBUTTON3","MB_DEFBUTTON4","MB_ICONEXCLAMATION","MB_ICONINFORMATION","MB_ICONQUESTION","MB_ICONSTOP","MB_OK","MB_OKCANCEL","MB_RETRYCANCEL","MB_RIGHT","MB_RTLREADING","MB_SETFOREGROUND","MB_TOPMOST","MB_USERICON","MB_YESNO","NORMAL","OFFLINE","READONLY","SHCTX","SHELL_CONTEXT","SYSTEM|TEMPORARY")},l={className:"keyword",begin:t(/!/,i("addincludedir","addplugindir","appendfile","cd","define","delfile","echo","else","endif","error","execute","finalize","getdllversion","gettlbversion","if","ifdef","ifmacrodef","ifmacrondef","ifndef","include","insertmacro","macro","macroend","makensis","packhdr","searchparse","searchreplace","system","tempfile","undef","uninstfinalize","verbose","warning"))},c={className:"string",variants:[{begin:'"',end:'"'},{begin:"'",end:"'"},{begin:"`",end:"`"}],illegal:/\n/,contains:[{className:"meta",begin:/\$(\\[nrt]|\$)/},n,a,r,s]},d={match:[/Function/,/\s+/,t(/(\.)?/,e.IDENT_RE)],scope:{1:"keyword",3:"title.function"}};return{name:"NSIS",case_insensitive:!0,keywords:{keyword:["Abort","AddBrandingImage","AddSize","AllowRootDirInstall","AllowSkipFiles","AutoCloseWindow","BGFont","BGGradient","BrandingText","BringToFront","Call","CallInstDLL","Caption","ChangeUI","CheckBitmap","ClearErrors","CompletedText","ComponentText","CopyFiles","CRCCheck","CreateDirectory","CreateFont","CreateShortCut","Delete","DeleteINISec","DeleteINIStr","DeleteRegKey","DeleteRegValue","DetailPrint","DetailsButtonText","DirText","DirVar","DirVerify","EnableWindow","EnumRegKey","EnumRegValue","Exch","Exec","ExecShell","ExecShellWait","ExecWait","ExpandEnvStrings","File","FileBufSize","FileClose","FileErrorText","FileOpen","FileRead","FileReadByte","FileReadUTF16LE","FileReadWord","FileWriteUTF16LE","FileSeek","FileWrite","FileWriteByte","FileWriteWord","FindClose","FindFirst","FindNext","FindWindow","FlushINI","GetCurInstType","GetCurrentAddress","GetDlgItem","GetDLLVersion","GetDLLVersionLocal","GetErrorLevel","GetFileTime","GetFileTimeLocal","GetFullPathName","GetFunctionAddress","GetInstDirError","GetKnownFolderPath","GetLabelAddress","GetTempFileName","GetWinVer","Goto","HideWindow","Icon","IfAbort","IfErrors","IfFileExists","IfRebootFlag","IfRtlLanguage","IfShellVarContextAll","IfSilent","InitPluginsDir","InstallButtonText","InstallColors","InstallDir","InstallDirRegKey","InstProgressFlags","InstType","InstTypeGetText","InstTypeSetText","Int64Cmp","Int64CmpU","Int64Fmt","IntCmp","IntCmpU","IntFmt","IntOp","IntPtrCmp","IntPtrCmpU","IntPtrOp","IsWindow","LangString","LicenseBkColor","LicenseData","LicenseForceSelection","LicenseLangString","LicenseText","LoadAndSetImage","LoadLanguageFile","LockWindow","LogSet","LogText","ManifestDPIAware","ManifestLongPathAware","ManifestMaxVersionTested","ManifestSupportedOS","MessageBox","MiscButtonText","Name","Nop","OutFile","Page","PageCallbacks","PEAddResource","PEDllCharacteristics","PERemoveResource","PESubsysVer","Pop","Push","Quit","ReadEnvStr","ReadINIStr","ReadRegDWORD","ReadRegStr","Reboot","RegDLL","Rename","RequestExecutionLevel","ReserveFile","Return","RMDir","SearchPath","SectionGetFlags","SectionGetInstTypes","SectionGetSize","SectionGetText","SectionIn","SectionSetFlags","SectionSetInstTypes","SectionSetSize","SectionSetText","SendMessage","SetAutoClose","SetBrandingImage","SetCompress","SetCompressor","SetCompressorDictSize","SetCtlColors","SetCurInstType","SetDatablockOptimize","SetDateSave","SetDetailsPrint","SetDetailsView","SetErrorLevel","SetErrors","SetFileAttributes","SetFont","SetOutPath","SetOverwrite","SetRebootFlag","SetRegView","SetShellVarContext","SetSilent","ShowInstDetails","ShowUninstDetails","ShowWindow","SilentInstall","SilentUnInstall","Sleep","SpaceTexts","StrCmp","StrCmpS","StrCpy","StrLen","SubCaption","Unicode","UninstallButtonText","UninstallCaption","UninstallIcon","UninstallSubCaption","UninstallText","UninstPage","UnRegDLL","Var","VIAddVersionKey","VIFileVersion","VIProductVersion","WindowIcon","WriteINIStr","WriteRegBin","WriteRegDWORD","WriteRegExpandStr","WriteRegMultiStr","WriteRegNone","WriteRegStr","WriteUninstaller","XPStyle"],literal:["admin","all","auto","both","bottom","bzip2","colored","components","current","custom","directory","false","force","hide","highest","ifdiff","ifnewer","instfiles","lastused","leave","left","license","listonly","lzma","nevershow","none","normal","notset","off","on","open","print","right","show","silent","silentlog","smooth","textonly","top","true","try","un.components","un.custom","un.directory","un.instfiles","un.license","uninstConfirm","user","Win10","Win7","Win8","WinVista","zlib"]},contains:[e.HASH_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT(";","$",{relevance:0}),d,{beginKeywords:"Function PageEx Section SectionGroup FunctionEnd SectionEnd"},c,l,a,r,s,o,{className:"title.function",begin:/\w+::\w+/},e.NUMBER_MODE]}}}}]);
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface ExtractResponse {
  id: string;

  status: number;
}

export interface ExtractParams {
  /**
   * Target URL to scrape
   */
  url: string;

  /**
   * Browser type to emulate
   */
  browser?: 'chrome' | 'firefox' | ExtractParams.UnionMember1;

  /**
   * City for geolocation
   */
  city?: string;

  /**
   * Client-side timeout in milliseconds
   */
  client_timeout?: number;

  /**
   * Whether to automatically handle cookie consent headers
   */
  consent_header?: boolean;

  /**
   * Browser cookies as array of cookie objects
   */
  cookies?: Array<ExtractParams.UnionMember0> | string;

  /**
   * Country code for geolocation and proxy selection
   */
  country?:
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'XK'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW'
    | 'ALL';

  /**
   * Debug and troubleshooting options for the request
   */
  debug_options?: ExtractParams.DebugOptions;

  /**
   * Device type for browser emulation
   */
  device?: 'desktop' | 'mobile' | 'tablet';

  /**
   * Whether to disable IP address validation
   */
  disable_ip_check?: boolean;

  /**
   * Browser driver to use
   */
  driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro';

  /**
   * Custom parser configuration as a key-value map
   */
  dynamic_parser?: { [key: string]: unknown };

  /**
   * Expected HTTP status codes for successful requests
   */
  expected_status_codes?: Array<number>;

  /**
   * Whether to export the userbrowser session
   */
  export_userbrowser?: boolean;

  /**
   * Response format
   */
  format?: 'json' | 'html' | 'csv' | 'raw' | 'json-lines' | 'markdown';

  /**
   * Custom HTTP headers to include in the request
   */
  headers?: { [key: string]: string | Array<string> | null };

  /**
   * Whether to use HTTP/2 protocol
   */
  http2?: boolean;

  /**
   * Whether to use IPv6 for the request
   */
  ip6?: boolean;

  /**
   * Whether to emulate XMLHttpRequest behavior
   */
  is_xhr?: boolean;

  /**
   * Locale for browser language and region settings
   */
  locale?:
    | 'aa-DJ'
    | 'aa-ER'
    | 'aa-ET'
    | 'af'
    | 'af-NA'
    | 'af-ZA'
    | 'ak'
    | 'ak-GH'
    | 'am'
    | 'am-ET'
    | 'an-ES'
    | 'ar'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IN'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'as'
    | 'as-IN'
    | 'asa'
    | 'asa-TZ'
    | 'ast-ES'
    | 'az'
    | 'az-AZ'
    | 'az-Cyrl'
    | 'az-Cyrl-AZ'
    | 'az-Latn'
    | 'az-Latn-AZ'
    | 'be'
    | 'be-BY'
    | 'bem'
    | 'bem-ZM'
    | 'ber-DZ'
    | 'ber-MA'
    | 'bez'
    | 'bez-TZ'
    | 'bg'
    | 'bg-BG'
    | 'bho-IN'
    | 'bm'
    | 'bm-ML'
    | 'bn'
    | 'bn-BD'
    | 'bn-IN'
    | 'bo'
    | 'bo-CN'
    | 'bo-IN'
    | 'br-FR'
    | 'brx-IN'
    | 'bs'
    | 'bs-BA'
    | 'byn-ER'
    | 'ca'
    | 'ca-AD'
    | 'ca-ES'
    | 'ca-FR'
    | 'ca-IT'
    | 'cgg'
    | 'cgg-UG'
    | 'chr'
    | 'chr-US'
    | 'crh-UA'
    | 'cs'
    | 'cs-CZ'
    | 'csb-PL'
    | 'cv-RU'
    | 'cy'
    | 'cy-GB'
    | 'da'
    | 'da-DK'
    | 'dav'
    | 'dav-KE'
    | 'de'
    | 'de-AT'
    | 'de-BE'
    | 'de-CH'
    | 'de-DE'
    | 'de-LI'
    | 'de-LU'
    | 'dv-MV'
    | 'dz-BT'
    | 'ebu'
    | 'ebu-KE'
    | 'ee'
    | 'ee-GH'
    | 'ee-TG'
    | 'el'
    | 'el-CY'
    | 'el-GR'
    | 'en'
    | 'en-AG'
    | 'en-AS'
    | 'en-AU'
    | 'en-BE'
    | 'en-BW'
    | 'en-BZ'
    | 'en-CA'
    | 'en-DK'
    | 'en-GB'
    | 'en-GU'
    | 'en-HK'
    | 'en-IE'
    | 'en-IN'
    | 'en-JM'
    | 'en-MH'
    | 'en-MP'
    | 'en-MT'
    | 'en-MU'
    | 'en-NA'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PH'
    | 'en-PK'
    | 'en-SG'
    | 'en-TT'
    | 'en-UM'
    | 'en-US'
    | 'en-VI'
    | 'en-ZA'
    | 'en-ZM'
    | 'en-ZW'
    | 'eo'
    | 'es'
    | 'es-419'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-CU'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GQ'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-US'
    | 'es-UY'
    | 'es-VE'
    | 'et'
    | 'et-EE'
    | 'eu'
    | 'eu-ES'
    | 'fa'
    | 'fa-AF'
    | 'fa-IR'
    | 'ff'
    | 'ff-SN'
    | 'fi'
    | 'fi-FI'
    | 'fil'
    | 'fil-PH'
    | 'fo'
    | 'fo-FO'
    | 'fr'
    | 'fr-BE'
    | 'fr-BF'
    | 'fr-BI'
    | 'fr-BJ'
    | 'fr-BL'
    | 'fr-CA'
    | 'fr-CD'
    | 'fr-CF'
    | 'fr-CG'
    | 'fr-CH'
    | 'fr-CI'
    | 'fr-CM'
    | 'fr-DJ'
    | 'fr-FR'
    | 'fr-GA'
    | 'fr-GN'
    | 'fr-GP'
    | 'fr-GQ'
    | 'fr-KM'
    | 'fr-LU'
    | 'fr-MC'
    | 'fr-MF'
    | 'fr-MG'
    | 'fr-ML'
    | 'fr-MQ'
    | 'fr-NE'
    | 'fr-RE'
    | 'fr-RW'
    | 'fr-SN'
    | 'fr-TD'
    | 'fr-TG'
    | 'fur-IT'
    | 'fy-DE'
    | 'fy-NL'
    | 'ga'
    | 'ga-IE'
    | 'gd-GB'
    | 'gez-ER'
    | 'gez-ET'
    | 'gl'
    | 'gl-ES'
    | 'gsw'
    | 'gsw-CH'
    | 'gu'
    | 'gu-IN'
    | 'guz'
    | 'guz-KE'
    | 'gv'
    | 'gv-GB'
    | 'ha'
    | 'ha-Latn'
    | 'ha-Latn-GH'
    | 'ha-Latn-NE'
    | 'ha-Latn-NG'
    | 'ha-NG'
    | 'haw'
    | 'haw-US'
    | 'he'
    | 'he-IL'
    | 'hi'
    | 'hi-IN'
    | 'hne-IN'
    | 'hr'
    | 'hr-HR'
    | 'hsb-DE'
    | 'ht-HT'
    | 'hu'
    | 'hu-HU'
    | 'hy'
    | 'hy-AM'
    | 'id'
    | 'id-ID'
    | 'ig'
    | 'ig-NG'
    | 'ii'
    | 'ii-CN'
    | 'ik-CA'
    | 'is'
    | 'is-IS'
    | 'it'
    | 'it-CH'
    | 'it-IT'
    | 'iu-CA'
    | 'iw-IL'
    | 'ja'
    | 'ja-JP'
    | 'jmc'
    | 'jmc-TZ'
    | 'ka'
    | 'ka-GE'
    | 'kab'
    | 'kab-DZ'
    | 'kam'
    | 'kam-KE'
    | 'kde'
    | 'kde-TZ'
    | 'kea'
    | 'kea-CV'
    | 'khq'
    | 'khq-ML'
    | 'ki'
    | 'ki-KE'
    | 'kk'
    | 'kk-Cyrl'
    | 'kk-Cyrl-KZ'
    | 'kk-KZ'
    | 'kl'
    | 'kl-GL'
    | 'kln'
    | 'kln-KE'
    | 'km'
    | 'km-KH'
    | 'kn'
    | 'kn-IN'
    | 'ko'
    | 'ko-KR'
    | 'kok'
    | 'kok-IN'
    | 'ks-IN'
    | 'ku-TR'
    | 'kw'
    | 'kw-GB'
    | 'ky-KG'
    | 'lag'
    | 'lag-TZ'
    | 'lb-LU'
    | 'lg'
    | 'lg-UG'
    | 'li-BE'
    | 'li-NL'
    | 'lij-IT'
    | 'lo-LA'
    | 'lt'
    | 'lt-LT'
    | 'luo'
    | 'luo-KE'
    | 'luy'
    | 'luy-KE'
    | 'lv'
    | 'lv-LV'
    | 'mag-IN'
    | 'mai-IN'
    | 'mas'
    | 'mas-KE'
    | 'mas-TZ'
    | 'mer'
    | 'mer-KE'
    | 'mfe'
    | 'mfe-MU'
    | 'mg'
    | 'mg-MG'
    | 'mhr-RU'
    | 'mi-NZ'
    | 'mk'
    | 'mk-MK'
    | 'ml'
    | 'ml-IN'
    | 'mn-MN'
    | 'mr'
    | 'mr-IN'
    | 'ms'
    | 'ms-BN'
    | 'ms-MY'
    | 'mt'
    | 'mt-MT'
    | 'my'
    | 'my-MM'
    | 'nan-TW'
    | 'naq'
    | 'naq-NA'
    | 'nb'
    | 'nb-NO'
    | 'nd'
    | 'nd-ZW'
    | 'nds-DE'
    | 'nds-NL'
    | 'ne'
    | 'ne-IN'
    | 'ne-NP'
    | 'nl'
    | 'nl-AW'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'nn-NO'
    | 'nr-ZA'
    | 'nso-ZA'
    | 'nyn'
    | 'nyn-UG'
    | 'oc-FR'
    | 'om'
    | 'om-ET'
    | 'om-KE'
    | 'or'
    | 'or-IN'
    | 'os-RU'
    | 'pa'
    | 'pa-Arab'
    | 'pa-Arab-PK'
    | 'pa-Guru'
    | 'pa-Guru-IN'
    | 'pa-IN'
    | 'pa-PK'
    | 'pap-AN'
    | 'pl'
    | 'pl-PL'
    | 'ps'
    | 'ps-AF'
    | 'pt'
    | 'pt-BR'
    | 'pt-GW'
    | 'pt-MZ'
    | 'pt-PT'
    | 'rm'
    | 'rm-CH'
    | 'ro'
    | 'ro-MD'
    | 'ro-RO'
    | 'rof'
    | 'rof-TZ'
    | 'ru'
    | 'ru-MD'
    | 'ru-RU'
    | 'ru-UA'
    | 'rw'
    | 'rw-RW'
    | 'rwk'
    | 'rwk-TZ'
    | 'sa-IN'
    | 'saq'
    | 'saq-KE'
    | 'sc-IT'
    | 'sd-IN'
    | 'se-NO'
    | 'seh'
    | 'seh-MZ'
    | 'ses'
    | 'ses-ML'
    | 'sg'
    | 'sg-CF'
    | 'shi'
    | 'shi-Latn'
    | 'shi-Latn-MA'
    | 'shi-Tfng'
    | 'shi-Tfng-MA'
    | 'shs-CA'
    | 'si'
    | 'si-LK'
    | 'sid-ET'
    | 'sk'
    | 'sk-SK'
    | 'sl'
    | 'sl-SI'
    | 'sn'
    | 'sn-ZW'
    | 'so'
    | 'so-DJ'
    | 'so-ET'
    | 'so-KE'
    | 'so-SO'
    | 'sq'
    | 'sq-AL'
    | 'sq-MK'
    | 'sr'
    | 'sr-Cyrl'
    | 'sr-Cyrl-BA'
    | 'sr-Cyrl-ME'
    | 'sr-Cyrl-RS'
    | 'sr-Latn'
    | 'sr-Latn-BA'
    | 'sr-Latn-ME'
    | 'sr-Latn-RS'
    | 'sr-ME'
    | 'sr-RS'
    | 'ss-ZA'
    | 'st-ZA'
    | 'sv'
    | 'sv-FI'
    | 'sv-SE'
    | 'sw'
    | 'sw-KE'
    | 'sw-TZ'
    | 'ta'
    | 'ta-IN'
    | 'ta-LK'
    | 'te'
    | 'te-IN'
    | 'teo'
    | 'teo-KE'
    | 'teo-UG'
    | 'tg-TJ'
    | 'th'
    | 'th-TH'
    | 'ti'
    | 'ti-ER'
    | 'ti-ET'
    | 'tig-ER'
    | 'tk-TM'
    | 'tl-PH'
    | 'tn-ZA'
    | 'to'
    | 'to-TO'
    | 'tr'
    | 'tr-CY'
    | 'tr-TR'
    | 'ts-ZA'
    | 'tt-RU'
    | 'tzm'
    | 'tzm-Latn'
    | 'tzm-Latn-MA'
    | 'ug-CN'
    | 'uk'
    | 'uk-UA'
    | 'unm-US'
    | 'ur'
    | 'ur-IN'
    | 'ur-PK'
    | 'uz'
    | 'uz-Arab'
    | 'uz-Arab-AF'
    | 'uz-Cyrl'
    | 'uz-Cyrl-UZ'
    | 'uz-Latn'
    | 'uz-Latn-UZ'
    | 'uz-UZ'
    | 've-ZA'
    | 'vi'
    | 'vi-VN'
    | 'vun'
    | 'vun-TZ'
    | 'wa-BE'
    | 'wae-CH'
    | 'wal-ET'
    | 'wo-SN'
    | 'xh-ZA'
    | 'xog'
    | 'xog-UG'
    | 'yi-US'
    | 'yo'
    | 'yo-NG'
    | 'yue-HK'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-Hans'
    | 'zh-Hans-CN'
    | 'zh-Hans-HK'
    | 'zh-Hans-MO'
    | 'zh-Hans-SG'
    | 'zh-Hant'
    | 'zh-Hant-HK'
    | 'zh-Hant-MO'
    | 'zh-Hant-TW'
    | 'zh-SG'
    | 'zh-TW'
    | 'zu'
    | 'zu-ZA'
    | 'auto';

  /**
   * Whether to return response in Markdown format
   */
  markdown?: boolean;

  /**
   * Structured metadata about the request execution context
   */
  metadata?: ExtractParams.Metadata;

  /**
   * HTTP method for the request
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  /**
   * Native execution mode
   */
  native_mode?: 'requester' | 'apm' | 'direct';

  /**
   * Filters for capturing network traffic
   */
  network_capture?: Array<ExtractParams.NetworkCapture>;

  /**
   * Whether to exclude HTML from the response
   */
  no_html?: boolean;

  /**
   * Whether to disable browser-based rendering
   */
  no_userbrowser?: boolean;

  /**
   * Operating system to emulate
   */
  os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios';

  /**
   * Whether to parse the response content
   */
  parse?: boolean;

  /**
   * Configuration options for parsing behavior
   */
  parse_options?: ExtractParams.ParseOptions;

  /**
   * Custom parser configuration as a key-value map
   */
  parser?: { [key: string]: unknown } | string;

  /**
   * Proxy provider to use for the request
   */
  proxy_provider?:
    | 'brightdata'
    | 'oxylabs'
    | 'smartproxy'
    | 'proxit'
    | 'proxit_preprod'
    | 'local'
    | 'rayobyte'
    | 'always'
    | 'oculusproxies'
    | 'froxy'
    | 'packetstream'
    | '911proxy'
    | 'direct911proxy'
    | 'thesocialproxy'
    | 'thesocialproxy2'
    | 'nimble-isp'
    | 'nimble-isp-mobile'
    | 'proxit-linux'
    | 'proxit-macos'
    | 'proxit-windows'
    | 'proxit-rental'
    | 'ipfoxy'
    | 'brightup'
    | 'research';

  /**
   * Weighted distribution of proxy providers
   */
  proxy_providers?: ExtractParams.ProxyProviders;

  /**
   * Query template configuration for structured data extraction
   */
  query_template?: ExtractParams.QueryTemplate;

  /**
   * Whether to return raw HTTP headers in response
   */
  raw_headers?: boolean;

  /**
   * Referrer policy for the request
   */
  referrer_type?:
    | 'random'
    | 'no-referer'
    | 'same-origin'
    | 'google'
    | 'bing'
    | 'facebook'
    | 'twitter'
    | 'instagram';

  /**
   * Whether to render JavaScript content using a browser
   */
  render?: boolean;

  /**
   * Array of actions to perform during browser rendering
   */
  render_flow?: Array<unknown>;

  render_options?: ExtractParams.RenderOptions;

  /**
   * Request timeout in milliseconds
   */
  request_timeout?: number;

  /**
   * Whether to return response headers in HTTP headers
   */
  return_response_headers_as_header?: boolean;

  /**
   * Whether to save the userbrowser session for reuse
   */
  save_userbrowser?: boolean;

  session?: ExtractParams.Session;

  /**
   * Skills or capabilities required for the request
   */
  skill?: string | Array<string>;

  /**
   * Whether to skip userbrowser creation template processing
   */
  skip_ubct?: boolean;

  /**
   * US state for geolocation (only valid when country is US)
   */
  state?:
    | 'AL'
    | 'AK'
    | 'AS'
    | 'AZ'
    | 'AR'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DE'
    | 'DC'
    | 'FL'
    | 'GA'
    | 'GU'
    | 'HI'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'IA'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'ME'
    | 'MD'
    | 'MA'
    | 'MI'
    | 'MN'
    | 'MS'
    | 'MO'
    | 'MT'
    | 'NE'
    | 'NV'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NY'
    | 'NC'
    | 'ND'
    | 'MP'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PA'
    | 'PR'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VT'
    | 'VA'
    | 'VI'
    | 'WA'
    | 'WV'
    | 'WI'
    | 'WY';

  /**
   * User-defined tag for request identification
   */
  tag?: string;

  /**
   * Userbrowser creation template configuration
   */
  template?: ExtractParams.Template;

  /**
   * Type of query or scraping template
   */
  type?: string;

  /**
   * Pre-rendered userbrowser creation template configuration
   */
  userbrowser_creation_template_rendered?: ExtractParams.UserbrowserCreationTemplateRendered;
}

export namespace ExtractParams {
  export interface UnionMember1 {
    name: 'chrome' | 'firefox';

    /**
     * Specific browser version to emulate
     */
    version?: string;
  }

  export interface UnionMember0 {
    creation?: string | null;

    domain?: string | null;

    expires?: (string & {}) | 'Infinity' | null;

    extensions?: Array<string> | null;

    hostOnly?: boolean | null;

    httpOnly?: boolean | null;

    lastAccessed?: string | null;

    maxAge?: 'Infinity' | '-Infinity' | number | null;

    name?: string;

    path?: string | null;

    pathIsDefault?: boolean | null;

    sameSite?: 'strict' | 'lax' | 'none';

    secure?: boolean;

    value?: string;
  }

  /**
   * Debug and troubleshooting options for the request
   */
  export interface DebugOptions {
    collect_har?: boolean | 'never' | 'on-error' | 'always';

    no_retry_mode?: boolean | 'never' | 'always';

    record_screen?: boolean | 'never' | 'on-error' | 'always';

    redact?: boolean | 'never' | 'always';

    show_cursor?: boolean | 'never' | 'always';

    solve_captcha?: boolean | 'never' | 'always';

    trace?: boolean | 'never' | 'on-error' | 'always';

    upload_engine_logs?: boolean | 'never' | 'on-error' | 'always';

    verbose?: boolean | 'never' | 'always';

    with_proxy_usage?: boolean | 'never' | 'always';
  }

  /**
   * Structured metadata about the request execution context
   */
  export interface Metadata {
    /**
     * Account name associated with the request
     */
    account_name?: string | null;

    /**
     * Definition identifier
     */
    definition_id?: number | null;

    /**
     * Name of the definition
     */
    definition_name?: string | null;

    /**
     * API endpoint being called
     */
    endpoint?: string | null;

    /**
     * Unique identifier for this execution
     */
    execution_id?: string | null;

    /**
     * FlowIt task identifier
     */
    flowit_task_id?: string | null;

    /**
     * Input data identifier
     */
    input_id?: string | null;

    /**
     * Identifier for the pipeline execution
     */
    pipeline_execution_id?: number | null;

    /**
     * Query template identifier
     */
    query_template_id?: string | null;

    /**
     * Source system or application making the request
     */
    source?: string | null;

    /**
     * Template identifier
     */
    template_id?: number | null;

    /**
     * Name of the template
     */
    template_name?: string | null;
  }

  export interface NetworkCapture {
    method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

    resource_type?: string | Array<string>;

    status_code?: number | Array<number>;

    url?: NetworkCapture.URL;

    validation?: boolean;

    wait_for_requests_count?: number;

    wait_for_requests_count_timeout?: number;
  }

  export namespace NetworkCapture {
    export interface URL {
      value: string;

      type?: 'exact' | 'contains';
    }
  }

  /**
   * Configuration options for parsing behavior
   */
  export interface ParseOptions {
    /**
     * Whether to merge dynamic parsing results with static results
     */
    merge_dynamic?: boolean;
  }

  /**
   * Weighted distribution of proxy providers
   */
  export interface ProxyProviders {
    '911proxy'?: number;

    always?: number;

    brightdata?: number;

    brightup?: number;

    direct911proxy?: number;

    froxy?: number;

    ipfoxy?: number;

    local?: number;

    'nimble-isp'?: number;

    'nimble-isp-mobile'?: number;

    oculusproxies?: number;

    oxylabs?: number;

    packetstream?: number;

    proxit?: number;

    proxit_preprod?: number;

    'proxit-linux'?: number;

    'proxit-macos'?: number;

    'proxit-rental'?: number;

    'proxit-windows'?: number;

    rayobyte?: number;

    research?: number;

    smartproxy?: number;

    thesocialproxy?: number;

    thesocialproxy2?: number;
  }

  /**
   * Query template configuration for structured data extraction
   */
  export interface QueryTemplate {
    id: string;

    api_type?: 'WEB' | 'SERP' | 'SOCIAL';

    pagination?: QueryTemplate.NextPageParams | Array<QueryTemplate.UnionMember1>;

    params?: { [key: string]: unknown };
  }

  export namespace QueryTemplate {
    export interface NextPageParams {
      next_page_params: unknown;
    }

    export interface UnionMember1 {
      next_page_params: unknown;
    }
  }

  export interface RenderOptions {
    /**
     * Whether to enable ad blocking
     */
    adblock?: boolean;

    /**
     * Domains to block from loading
     */
    blocked_domains?: Array<string>;

    /**
     * Browser engine to use, or weighted distribution of engines
     */
    browser_engine?: 'chrome' | 'hackium' | 'firefox' | 'hackfox' | RenderOptions.UnionMember1;

    /**
     * Whether to enable browser caching
     */
    cache?: boolean;

    /**
     * Type of browser connector to use
     */
    connector_type?: 'puppeteer' | 'puppeteer-cdp' | 'puppeteer-bidi' | 'webit-cdp' | 'playwright';

    /**
     * Types of resources to block from loading
     */
    disabled_resources?: Array<
      | 'other'
      | 'document'
      | 'stylesheet'
      | 'image'
      | 'media'
      | 'font'
      | 'script'
      | 'texttrack'
      | 'xhr'
      | 'fetch'
      | 'eventsource'
      | 'websocket'
      | 'manifest'
      | 'signedexchange'
      | 'ping'
      | 'cspviolationreport'
      | 'prefetch'
      | 'preflight'
      | 'fedcm'
    >;

    /**
     * Whether to use 2Captcha service for solving captchas
     */
    enable_2captcha?: boolean;

    /**
     * Browser extensions to load
     */
    extensions?: Array<string>;

    /**
     * Fingerprint identifier for browser customization
     */
    fingerprint_id?: string;

    /**
     * Configuration for Hackium browser modifications
     */
    hackium_configuration?: RenderOptions.HackiumConfiguration;

    /**
     * Whether to run browser in headless mode
     */
    headless?: boolean;

    /**
     * Whether to include iframe content in the result
     */
    include_iframes?: boolean;

    /**
     * Whether to load previously stored localStorage data
     */
    load_local_storage?: boolean;

    /**
     * Specific localStorage keys to load
     */
    local_storage_keys_to_load?: Array<string>;

    /**
     * Strategy for simulating mouse movements
     */
    mouse_strategy?: 'linear' | 'ghost-cursor' | 'windmouse';

    /**
     * Disable content encoding to avoid cached responses
     */
    no_accept_encoding?: boolean;

    /**
     * Whether to override default browser permissions
     */
    override_permissions?: boolean;

    /**
     * Whether to randomize HTTP header order
     */
    random_header_order?: boolean;

    /**
     * Type of render completion to wait for
     */
    render_type?:
      | 'domcontentloaded'
      | 'load'
      | 'idle0'
      | 'networkidle0'
      | 'idle2'
      | 'networkidle2'
      | 'navigate';

    /**
     * Whether to store localStorage data for future sessions
     */
    store_local_storage?: boolean;

    /**
     * Maximum time in milliseconds to wait for page render
     */
    timeout?: number;

    /**
     * Interval in milliseconds between key presses
     */
    typing_interval?: number;

    /**
     * Strategy for simulating keyboard typing
     */
    typing_strategy?: 'simple' | 'distribution';

    /**
     * Whether to use a persistent browser session
     */
    userbrowser?: boolean;

    /**
     * Browser event to wait for before considering page loaded
     */
    wait_until?:
      | 'load'
      | 'domcontentloaded'
      | 'idle0'
      | 'idle2'
      | 'networkidle0'
      | 'networkidle2'
      | 'navigate';

    /**
     * Whether to collect performance metrics during rendering
     */
    with_performance_metrics?: boolean;
  }

  export namespace RenderOptions {
    export interface UnionMember1 {
      chrome?: number;

      firefox?: number;

      hackfox?: number;

      hackium?: number;
    }

    /**
     * Configuration for Hackium browser modifications
     */
    export interface HackiumConfiguration {
      collect_logs?: boolean;

      do_not_fix_math_salt?: boolean;

      enable_document_element_spoof?: boolean;

      enable_document_has_focus?: boolean;

      enable_fake_navigation_history?: boolean;

      enable_key_ordering?: boolean;

      enable_sniffer?: boolean;

      enable_verbose_logs?: boolean;
    }
  }

  export interface Session {
    id?: string;

    prefetch_userbrowser?: boolean;

    retry?: boolean;

    timeout?: number;
  }

  /**
   * Userbrowser creation template configuration
   */
  export interface Template {
    name: string;

    params?: unknown;
  }

  /**
   * Pre-rendered userbrowser creation template configuration
   */
  export interface UserbrowserCreationTemplateRendered {
    id: string;

    allowed_parameter_names: Array<string>;

    render_flow_rendered: Array<{ [key: string]: unknown }>;
  }
}

export declare namespace TopLevel {
  export { type ExtractResponse as ExtractResponse, type ExtractParams as ExtractParams };
}

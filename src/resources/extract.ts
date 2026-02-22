// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Extract extends APIResource {
  /**
   * Extract Async Endpoint
   *
   * @example
   * ```ts
   * const response = await client.extract.async({ url: 'url' });
   * ```
   */
  async(body: ExtractAsyncParams, options?: RequestOptions): APIPromise<ExtractAsyncResponse> {
    return this._client.post('/v1/extract/async', { body, ...options });
  }
}

/**
 * Response when an async extract task is created successfully.
 */
export interface ExtractAsyncResponse {
  /**
   * Status indicating the async task was created successfully.
   */
  status: 'success';

  /**
   * The created async task details.
   */
  task: ExtractAsyncResponse.Task;
}

export namespace ExtractAsyncResponse {
  /**
   * The created async task details.
   */
  export interface Task {
    /**
     * Unique task identifier.
     */
    id: string;

    _query: unknown;

    /**
     * Timestamp when the task was created.
     */
    created_at: string;

    /**
     * Original input data for the task.
     */
    input: unknown;

    /**
     * Current state of the task.
     */
    state: 'pending' | 'success' | 'error';

    /**
     * URL for checking the task status.
     */
    status_url: string;

    /**
     * Account name that owns the task.
     */
    account_name?: string;

    api_type?: 'web' | 'serp' | 'ecommerce' | 'social';

    /**
     * Batch ID if this task is part of a batch.
     */
    batch_id?: string;

    /**
     * URL for downloading the task results.
     */
    download_url?: string;

    /**
     * Error message if the task failed.
     */
    error?: string;

    /**
     * Classification of the error type.
     */
    error_type?: string;

    /**
     * Timestamp when the task was last modified.
     */
    modified_at?: string;

    /**
     * Storage location of the output data.
     */
    output_url?: string;

    /**
     * HTTP status code from the task execution.
     */
    status_code?: number;
  }
}

export interface ExtractAsyncParams {
  /**
   * Target URL to scrape
   */
  url: string;

  /**
   * Browser type to emulate
   */
  browser?: 'chrome' | 'firefox' | ExtractAsyncParams.UnionMember1;

  /**
   * Array of browser automation actions to execute sequentially
   */
  browser_actions?: Array<
    | Shared.AutoScrollAction
    | Shared.ClickAction
    | Shared.EvalAction
    | Shared.FetchAction
    | Shared.FillAction
    | Shared.GetCookiesAction
    | Shared.GotoAction
    | Shared.PressAction
    | Shared.ScreenshotAction
    | Shared.ScrollAction
    | Shared.WaitAction
    | Shared.WaitForElementAction
    | Shared.WaitForNavigationAction
  >;

  /**
   * URL to call back when async operation completes
   */
  callback_url?: string;

  /**
   * City for geolocation
   */
  city?: string;

  /**
   * Whether to automatically handle cookie consent headers
   */
  consent_header?: boolean;

  /**
   * Browser cookies as array of cookie objects
   */
  cookies?: Array<ExtractAsyncParams.UnionMember0> | string;

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
   * Device type for browser emulation
   */
  device?: 'desktop' | 'mobile' | 'tablet';

  /**
   * Browser driver to use
   */
  driver?: 'vx6' | 'vx8' | 'vx8-pro' | 'vx10' | 'vx10-pro' | 'vx12' | 'vx12-pro';

  /**
   * Expected HTTP status codes for successful requests
   */
  expected_status_codes?: Array<number>;

  /**
   * List of acceptable response formats in order of preference
   */
  formats?: Array<'html' | 'markdown' | 'screenshot'>;

  /**
   * Custom HTTP headers to include in the request
   */
  headers?: { [key: string]: string | Array<string> | null };

  /**
   * Whether to use HTTP/2 protocol
   */
  http2?: boolean;

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
   * HTTP method for the request
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  /**
   * Filters for capturing network traffic
   */
  network_capture?: Array<ExtractAsyncParams.NetworkCapture>;

  /**
   * Operating system to emulate
   */
  os?: 'windows' | 'mac os' | 'linux' | 'android' | 'ios';

  /**
   * Whether to parse the response content
   */
  parse?: boolean;

  /**
   * Custom parser configuration as a key-value map
   */
  parser?: { [key: string]: unknown } | string;

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
   * Request timeout in milliseconds
   */
  request_timeout?: number;

  session?: ExtractAsyncParams.Session;

  /**
   * Skills or capabilities required for the request
   */
  skill?: string | Array<string>;

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
   * Whether to compress stored data
   */
  storage_compress?: boolean;

  /**
   * Custom name for the stored object
   */
  storage_object_name?: string;

  /**
   * Type of storage to use for results
   */
  storage_type?: string;

  /**
   * URL for storage location
   */
  storage_url?: string;

  /**
   * User-defined tag for request identification
   */
  tag?: string;
}

export namespace ExtractAsyncParams {
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

    expires?: string;

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

    [k: string]: unknown;
  }

  export interface NetworkCapture {
    method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

    /**
     * Resource type for network capture filtering
     */
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

  export interface Session {
    id?: string;

    prefetch_userbrowser?: boolean;

    retry?: boolean;

    timeout?: number;
  }
}

export declare namespace Extract {
  export { type ExtractAsyncResponse as ExtractAsyncResponse, type ExtractAsyncParams as ExtractAsyncParams };
}

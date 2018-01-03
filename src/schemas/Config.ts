/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Connector configuration schema.
 */
export class Config {
  /**
   * ILP address of the connector. This property can be omitted if an account with `relation=parent` is configured under `accounts`.
   */
  ilpAddress?: string;
  /**
   * Description of connector account plugins.
   */
  accounts: {
    /**
     * Description of individual account.
     */
    [k: string]: {
      /**
       * Relationship between the connector and the counterparty that the account is with.
       */
      relation: "parent" | "peer" | "child";
      /**
       * Name of the ILP plugin that should be used for this account.
       */
      plugin: string;
      /**
       * Currency code or other asset identifier that will be passed to the backend to select the correct rate for this account.
       */
      assetCode: string;
      /**
       * Interledger amounts are integers, but most currencies are typically represented as fractional units, e.g. cents. This property defines how many Interledger units make up one regular units. For dollars, this would usually be set to 9, so that Interledger amounts are expressed in nanodollars.
       */
      assetScale: number;
      /**
       * Options that will be passed to the plugin constructor.
       */
      options?: {
        [k: string]: any;
      };
      /**
       * What segment will be appended to the connector's ILP address to form this account's ILP address. Only applicable to accounts with `relation=child`. Defaults to the id of the account, i.e. the key used in the `accounts` config object.
       */
      ilpAddressSegment?: string;
      [k: string]: any;
    };
  };
  /**
   * Which accounts should be use as peers for routing purposes. Defaults to the set of accounts set to `relation=peer`.
   */
  peers?: string[];
  /**
   * Additional routes to add to the connector's routing table.
   */
  routes?: {
    /**
     * ILP address prefix that this route applies to. Configured routes take precedence over the same or shorter prefixes that are local or published by peers. More specific prefixes will still take precedence.
     */
    targetPrefix: string;
    /**
     * ID of the account that destinations matching `targetPrefix` should be forwarded to. Must be one of the accounts in `accounts`.
     */
    peerId: string;
    [k: string]: any;
  }[];
  /**
   * How much of a spread to add on top of the reference exchange rate. Determines the connector's margin.
   */
  fxSpread?: number;
  /**
   * The ratio for overestimating exchange rates during quotes to prevent payment failure if the rate changes.
   */
  slippage?: number;
  /**
   * Minimum time the connector wants to budget for getting a message to the accounts its trading on. In milliseconds.
   */
  minMessageWindow?: number;
  /**
   * Maximum duration (in milliseconds) the connector is willing to place funds on hold while waiting for the outcome of a transaction.
   */
  maxHoldTime?: number;
  /**
   * Whether to broadcast known routes.
   */
  routeBroadcastEnabled?: boolean;
  /**
   * Frequency at which the connector broadcasts its routes to adjacent connectors. (in milliseconds)
   */
  routeBroadcastInterval?: number;
  /**
   * The frequency at which the connector checks for expired routes. (in milliseconds)
   */
  routeCleanupInterval?: number;
  /**
   * The maximum age of a route provided by this connector. (in milliseconds)
   */
  routeExpiry?: number;
  /**
   * The maximum age of a quote provided by this connector. (in milliseconds)
   */
  quoteExpiry?: number;
  /**
   * Name of the backend (can be built-in or a require-able module name). Built-in modules are: fixerio, fixerio-plus-xrp, fixerio-plus-coinmarketcap, one-to-one
   */
  backend?: string;
  /**
   * Name of the store (can be built-in or a require-able module name). Built-in modules are: leveldown
   */
  store?: string;
  /**
   * Shorthand for config.storeConfig.path.
   */
  storePath?: string;
  /**
   * Additional options to be passed to the store constructor.
   */
  storeConfig?: {
    [k: string]: any;
  };
  /**
   * Whether to include liquidity curves when broadcasting routes.
   */
  broadcastCurves?: boolean;
  /**
   * Whether to allow routing payments back to the account that sent them.
   */
  reflectPayments?: boolean;
  [k: string]: any;
}
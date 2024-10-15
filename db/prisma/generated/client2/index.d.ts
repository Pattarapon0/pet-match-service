
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model match
 * 
 */
export type match = $Result.DefaultSelection<Prisma.$matchPayload>
/**
 * Model sendMatch
 * 
 */
export type sendMatch = $Result.DefaultSelection<Prisma.$sendMatchPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Matches
 * const matches = await prisma.match.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Matches
   * const matches = await prisma.match.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.match`: Exposes CRUD operations for the **match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.matchDelegate<ExtArgs>;

  /**
   * `prisma.sendMatch`: Exposes CRUD operations for the **sendMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SendMatches
    * const sendMatches = await prisma.sendMatch.findMany()
    * ```
    */
  get sendMatch(): Prisma.sendMatchDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    match: 'match',
    sendMatch: 'sendMatch'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "match" | "sendMatch"
      txIsolationLevel: never
    }
    model: {
      match: {
        payload: Prisma.$matchPayload<ExtArgs>
        fields: Prisma.matchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.matchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.matchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          findFirst: {
            args: Prisma.matchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.matchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          findMany: {
            args: Prisma.matchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>[]
          }
          create: {
            args: Prisma.matchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          createMany: {
            args: Prisma.matchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.matchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          update: {
            args: Prisma.matchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          deleteMany: {
            args: Prisma.matchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.matchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.matchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.matchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.matchFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.matchAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.matchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      sendMatch: {
        payload: Prisma.$sendMatchPayload<ExtArgs>
        fields: Prisma.sendMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sendMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sendMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload>
          }
          findFirst: {
            args: Prisma.sendMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sendMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload>
          }
          findMany: {
            args: Prisma.sendMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload>[]
          }
          create: {
            args: Prisma.sendMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload>
          }
          createMany: {
            args: Prisma.sendMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sendMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload>
          }
          update: {
            args: Prisma.sendMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload>
          }
          deleteMany: {
            args: Prisma.sendMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sendMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sendMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sendMatchPayload>
          }
          aggregate: {
            args: Prisma.SendMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSendMatch>
          }
          groupBy: {
            args: Prisma.sendMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<SendMatchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.sendMatchFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.sendMatchAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.sendMatchCountArgs<ExtArgs>
            result: $Utils.Optional<SendMatchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    matchId: string | null
    matchDate: Date | null
    matchPetId1: string | null
    matchPetId2: string | null
    matchUserId1: string | null
    matchUserId2: string | null
  }

  export type MatchMaxAggregateOutputType = {
    matchId: string | null
    matchDate: Date | null
    matchPetId1: string | null
    matchPetId2: string | null
    matchUserId1: string | null
    matchUserId2: string | null
  }

  export type MatchCountAggregateOutputType = {
    matchId: number
    matchDate: number
    matchPetId1: number
    matchPetId2: number
    matchUserId1: number
    matchUserId2: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    matchId?: true
    matchDate?: true
    matchPetId1?: true
    matchPetId2?: true
    matchUserId1?: true
    matchUserId2?: true
  }

  export type MatchMaxAggregateInputType = {
    matchId?: true
    matchDate?: true
    matchPetId1?: true
    matchPetId2?: true
    matchUserId1?: true
    matchUserId2?: true
  }

  export type MatchCountAggregateInputType = {
    matchId?: true
    matchDate?: true
    matchPetId1?: true
    matchPetId2?: true
    matchUserId1?: true
    matchUserId2?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match to aggregate.
     */
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type matchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchWhereInput
    orderBy?: matchOrderByWithAggregationInput | matchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: matchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    matchId: string
    matchDate: Date
    matchPetId1: string
    matchPetId2: string
    matchUserId1: string
    matchUserId2: string
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends matchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type matchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matchId?: boolean
    matchDate?: boolean
    matchPetId1?: boolean
    matchPetId2?: boolean
    matchUserId1?: boolean
    matchUserId2?: boolean
  }, ExtArgs["result"]["match"]>


  export type matchSelectScalar = {
    matchId?: boolean
    matchDate?: boolean
    matchPetId1?: boolean
    matchPetId2?: boolean
    matchUserId1?: boolean
    matchUserId2?: boolean
  }


  export type $matchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "match"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      matchId: string
      matchDate: Date
      matchPetId1: string
      matchPetId2: string
      matchUserId1: string
      matchUserId2: string
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type matchGetPayload<S extends boolean | null | undefined | matchDefaultArgs> = $Result.GetResult<Prisma.$matchPayload, S>

  type matchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<matchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface matchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['match'], meta: { name: 'match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {matchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends matchFindUniqueArgs>(args: SelectSubset<T, matchFindUniqueArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {matchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends matchFindUniqueOrThrowArgs>(args: SelectSubset<T, matchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends matchFindFirstArgs>(args?: SelectSubset<T, matchFindFirstArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends matchFindFirstOrThrowArgs>(args?: SelectSubset<T, matchFindFirstOrThrowArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `matchId`
     * const matchWithMatchIdOnly = await prisma.match.findMany({ select: { matchId: true } })
     * 
     */
    findMany<T extends matchFindManyArgs>(args?: SelectSubset<T, matchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Match.
     * @param {matchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends matchCreateArgs>(args: SelectSubset<T, matchCreateArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Matches.
     * @param {matchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends matchCreateManyArgs>(args?: SelectSubset<T, matchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match.
     * @param {matchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends matchDeleteArgs>(args: SelectSubset<T, matchDeleteArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Match.
     * @param {matchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends matchUpdateArgs>(args: SelectSubset<T, matchUpdateArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Matches.
     * @param {matchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends matchDeleteManyArgs>(args?: SelectSubset<T, matchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends matchUpdateManyArgs>(args: SelectSubset<T, matchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match.
     * @param {matchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends matchUpsertArgs>(args: SelectSubset<T, matchUpsertArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Matches that matches the filter.
     * @param {matchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const match = await prisma.match.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: matchFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Match.
     * @param {matchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const match = await prisma.match.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: matchAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends matchCountArgs>(
      args?: Subset<T, matchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends matchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: matchGroupByArgs['orderBy'] }
        : { orderBy?: matchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, matchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the match model
   */
  readonly fields: matchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__matchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the match model
   */ 
  interface matchFieldRefs {
    readonly matchId: FieldRef<"match", 'String'>
    readonly matchDate: FieldRef<"match", 'DateTime'>
    readonly matchPetId1: FieldRef<"match", 'String'>
    readonly matchPetId2: FieldRef<"match", 'String'>
    readonly matchUserId1: FieldRef<"match", 'String'>
    readonly matchUserId2: FieldRef<"match", 'String'>
  }
    

  // Custom InputTypes
  /**
   * match findUnique
   */
  export type matchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Filter, which match to fetch.
     */
    where: matchWhereUniqueInput
  }

  /**
   * match findUniqueOrThrow
   */
  export type matchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Filter, which match to fetch.
     */
    where: matchWhereUniqueInput
  }

  /**
   * match findFirst
   */
  export type matchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Filter, which match to fetch.
     */
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * match findFirstOrThrow
   */
  export type matchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Filter, which match to fetch.
     */
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * match findMany
   */
  export type matchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matches.
     */
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * match create
   */
  export type matchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * The data needed to create a match.
     */
    data: XOR<matchCreateInput, matchUncheckedCreateInput>
  }

  /**
   * match createMany
   */
  export type matchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many matches.
     */
    data: matchCreateManyInput | matchCreateManyInput[]
  }

  /**
   * match update
   */
  export type matchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * The data needed to update a match.
     */
    data: XOR<matchUpdateInput, matchUncheckedUpdateInput>
    /**
     * Choose, which match to update.
     */
    where: matchWhereUniqueInput
  }

  /**
   * match updateMany
   */
  export type matchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update matches.
     */
    data: XOR<matchUpdateManyMutationInput, matchUncheckedUpdateManyInput>
    /**
     * Filter which matches to update
     */
    where?: matchWhereInput
  }

  /**
   * match upsert
   */
  export type matchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * The filter to search for the match to update in case it exists.
     */
    where: matchWhereUniqueInput
    /**
     * In case the match found by the `where` argument doesn't exist, create a new match with this data.
     */
    create: XOR<matchCreateInput, matchUncheckedCreateInput>
    /**
     * In case the match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<matchUpdateInput, matchUncheckedUpdateInput>
  }

  /**
   * match delete
   */
  export type matchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Filter which match to delete.
     */
    where: matchWhereUniqueInput
  }

  /**
   * match deleteMany
   */
  export type matchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matches to delete
     */
    where?: matchWhereInput
  }

  /**
   * match findRaw
   */
  export type matchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * match aggregateRaw
   */
  export type matchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * match without action
   */
  export type matchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
  }


  /**
   * Model sendMatch
   */

  export type AggregateSendMatch = {
    _count: SendMatchCountAggregateOutputType | null
    _min: SendMatchMinAggregateOutputType | null
    _max: SendMatchMaxAggregateOutputType | null
  }

  export type SendMatchMinAggregateOutputType = {
    sendMatchId: string | null
    senderPettId: string | null
    senderUserId: string | null
    receiverPetId: string | null
  }

  export type SendMatchMaxAggregateOutputType = {
    sendMatchId: string | null
    senderPettId: string | null
    senderUserId: string | null
    receiverPetId: string | null
  }

  export type SendMatchCountAggregateOutputType = {
    sendMatchId: number
    senderPettId: number
    senderUserId: number
    receiverPetId: number
    _all: number
  }


  export type SendMatchMinAggregateInputType = {
    sendMatchId?: true
    senderPettId?: true
    senderUserId?: true
    receiverPetId?: true
  }

  export type SendMatchMaxAggregateInputType = {
    sendMatchId?: true
    senderPettId?: true
    senderUserId?: true
    receiverPetId?: true
  }

  export type SendMatchCountAggregateInputType = {
    sendMatchId?: true
    senderPettId?: true
    senderUserId?: true
    receiverPetId?: true
    _all?: true
  }

  export type SendMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sendMatch to aggregate.
     */
    where?: sendMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sendMatches to fetch.
     */
    orderBy?: sendMatchOrderByWithRelationInput | sendMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sendMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sendMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sendMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sendMatches
    **/
    _count?: true | SendMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SendMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SendMatchMaxAggregateInputType
  }

  export type GetSendMatchAggregateType<T extends SendMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateSendMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSendMatch[P]>
      : GetScalarType<T[P], AggregateSendMatch[P]>
  }




  export type sendMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sendMatchWhereInput
    orderBy?: sendMatchOrderByWithAggregationInput | sendMatchOrderByWithAggregationInput[]
    by: SendMatchScalarFieldEnum[] | SendMatchScalarFieldEnum
    having?: sendMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SendMatchCountAggregateInputType | true
    _min?: SendMatchMinAggregateInputType
    _max?: SendMatchMaxAggregateInputType
  }

  export type SendMatchGroupByOutputType = {
    sendMatchId: string
    senderPettId: string
    senderUserId: string
    receiverPetId: string
    _count: SendMatchCountAggregateOutputType | null
    _min: SendMatchMinAggregateOutputType | null
    _max: SendMatchMaxAggregateOutputType | null
  }

  type GetSendMatchGroupByPayload<T extends sendMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SendMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SendMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SendMatchGroupByOutputType[P]>
            : GetScalarType<T[P], SendMatchGroupByOutputType[P]>
        }
      >
    >


  export type sendMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sendMatchId?: boolean
    senderPettId?: boolean
    senderUserId?: boolean
    receiverPetId?: boolean
  }, ExtArgs["result"]["sendMatch"]>


  export type sendMatchSelectScalar = {
    sendMatchId?: boolean
    senderPettId?: boolean
    senderUserId?: boolean
    receiverPetId?: boolean
  }


  export type $sendMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sendMatch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      sendMatchId: string
      senderPettId: string
      senderUserId: string
      receiverPetId: string
    }, ExtArgs["result"]["sendMatch"]>
    composites: {}
  }

  type sendMatchGetPayload<S extends boolean | null | undefined | sendMatchDefaultArgs> = $Result.GetResult<Prisma.$sendMatchPayload, S>

  type sendMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sendMatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SendMatchCountAggregateInputType | true
    }

  export interface sendMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sendMatch'], meta: { name: 'sendMatch' } }
    /**
     * Find zero or one SendMatch that matches the filter.
     * @param {sendMatchFindUniqueArgs} args - Arguments to find a SendMatch
     * @example
     * // Get one SendMatch
     * const sendMatch = await prisma.sendMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sendMatchFindUniqueArgs>(args: SelectSubset<T, sendMatchFindUniqueArgs<ExtArgs>>): Prisma__sendMatchClient<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SendMatch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {sendMatchFindUniqueOrThrowArgs} args - Arguments to find a SendMatch
     * @example
     * // Get one SendMatch
     * const sendMatch = await prisma.sendMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sendMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, sendMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sendMatchClient<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SendMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sendMatchFindFirstArgs} args - Arguments to find a SendMatch
     * @example
     * // Get one SendMatch
     * const sendMatch = await prisma.sendMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sendMatchFindFirstArgs>(args?: SelectSubset<T, sendMatchFindFirstArgs<ExtArgs>>): Prisma__sendMatchClient<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SendMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sendMatchFindFirstOrThrowArgs} args - Arguments to find a SendMatch
     * @example
     * // Get one SendMatch
     * const sendMatch = await prisma.sendMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sendMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, sendMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__sendMatchClient<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SendMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sendMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SendMatches
     * const sendMatches = await prisma.sendMatch.findMany()
     * 
     * // Get first 10 SendMatches
     * const sendMatches = await prisma.sendMatch.findMany({ take: 10 })
     * 
     * // Only select the `sendMatchId`
     * const sendMatchWithSendMatchIdOnly = await prisma.sendMatch.findMany({ select: { sendMatchId: true } })
     * 
     */
    findMany<T extends sendMatchFindManyArgs>(args?: SelectSubset<T, sendMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SendMatch.
     * @param {sendMatchCreateArgs} args - Arguments to create a SendMatch.
     * @example
     * // Create one SendMatch
     * const SendMatch = await prisma.sendMatch.create({
     *   data: {
     *     // ... data to create a SendMatch
     *   }
     * })
     * 
     */
    create<T extends sendMatchCreateArgs>(args: SelectSubset<T, sendMatchCreateArgs<ExtArgs>>): Prisma__sendMatchClient<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SendMatches.
     * @param {sendMatchCreateManyArgs} args - Arguments to create many SendMatches.
     * @example
     * // Create many SendMatches
     * const sendMatch = await prisma.sendMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sendMatchCreateManyArgs>(args?: SelectSubset<T, sendMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SendMatch.
     * @param {sendMatchDeleteArgs} args - Arguments to delete one SendMatch.
     * @example
     * // Delete one SendMatch
     * const SendMatch = await prisma.sendMatch.delete({
     *   where: {
     *     // ... filter to delete one SendMatch
     *   }
     * })
     * 
     */
    delete<T extends sendMatchDeleteArgs>(args: SelectSubset<T, sendMatchDeleteArgs<ExtArgs>>): Prisma__sendMatchClient<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SendMatch.
     * @param {sendMatchUpdateArgs} args - Arguments to update one SendMatch.
     * @example
     * // Update one SendMatch
     * const sendMatch = await prisma.sendMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sendMatchUpdateArgs>(args: SelectSubset<T, sendMatchUpdateArgs<ExtArgs>>): Prisma__sendMatchClient<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SendMatches.
     * @param {sendMatchDeleteManyArgs} args - Arguments to filter SendMatches to delete.
     * @example
     * // Delete a few SendMatches
     * const { count } = await prisma.sendMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sendMatchDeleteManyArgs>(args?: SelectSubset<T, sendMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SendMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sendMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SendMatches
     * const sendMatch = await prisma.sendMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sendMatchUpdateManyArgs>(args: SelectSubset<T, sendMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SendMatch.
     * @param {sendMatchUpsertArgs} args - Arguments to update or create a SendMatch.
     * @example
     * // Update or create a SendMatch
     * const sendMatch = await prisma.sendMatch.upsert({
     *   create: {
     *     // ... data to create a SendMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SendMatch we want to update
     *   }
     * })
     */
    upsert<T extends sendMatchUpsertArgs>(args: SelectSubset<T, sendMatchUpsertArgs<ExtArgs>>): Prisma__sendMatchClient<$Result.GetResult<Prisma.$sendMatchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more SendMatches that matches the filter.
     * @param {sendMatchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sendMatch = await prisma.sendMatch.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: sendMatchFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SendMatch.
     * @param {sendMatchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sendMatch = await prisma.sendMatch.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: sendMatchAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SendMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sendMatchCountArgs} args - Arguments to filter SendMatches to count.
     * @example
     * // Count the number of SendMatches
     * const count = await prisma.sendMatch.count({
     *   where: {
     *     // ... the filter for the SendMatches we want to count
     *   }
     * })
    **/
    count<T extends sendMatchCountArgs>(
      args?: Subset<T, sendMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SendMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SendMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SendMatchAggregateArgs>(args: Subset<T, SendMatchAggregateArgs>): Prisma.PrismaPromise<GetSendMatchAggregateType<T>>

    /**
     * Group by SendMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sendMatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sendMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sendMatchGroupByArgs['orderBy'] }
        : { orderBy?: sendMatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sendMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSendMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sendMatch model
   */
  readonly fields: sendMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sendMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sendMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sendMatch model
   */ 
  interface sendMatchFieldRefs {
    readonly sendMatchId: FieldRef<"sendMatch", 'String'>
    readonly senderPettId: FieldRef<"sendMatch", 'String'>
    readonly senderUserId: FieldRef<"sendMatch", 'String'>
    readonly receiverPetId: FieldRef<"sendMatch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sendMatch findUnique
   */
  export type sendMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * Filter, which sendMatch to fetch.
     */
    where: sendMatchWhereUniqueInput
  }

  /**
   * sendMatch findUniqueOrThrow
   */
  export type sendMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * Filter, which sendMatch to fetch.
     */
    where: sendMatchWhereUniqueInput
  }

  /**
   * sendMatch findFirst
   */
  export type sendMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * Filter, which sendMatch to fetch.
     */
    where?: sendMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sendMatches to fetch.
     */
    orderBy?: sendMatchOrderByWithRelationInput | sendMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sendMatches.
     */
    cursor?: sendMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sendMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sendMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sendMatches.
     */
    distinct?: SendMatchScalarFieldEnum | SendMatchScalarFieldEnum[]
  }

  /**
   * sendMatch findFirstOrThrow
   */
  export type sendMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * Filter, which sendMatch to fetch.
     */
    where?: sendMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sendMatches to fetch.
     */
    orderBy?: sendMatchOrderByWithRelationInput | sendMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sendMatches.
     */
    cursor?: sendMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sendMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sendMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sendMatches.
     */
    distinct?: SendMatchScalarFieldEnum | SendMatchScalarFieldEnum[]
  }

  /**
   * sendMatch findMany
   */
  export type sendMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * Filter, which sendMatches to fetch.
     */
    where?: sendMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sendMatches to fetch.
     */
    orderBy?: sendMatchOrderByWithRelationInput | sendMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sendMatches.
     */
    cursor?: sendMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sendMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sendMatches.
     */
    skip?: number
    distinct?: SendMatchScalarFieldEnum | SendMatchScalarFieldEnum[]
  }

  /**
   * sendMatch create
   */
  export type sendMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * The data needed to create a sendMatch.
     */
    data: XOR<sendMatchCreateInput, sendMatchUncheckedCreateInput>
  }

  /**
   * sendMatch createMany
   */
  export type sendMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sendMatches.
     */
    data: sendMatchCreateManyInput | sendMatchCreateManyInput[]
  }

  /**
   * sendMatch update
   */
  export type sendMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * The data needed to update a sendMatch.
     */
    data: XOR<sendMatchUpdateInput, sendMatchUncheckedUpdateInput>
    /**
     * Choose, which sendMatch to update.
     */
    where: sendMatchWhereUniqueInput
  }

  /**
   * sendMatch updateMany
   */
  export type sendMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sendMatches.
     */
    data: XOR<sendMatchUpdateManyMutationInput, sendMatchUncheckedUpdateManyInput>
    /**
     * Filter which sendMatches to update
     */
    where?: sendMatchWhereInput
  }

  /**
   * sendMatch upsert
   */
  export type sendMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * The filter to search for the sendMatch to update in case it exists.
     */
    where: sendMatchWhereUniqueInput
    /**
     * In case the sendMatch found by the `where` argument doesn't exist, create a new sendMatch with this data.
     */
    create: XOR<sendMatchCreateInput, sendMatchUncheckedCreateInput>
    /**
     * In case the sendMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sendMatchUpdateInput, sendMatchUncheckedUpdateInput>
  }

  /**
   * sendMatch delete
   */
  export type sendMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
    /**
     * Filter which sendMatch to delete.
     */
    where: sendMatchWhereUniqueInput
  }

  /**
   * sendMatch deleteMany
   */
  export type sendMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sendMatches to delete
     */
    where?: sendMatchWhereInput
  }

  /**
   * sendMatch findRaw
   */
  export type sendMatchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * sendMatch aggregateRaw
   */
  export type sendMatchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * sendMatch without action
   */
  export type sendMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sendMatch
     */
    select?: sendMatchSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const MatchScalarFieldEnum: {
    matchId: 'matchId',
    matchDate: 'matchDate',
    matchPetId1: 'matchPetId1',
    matchPetId2: 'matchPetId2',
    matchUserId1: 'matchUserId1',
    matchUserId2: 'matchUserId2'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const SendMatchScalarFieldEnum: {
    sendMatchId: 'sendMatchId',
    senderPettId: 'senderPettId',
    senderUserId: 'senderUserId',
    receiverPetId: 'receiverPetId'
  };

  export type SendMatchScalarFieldEnum = (typeof SendMatchScalarFieldEnum)[keyof typeof SendMatchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type matchWhereInput = {
    AND?: matchWhereInput | matchWhereInput[]
    OR?: matchWhereInput[]
    NOT?: matchWhereInput | matchWhereInput[]
    matchId?: StringFilter<"match"> | string
    matchDate?: DateTimeFilter<"match"> | Date | string
    matchPetId1?: StringFilter<"match"> | string
    matchPetId2?: StringFilter<"match"> | string
    matchUserId1?: StringFilter<"match"> | string
    matchUserId2?: StringFilter<"match"> | string
  }

  export type matchOrderByWithRelationInput = {
    matchId?: SortOrder
    matchDate?: SortOrder
    matchPetId1?: SortOrder
    matchPetId2?: SortOrder
    matchUserId1?: SortOrder
    matchUserId2?: SortOrder
  }

  export type matchWhereUniqueInput = Prisma.AtLeast<{
    matchId?: string
    AND?: matchWhereInput | matchWhereInput[]
    OR?: matchWhereInput[]
    NOT?: matchWhereInput | matchWhereInput[]
    matchDate?: DateTimeFilter<"match"> | Date | string
    matchPetId1?: StringFilter<"match"> | string
    matchPetId2?: StringFilter<"match"> | string
    matchUserId1?: StringFilter<"match"> | string
    matchUserId2?: StringFilter<"match"> | string
  }, "matchId">

  export type matchOrderByWithAggregationInput = {
    matchId?: SortOrder
    matchDate?: SortOrder
    matchPetId1?: SortOrder
    matchPetId2?: SortOrder
    matchUserId1?: SortOrder
    matchUserId2?: SortOrder
    _count?: matchCountOrderByAggregateInput
    _max?: matchMaxOrderByAggregateInput
    _min?: matchMinOrderByAggregateInput
  }

  export type matchScalarWhereWithAggregatesInput = {
    AND?: matchScalarWhereWithAggregatesInput | matchScalarWhereWithAggregatesInput[]
    OR?: matchScalarWhereWithAggregatesInput[]
    NOT?: matchScalarWhereWithAggregatesInput | matchScalarWhereWithAggregatesInput[]
    matchId?: StringWithAggregatesFilter<"match"> | string
    matchDate?: DateTimeWithAggregatesFilter<"match"> | Date | string
    matchPetId1?: StringWithAggregatesFilter<"match"> | string
    matchPetId2?: StringWithAggregatesFilter<"match"> | string
    matchUserId1?: StringWithAggregatesFilter<"match"> | string
    matchUserId2?: StringWithAggregatesFilter<"match"> | string
  }

  export type sendMatchWhereInput = {
    AND?: sendMatchWhereInput | sendMatchWhereInput[]
    OR?: sendMatchWhereInput[]
    NOT?: sendMatchWhereInput | sendMatchWhereInput[]
    sendMatchId?: StringFilter<"sendMatch"> | string
    senderPettId?: StringFilter<"sendMatch"> | string
    senderUserId?: StringFilter<"sendMatch"> | string
    receiverPetId?: StringFilter<"sendMatch"> | string
  }

  export type sendMatchOrderByWithRelationInput = {
    sendMatchId?: SortOrder
    senderPettId?: SortOrder
    senderUserId?: SortOrder
    receiverPetId?: SortOrder
  }

  export type sendMatchWhereUniqueInput = Prisma.AtLeast<{
    sendMatchId?: string
    AND?: sendMatchWhereInput | sendMatchWhereInput[]
    OR?: sendMatchWhereInput[]
    NOT?: sendMatchWhereInput | sendMatchWhereInput[]
    senderPettId?: StringFilter<"sendMatch"> | string
    senderUserId?: StringFilter<"sendMatch"> | string
    receiverPetId?: StringFilter<"sendMatch"> | string
  }, "sendMatchId">

  export type sendMatchOrderByWithAggregationInput = {
    sendMatchId?: SortOrder
    senderPettId?: SortOrder
    senderUserId?: SortOrder
    receiverPetId?: SortOrder
    _count?: sendMatchCountOrderByAggregateInput
    _max?: sendMatchMaxOrderByAggregateInput
    _min?: sendMatchMinOrderByAggregateInput
  }

  export type sendMatchScalarWhereWithAggregatesInput = {
    AND?: sendMatchScalarWhereWithAggregatesInput | sendMatchScalarWhereWithAggregatesInput[]
    OR?: sendMatchScalarWhereWithAggregatesInput[]
    NOT?: sendMatchScalarWhereWithAggregatesInput | sendMatchScalarWhereWithAggregatesInput[]
    sendMatchId?: StringWithAggregatesFilter<"sendMatch"> | string
    senderPettId?: StringWithAggregatesFilter<"sendMatch"> | string
    senderUserId?: StringWithAggregatesFilter<"sendMatch"> | string
    receiverPetId?: StringWithAggregatesFilter<"sendMatch"> | string
  }

  export type matchCreateInput = {
    matchId?: string
    matchDate?: Date | string
    matchPetId1: string
    matchPetId2: string
    matchUserId1: string
    matchUserId2: string
  }

  export type matchUncheckedCreateInput = {
    matchId?: string
    matchDate?: Date | string
    matchPetId1: string
    matchPetId2: string
    matchUserId1: string
    matchUserId2: string
  }

  export type matchUpdateInput = {
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPetId1?: StringFieldUpdateOperationsInput | string
    matchPetId2?: StringFieldUpdateOperationsInput | string
    matchUserId1?: StringFieldUpdateOperationsInput | string
    matchUserId2?: StringFieldUpdateOperationsInput | string
  }

  export type matchUncheckedUpdateInput = {
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPetId1?: StringFieldUpdateOperationsInput | string
    matchPetId2?: StringFieldUpdateOperationsInput | string
    matchUserId1?: StringFieldUpdateOperationsInput | string
    matchUserId2?: StringFieldUpdateOperationsInput | string
  }

  export type matchCreateManyInput = {
    matchId?: string
    matchDate?: Date | string
    matchPetId1: string
    matchPetId2: string
    matchUserId1: string
    matchUserId2: string
  }

  export type matchUpdateManyMutationInput = {
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPetId1?: StringFieldUpdateOperationsInput | string
    matchPetId2?: StringFieldUpdateOperationsInput | string
    matchUserId1?: StringFieldUpdateOperationsInput | string
    matchUserId2?: StringFieldUpdateOperationsInput | string
  }

  export type matchUncheckedUpdateManyInput = {
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPetId1?: StringFieldUpdateOperationsInput | string
    matchPetId2?: StringFieldUpdateOperationsInput | string
    matchUserId1?: StringFieldUpdateOperationsInput | string
    matchUserId2?: StringFieldUpdateOperationsInput | string
  }

  export type sendMatchCreateInput = {
    sendMatchId?: string
    senderPettId: string
    senderUserId: string
    receiverPetId: string
  }

  export type sendMatchUncheckedCreateInput = {
    sendMatchId?: string
    senderPettId: string
    senderUserId: string
    receiverPetId: string
  }

  export type sendMatchUpdateInput = {
    senderPettId?: StringFieldUpdateOperationsInput | string
    senderUserId?: StringFieldUpdateOperationsInput | string
    receiverPetId?: StringFieldUpdateOperationsInput | string
  }

  export type sendMatchUncheckedUpdateInput = {
    senderPettId?: StringFieldUpdateOperationsInput | string
    senderUserId?: StringFieldUpdateOperationsInput | string
    receiverPetId?: StringFieldUpdateOperationsInput | string
  }

  export type sendMatchCreateManyInput = {
    sendMatchId?: string
    senderPettId: string
    senderUserId: string
    receiverPetId: string
  }

  export type sendMatchUpdateManyMutationInput = {
    senderPettId?: StringFieldUpdateOperationsInput | string
    senderUserId?: StringFieldUpdateOperationsInput | string
    receiverPetId?: StringFieldUpdateOperationsInput | string
  }

  export type sendMatchUncheckedUpdateManyInput = {
    senderPettId?: StringFieldUpdateOperationsInput | string
    senderUserId?: StringFieldUpdateOperationsInput | string
    receiverPetId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type matchCountOrderByAggregateInput = {
    matchId?: SortOrder
    matchDate?: SortOrder
    matchPetId1?: SortOrder
    matchPetId2?: SortOrder
    matchUserId1?: SortOrder
    matchUserId2?: SortOrder
  }

  export type matchMaxOrderByAggregateInput = {
    matchId?: SortOrder
    matchDate?: SortOrder
    matchPetId1?: SortOrder
    matchPetId2?: SortOrder
    matchUserId1?: SortOrder
    matchUserId2?: SortOrder
  }

  export type matchMinOrderByAggregateInput = {
    matchId?: SortOrder
    matchDate?: SortOrder
    matchPetId1?: SortOrder
    matchPetId2?: SortOrder
    matchUserId1?: SortOrder
    matchUserId2?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type sendMatchCountOrderByAggregateInput = {
    sendMatchId?: SortOrder
    senderPettId?: SortOrder
    senderUserId?: SortOrder
    receiverPetId?: SortOrder
  }

  export type sendMatchMaxOrderByAggregateInput = {
    sendMatchId?: SortOrder
    senderPettId?: SortOrder
    senderUserId?: SortOrder
    receiverPetId?: SortOrder
  }

  export type sendMatchMinOrderByAggregateInput = {
    sendMatchId?: SortOrder
    senderPettId?: SortOrder
    senderUserId?: SortOrder
    receiverPetId?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use matchDefaultArgs instead
     */
    export type matchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = matchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sendMatchDefaultArgs instead
     */
    export type sendMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sendMatchDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
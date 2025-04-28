import type {
  AddQuery,
  CountQuery,
  GetQuery,
  ListQuery,
  Model,
  RemoveQuery,
  SetQuery,
} from '@ronin/compiler';
import type { DeepCallable, ResultRecord } from '@ronin/syntax/queries';
import type { QueryHandlerOptions } from 'ronin/types';
declare module 'ronin' {
  export type MenuItem = ResultRecord & {
    name: string;
    showEmail: boolean;
    url: string;
  };
  export type MenuItems = Array<MenuItem> & {
    moreBefore?: string;
    moreAfter?: string;
  };
  declare const get: {
    /* Get a single Menu Item record */
    menuItem: DeepCallable<GetQuery[keyof GetQuery], MenuItem | null>;
    /* Get multiple Menu Item records */
    menuItems: DeepCallable<GetQuery[keyof GetQuery], MenuItems>;
  };
  declare const count: {
    /* Count multiple Menu Item records */
    menuItems: DeepCallable<CountQuery[keyof CountQuery], number>;
  };
  declare const set: {
    /* Set a single Menu Item record */
    menuItem: DeepCallable<SetQuery[keyof SetQuery], MenuItem | null>;
    /* Set multiple Menu Item records */
    menuItems: DeepCallable<SetQuery[keyof SetQuery], MenuItems>;
  };
  declare const add: {
    /* Add a single Menu Item record */
    menuItem: DeepCallable<AddQuery[keyof AddQuery], MenuItem | null>;
  };
  declare const remove: {
    /* Remove a single Menu Item record */
    menuItem: DeepCallable<RemoveQuery[keyof RemoveQuery], MenuItem | null>;
    /* Remove multiple Menu Item records */
    menuItems: DeepCallable<RemoveQuery[keyof RemoveQuery], MenuItems>;
  };
  declare const list: {
    /* List all model definitions */
    models: DeepCallable<ListQuery[keyof ListQuery], Array<Model>>;
  };
  declare const createSyntaxFactory: (options: QueryHandlerOptions | (() => QueryHandlerOptions)) => {
    get: typeof get;
    count: typeof count;
    set: typeof set;
    add: typeof add;
    remove: typeof remove;
    list: typeof list;
    create: typeof create;
    alter: typeof alter;
    drop: typeof drop;
    batch: typeof batch;
    sql: typeof sql;
    sqlBatch: typeof sqlBatch;
  };
  export default function (options: QueryHandlerOptions | (() => QueryHandlerOptions)): {
    get: typeof get;
    count: typeof count;
    set: typeof set;
    add: typeof add;
    remove: typeof remove;
    list: typeof list;
    create: typeof create;
    alter: typeof alter;
    drop: typeof drop;
    batch: typeof batch;
    sql: typeof sql;
    sqlBatch: typeof sqlBatch;
  };
}

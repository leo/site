import type { AddQuery, CountQuery, GetQuery, RemoveQuery, SetQuery } from '@ronin/compiler';
import type { DeepCallable, ResultRecord } from '@ronin/syntax/queries';
interface MenuItemSchema extends ResultRecord {
  name: string;
  showEmail: boolean;
  url: string;
}
export type MenuItem = MenuItemSchema;
export type MenuItems = Array<MenuItemSchema>;
declare module 'ronin' {
  declare const add: {
    /* Add a single menuItem record */
    menuItem: DeepCallable<AddQuery[keyof AddQuery], MenuItem | null>;
  };
  declare const count: {
    /* Count a single menuItem record */
    menuItem: DeepCallable<CountQuery[keyof CountQuery], MenuItem | null>;
    /* Count multiple menuItem records */
    menuItems: DeepCallable<CountQuery[keyof CountQuery], MenuItems>;
  };
  declare const get: {
    /* Get a single menuItem record */
    menuItem: DeepCallable<GetQuery[keyof GetQuery], MenuItem | null>;
    /* Get multiple menuItem records */
    menuItems: DeepCallable<GetQuery[keyof GetQuery], MenuItems>;
  };
  declare const remove: {
    /* Remove a single menuItem record */
    menuItem: DeepCallable<RemoveQuery[keyof RemoveQuery], MenuItem | null>;
    /* Remove multiple menuItem records */
    menuItems: DeepCallable<RemoveQuery[keyof RemoveQuery], MenuItems>;
  };
  declare const set: {
    /* Set a single menuItem record */
    menuItem: DeepCallable<SetQuery[keyof SetQuery], MenuItem | null>;
    /* Set multiple menuItem records */
    menuItems: DeepCallable<SetQuery[keyof SetQuery], MenuItems>;
  };
}

import type { SchemaRecord, SchemaRecords } from 'ronin/schema';

export type MenuItem = SchemaRecord<{
  name: string;
  url: string;
  showEmail: boolean;
}>;

export type MenuItems = SchemaRecords<MenuItem>;

declare module 'ronin' {
  export interface Schemas {
    menuItem: MenuItem;
    menuItems: MenuItems;
  }
}

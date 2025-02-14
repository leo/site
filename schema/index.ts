import { blob, boolean, model, string } from 'ronin/schema';

export const MenuItem = model({
  slug: 'menuItem',

  fields: {
    name: string(),
    showEmail: boolean(),
    url: string(),
  },
});

export type MenuItem = typeof MenuItem;

export const Account = model({
  slug: 'account',

  fields: {
    handle: string(),
    avatar: blob(),
  },
});

export type Account = typeof Account;

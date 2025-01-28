import { boolean, model, string } from 'ronin/schema';

export const MenuItem = model({
  slug: 'menuItem',

  fields: {
    name: string(),
    showEmail: boolean(),
    url: string(),
  },
});

export type MenuItem = typeof MenuItem;

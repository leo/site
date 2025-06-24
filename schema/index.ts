import { blob, boolean, model, string } from 'blade/universal/schema';

export const MenuItem = model({
  slug: 'menuItem',

  fields: {
    name: string(),
    showEmail: boolean(),
    url: string(),
  },
});

export const Account = model({
  slug: 'account',

  fields: {
    handle: string(),
    avatar: blob(),
  },
});

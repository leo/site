import ronin from 'ronin';
import type { MenuItem } from '@ronin/leo';

import Link from '@components/link';
import QuotationMark from '@components/quotation-mark';

const Index = async () => {
  const [menuItems] = await ronin<MenuItem[]>(({ get }) => {
    get.menuItems.orderedBy.ascending = ['ronin.updatedAt'];
  });

  return (
    <main className="p-8 box-border relative min-h-full md:p-11">
      <section className="md:absolute md:inset-0 md:text-center md:flex md:h-full md:items-center md:justify-center md:select-none md:cursor-default">
        <h2 className="text-2xl hidden md:inline-block md:font-light md:mt-2 md:mr-10 md:ml-0 md:mb-0">
          Just call me
        </h2>

        <h1 className="text-6xl font-light m-0 absolute top-9 left-9 pr-9 md:relative md:inline-block md:left-auto md:top-auto md:pr-0 md:font-light md:text-7xl">
          <QuotationMark position="left" />
          Leo
          <QuotationMark position="right" />
        </h1>
      </section>

      <nav className="absolute left-7 bottom-7 flex flex-col md:left-8 md:right-8 md:bottom-8 md:flex-row md:justify-center thin:hidden">
        {menuItems.map((menuItem) => (
          <Link key={menuItem.id} href={menuItem.url} toggleEmail={menuItem.showEmail}>
            {menuItem.name}
          </Link>
        ))}
      </nav>
    </main>
  );
};

export default Index;

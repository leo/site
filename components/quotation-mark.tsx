import cns from 'clsx';

const QuotationMark = ({ position }) => {
  return (
    <span
      className={cns('hidden md:block h-5 absolute font-light text-4xl', {
        'bottom-4 -left-4': position === 'left',
        '-top-3 -right-4': position === 'right',
      })}
    >
      {position === 'left' ? '„' : '„'}
    </span>
  );
};

export default QuotationMark;

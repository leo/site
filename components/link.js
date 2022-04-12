const Link = ({ children, href, onMouseEnter, onMouseLeave }) => (
  <a
    href={href}
    target="_blank"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="text-base no-underline text-black p-2.5 block md:inline-block md:rounded-md md:py-1 md:px-2.5 md:mx-1.5 md:transition md:duration-200 md:hover:bg-neutral-200/60"
  >
    {children}
  </a>
);

export default Link;

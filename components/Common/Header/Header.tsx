import Breadcrumb from "./Breadcrumb";
import Nav from "./Nav";

const Header = (): JSX.Element => {
  return (
    <div className="my-4 mx-auto flex max-w-4xl items-center justify-between px-6">
      <Breadcrumb />
      <nav className="relative flex w-full items-center">
        <a
          href="#main"
          className="z-index-50 absolute left-1/2 -translate-y-32 rounded-lg border-[1px] border-tertiary bg-secondary px-4 py-2 shadow-md transition duration-200 focus:block focus:translate-y-0 focus:border-accent"
        >
          Skip to main content
        </a>
        <Nav />
      </nav>
    </div>
  );
};

export default Header;

import Logo from "./Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";
import SearchField from "./SearchField/SearchField";

const Header = () => {
   return (
      <div className="flex absolute items-center justify-between py-10 px-28 bg-transparent">
         <Logo />
         <SearchField />
         <NavLinks />
      </div>
   );
};

export default Header;

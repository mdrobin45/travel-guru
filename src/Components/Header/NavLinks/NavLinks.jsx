import { NavLink } from "react-router-dom";

const NavLinks = () => {
   return (
      <div>
         <ul className="flex items-center justify-between text-white gap-4">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/destination">Destination</NavLink>
            </li>
            <li>
               <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
            <button
               type="button"
               className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
               Login
            </button>
         </ul>
      </div>
   );
};

export default NavLinks;

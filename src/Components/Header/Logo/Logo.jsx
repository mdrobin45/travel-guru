import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Logo = () => {
   return (
      <div className=" w-44">
         <Link to="/">
            <img className="w-full" src={logo} alt="Logo" />
         </Link>
      </div>
   );
};

export default Logo;

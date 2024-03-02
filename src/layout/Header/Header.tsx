import { Logo } from "@assets/Images";
import { Button, Image } from "@components/ui";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="bg-slate-400" >
      <div className="container flex items-center justify-between">
        <Link to="/">
          <Image
            src={Logo}
            alt="Logo"
            className="w-[90px] h-[50px] max-w-[100%] max-h-[100%] object-contain sm:h-[60px] sm:w-[100px]  "
          />
        </Link>
        <Button to="/signup" variant="danger">
          SignUp
        </Button>
      </div>
    </header>
  );
};

export default Header;

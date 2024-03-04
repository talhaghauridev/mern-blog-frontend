import { Logo } from "@assets/Images";
import { Button, Image } from "@components/ui";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font border-b-[1px] border-solid border-[#efecec0]">
      <div className="container mx-auto flex flex-wrap py-[10px] justify-between md:flex-row items-center w-full">
        <Link to="/">
          <Image
            src={Logo}
            alt="Logo"
            className="w-[90px] h-[50px] max-w-[100%] max-h-[100%] object-contain sm:h-[60px] sm:w-[100px]  "
          />
        </Link>
        <Button variant="danger" to="/login" className="max-w-[100px]" >Login</Button>
      </div>
    </header>
  );
};

export default Header;

import { fullLogoDark, fullLogoLight } from "@assets";
import { useTheme } from "@context/ThemeContext";

const PageLoading = () => {
  const { theme } = useTheme();
  return (
    <section
      id="page-loading"
      className="w-full h-screen bg-[white] flex items-center justify-center "
    >
      <img
        className="w-full h-[35px]  md:h-[52px] object-contain "
        src={theme === "light" ? fullLogoDark : fullLogoLight}
        alt="logo"
      />
    </section>
  );
};

export default PageLoading;

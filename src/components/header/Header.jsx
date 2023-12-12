import logoJcr from "../../pictures/logo/logoprint.webp";
import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <div className="header" id="top">
      <img src={logoJcr} alt="logo jcr" />
      <Navigation />
    </div>
  );
}
export default Header;

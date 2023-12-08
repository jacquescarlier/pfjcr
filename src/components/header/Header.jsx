import logoJcr from "../../pictures/logo/logoprint.png";
import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <div className="header">
      <img src={logoJcr} alt="logo jcr" />
      <Navigation />
    </div>
  );
}
export default Header;

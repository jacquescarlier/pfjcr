import Navigation from "../navigation/Navigation";
import logoJcr from "../../pictures/logo/Logoprint.png";
function Header() {
  return (
    <div className="header">
      <img src={logoJcr} alt="logo jcr" />
      <Navigation />
    </div>
  );
}
export default Header;

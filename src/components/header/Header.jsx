import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <div className="header" id="top">
      <div className="logoRotate">
        <span>JCR</span>
      </div>
      <Navigation />
    </div>
  );
}
export default Header;

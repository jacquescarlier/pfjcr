import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer id="contact">
     
      <ul>
        <Link
        to= "/cv">
        <li><img src="./images/logoCV.webp" alt="logo email" id="email" /></li>
        </Link>
        <li> <a href="https://github.com/jacquescarlier/" target="_blank" rel="noopener"> <img src="./images/github.webp" alt="logo github" /> </a> </li>
        <li><a href="https://www.linkedin.com/in/jacques-carlier-9a39121bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener"> <img src="./images/linkedin.webp" alt="logo linkedin" /> </a></li>
      </ul>
      <span className="topLink"><a href="#top">TOP</a></span>
      <ul className="backlinks">
        <li><a className="tooltip" href="https://validator.w3.org/#validate_by_uri" target="_blank" rel="noopener">Validateur W3C <em>Contrôler votre site</em></a> </li>
        <li><a className="tooltip" href="https://developer.mozilla.org/fr/" target="_blank" rel="noopener">MDN Doc<em>Documentation Mozilla</em></a> </li>
        <li><a className="tooltip" href="https://fr.react.dev/" target="_blank" rel="noopener">React<em>Documentation React</em></a></li>
        <li><a className="tooltip" href="https://www.google.com/" target="_blank" rel="noopener">Google<em>Moteur de recherche</em></a></li>
      </ul>
    </footer>
  );
}
export default Footer;

function Footer() {
  return (
    <footer id="contact">
     
      <ul>
        <li><a href="mailto:jacques.carlier@gmail.com"> <img src="./images/emailpf.webp" alt="logo email" id="email" /></a></li>
        <li> <a href="https://github.com/jacquescarlier/" target="_blank" rel="noopener"> <img src="./images/github.webp" alt="logo github" /> </a> </li>
        <li><a href="https://www.linkedin.com/in/jacques-carlier-9a39121bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener"> <img src="./images/linkedin.webp" alt="logo linkedin" /> </a></li>
      </ul>
      <span className="topLink"><a href="#top">TOP</a></span>
      <ul className="backlinks">
        <li><a href="https://validator.w3.org/#validate_by_uri" target="_blank" rel="noopener">Validateur W3C</a> </li>
        <li><a href="https://developer.mozilla.org/fr/" target="_blank" rel="noopener">MDN Doc</a> </li>
        <li><a href="https://fr.react.dev/" target="_blank" rel="noopener">React</a></li>
        <li><a href="https://www.google.com/" target="_blank" rel="noopener">Google</a></li>
      </ul>
    </footer>
  );
}
export default Footer;

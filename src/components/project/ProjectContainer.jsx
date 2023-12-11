export default function ProjectContainer() {
  "use strict";
  window.addEventListener("DOMContentLoaded", (event) => {
    animate_text();
  });
  function animate_text() 
{
  let delay = 100,
      delay_start = 0,
      contents,
      letters;

  document.querySelectorAll(".animate-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        // effet machine à écrire 
        elem.textContent += letter;
      }, delay_start + delay * index_1);
    });    
    delay_start += delay * letters.length;
  });
}
animate_text()
  return (
    <div className="projectTitle">
      <h2 className="bloc">
        <span className="letter01">P</span>
        <span className="letter02">r</span>
        <span className="letter03">o</span>
        <span className="letter04">j</span>
        <span className="letter05">e</span>
        <span className="letter06">t</span>
        <span className="letter07">s</span>
      </h2>
      <div className="imgProject">
        <img src="./langages/HTML51.webp" alt="logo html" title="HTML" />
        <img src="./langages/css-31.webp" alt="logo html" title="CSS" />
        <img src="./langages/Sass1.webp" alt="logo html" title="SASS"/>
        <img src="./langages/Javascript1.webp" alt="logo html" title="Javascript" />
        <img src="./langages/react1.webp" alt="logo html" title="REACT" />
        <img src="./langages/redux1.webp" alt="logo html" title="REDUX"/>
      </div>
    </div>
  )
}
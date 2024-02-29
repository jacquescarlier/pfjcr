import { imgLangages } from "../../datas/data"

export default function ProjectContainer() {
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
      <div className="content">
        <div className="imgProject">
          {imgLangages.map(function (langage) {
            return (
              <img key={langage.id} src={langage.img} alt={langage.alt} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
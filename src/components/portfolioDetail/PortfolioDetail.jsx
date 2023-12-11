import { Link } from 'react-router-dom'
let indexDetails = 1000
let indexInfo
const PortfolioDetail = ({ portfolioData }) => {

  if (portfolioData.tags.length = 1) { return } else {
    for (let i = 1; i < portfolioData.tags.length; i++) {
      indexDetails = indexDetails + i
      indexInfo = indexDetails + 10000
    }
  }
  return (
    <section className="title" >
      <div className='titleInfo'>
        <h1> {portfolioData.title}</h1>
        <p> {portfolioData.project}</p>
      </div>
      <div className='titleName'>
        <p> {portfolioData.host.name} </p>

      </div>
      <div className="portfolioDetail" key={indexInfo}>
        <div className='portfolioInformation' key={indexDetails} >
          {portfolioData.tags.map((tag, index) => (
            <Link to={tag[2]} target="_blank" rel="noopener"><p key={index}>{tag[1]}</p></Link>
          ))}
        </div >
      </div>

    </section>
  )
}
export default PortfolioDetail; 
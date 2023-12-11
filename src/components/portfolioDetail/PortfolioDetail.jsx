import { Link } from 'react-router-dom'

const PortfolioDetail = ({ portfolioData }) => {

  return (
    <section className="title" >
      <div className='titleInfo'>
        <h1> {portfolioData.title}</h1>
        <p> {portfolioData.project}</p>
      </div>
      <div className='titleName'>
        <p> {portfolioData.host.name} </p>
      </div>
      <div className="portfolioDetail"  >
        <div className='portfolioInformation' key={portfolioData.tags[0]}  >
          {portfolioData.tags.map((tag, index) => (
            <Link to={tag[2]} target="_blank" rel="noopener"><p key={index}>{tag[1]}</p></Link>
          ))}
        </div >
      </div>

    </section>
  )
}
export default PortfolioDetail; 
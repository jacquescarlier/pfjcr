import { Link } from 'react-router-dom'

const PortfolioDetail = ({ portfolioData }) => {

  return (
    <section className="title" >
      <div className='titleInfo'>
        <h1> {portfolioData.title}</h1>
        <span><a href={portfolioData.project} >Site</a> </span>
        <span><a href={portfolioData.tags}>GitHub</a></span>
      </div>
    </section>
  )
}
export default PortfolioDetail; 
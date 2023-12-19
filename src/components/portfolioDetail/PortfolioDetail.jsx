import { Link, Navigate } from 'react-router-dom'

const PortfolioDetail = ({ portfolioData }) => {
  const siteProject = portfolioData.project
  return (
    <section className="title" >
      <div className='titleInfo'>
        <h1> {portfolioData.title}</h1>
        {!siteProject && (
        <>
        <a href={portfolioData.tags} target="_blank" rel="noopener"><span>GitHub</span></a>
        </>
        )}
        {siteProject && (
          <>
            <a href={portfolioData.project} target="_blank" rel="noopener"><span>Site</span></a>
            <a href={portfolioData.tags} target="_blank" rel="noopener"><span>GitHub</span></a>
          </>
        )}
      </div>
    </section>
  )
}
export default PortfolioDetail; 
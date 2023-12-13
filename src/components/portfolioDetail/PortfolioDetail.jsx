import { Link, Navigate } from 'react-router-dom'

const PortfolioDetail = ({ portfolioData }) => {
  const siteProject = portfolioData.project
  return (
    <section className="title" >
      <div className='titleInfo'>
        <h1> {portfolioData.title}</h1>
        {!siteProject && (
        <>
        <span><a href={portfolioData.tags} target="_blank" rel="noopener">GitHub</a></span>
        </>
        )}
        {siteProject && (
          <>
            <span><a href={portfolioData.project} target="_blank" rel="noopener">Site</a></span>
            <span><a href={portfolioData.tags} target="_blank" rel="noopener">GitHub</a></span>
          </>
        )}
      </div>
    </section>
  )
}
export default PortfolioDetail; 
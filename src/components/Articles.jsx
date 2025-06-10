
import { Link, useLoaderData } from 'react-router-dom'
import { createDateStamp, strip } from '../util/helpers'

const Articles = () => {
  
    const articles = useLoaderData()
    console.log(articles)
    
    return (
      <div className='articles'>
        {
          articles.map((article) => {
            return (
              <div className='article-post' key={article.id}>
                <Link key={article.id} to={`article/${article.id}`}>
                  <img src={article.thumbnail} alt="" />
                  <h2>{strip(article.title)}</h2>
                  <p>{createDateStamp(article.timestamp)}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
}

export default Articles
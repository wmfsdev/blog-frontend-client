
import { Link, useLoaderData } from 'react-router-dom'

const Articles = () => {
  
    const articles = useLoaderData()

      return (
        <div className='articles'>
          {
            articles.map((article) => {
              return (
                <Link key={article.id} to={`article/${article.id}`}>
                  <div className='article-post'>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      )
}

export default Articles
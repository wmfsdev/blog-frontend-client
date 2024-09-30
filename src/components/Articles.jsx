
import { Link, useLoaderData } from 'react-router-dom'

function Article() {
  
    const articles = useLoaderData()

      return (
        <div className='articles'>
          {
            articles.map((article) => {
              return (
                // link state passed to Article useLocation
                <Link state={article} key={article.id} to={`article/${article.id}`}>
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

export default Article
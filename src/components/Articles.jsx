
import { Link, useLoaderData } from 'react-router-dom'

const Articles = () => {
  
    const articles = useLoaderData()

    function strip(html){
       let doc = new DOMParser().parseFromString(html, 'text/html');
       return doc.body.textContent || "";
    }

    return (
      <div className='articles'>
        {
          articles.map((article) => {
            return (
              <Link key={article.id} to={`article/${article.id}`}>
                <div className='article-post'>
                  <h2>{strip(article.title)}</h2>
                  <p>{strip(article.body)}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    )
}

export default Articles
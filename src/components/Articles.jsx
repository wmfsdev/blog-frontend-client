import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Article() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function fetchData() {
          const response = await fetch("http://localhost:3000/articles", { mode: 'cors' })
          const data = await response.json()
          setArticles(data)
        }
        fetchData()
      }, [])

      return (
        <div className='articles'>
          {
            articles.map((article) => {
              return (
                <Link state={article} key={article._id} to={`article/${article._id}`}>
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
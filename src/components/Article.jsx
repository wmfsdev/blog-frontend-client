import { useLoaderData, Outlet } from "react-router-dom"
import DOMPurify from 'dompurify'

const Article = () => {

  const article = useLoaderData()[0]

    return (
      <div className="article-wrapper">
      <div id="article">
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.title) }}/>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }}/>
      </div>
      <Outlet  />
      </div>
    )
}

export default Article
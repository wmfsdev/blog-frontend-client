import { useLoaderData, Outlet } from "react-router-dom"
import DOMPurify from 'dompurify'

const Article = () => {

  const { title, body } = useLoaderData()[0]

    return (
      <div className="article-wrapper">
      <div id="article">
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title.toUpperCase()) }}/>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}/>
      </div>
      <Outlet  />
      </div>
    )
}

export default Article
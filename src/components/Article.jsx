import { useLoaderData, Outlet } from "react-router-dom"
import DOMPurify from 'dompurify'

const Article = () => {

    const article = useLoaderData()[0]
    console.log(article)
   //console.log("string: ", article.body.at(5))
    // console.log("non-string: ", "`" + article.body + "`")

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
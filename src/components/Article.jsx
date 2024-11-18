import { useLoaderData, Outlet } from "react-router-dom"
import DOMPurify from 'dompurify'

const Article = () => {

    const article = useLoaderData()[0]

        return (
            <>
            <div id="article">
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.title) }}/>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }}/>
            </div>
            <Outlet  />
            </>
        )
}

export default Article
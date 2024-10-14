import { useLoaderData, Outlet } from "react-router-dom"

const Article = () => {

    const article = useLoaderData()
    console.log("react article", article)

        return (
            <>
            <div id="article">
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </div>
            <Outlet  />
            </>
        )
}

export default Article
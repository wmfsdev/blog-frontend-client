import App from "./App"
import Body from "./components/Body"
import Articles from "./components/Articles"
import Article from "./components/Article"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/:name", element: <Body /> },
            { path: "/", element: <Articles /> },
            { path: "/article/:id", element: <Article /> }
        ]
    },
]

export default routes
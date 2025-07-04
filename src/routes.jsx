import App from "./App"
import Body from "./components/Body"
import Articles from "./components/Articles"
import Article from "./components/Article"
import { articlesLoader, articleLoader, commentLoader } from './util/loader'
import Comments from "./components/Comments"

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/:name", element: <Body /> },
      { path: "/", loader: articlesLoader, element: <Articles /> },
      { 
        path: "/article/:id",
        loader: articleLoader,
        element: <Article />,
        children: [
          { 
            path:'/article/:id', 
            loader: commentLoader, 
            element: <Comments />
          },
        ]
      },
    ]
  },
]

export default routes
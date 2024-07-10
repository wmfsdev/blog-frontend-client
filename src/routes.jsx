import App from "./App"
import Body from "./components/Body"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/:name",
                element: <Body />
            }
        ]
    },
]

export default routes
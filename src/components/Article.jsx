import { useLoaderData, useLocation, Outlet } from "react-router-dom"

const Article = () => {
    // from Articles Link... how to re-render on state change?
    
    // maybe forget Link and have it use it's own dedicated Loader
    // to make a request for just comments

    const { state } = useLocation();
    console.log("useLocation: ", state)

        return (
            <>
            <div id="article">
                <h1>{state.title}</h1>
                <p>{state.body}</p>
            
            </div>
            <Outlet context={state.comments} />
            {/*goes to Comments useOutlet*/}
            </>
        )
}

export default Article
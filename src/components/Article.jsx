import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";
 
const Article = () => {

    const { id } = useParams()
    let { state } = useLocation();

    if (!state) {
        console.log(id)
        return (
            <>
            <h2>no state</h2>
            <p>{id}</p>
            </>
        )  
    } else {
        return (
            <div id="article">
                <h1>{state.title}</h1>
                <p>{state.body}</p>
                <p>{state.timestamp}</p>
            
            </div>
        )
    }
}

export default Article
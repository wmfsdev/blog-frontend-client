
import { useParams, useLoaderData } from "react-router-dom"
import { jwtDecode } from "jwt-decode";
import CommentForm from './CommentForm'
import CommentDelete from './CommentDelete'

function Comments() {

    const { id } = useParams()
    const comments = useLoaderData()
    console.log("article id: ", id)
    const token = localStorage.getItem("token");

    return (
        <>
        <h2>Comments</h2>
        <div className="comments">
        { comments.map((comment) => {
            const body = comment.body
            const username = comment.author.username
            const timestamp = comment.timestamp
            const commentId = comment.id

            let canDeleteComment = false

            if (token) {
                const decoded = jwtDecode(token)
                if (username === decoded.username) {
                    canDeleteComment = true
                }
            }

            return (
                <div key={commentId} className={`comment-${commentId}`}>
                    <p className="comment-body">comment: {body}</p>
                    <p className="comment-username">user: {username}</p>
                    <p>{timestamp}</p>
                     { canDeleteComment ? <CommentDelete commentId={commentId} articleId={id} /> : null }
                </div>
            )
        }) 
        }
        </div>
        { token ? <CommentForm state={id} /> : null } 
        </>
    )
}

export default Comments 
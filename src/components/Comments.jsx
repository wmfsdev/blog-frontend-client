
import { useParams, useLoaderData } from "react-router-dom"
import { jwtDecode } from "jwt-decode";
import CommentForm from './CommentForm'
import CommentDelete from './CommentDelete'

function Comments() {

    const { id } = useParams()
    const comments = useLoaderData()
    const token = localStorage.getItem("token");

    const formatDate = (timestamp) => {
        const date = new Date(timestamp)
        return date.toLocaleString()
    }

    return (
        <>
        <div className="comments-wrapper">
            <h2>COMMENTS</h2>
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
                            <div className="comment-body">
                                <p>{body}</p>
                            </div>
                            <div className="comment-info">
                                <p className="comment-username">{username}</p>
                                <p>{formatDate(timestamp)}</p>
                             { canDeleteComment ? <CommentDelete commentId={commentId} articleId={id} /> : null }
                            </div>
                        </div>
                    )
                }) 
                }
            </div>
            { token ? <CommentForm state={id} /> : <>Sign-up if you wish to leave a comment</> } 
        </div>
        </>
    )
}

export default Comments 
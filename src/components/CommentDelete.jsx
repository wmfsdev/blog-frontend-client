
import { useNavigate } from "react-router-dom"

const CommentDelete = ({commentId, articleId}) => {

	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	const handleSubmit =(e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		const commentId = data.get("commentId")
		const articleId = data.get("articleId")
		deleteComment(commentId, articleId)
	}

	async function deleteComment(commentId, articleId) {
		try {
			console.log("try comment DELETE")
			const response = await fetch(`${import.meta.env.VITE_API_URL}/articles/${articleId}/comments/${commentId}`, {
				method: "DELETE",
				body: JSON.stringify({
					comment: commentId,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`
				},
			})

		if (response.status === 200) {
			navigate(`/article/${articleId}`)
		}

		if (response.status === 401) {
			throw err
		}

		} catch(err) {
			console.log(err)
		}
	}
          
	return (
		<form method="POST" onSubmit={handleSubmit}>
			<input type="hidden" name="commentId" value={commentId} />
			<input type="hidden" name="articleId" value={articleId} />
			<button>delete</button>
		</form>
	)
}

export default CommentDelete
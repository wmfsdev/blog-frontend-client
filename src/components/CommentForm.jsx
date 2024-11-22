import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const CommentForm = () => {

	const navigate = useNavigate()
	const [ error, setError ] = useState(false)
	const { id } = useParams()
	const token = localStorage.getItem("token")

	function handleSubmit(e) {
		e.preventDefault()
		const data = new FormData(e.target)
		const text = data.get("comment")
		submitComment(text)
	}
 
	async function submitComment(text) {
		try {
			console.log("try comment SUBMIT")
			const response = await fetch(`${import.meta.env.VITE_API_URL}/articles/${id}/comments`, {
				method: "POST",
                body: JSON.stringify({
                    comment: text,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`
                },
			})
			// 401 UNAUTHROISED: no authentication
			if (response.status === 401) {
				const unauth = await response.json()
				setError(unauth[0].message)
				return
			}
			if (response.status === 200) {
				const data = await response.json()
				navigate(`/article/${id}`)
			} else {
				// validation error handling
				const errors = await response.json()
                const status = await response.status
                setError(errors[0].msg)
			}
		} catch(err) {
			console.log(err)
		}
	}

	return (
		<>
		<form method="POST" onSubmit={handleSubmit}>
			<label>
				Leave a comment: 
				<textarea name="comment" rows="3" cols="80" />
			</label>
			<button type="submit">SUBMIT</button>
		</form>
		{ error && <p>{error}</p> }
		</>
	)
}

export default CommentForm
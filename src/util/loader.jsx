
export async function loader({ params }) {

	const param = params.id
	const token = localStorage.getItem("token")

	if (token === null) {
		return false
	}

	const headers = { 'Authorization': `Bearer ${token}` }
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/articles/${param}/comments`,  { headers } )
		
		if (response.status === 200) {
			return response
		} else return false
			
	} catch(err) {
		return err
	} 
}

export async function articlesLoader() {
  const token = localStorage.getItem("token")
	const headers = { 'Authorization': `Bearer ${token}` }
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/articles`, { headers })
		const data = await response.json()
		return data
	} catch(err) {
		return err
	}
}

export async function articleLoader({ params }) {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/articles/${params.id}`) 
		const data = await response.json()
		return data
	} catch(err) {
		return err
	}
}

export async function commentLoader({ params }) {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/articles/${params.id}/comments`) 
		const data = await response.json()
		return data
	} catch(err) {
		return err
	}
}

import { redirect } from "react-router-dom"

export async function loader() {
    const token = localStorage.getItem("token")

    if (token === null) {
        return redirect('/login')
    }

    const headers = { 'Authorization': `Bearer ${token}` }

    try {
        const response = await fetch('http://localhost:3000/protected',  { headers } )
        if (response.status === 200) {
            console.log(response)
            return true
        } else return redirect('/login')
        
    } catch(err) {
        return err
    } 
}
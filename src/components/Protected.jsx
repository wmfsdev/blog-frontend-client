import { useLoaderData } from "react-router-dom"

const Protected = () => {

    const response = useLoaderData()
    console.log(response)

    if (response) {
      return (
        <h1>Authorised</h1>
      )
    } else {
      return (
        <h1>Unauthroised</h1>
      )
    }
}

export default Protected
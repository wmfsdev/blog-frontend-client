import { useParams } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Body = () => {
    const { name } = useParams();
  
      return (
      <>
        {name === "signup" ? (
          <Signup />
        ) : name === "login" ? (
          <Login />
        ) : (
          <DefaultProfile />
        )}
      </>
    );
};

export default Body
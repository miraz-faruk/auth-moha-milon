import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

const Home = () => {

    const authInfo = useContext(AuthContext);
    console.log(authInfo);

    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;
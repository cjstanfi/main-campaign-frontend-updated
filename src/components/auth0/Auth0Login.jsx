import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0Login = ({ className, text }) => {
    const { loginWithRedirect } = useAuth0();

    function handleLoginClick(){
        loginWithRedirect()
    }

    return <button className={className} onClick={handleLoginClick}>{text ? text : "Sign In"}</button>;
};

export default Auth0Login;
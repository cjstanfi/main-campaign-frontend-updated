import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Auth0Logout = ({ className }) => {
    const { logout } = useAuth0();

    return (
        <button className={className} onClick={() => logout({ returnTo: window.location.origin })}>
            Sign Out
        </button>
    );
};

export default Auth0Logout;
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../services/AuthServices";
import { useState, useEffect } from "react";
import "./header.scss"
import LogOut from "./LogOut";


const Header = () => {
    const [out, setOut] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    useEffect(()=>{
        if (loading) return;
        if(user){
            setOut(true)
        };
    }, [user, loading])
    let name;
    if (user){
        name = user.displayName;
    }
    return(
        <header className="header">
            <div className="header__title">
                <h1>Holiday photos</h1>
            </div>
            <div className="header__user">
                {user && <LogOut/>}
                <p className="header__name">{name}</p>
            </div>
        </header>
        
    )
}

export default Header;
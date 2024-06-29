import {logout} from "../../services/AuthServices";

const LogOut = () => {
    const ClickHandler = (e) => {
        e.preventDefault();
        logout();
    }
    return(
            <button className="header__out" onClick={ClickHandler}>Atsijungti</button>
        
    )
}

export default LogOut
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, login } from "../../../services/AuthServices";
import "../form.scss"

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email:'',
        pass:''
    })

    const [user, loading, error] = useAuthState(auth);

    useEffect(()=>{
        if (loading) return;
        if(user)  navigate('/images');
    }, [user, loading])

    const HandleChange = (e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    const HandleSubmit = (e)=>{
        e.preventDefault();
        login(userData.email, userData.pass);

    }
    return(
        <form className="form" onSubmit={HandleSubmit}>
            <div className="form__box">
                <input className="form__field" onChange={HandleChange} type="email" name="email" placeholder="email" value={userData.email}/>
                <input className="form__field" onChange={HandleChange} type="password" name="pass" placeholder="password" value={userData.pass}/>
                <button className="form__in" type="submit">Log in</button>
                <Link className="form__link"  to="/register">Kurti paskyrą</Link>      
            </div>
            </form>
    )
}

export default Login;
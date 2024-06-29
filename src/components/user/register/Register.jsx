import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../../../services/AuthServices";
import "../form.scss"

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        pass: ""
    });

    const HandleChange= (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [user, loading, error] = useAuthState(auth);

    useEffect(()=>{
        if (loading) return;
        if(user)  navigate('/images');
    }, [user, loading])

    const HandleSubmit = (e) => {
        e.preventDefault();
        registerWithEmailAndPassword(data.name, data.email, data.pass);
    }
    return(
        <form className="form" onSubmit={HandleSubmit}>
            <div className="form__box">
                <input className="form__field" onChange={HandleChange} type="text" name="name" placeholder="name" value={data.name}/>
                <input className="form__field" onChange={HandleChange} type="email" name="email" placeholder="email" value={data.email}/>
                <input className="form__field" onChange={HandleChange} type="password" name="pass" placeholder="password" value={data.pass}/>
                <button className="form__in" type="submit">Register</button>
                <Link className="form__link" to={"/"}>Prisinjungti</Link>
            </div>
        </form>
        
    )
}
export default Register;
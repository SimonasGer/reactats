import { useState } from "react";

const Button = () => {
    const [data, setData] = useState({
        name: "",
        pass: ""
    });

    const HandleChange= (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
      }
      const HandleClick = (e) => {
        e.preventDefault();
        console.log(data)
      }
    return(
        <form>
            <input onChange={HandleChange} type="text" name="name" placeholder="name" value={data.name}/>
            <input onChange={HandleChange} type="password" name="pass" placeholder="password" value={data.pass}/>
            <button onClick={HandleClick}>You Clicked Here </button>
        </form>
        
    )
}
export default Button;
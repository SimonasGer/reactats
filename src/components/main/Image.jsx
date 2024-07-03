import * as service from "../../services/CrudServices";
import "./image.scss"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Image = (props) => {
    const [image, setImage] = useState(false)
    const deleteHandler = (e) => {
        e.preventDefault();
        service.deleteImage(props.url);
    }
    const modalHandler = (e) => {
        e.preventDefault();
        setImage(true);
    }
    const modalHide = (e) => {
        e.preventDefault();
        setImage(false);
    }
    let style = props.format[0]
    if (props.format[4] === "four" && props.c % 2 === 0){
        style = "image__image col m-1"
    }
    let w = props.format[2];
    let h = props.format[3];
    if (props.format[4] === "three1" && props.c % 3 === 0){
        w = 1600;
    }
    if (props.format[4] === "three2" && (props.c % 3 === 1 || props.c === 1)){
        h = 1600;
    }

    return(
        <div className="image">
            <a onClick={modalHandler}><img className={style} src={props.url} width={w} height={h}/></a>
            <button className="image__delete" onClick={deleteHandler}>&#x1F5D1;</button>
            {image && <a onClick={modalHide} className="image__modal"><img src={props.url} /></a>}
        </div>
        
    )
}

export default Image;
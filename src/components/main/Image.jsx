import { Images } from "react-bootstrap-icons";
import * as service from "../../services/CrudServices";
import "./image.scss"
import { useState } from "react";

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
    return(
        <div className="image">
            <a className="image__image" onClick={modalHandler}><img className="image__image"  src={props.url}/>
            <button className="image__delete" onClick={deleteHandler}>&#x1F5D1;</button>
            </a>
            {image && <a onClick={modalHide} className="image__modal"><img src={props.url} /></a>}
        </div>
    )
}

export default Image;
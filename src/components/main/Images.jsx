import {auth } from "../../services/AuthServices";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import FormModal from "../modal/FormModal";
import FormatModal from "../modal/FormatModal.jsx";
import Image from "./Image";
import * as service from "../../services/CrudServices";
import "./images.scss";
import 'bootstrap/dist/css/bootstrap.css';

const Images = () => {
    const [modal, setModal] = useState(false);
    const [formatModal, setFormatModal] = useState(false);
    const [style, setStyle] = useState([]);
    const navigate = useNavigate();
    
    const ModalHandler = (e) => {
        e.preventDefault();
        setModal(true)
    }
    const FormatHandler = (e) => {
        e.preventDefault();
        setFormatModal(true)
    }
    const [user, loading, error] = useAuthState(auth);

    useEffect(()=>{
        if (loading) return;
        if(!user)  navigate('/');
    }, [user, loading])

    const [images, setImages] = useState([]);

    useEffect(()=>{
        service.getImages(images=>{
            setImages(images)
        })
    },[])
    let counter = 1;
    console.log("stilius" , style);
    return (
        <main className="mainn">
            <button onClick={FormatHandler} className="mainn__format">Change format</button>
            <div>
                {modal && <FormModal ModalState = {setModal}/>}
            </div>
            <div>
                {formatModal && <FormatModal ModalState = {setFormatModal} style = {setStyle}/>}
            </div>
            <section className={style[1]}>
            {images?.map(image=><Image
                url = {image.url}
                format = {style}
                c = {counter++}
            />)}
            </section>
            <button className="mainn__plus" onClick={ModalHandler}>+</button>
        </main>
        
    )
}

export default Images;
import { useState} from "react";
import * as service from "../../services/CrudServices";
import "./formModal.scss"

const FormModal = ({ModalState}) => {
    const [urlLink, setUrlLink] = useState({
        url: ""
    });
    const HandleChange = (e)=>{
        setUrlLink({
            ...urlLink,
            [e.target.name]: e.target.value
        });
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        service.addImage(urlLink);
        ModalState(false);
    }
    return(
        <form className="modal" onSubmit={SubmitHandler}>
            <div className="modal__container">
                <button className="modal__exit" onClick={() => ModalState(false)}>X</button>
                <fieldset className="modal__field">
                    <label className="modal__label" htmlFor=""url>Enter image url</label>
                    <textarea  className="modal__input" onChange={HandleChange} type="text" name="url" id="url" ></textarea>
                </fieldset>
                
                <button className="modal__submit" type="submit">Pridėti</button>
            </div>
        </form>
    )
}

export default FormModal
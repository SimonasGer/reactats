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
        <form className="modall" onSubmit={SubmitHandler}>
            <div className="modall__container">
                <button className="modall__exit" onClick={() => ModalState(false)}>X</button>
                <fieldset className="modall__field">
                    <label className="modall__label" htmlFor=""url>Enter image url</label>
                    <textarea  className="modall__input" onChange={HandleChange} type="text" name="url" id="url" ></textarea>
                </fieldset>
                
                <button className="modall__submit" type="submit">Pridėti</button>
            </div>
        </form>
    )
}

export default FormModal
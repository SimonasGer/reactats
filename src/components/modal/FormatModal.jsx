import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"
import img7 from "./7.png"
import img8 from "./8.png"
import img9 from "./9.png"
import { useState } from "react"


const FormatModal = ({ModalState, style}) => {

    const StyleHandler = (stylee) => {
        style(stylee);
        setTimeout(() => {
            ModalState(false);
        }, 100);
    }
    return(
        <form className="modall">
            <div className="modall__container">
                <button className="modall__exit" onClick={() => ModalState(false)}>X</button>
                <table>
                    <tr>
                        <td><img onClick={() => StyleHandler(["image__image rounded-circle m-1", "mainn__images", 800, 800])} src={img1} alt=""/></td>
                        <td><img onClick={() => StyleHandler(["image__image col m-1", "mainn__images d-inline-flex flex-row m-5", 800, 1200])} src={img2} alt=""/></td>
                        <td><img onClick={() => StyleHandler(["image__image col m-1", "mainn__images d-inline-flex flex-row m-5", 800, 800])} src={img3} alt=""/></td>
                     </tr>
                    <tr>
                        <td><img onClick={() => StyleHandler(["image__image col m-1", "mainn__images d-inline-flex flex-row m-5", 1200, 1200])} src={img4} alt=""/></td>
                        <td><img onClick={() => StyleHandler(["image__image col m-1", "mainn__images d-inline-flex flex-row m-5", 1400, 800])} src={img5} alt=""/></td>
                        <td><img onClick={() => StyleHandler(["image__image rounded-circle m-1", "mainn__images  d-inline-flex flex-row m-5", 800, 800, "four"])} src={img6} alt=""/></td>
                    </tr>
                    <tr>
                        <td><img onClick={() => StyleHandler(["image__image col m-1", "mainn__images d-inline-flex flex-row m-5", 1400, 800])} src={img7} alt=""/></td>
                        <td><img onClick={() => StyleHandler(["image__image col m-1", "mainn__images d-inline-flex flex-row m-5", 800, 800, "three1"])} src={img8} alt=""/></td>
                        <td><img onClick={() => StyleHandler(["image__image col m-1", "mainn__images d-inline-flex flex-row m-5", 800, 800, "three2"])} src={img9} alt=""/></td>
                    </tr>
                </table>
            </div>
        </form>
    )
}

export default FormatModal
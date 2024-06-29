import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"
import img7 from "./7.png"
import img8 from "./8.png"
import img9 from "./9.png"



const FormatModal = ({ModalState}) => {
    const SubmitHandler = (e) => {
        e.preventDefault();
        ModalState(false);
    }
    return(
        <form className="modal" onSubmit={SubmitHandler}>
            <div className="modal__container">
                <button className="modal__exit" onClick={() => ModalState(false)}>X</button>
                <table>
                    <tr>
                        <td><img src={img1} alt=""/></td>
                        <td><img src={img2} alt=""/></td>
                        <td><img src={img3} alt=""/></td>
                    </tr>
                    <tr>
                        <td><img src={img4} alt=""/></td>
                        <td><img src={img5} alt=""/></td>
                        <td><img src={img6} alt=""/></td>
                    </tr>
                    <tr>
                        <td><img src={img7} alt=""/></td>
                        <td><img src={img8} alt=""/></td>
                        <td><img src={img9} alt=""/></td>
                    </tr>
                </table>
            </div>
        </form>
    )
}

export default FormatModal
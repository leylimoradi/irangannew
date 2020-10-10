import React from 'react';
import {Button, Navbar} from 'react-bootstrap';
import {IoIosArrowBack} from 'react-icons/io';
import Modal from 'react-bootstrap/Modal';
import Content from '../components/content';
import ModalScrollTop from '../components/backToTopModal'
import ModalParallexTitle from '../components/modalTtile'


function MyVerticallyCenteredModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function func1() {
        document.body.classList.remove("showModalw");
        document.getElementById("vfg").click()
    }
    function func2() {
        setModalShow(false)
    }
  
    return (
        <>
            <Modal {...props}
             size="lg" animation={false}
                onHide={() => setModalShow(false)}
            backdropClassName="asd" dialogClassName="modal-parralex"
                aria-labelledby="example-custom-modal-styling-title" >
               
                <Navbar className="shadow" expand="lg" fixed="top">
            <div className="container">
                        <Modal.Title id="contained-modal-title-vcenter">
                            <ModalParallexTitle />
                   
                </Modal.Title>
                        <Button id="vfg" onClick={props.onHide}></Button>
                        <div className="closeBtnModal" onClick={() => { func1(); func2(); }}><IoIosArrowBack size={35} /></div>
                   
            </div>
        </Navbar>

                <Modal.Body>
               
            <div className="titleParallex">
                <h1>خودرو</h1>
            </div>
         
                            <Content />
            
                    <ModalScrollTop />
                 
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>

</>
    );
}
function Parralex() {
    const [modalShow, setModalShow] = React.useState(false);

    function func1() {
       document.body.classList.add("showModalw");
    }
    function func2() {
        setModalShow(true)
    }
  
    return (
        <div>
            <div className="ccc" onClick={() => { func1(); func2(); }}></div>
          
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
}
export default Parralex;
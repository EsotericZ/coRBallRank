import React, {useState} from 'react'
import { Offcanvas } from 'react-bootstrap'


import { Link } from 'react-router-dom'


const ShareOffcanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-flex align-items-center feather-icon mt-2 mt-md-0">
                <Link to="#" onClick={handleShow}><i className="ri-share-line"></i>
                    <span className="ms-1">99 Share</span>
                </Link>  
            </div>
            <Offcanvas show={show} onHide={handleClose}  placement='bottom'>
                <Offcanvas.Header closeButton>
                   <Offcanvas.Title>Share</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="text-center me-3 mb-3">
                            <img  className="img-fluid rounded mb-2" alt=""/>
                            <h6>Facebook</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img  className="img-fluid rounded mb-2" alt=""/>
                            <h6>Twitter</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img  className="img-fluid rounded mb-2" alt=""/>
                            <h6>Instagram</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img  className="img-fluid rounded mb-2" alt=""/>
                            <h6>Google Plus</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img  className="img-fluid rounded mb-2" alt=""/>
                            <h6>In</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img className="img-fluid rounded mb-2" alt=""/>
                            <h6>YouTube</h6>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default ShareOffcanvas;


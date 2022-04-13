import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './history.css';
import { Row, Col, Container, Dropdown, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import CustomToggle from '../dropdown'
import { useState } from 'react';
import  rockies from "../../assets/cologo.png";

const History = () => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <>
        <Nav />
        <Container>
                <Row>
                    <Col col-10 className="row m-0 p-0">
                        <Col  >
                            <Card id="post-modal-data" className="card-block card-stretch card-height">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Create Post</h4>
                                    </div>
                                </div>
                                <Card.Body >
                                    <div className="d-flex align-items-center">
                                        <div className="user-img">
                                            <img  alt="user1" className="avatar-60 rounded-circle"/>
                                        </div>
                                        <form className="post-text ms-3 w-100 "   onClick={handleShow}>
                                            <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                                        </form>
                                    </div>
                                    <hr/>
                                    <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                        <li className="me-3 mb-md-0 mb-2">
                                            <Link to="#" className="btn btn-soft-primary">
                                                <img  alt="icon" className="img-fluid me-2"/> Photo/Video
                                            </Link>
                                        </li>
                                        <li className="me-3 mb-md-0 mb-2">
                                            <Link to="#" className="btn btn-soft-primary">
                                                <img  alt="icon" className="img-fluid me-2"/> Tag Friend
                                            </Link>
                                        </li>
                                        <li className="me-3">
                                            <Link to="#" className="btn btn-soft-primary">
                                                <img alt="icon" className="img-fluid me-2"/> Feeling/Activity
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </Card.Body>
                                <Modal size="lg" className=" fade" id="post-modal" onHide={handleClose} show={show} >
                                    <Modal.Header  className="d-flex justify-content-between">
                                        <Modal.Title id="post-modalLabel">Create Post</Modal.Title>
                                        <button type="button" className="btn btn-secondary"  onClick={handleClose} ><i className="ri-close-fill"></i></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img">
                                                <img  alt="user1" className="avatar-60 rounded-circle img-fluid"/>
                                            </div>
                                            <form className="post-text ms-3 w-100 "  data-bs-toggle="modal" data-bs-target="#post-modal">
                                            <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                                        </form>
                                        </div>
                                        <hr/>
                                        <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Photo/Video</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Tag Friend</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Feeling/Activity</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Check in</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Live Video</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Gif</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Watch Party</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Play with Friends</div>
                                            </li>
                                        </ul>
                                        <hr/>
                                        <div className="other-option">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                <div className="user-img me-3">
                                                    <img  alt="user1" className="avatar-60 rounded-circle img-fluid"/>
                                                </div>
                                                <h6>Your Story</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary d-block w-100 mt-3">Post</button>
                                    </Modal.Body>
                                </Modal>
                            </Card>
                        </Col>
                        
                        <Col >
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid"  alt=""/>
                                            </div>
                                            <div className="">
                                                <div className="d-flex  justify-content-between">
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">Barb Ackue</h5>
                                                        <span className="mb-0 ps-1 d-inline-block">Added New Image in a Post</span>
                                                        <p className="mb-0 text-primary">1 hour ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                    </div>
                                    <div className="user-post">
                                        <Link to="#"><img  alt="post1" className="img-fluid rounded w-100"/></Link>
                                    </div>
                                    <div className="comment-area mt-3">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="like-block position-relative d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <div className="like-data">
                                                        <Dropdown>
                                                            <Dropdown.Toggle  as={CustomToggle} >
                                                                <img  className="img-fluid" alt=""/>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className=" py-2">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img  className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img  className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img  className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img  className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img  className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img  className="img-fluid" alt=""/></OverlayTrigger>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="total-like-block ms-2 me-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                            140 Likes
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="total-comment-block">
                                                    <Dropdown>
                                                        <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                        20 Comment
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <hr/>
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex ">
                                                    <div className="user-img">
                                                        <img s alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Monty Carlo</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex ">
                                                    <div className="user-img">
                                                        <img  alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3" >
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-link me-3"></i></Link>
                                                <Link to="#"><i className="ri-user-smile-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                    </div>    
                                </div>
                            </div>
                        </Col>
                        
                        
                        <Col>
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" alt=""/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">Paige Turner</h5>
                                                        <p className="mb-0 ps-1 d-inline-block">Added New Video in his Timeline</p>
                                                        <p className="mb-0 text-primary">1 day ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                    </div>
                                    <div className="user-post">
                                        <div className="ratio ratio-16x9">
                                            <iframe title="vedio" src="https://www.youtube.com/embed/j_GsIanLxZk?rel=0" ></iframe>
                                        </div>
                                    </div>
                                    <div className="comment-area mt-3">

                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex flex-wrap">
                                                    <div className="user-img">
                                                        <img  alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Monty Carlo</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex flex-wrap">
                                                    <div className="user-img">
                                                        <img  alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3">
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                            <div className="comment-attagement d-flex">
                                            <Link to="#"><i className="ri-link me-3"></i></Link>
                                            <Link to="#"><i className="ri-user-smile-line me-3"></i></Link>
                                            <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Col>
                   
                    <div className="col-sm-12 text-center">
                        <img  alt="loader" style={{height: "100px"}}/>
                    </div>
                </Row>
            </Container>
            <Footer />
       </>
    )
};

export default History;
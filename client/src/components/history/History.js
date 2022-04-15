import { useState } from 'react';
import Nav from '../nav/Nav';
// import Footer from '../footer/Footer';
import { Link } from 'react-router-dom'
import './history.css';

const History = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Nav />
            <div className='container' id="historyContainer">
                {/* <div className='historyCard'> */}
                    {/* <Modal  className=" fade" id="post-modal" onHide={handleClose} show={show} >
                                    <Modal.Header  className="d-flex justify-content-between">
                                        <Modal.Title id="post-modalLabel">Create Post</Modal.Title>
                                        <button type="button" className="btn btn-secondary"  onClick={handleClose} ><i className="ri-close-fill"></i></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img">
                                                <img  alt="user1" className="avatar-60 rounded-circle img-fluid"/>
                                            </div>
                                            <form className="post-text  "  data-bs-toggle="modal" data-bs-target="#post-modal">
                                            <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                                        </form>
                                        </div>
                                        <hr/>
                                        <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                            <li className="col">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Photo/Video</div>
                                            </li>
                                            <li className="col">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Tag Friend</div>
                                            </li>
                                            <li className="col">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Feeling/Activity</div>
                                            </li>
                                            <li className="">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Check in</div>
                                            </li>
                                            <li className="">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img  alt="icon" className="img-fluid"/> Live Video</div>
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
                                </Modal> */}
                {/* </div> */}
                <div className='historyCard'>
                    <div>
                        <img className="rounded-circle img-fluid" alt="" />
                        <h2>Rally Highlight</h2>
                    </div>
                    <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4Uhyr-CRsrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                        </div>
                        {/* <div className="">
                            <button>Like</button>
                            <button>Comment</button>
                        </div> */}
                    </div>
                </div>
                <div className='historyCard'>
                    <div>
                        <img className="rounded-circle img-fluid" alt="" />
                        <h2>PLAYER NAME</h2>
                    </div>
                    <div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                        </div>
                        {/* <div className="">
                            <button>Like</button>
                            <button>Comment</button>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
export default History;
import React, { useEffect, useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { getUserAction, updateUserAction } from '../redux/actions/creators';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


const UpdateUser = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let { id } = useParams();

    const [state, setState] = useState({
        name: '',
        email: '',
        occupation: '',
        bio: ''
    }
    );

    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUserAction(id));
    }, []);

    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user]);

    const { name, email, occupation, bio } = state;

    const handleTextChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log(state);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserAction(state, id));
        history.push("/");

    }

    return (
        <div className="container" id="update" >
            <Card className={"border border-dark bg-dark text-white"} >
                <Card.Header><h3>Edit User</h3></Card.Header>
                <div className="form-container">
                    <Form onSubmit={handleOnSubmit}>
                        <Card.Body >
                            <div className="form-group" >
                                <label>Name</label>
                                <input
                                    type="text" name="name"
                                    onChange={handleTextChange}
                                    value={name || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                            <div className="form-group" >
                                <label>Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleTextChange}
                                    value={email || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                            <div className="form-group" >
                                <label>Occupation</label>
                                <input
                                    type="text"
                                    name="occupation"
                                    onChange={handleTextChange}
                                    value={occupation || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                            <div className="form-group" >
                                <label>Bio</label>
                                <textarea
                                    type="text"
                                    name="bio"
                                    onChange={handleTextChange}
                                    value={bio || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>

                            <br></br>


                            <div className="form-group">
                                <button onChange={handleTextChange} className="btn btn-primary" type="submit">Edit User</button>
                                <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                    Back
                                </Button>



                            </div>

                        </Card.Body>
                    </Form>
                </div>
            </Card >
            {/* )} */}
        </div >
    );
}


export default UpdateUser;
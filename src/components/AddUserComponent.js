import React, { Component } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { addUserAction } from '../redux/actions/creators';
import { connect } from 'react-redux';

class AddUser extends Component {

    state = {
        name: '',
        email: '',
        occupation: '',
        bio: ''
    }

    handleTextChange = event => {
        const { target: { name, value } } = event;
        this.setState({ ...this.state, [name]: value });
        console.log(this.state);
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUserAction(this.state);
        this.setState({
            name: '',
            email: '',
            occupation: '',
            bio: ''
        });
    }


    render() {
        return (
            <div className="container" id="update" >
                <Card className={"border border-dark bg-dark text-white"} >
                    <Card.Header><h3>Add User</h3></Card.Header>
                    <div className="form-container">
                        <Form onSubmit={this.handleOnSubmit}>
                            <Card.Body >
                                <div className="form-group" >
                                    <label>Name</label>
                                    <input
                                        type="text" name="name"
                                        onChange={this.handleTextChange}
                                        value={this.state.name}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>Email address</label>
                                    <input
                                        type="email" name="email"
                                        onChange={this.handleTextChange}
                                        value={this.state.email}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>Occupation</label>
                                    <input
                                        type="text" name="occupation"
                                        onChange={this.handleTextChange}
                                        value={this.state.occupation}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>Bio</label>
                                    <input
                                        type="text" name="bio"
                                        onChange={this.handleTextChange}
                                        value={this.state.bio}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>

                                <br></br>


                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Add User</button>
                                    <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                        Back
                                    </Button>



                                </div>

                            </Card.Body>
                        </Form>
                    </div>
                </Card>

            </div >
        );
    }

}
export default connect(null, { addUserAction })(AddUser);
import React from 'react'
import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateReview.css';
const CreateReview = () => {
    return (
        <div className="container">
            <div>
                <h1>Restaurnt Name </h1>
                <div id='labelstar'>
                    <label htmlFor="">Rate Number of Stars</label>
                    <DropdownButton variant='danger' id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={10}  style={{height:'100px'}}/>
                        </Form.Group>
                    </Form>
                </div>
                <Button variant="danger">Submit Review</Button>{' '}
            </div>

        </div>
    )
}

export default CreateReview

import React from 'react'
import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './createreview.css';
import createReviewPOST from '../../services/createReviewPOST';
const CreateReview = () => {


    const create = () => {
        createReviewPOST(document.getElementById("value").value,document.getElementById("reivew").value);
    }


    return (
        <div className="container">
            <div>
                <h1>Restaurnt Name </h1>
                <div id='labelstar'>
                    <label htmlFor="">Value</label>
                    <input
                    id="value"
                    type="text"
                    placeholder="Ex:3"
                    className="form-input"
                  />
                </div>
                <div>
                
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Review</Form.Label>
                            <input
                    id="review"
                    type="text"
                    placeholder="It was okay."
                    className="form-input"
                  />
                        </Form.Group>
                  
                </div>
                <Button variant="danger" onClick={create}>Submit Review</Button>{' '}
            </div>

        </div>
    )
}

export default CreateReview;

import React from 'react';

import Jumbo from '../components/Jumbo';
import Content from '../components/Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { render } from 'sass';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }


    handleChange = (e) => {
        console.log(e);

        const target = e.target;
        const value = target.type;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        console.log(e);

        e.preventDefault();
        this.setState({
            // makes sure people can't keep sending a bunch of emails when one doesnt look like it was sent
            disabled: true
        });
    }

    render() {
        return(
            <div>
                <Jumbo title={this.props.title}/>
                <Content onSubmit={this.handleSubmit}>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email address</Form.Label>
                            <Form.Control id="email" name="email" type="email" required value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            send
                        </Button>

                        {/* Conditionally renders message saying whether the email was sent */}
                        {/* {this.state.emailSent === true && <p className="d-inline success-msg">email sent.</p>}
                        {this.state.emailSent !== true && <p className="d-inline err-msg">email not sent.</p>} */}

                    </Form>
                </Content>
            </div>
        );

    };
}



export default ContactPage
import React from 'react';
import SocialFollow from './SocialFollow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

function Footer() {
    return(
        <footer className="mt-5" id="footerId">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col>
                    {/* className="p-0 d-flex justify-content-center" md={3} */}
                        <SocialFollow />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer
import React from 'react';
import {Card, CardBody, CardTitle,CardSubtitle, CardText, Button,
        Container,Row,Col} from 'reactstrap'
import CardComp from './CardComp';

function AboutPage(props) {
  return (
    <div>
    <Card>
        <CardBody>
        <CardTitle tag="h5">
            About
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Card subtitle
        </CardSubtitle>
        <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        <Button>
            Button
        </Button>
        </CardBody>
    </Card>

    <br/>
    
    <Container>
        <Row>
            <Col>
                <CardComp id="1" tgl="21/01/2022" judul="Belajar React"/>
            </Col>

            <Col>
                <CardComp id="2" tgl="21/01/2022" judul="Belajar Python"/>
            </Col>

            <Col>
                <CardComp id="2" tgl="21/01/2022" judul="Belajar PhP"/>
            </Col>
        </Row>
    </Container>
    </div>
  );
}


export default AboutPage;

import React from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap'

function DetailComp(props) {

  return (
    <div>
        <Card>
            <CardBody>
            <CardTitle tag="h5">
                {/* {props.location.state.judul} */}
            </CardTitle>

            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            </CardBody>
        </Card>
    </div>
  );
}

export default DetailComp;

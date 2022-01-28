import React from 'react';
import {Card, CardBody, CardTitle,CardSubtitle, CardText, Button} from 'reactstrap'
import { useLocation,NavLink } from 'react-router-dom';

function CardComp(props) {

  return (
    <div>
    <Card>
        <CardBody>
        <CardTitle tag="h5">
            {props.judul}
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            {props.tgl}
        </CardSubtitle>
        <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        <Button>
            
            <NavLink to ={`/detail/${props.id}`}
                    
                    // state: {
                    //     judul:props.judul,
                    //     tanggal: props.tanggal
                    // }
                

            
            >Detail</NavLink>


            

        </Button>
        </CardBody>
    </Card>
    </div>
  );
}


export default CardComp;

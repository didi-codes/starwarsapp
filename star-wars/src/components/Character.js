import React, {useState} from 'react'
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem, Container, CardTitle } from 'reactstrap'

const Character = (props) => {
    console.log(props, 'Character Props')

    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState([props.name]);

    const onEntering = () => setStatus('Loading...');
    const onEntered = () => setStatus('');
    const onExiting = () => setStatus('Loading...');
    const onExited = () => setStatus([props.name]);

    const toggle = () => setCollapse(!collapse);

    return (
        <Container  style={{backgroundColor: '#edd2a7',  display: 'flex', flexFlow: 'column wrap ', border: '2px solid #621b00', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding: '5%'}}>
            <CardTitle style={{fontSize: '2.0rem',  textShadow:'3px 3px 3px #ffffff', color: '#3d322c', textAlign: 'center'}}>{status}</CardTitle>
            <CardBody style={{backgroundColor: '#d4c883', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <ListGroup style={{textAlign: 'center', color: '#0d020a'}}>
                <ListGroupItem> Birth Year: {props.birth_year}</ListGroupItem>
                <ListGroupItem style={{textTransform: 'capitalize'}}>Gender: {props.gender}</ListGroupItem>
                <ListGroupItem style={{textTransform: 'capitalize'}}>Hair color: {props.hair_color}
                </ListGroupItem>
                <ListGroupItem style={{textTransform: 'capitalize'}}>Skin color: {props.skin_color}
                </ListGroupItem>
                <ListGroupItem style={{textTransform: 'capitalize'}}>Eye Color: {props.eye_color}
                </ListGroupItem>
                <ListGroupItem>Mass: {props.mass}
                </ListGroupItem>
                <ListGroupItem>Height: {props.height}</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Container>
    )
}

export default Character;
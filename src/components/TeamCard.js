import Card from "react-bootstrap/Card";
import React from 'react';
import * as Icon from 'react-bootstrap-icons';


const TeamCard =(props)=> {
    return (
      <Card className="player-card" style={{ width: '18rem' }}>
        <div className="inner"><Card.Img variant="top" src={props.pic} /> </div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Card.Text><i>"{props.phrases}"</i></Card.Text>
          <div className="profile-social">
            {props.insta? <a href={props.insta}    style={{ textDecoration: 'none' }}> <Icon.Instagram  className="insta"   color="black" size={25} /> </a>:""}
            {props.youtube?<a href={props.youtube} style={{ textDecoration: 'none' }}> <Icon.Youtube    className="youtube" color="black" size={35} /> </a>:""}
            {props.twitter?<a href={props.twitter} style={{ textDecoration: 'none' }}> <Icon.Twitter    className="twitter" color="black" size={35} /> </a>:""}
          </div>
        </Card.Body>
      </Card>
    );

}


export default TeamCard;
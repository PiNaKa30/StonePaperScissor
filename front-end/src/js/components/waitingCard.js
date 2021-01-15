import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Stone from "../../images/stone.png";
import Paper from "../../images/paper.png";
import Scissor from "../../images/scissor.png";
import Typography from "@material-ui/core/Typography";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function WaitingCard(props) {
  return (
    <Card
      style={{
        height: "270px",
        maxWidth: "220px",
        margin: "auto",
        justifyContent: "center", 
        display: "flex"
      }}
    >
      {generateWaitingCard(props.type)}
    </Card>
  );
}

function generateWaitingCard(type){
  if(type === 0){
    return (
      <CardContent> 
        <Typography color="textSecondary" variant="h5">Choose a Card from Deck</Typography>
        <br /><br />
        <ArrowForwardIcon style={{fontSize: "48px"}} />
      </CardContent>
    );
  } else if(type === 1){
    return (
      <CardContent> 
        <Typography color="textSecondary" variant="h5">Waiting for opponent</Typography>
        <br /><br />
        <HourglassEmptyIcon style={{fontSize: "48px", animation: `spin 3s linear infinite`}} />
      </CardContent>
    );
  }
}

export default WaitingCard;

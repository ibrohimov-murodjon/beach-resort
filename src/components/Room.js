import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <Card className="room">
      <div className="img-container">
        <CardMedia
          image={images[0] || defaultImg}
          alt="single room"
          component="img"
        />
        <CardContent className="price-top">
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
          <Typography variant="p">per day</Typography>
        </CardContent>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <CardActions style={{ background: "#cfcfcf" }}>
        <Typography variant="p" className="room-info">
          {name}
        </Typography>
      </CardActions>
    </Card>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

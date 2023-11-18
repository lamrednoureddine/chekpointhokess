// MovieCard.js

import Card from 'react-bootstrap/Card';
function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={posterURL} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      description : {description}<br />
        rating : {rating}<br />
       
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default MovieCard;

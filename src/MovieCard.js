import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieCard = ({movie}) => {
    const { title, description, posterURL, rating } = movie;

  return (
    <div className='cartet'>
      <Card style={{ width: '18rem', height:550}}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body style={{display:'flex',flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}>
        <Card.Title><h3>{title}</h3></Card.Title>
        <Card.Text style={{textAlign:'center'}}>
        <h5>Description</h5> {description}<br></br>
        <h5>rating</h5> {rating}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
  )
}

export default MovieCard
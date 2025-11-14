import Card from 'react-bootstrap/Card';

export default function ProfileCard({ name, likes }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="h5 mb-1">{name}</Card.Title>
        <Card.Text className="mb-0">Likes: {likes}<button className='like-button'>Add Like</button></Card.Text>
      </Card.Body>
    </Card>
  );
}
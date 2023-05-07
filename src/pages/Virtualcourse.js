import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';

const SectionCard = () => {
  return (
    <div className="virtualcurse">
        <div className="navabr">
            <Navbar />
        </div>
      <Card>
        <Card.Body>
          <Card.Title>Theory of Music Workbook Grade 1 (2007)</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to="https://github.com/pamoroso/free-python-books">Read it now</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>For amazing internships visit Codegnan</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to="https://www.codegnan.com/">Visit codegnan</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>If you are with any doubt, post it here</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to="/">Something</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>If you are with any doubt, post it here</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to="/">Something</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>If you are with any doubt, post it here</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to="/">Something</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>If you are with any doubt, post it here</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to="/">Something</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>If you are with any doubt, post it here</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to="/">Something</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SectionCard;


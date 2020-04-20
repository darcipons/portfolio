import React from 'react';
import { Card, ListGroup, ListGroupItem, CardColumns } from 'react-bootstrap'
import './Projects.css'
import Hangry from '../images/hangry.png'
import Dog from '../images/dog.png'
import HappyDog from '../images/happydog.png'
import FoodHouse from '../images/foodhouse.png'
import Todo from '../images/todo_app.png'
import LoveablePaws from '../images/paws.png'

const Projects = () => {
  return (
    <div className='project-container'>
      <div className='project-title'>Projects</div>
      <hr></hr>

      <CardColumns>
        <Card>
          <Card.Img variant="top" src={Dog} />
          <Card.Body>
            <Card.Title>Random Dog Picture</Card.Title>
            <Card.Text>
              Created using: JavaScript and Random Dog API
            </Card.Text>
          </Card.Body>
          <ListGroup horizontal className="list-group-flush">
            <ListGroupItem>
              <Card.Link href="https://github.com/darcipons/random_dog" target="_blank">GitHub</Card.Link>
            </ListGroupItem>
            <ListGroupItem>
              <Card.Link href="https://darcipons.github.io/random_dog/">Live Code</Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img variant="top" src={Todo} />
          <Card.Body>
            <Card.Title>Todo App</Card.Title>
            <Card.Text>
              Created using: Flutter
            </Card.Text>
          </Card.Body>
          <ListGroup horizontal className="list-group-flush">
            <ListGroupItem>
              <Card.Link href="https://github.com/darcipons/todo_flutter" target="_blank">GitHub</Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img variant="top" src={HappyDog} />
          <Card.Body>
            <Card.Title>Happy Dog</Card.Title>
            <Card.Text>
              Created using: Ruby on Rails and TheDogAPI
            </Card.Text>
          </Card.Body>
          <ListGroup horizontal className="list-group-flush">
            <ListGroupItem>
              <Card.Link href="https://github.com/darcipons/darci_edwin_jajuan_syed" target="_blank">GitHub</Card.Link>
            </ListGroupItem>
            <ListGroupItem>
             <Card.Link href="https://happydog101.herokuapp.com" target="_blank">Live Site</Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img variant="top" src={Hangry} />
          <Card.Body>
            <Card.Title>Hangry</Card.Title>
            <Card.Text>
              Created using: JavaScript, React, & Yelp API
            </Card.Text>
          </Card.Body>
          <ListGroup horizontal className="list-group-flush">
            <ListGroupItem>
              <Card.Link href="#" target="_blank">GitHub</Card.Link>
            </ListGroupItem>
            <ListGroupItem>
              <Card.Link href="https://wyn-hangry.herokuapp.com" target="_blank">Live Code</Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img variant="top" src={FoodHouse} />
          <Card.Body>
            <Card.Title>Food House</Card.Title>
            <Card.Text>
              Created using: JavaScript and React
            </Card.Text>
          </Card.Body>
          <ListGroup horizontal className="list-group-flush">
            <ListGroupItem>
              <Card.Link href="https://github.com/darcipons/heroku-food-house" target="_blank">GitHub</Card.Link>
            </ListGroupItem>
            <ListGroupItem>
              <Card.Link href="https://darci-food-house.herokuapp.com" target="_blank">Live Site</Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img variant="top" src={LoveablePaws} />
          <Card.Body>
            <Card.Title>Loveable Paws</Card.Title>
            <Card.Text>
              Created using: JavaScript, React, PetFinder API, and TheDogAPI
            </Card.Text>
          </Card.Body>
          <ListGroup horizontal className="list-group-flush">
            <ListGroupItem>
              <Card.Link href="https://github.com/darcipons/pet_adoption_pt12" target="_blank">GitHub</Card.Link>
            </ListGroupItem>
            {/* <ListGroupItem>
             <Card.Link href="https://happydog101.herokuapp.com" target="_blank">Live Site</Card.Link>
            </ListGroupItem> */}
          </ListGroup>
        </Card>
        
      </CardColumns>
    </div>
  )
}

export default Projects

import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Home.css";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Message
} from "semantic-ui-react";


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                {/* <h1> Welcome where our beautiful community members meet up!!! </h1>
                <Link to="/signup">
                     <h3>Don't have an account? </h3>
                     <h3>Please sign up </h3>
                </Link>
                <img/> */}
                {/* <Grid.Row>
                    <Container textAlign="center">
                    <Header as="h1" size="huge">
                        Marketing stuff!
                    </Header>
                    <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet.
                    </p>
                    <Button color="green" size="massive">
                        <Link to="/login">Join us today</Link>
                        
                    </Button>
                    </Container>
                </Grid.Row> */}
                {/* <Container className="content">
            <Header inverted as="h1">
            Welcome where our beautiful community members meet up!!!
            </Header>
            <p>
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <Button size="huge">Join us today</Button>
          </Container> */}

        <Message className="container__home" size="massive">
          <Container >
            <Header className="header__home" size="huge" as="h1">
            <h1> Welcome where our beautiful community members meet up!!! </h1>
            </Header>
            <p size="huge" as="h1">
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <Link to="/login">
            <Button size="large" primary>
              Join us today &raquo; 
            </Button>
            </Link>
          </Container>
        </Message>





            </div>
        )
    }
}

import "./App.css";

import { Col, Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

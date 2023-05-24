import "./App.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";

const API_URL = "https://63db9c8fa3ac95cec5a5fe2f.mockapi.io/blogposts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  //get all todos
  const fetchPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setPosts(data); //set state to retrieved todos

    console.log(data);
  };

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
            <Route exact path="/">
              <Home posts={posts} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/posts">
              <Posts posts={posts} />
            </Route>
            <Route path="/post/:id">
              <Post posts={posts} />
            </Route>
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

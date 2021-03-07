import React, { useState } from "react";
import Axios from "axios";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";

const Home = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      setQuery("");
    } catch (error) {
      alert(`Not able to locate user - ${error.message}`);
    } finally {
      setQuery("");
    }
  };

  return (
    <Container>
      <Row>
        <Col md="12" className="h3">
          Github Dashboard
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <InputGroup>
            <Input
              className="text-center"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="primary">
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md="5">{user ? <UserCard user={user} /> : null}</Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;

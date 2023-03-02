import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email"></Form.Control>
                  <Form.Text className="text-muted">Hi.</Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>password</Form.Label>
                  <Form.Control type="password" placeholder="hello" />
                  <Form.Text className="text-muted">Hi.</Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Button>DONE</Button>
          </Form>
          <Card style={{ color: "black", marginTop: "10vh" }}>
            <Card.Img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
              height={"100px"}
            />
            <Card.Body>
              <Card.Title>HELLO</Card.Title>
              <Card.Text>HELLO?????</Card.Text>
              <Button>HELLOOO</Button>
            </Card.Body>
          </Card>
          <Breadcrumb variant="primary">
            <Breadcrumb.Item>test 1</Breadcrumb.Item>
            <Breadcrumb.Item>test 2</Breadcrumb.Item>
            <Breadcrumb.Item active>test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="secondary">This is a button</Alert>
          <Button>Test</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;


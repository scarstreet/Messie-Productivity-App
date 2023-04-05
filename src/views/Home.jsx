import { Cardo } from '../Cardo';
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


export const Home = () => {
  return (
    <>
      <h1>Home</h1>
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
          <Button variant="danger">DONE</Button>
        </Form>
        <Cardo />
      </Container>
    </>
  );
};

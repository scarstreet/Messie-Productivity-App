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

import React from "react";
export function Cardo({}) {
  return <><Card style={{
      color: "black",
      marginTop: "10vh"
    }}>
          <Card.Img src="https:images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" />
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
        <Button>Test</Button></>;
}
  
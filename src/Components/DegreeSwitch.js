import React, { Component } from "react";
import { Form } from "react-bootstrap";
export class DegreeSwitch extends Component {
  render() {
    return (
      <Form.Group>
        <Form.Check inline label="&deg; C" type="radio" />
        <Form.Check inline label="&deg; F" type="radio" />
      </Form.Group>
    );
  }
}

export default DegreeSwitch;

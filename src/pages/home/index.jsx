import React from "react";
import { Form, Container, Button, Image } from "react-bootstrap";
import logo from "../../assets/téléchargement.svg";
import Style from "./style.module.css";
export default function Home() {
  return (
    <>
      <Container className={Style.container}>
        <Image src={logo} alt="" className="mb-5" />

        <Form id={Style.myForm} className="text-center w-100 mb-3">
          <Form.Group>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Nom"
              autoComplete="username"
              className="mb-2"
            ></Form.Control>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Prenom"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control type="date"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Mots de passe"
            ></Form.Control>
          </Form.Group>
        </Form>
        <Button className="btn-danger" type="button">
          Valider
        </Button>
      </Container>
    </>
  );
}

/* rafce */
//@ts-check//

import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  /* 
get browserpath
console.log("location", location)
{
  "pathname": "/login",
  "search": "",
  "hash": "",
  "state": null,
  "key": "default"
}
*/
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 500 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email"
          ></Form.Control>
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль"
          ></Form.Control>
          <Button className="mt-4" variant={"outline-success"}>
            {isLogin ? "Войти" : "Регистрация"}
          </Button>
          {isLogin ? (
            <div className="mt-3">
              Нет акканунта?{" "}
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрирутесь!</NavLink>
            </div>
          ) : (
            <div className="mt-3">
              Есть акканут? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;

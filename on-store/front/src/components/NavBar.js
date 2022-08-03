/* Alt + Shift + A , rafce, @ts-check*/
import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={SHOP_ROUTE}
        >
          Магазин
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"}>Войти</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;

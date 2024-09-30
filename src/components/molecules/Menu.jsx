import React from "react";
import { Button, Container } from "../atoms";

const Menu = ({ config }) => {
  return (
    <Container.MenuBar>
      {config.map((x, i) => {
        return <Button.Menu key={i}>{x.name}</Button.Menu>;
      })}
    </Container.MenuBar>
  );
};

export default Menu;

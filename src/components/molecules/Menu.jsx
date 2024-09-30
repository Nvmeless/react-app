import React from "react";
import { Button, Container } from "../atoms";

const Menu = ({ configs, changePage }) => {
  return (
    <Container.MenuBar>
      {configs.map((config, i) => {


        if (true === config.isOption) {
          return <Button.NightSwitch></Button.NightSwitch>
        }

        return <Button.Menu onClick={() => changePage(config.slug)} key={i}>{config.name}</Button.Menu>;
      })}
    </Container.MenuBar>
  );
};

export default Menu;

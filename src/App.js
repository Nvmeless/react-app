import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Typo } from "./components/atoms";
import { PostCard } from "./components/molecules";
import Menu from "./components/molecules/Menu";
import { Contact, Home, Login } from "./components/pages";
import { NightModeProvider } from "./context/NightModeContext";
import { ThemeProvider } from "styled-components";

//1 > Toute l'application doit avoir un NightMode fonctionnel 
//2 > Aucun composant superieur a l'atom doit etre constitué de StyledComponents
//3 > il ne doit plus y avoir d'html sur l'application

function App() {

  const [slug, setSlug] = useState("home");
  const [nightMode, setNightMode] = useState(false)
  let tableauMenu = [
    {
      slug: "home",
      name: "Home",
    },
    {
      slug: "login",
      name: "Se Connecter",

    },
    {
      slug: "contact",
      name: "Me contacter",

    },
    {
      isOption: true,
      slug: "nightMode",
      name: "Switch",


    },
  ];

  const displayPage = () => {
    switch (slug) {
      case "login":
        return <Login />
        break;
      case "contact":
        return <Contact />
        break;

      case "home":
      default:
        return <Home />
        break;
    }
  }


  const changePage = (slug) => {
    setSlug(slug);
  }
  const switchNightMode = () => {
    setNightMode(!nightMode);
  }

  return (
    <ThemeProvider theme={
      {
        colors: {
          primary: "blue",
          secondary: 'white'
        },
        fontSize: {
          title: "2em",
          subtitle: "3em"
        },
        borders: {
          radiusCard: '25px',
          pictureRadius: '50%'
        }
      }
    }>
      <NightModeProvider value={
        {

          switchNightMode: switchNightMode,

          nightMode: nightMode,
          colors: {
            primary: "#333333",
            secondary: "white"
          }
        }
      }>
        <div className="App">
          <PostCard></PostCard>

          <Menu
            changePage={changePage}
            configs={tableauMenu}
          ></Menu>
          {displayPage()}
        </div>
      </NightModeProvider>
    </ThemeProvider>
  );
}

export default App;

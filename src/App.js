import logo from "./logo.svg";
import "./App.css";
import { Container, Typo } from "./components/atoms";
import { PostCard } from "./components/molecules";
function App() {
  return (
    <div className="App">
      {/* <Container.Base>
        <Typo.Title>Hola Que tal las gentes</Typo.Title>
        <Typo.Paragraph>
          Hola que tal amigo, me llamo Enrico y hablo espanol como un chico de
          la cale, no me comer los tacos
        </Typo.Paragraph>
      </Container.Base> */}
      <PostCard title="Salut les amis">
        J'ai beau m'appeler Benoit et etre français je ne mange pas de baguettes
      </PostCard>
      <PostCard title="Hello fews" color="red">
        Hello everybody i'm english and i'm don't eat some disguting things..
      </PostCard>
      <PostCard title="Hola Amigos">
        Hola que tal amigo, me llamo Enrico y hablo espanol como un chico de la
        cale, no me comer los tacos
      </PostCard>
    </div>
  );
}

export default App;

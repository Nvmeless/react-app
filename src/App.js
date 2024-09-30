import logo from "./logo.svg";
import "./App.css";
import { Container, Typo } from "./components/atoms";
function App() {
  return (
    <div className="App">
      <Container.Base>
        <Typo.Title>Hola Que tal las gentes</Typo.Title>
        <Typo.Paragraph>Hello</Typo.Paragraph>
      </Container.Base>
    </div>
  );
}

export default App;

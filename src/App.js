import logo from "./logo.svg";
import "./App.css";
import { Typo } from "./components/atoms";
function App() {
  return (
    <div className="App">
      <Typo.Title>Hola Que tal las gentes</Typo.Title>
      <Typo.Paragraph>Mon super texte</Typo.Paragraph>
    </div>
  );
}

export default App;

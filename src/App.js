import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MainArea } from "./components/MainArea/MainArea";

function App() {
  return (
    <div>
      <Header></Header>
      <MainArea></MainArea>
      <Footer></Footer>
    </div>
  );
}

export default App;

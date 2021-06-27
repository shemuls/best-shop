import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import { CartReview } from "./components/CartReview/CartReview";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/product/:id">
            <SingleProduct></SingleProduct>
          </Route>
          <Route path="/cart-review">
            <CartReview></CartReview>
          </Route>
          <Route path="*">
            <p className="text-center">404 errors</p>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

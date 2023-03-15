import Header from "./component/Header";
import Footer from "./component/Footer";
import Button from "./component/Button";
import Card from "./component/Card";
import Option from "./component/Option";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        Main Content
        <Button />
        <Card />
        <Option />
      </div>
      <Footer />
    </div>
  );
}

export default App;

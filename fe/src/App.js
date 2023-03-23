import Header from "./component/Header";
import Footer from "./component/Footer";
import Button from "./component/Button";
import Card from "./component/Card";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        Main Content
        <Button />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;

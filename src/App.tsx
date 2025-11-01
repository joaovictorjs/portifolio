import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="flex flex-col p-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

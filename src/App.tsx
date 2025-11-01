import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="absolute left-1/2 flex w-full -translate-x-1/2 flex-col p-4 sm:max-w-3/4 md:max-w-3/5 lg:max-w-1/2">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

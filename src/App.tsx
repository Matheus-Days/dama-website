import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

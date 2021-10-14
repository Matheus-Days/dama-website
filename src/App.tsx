import { ChakraProvider } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

import { theme } from "./style/theme";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <title>DAMA</title>
      </Helmet>
      <Header />
      <Main />
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;

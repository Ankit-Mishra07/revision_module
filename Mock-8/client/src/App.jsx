import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routes/Routing";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";
function App() {
  return (
    <>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <ChakraProvider>
            <Routing />
          </ChakraProvider>
        </ReduxProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

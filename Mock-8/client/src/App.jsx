import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routes/Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Routing />
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

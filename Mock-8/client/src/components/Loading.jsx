import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

const Loading = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: "99",
        backgroundColor: "rgba(0, 0 , 0 , 0.5)",
      }}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default Loading;

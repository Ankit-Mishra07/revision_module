import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { useEffect } from "react";
import { useId } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleEmployee = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const fetchEmployee = async () => {
    let res = await fetch(
      `https://m5r3server.herokuapp.com/api/employee/${id}`
    );
    let data = await res.json();
    setProperty(data);
  };
  const ID = useId();
  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div>
      <Box borderRadius="lg" display="flex" width={"100%"} margin="30px">
        <Image src={property.image} alt="uch" width={"50%"} />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {property.gender}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              age &bull; {property.age} years
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Name: {property.name}
          </Box>

          <Box>
            Salary: {property.salary}
            <Box as="span" color="gray.600" fontSize="sm">
              / month
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Department: {property.department}
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Employee Id: {ID}
          </Box>
          <Stack direction="row" spacing={4}>
            <Button bg={"linkedin.400"} color="whiteAlpha.900">
              {" "}
              <Link to={`/employees/${property.id}/edit`}>Edit</Link>
            </Button>
            <Button bg={"red.400"} color="whiteAlpha.900">
              {" "}
              Delete
            </Button>
          </Stack>
        </Box>
      </Box>
      <br />
      <Box textAlign={"center"}>
        <Button bg={"linkedin.400"} color="whiteAlpha.900">
          {" "}
          <Link to="/employees"> Go back</Link>
        </Button>
      </Box>
    </div>
  );
};

export default SingleEmployee;

import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = ({ property, handleDelete }) => {
  return (
    <>
      <Box borderRadius="lg" display="flex" width={"100%"}>
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
          <Stack direction="row" spacing={4}>
            <Button bg={"linkedin.400"} color="whiteAlpha.900">
              {" "}
              <Link to={`/employees/${property.id}`}>View</Link>
            </Button>
            <Button
              bg={"red.400"}
              color="whiteAlpha.900"
              onClick={() => handleDelete(property.id)}
            >
              {" "}
              Delete
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default EmployeeCard;

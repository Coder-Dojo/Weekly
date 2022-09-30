import * as React from "react";
import {
  Center,
  Box,
  Image,
  Flex,
  Avatar,
  Stack,
  Heading,
  Text
} from "@chakra-ui/react";
import { Frontier } from "../frontiers";

type FrontierCardProps = Frontier;

export const FrontierCard = (props: FrontierCardProps) => {
  const {
    name,
    city,
    yearsAtForefront,
    yearsOfExperience,
    hobbies,
    speciality,
    avatarUrl,
    assignment
  } = props;
  return (
    <Center>
      <Box
        maxW={"270px"}
        height={"420px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://forefront.se/wp-content/uploads/2019/07/Stockholm_kvadratisk_bagar.jpg"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={avatarUrl || "https://i.stack.imgur.com/l60Hf.png"}
            css={{
              border: "2px solid white"
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
              {name}
            </Heading>
            <Text color={"gray.700"}>
              {speciality}, {city}
            </Text>
            <Text color={"gray.500"}>{assignment || "No Assignment"}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={2}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{yearsOfExperience}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Development&nbsp;Age
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{yearsAtForefront}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Forefront&nbsp;Age
              </Text>
            </Stack>
          </Stack>

          <Stack pt={4} spacing={0} align={"center"}>
            <Text fontWeight={600}>Hobbies</Text>

            <Text fontSize={"sm"} color={"gray.500"}>
              {hobbies?.join(", ") || "No hobbies?"}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

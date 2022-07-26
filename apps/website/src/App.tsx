import { Flex, Image, Text } from "@chakra-ui/react";
import Card from "./components/card/card";
import "./App.css";
const App = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100vh"
        bg="gray.900"
        p={{ base: 35, md: 55 }}
        justify="center"
      >
        <Flex w="100%" flexDir="column">
          <Image
            alignSelf={"center"}
            boxShadow={"2xl"}
            border={"5px solid white"}
            w={100}
            h={100}
            rounded={"full"}
            src={require("./assets/images/profile_1.jpg")}
          />
          <Text
            color="gray.50"
            alignSelf={"center"}
            fontSize={25}
            mt={5}
            fontWeight={"900"}
          >
            Elias Wambugu
          </Text>
          <Text alignSelf={"center"} color="white" fontWeight={"200"}>
            Programmer by day. Photographer by night.
          </Text>
          <Card
            link={"gallary.eliaswambugu.com"}
            color="white"
            className="gallary"
          >
            Gallary
          </Card>
          <Card
            link={"eliaswambugu.com"}
            color="white"
            className="projects"
          >
            Projects
          </Card>
          <Card
            link={"instagram.com/dandeproductions"}
            color="white"
            className="instagram"
          >
            Instagram
          </Card>
          <Card
            link={"twitter.com/officialeliasw"}
            color="white"
            bg='#1DA1F2'
          >
            Twitter
          </Card>
        </Flex>
      </Flex>
    </>
  );
};

export default App;

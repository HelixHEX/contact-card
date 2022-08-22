import { Flex, Image, Text } from "@chakra-ui/react";
import Card from "./components/card/card";
import "./App.css";
const App = () => {
  return (
    <>
      <Flex
        w="100%"
        minH="100vh"
        h={'auto'}
        bg="gray.900"
        p={{ base: 25, md: 55 }}
        justify="center"
       
      >
        <Flex w="100%" flexDir="column" justify={'space-between'}>
          <Flex flexDir={'column'}>
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
            <Text
              textAlign={"center"}
              alignSelf={"center"}
              color="white"
              fontWeight={"200"}
            >
              Programmer by day. Photographer by night.
            </Text>
            <Card
              link={"gallery.eliaswambugu.com"}
              color="white"
              className="gallary"
            >
              Gallary
            </Card>
            <Card link={"eliaswambugu.com"} color="white" className="projects">
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
              bg="#1DA1F2"
            >
              Twitter
            </Card>
            <Card
              link={"open.spotify.com/playlist/7Gke6KjzgfRnSGtwTCQFHq?si=0947d33d81fc4283"}
              color="white"
              bg="#1DB954"
            >
              Spotify Playlist
            </Card>
          </Flex>
          {/* <Flex color="white" fontWeight={"200"} alignSelf={"center"}>
            <Text>Created By: </Text>
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontWeight={'600'}>&nbsp; &nbsp;Elias Wambugu</Text>
          </Flex> */}
        </Flex>
      </Flex>
    </>
  );
};

export default App;

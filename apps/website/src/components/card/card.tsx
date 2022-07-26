import { Flex, Text } from "@chakra-ui/react";
import "./card.css";
import '../../App.css';
type Props = {
  children: React.ReactNode;
  bg?: string;
  className?: string;
  color?: string;
  link: string;
  //icon component
  Icon?: React.ElementType;
};
const Card = ({
  children,
  bg,
  color = "white",
  className,
  link,
  Icon,
}: Props) => {
  return (
    <Flex
      onClick={() => window.open(`https://${link}`, "_blank")}
      color={color}
      _hover={{ cursor: "pointer", bg: "white", color: "gray.700" }}
      className={`card ${className}`}
      justify={"center"}
      mt={10}
      bg={className ? className : bg}
      h={70}
      w={"100%"}
      border={"2px solid white"}
    >
      <Flex>
        <Text fontSize={25} alignSelf={"center"} fontWeight="600">
          {children}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;

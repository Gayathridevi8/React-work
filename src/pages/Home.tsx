import {
  Card,
  CardHeader,
  Heading,
  HStack,
  Container,
  CardBody,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useBoards, useCreateBoard , useDeleteBoard} from "../services/useBoards";

export default function Home() {
  const { data: boards } = useBoards();

  const { mutate, isLoading: isCreating } = useCreateBoard();
 
  const onCreateBoard = () => mutate("hye");
  const create= useCreateBoard();
  const remove = useDeleteBoard();

  return (
    <Container py="8" flex="1" maxW="100%">
      <Heading size={"md"} mb={4}>
        Boards
      </Heading>
      <HStack spacing={4}>
        {boards?.map((board: any) => (
          <Card key={board.id} w="200px" h="100px" size={"sm"}  >
            <CardHeader onClick={()=>remove.mutate("64400ea98fbda2362b8ebe5")} >
              <Heading size="xs" >{board.name}  {board.id}</Heading>
            </CardHeader>
          </Card>
        ))}
        <Card
          cursor="pointer"
          display="flex"
          alignItems={"center"}
          w="200px"
          h="100px"
          size={"sm"}
          align="center"
          onClick={onCreateBoard}
          
          
        >
          <CardBody>
            {isCreating ? (
              <Spinner />
            ) : (
              <Text fontSize={"md"}>Create New Board</Text>
            )}
          </CardBody>
        </Card>
      </HStack>
    </Container>
  );
}

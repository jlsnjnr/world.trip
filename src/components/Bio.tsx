import { Box, Container, Flex, Heading, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

export default function Bio() {
  return (
    <Container maxW='1160px'>
      <SimpleGrid py='80px' columns={2} alignItems='center'>
        <Text fontSize='24px'>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>

        <Box>
          <SimpleGrid px='30px' columns={3} alignItems='center'>

            <Flex direction="column" align="center" textAlign='center'>
              <Heading fontSize="48px" color='highlight.500'>50</Heading>
              <Text fontSize='20px' fontWeight="semibold">países</Text>
            </Flex>

            <Flex direction="column" align="center" textAlign='center'>
              <Heading fontSize="48px" color='highlight.500'>60</Heading>
              <Text fontSize='20px' fontWeight="semibold">línguas</Text>
            </Flex>

            <Flex direction="column" align="center" textAlign='center'>
              <Heading fontSize="48px" color='highlight.500'>27</Heading>
              <Flex align="center" gap='5px'>
                <Text fontSize='20px' fontWeight="semibold">cidades +100</Text>
                <Tooltip label="O país mais rico da Europa é Luxemburgo e o mais pobre é a Moldávia (país entre a Romênia e a Ucrânia)." aria-label='A tooltip'>
                  <Box><FiInfo /></Box>
                </Tooltip>
              </Flex>
            </Flex>

          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Container>
  )
}
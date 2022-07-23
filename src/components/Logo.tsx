import { Container, Flex, Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Container maxW='1160px' >
      <Flex w='100%' align='center' py="25px">
        <Flex mx='auto' align='center' justify="center">
          <Image textAlign='center' objectFit='contain' src="/images/Logo.png" alt="Logo" />
        </Flex>
      </Flex>
    </Container>
  )
}
import { Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function BannerSingle() {
  return (
    <Flex color="light.100" backgroundImage='/images/city.png' w='100%' h='500px' bgRepeat='no-repeat' bgSize='cover'>
      <Container maxW='1160px'>
        <Flex justify='bottom' h='100%'>
          <Heading mt='400px' fontWeight='medium'>Europa</Heading>
        </Flex>
      </Container>
    </Flex>
  )
}
import { Container, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";

export default function TravelTypes() {
  return (
    <Container maxW='1160px' my='80px'>
      <SimpleGrid w='100%' columns={5} spacingX='85px'>
        <Flex align='center' justify='center' direction='column' gap='10'>
          <Image objectFit='contain' src="/images/cocktail.png" alt="Vida noturna icon" />
          <Heading textAlign='center' fontSize='24px' fontWeight='semibold'>vida noturna</Heading>
        </Flex>
        <Flex align='center' justify='center' direction='column' gap='10'>
          <Image objectFit='contain' src="/images/surf.png" alt="Praia icon" />
          <Heading textAlign='center' fontSize='24px' fontWeight='semibold'>praia</Heading>
        </Flex>
        <Flex align='center' justify='center' direction='column' gap='10'>
          <Image objectFit='contain' src="/images/building.png" alt="Moderno icon" />
          <Heading textAlign='center' fontSize='24px' fontWeight='semibold'>moderno</Heading>
        </Flex>
        <Flex align='center' justify='center' direction='column' gap='10'>
          <Image objectFit='contain' src="/images/museum.png" alt="Clássico Icon" />
          <Heading textAlign='center' fontSize='24px' fontWeight='semibold'>clássico</Heading>
        </Flex>
        <Flex align='center' justify='center' direction='column' gap='10'>
          <Image objectFit='contain' src="/images/earth.png" alt="Terra icon" />
          <Heading textAlign='center' fontSize='24px' fontWeight='semibold'>e mais...</Heading>
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
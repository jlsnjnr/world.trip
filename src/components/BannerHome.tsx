import { Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function BannerHome() {
  return (
    <Flex color="light.100" backgroundImage='/images/Background.png' w='100%' h='335px' bgRepeat='no-repeat' bgSize='cover'>
      <Container maxW='1160px'>
        <Flex w="100%" h="100%" align='center' justify='space-between'>
          <Flex         
            align='flex-start'
            justify='center'
            direction='column'
          >
            <Stack spacing="20px">
              <Heading maxW='426px' fontWeight='medium'>5 Continentes, infinitas possibilidades.</Heading>
              <Text maxW='524px' fontSize='20px' color='light.150'>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Stack>
          </Flex>

          <Image position='relative' top='60px' transform='rotate(1.3deg)' objectFit='contain' src="/images/Airplane.png" alt="Logo" />
        </Flex>
        
      </Container>
    </Flex>
  )
}
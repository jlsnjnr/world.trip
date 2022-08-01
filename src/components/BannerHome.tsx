import { Container, Flex, Heading, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export default function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex color="light.100" backgroundImage='/images/Background.png' w='100%' h={['163px','335px']} bgRepeat='no-repeat' bgSize='cover'>
      <Container maxW='1160px'>
        <Flex w="100%" h="100%" align='center' justify='space-between'>
          <Flex         
            align='flex-start'
            justify='center'
            direction='column'
          >
            <Stack spacing="20px">
              <Heading maxW={['100%','426px']} fontSize={["20px", "4xl"]} fontWeight='medium'>5 Continentes, infinitas possibilidades.</Heading>
              <Text maxW={['100%','524px']} fontSize={["14px", "20px"]}  color='light.150'>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Stack>
          </Flex>

          { isWideVersion &&  ( 
            <Image position='relative' top='60px' transform='rotate(1.3deg)' objectFit='contain' src="/images/Airplane.png" alt="Logo" />
          )}

        </Flex>
        
      </Container>
    </Flex>
  )
}
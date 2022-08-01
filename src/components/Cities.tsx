import { Container, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Cities() {
  return (
    <Container pb='40px' maxW='1160px'>
      <Heading  fontSize={['18px','3xl']} fontWeight='medium'>Cidades +100</Heading>

      <SimpleGrid pt='40px' columns={[1,4]} mx={['auto', '0']} alignItems='center' spacingY='40px'>
        <Flex direction='column' w={['100%','256px']} h='279px' bg='white' border='1px' borderColor='highlight.300' borderRadius='4px'>
          <Image textAlign='center' objectFit='fill' w={['100%','256px']} h='173px' src="/images/london.png" alt="Logo" />
          <Flex my='20px' align='center' justify='space-between' px='20px'>
            <Flex direction='column' gap='10px'>
              <Heading fontFamily='Barlow' fontWeight='semibold' fontSize='20px'>Londres</Heading>
              <Text fontFamily='Barlow' fontWeight='medium' fontSize='16px' color='dark.100'>Reino Unido</Text>
            </Flex>
            <Image textAlign='center' objectFit='contain' w='30px' h='30px ' src="/images/reino-unido.png" alt="Logo" />
          </Flex>
        </Flex>

        <Flex direction='column' w={['100%','256px']} h='279px' bg='white' border='1px' borderColor='highlight.300' borderRadius='4px'>
          <Image textAlign='center' objectFit='fill' w={['100%','256px']} h='173px' src="/images/paris.png" alt="Logo" />
          <Flex my='20px' align='center' justify='space-between' px='20px'>
            <Flex direction='column' gap='10px'>
              <Heading fontFamily='Barlow' fontWeight='semibold' fontSize='20px'>Paris</Heading>
              <Text fontFamily='Barlow' fontWeight='medium' fontSize='16px' color='dark.100'>França</Text>
            </Flex>
            <Image textAlign='center' objectFit='contain' w='30px' h='30px ' src="/images/franca.png" alt="Logo" />
          </Flex>
        </Flex>

        <Flex direction='column' w={['100%','256px']} h='279px' bg='white' border='1px' borderColor='highlight.300' borderRadius='4px'>
          <Image textAlign='center' objectFit='fill' w={['100%','256px']} h='173px' src="/images/roma.png" alt="Logo" />
          <Flex my='20px' align='center' justify='space-between' px='20px'>
            <Flex direction='column' gap='10px'>
              <Heading fontFamily='Barlow' fontWeight='semibold' fontSize='20px'>Roma</Heading>
              <Text fontFamily='Barlow' fontWeight='medium' fontSize='16px' color='dark.100'>Itália</Text>
            </Flex>
            <Image textAlign='center' objectFit='contain' w='30px' h='30px ' src="/images/italia.png" alt="Logo" />
          </Flex>
        </Flex>

        <Flex direction='column' w={['100%','256px']} h='279px' bg='white' border='1px' borderColor='highlight.300' borderRadius='4px'>
          <Image textAlign='center' objectFit='fill' w={['100%','256px']} h='173px' src="/images/praga.png" alt="Logo" />
          <Flex my='20px' align='center' justify='space-between' px='20px'>
            <Flex direction='column' gap='10px'>
              <Heading fontFamily='Barlow' fontWeight='semibold' fontSize='20px'>Praga</Heading>
              <Text fontFamily='Barlow' fontWeight='medium' fontSize='16px' color='dark.100'>República Tcheca</Text>
            </Flex>
            <Image textAlign='center' objectFit='contain' w='30px' h='30px ' src="/images/republica.png" alt="Logo" />
          </Flex>
        </Flex>

        <Flex direction='column' w={['100%','256px']} h='279px' bg='white' border='1px' borderColor='highlight.300' borderRadius='4px'>
          <Image textAlign='center' objectFit='fill' w={['100%','256px']} h='173px' src="/images/amsterda.png" alt="Logo" />
          <Flex my='20px' align='center' justify='space-between' px='20px'>
            <Flex direction='column' gap='10px'>
              <Heading fontFamily='Barlow' fontWeight='semibold' fontSize='20px'>Amsterdã</Heading>
              <Text fontFamily='Barlow' fontWeight='medium' fontSize='16px' color='dark.100'>Holanda</Text>
            </Flex>
            <Image textAlign='center' objectFit='contain' w='30px' h='30px ' src="/images/holanda.png" alt="Logo" />
          </Flex>
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
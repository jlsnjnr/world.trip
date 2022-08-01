import { Box, Container, Flex, Heading, Image, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

export default function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
          
  return (
    <Container maxW='1160px' my='80px'>
      { isWideVersion &&  ( 
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
      )}

      { !isWideVersion && (
        <Flex gap='20px' direction='column'>
          <Flex align='center' justify='space-between'>
            <Flex align='center' gap='10px' justify='center'>
              <Box w='8px' h='8px' borderRadius='full' bg='highlight.500' />
              <Heading fontSize={['18px','24px']} fontWeight={['medium','semibold']}>vida noturna</Heading>
            </Flex>
            <Flex align='center' gap='10px' justify='center'>
              <Box w='8px' h='8px' borderRadius='full' bg='highlight.500' />
              <Heading fontSize={['18px','24px']} fontWeight={['medium','semibold']}>praia</Heading> 
            </Flex>
          </Flex>
      
          <Flex align='center' justify='space-between'>
            <Flex align='center' gap='10px' justify='center'>
              <Box w='8px' h='8px' borderRadius='full' bg='highlight.500' />
              <Heading fontSize={['18px','24px']} fontWeight={['medium','semibold']}>moderno</Heading>
            </Flex>
            <Flex align='center' gap='10px' justify='center'>
              <Box w='8px' h='8px' borderRadius='full' bg='highlight.500' />
              <Heading fontSize={['18px','24px']} fontWeight={['medium','semibold']}>clássico</Heading>
            </Flex>
          </Flex>
        
          <Flex align='center' gap='10px' justify='center'>
            <Box w='8px' h='8px' borderRadius='full' bg='highlight.500' />
            <Heading fontSize={['18px','24px']} fontWeight={['medium','semibold']}>e mais...</Heading>
          </Flex>
        </Flex>
      )}
    </Container>
  )
}
import { Container, Flex, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

export default function LogoReturn() {
  return (
    <Container maxW='1160px' >
      <Flex w='100%' align='center' py="25px">
        <Link href="/" passHref><Icon as={FiChevronLeft} position='absolute' cursor="pointer" fontSize='30px' /></Link>
        <Flex mx='auto' align='center' justify="center">
          <Image textAlign='center' objectFit='contain' src="/images/Logo.png" alt="Logo" />
        </Flex>
      </Flex>
    </Container>
  )
}
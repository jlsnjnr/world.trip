import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import api from "../services/api";
import LogoReturn from "../components/LogoReturn";
import { FiInfo } from "react-icons/fi";
import Cities from "../components/Cities";

interface PostProps {
  post: {
    title: string;
    heading: string;
    image: string;
    descSingle: string;
    countrys: number,
    linguages: number,
    citys: number,
    city: number,
    info: string,
  }
}


export default function Post( { post }: PostProps ) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>{post.heading} | World Trip ✈️</title>
      </Head>

      <LogoReturn />

      <Flex color="light.100" backgroundImage={post.image} w='100%' h={['163px','500px']} backgroundPosition="center" bgRepeat='no-repeat' bgSize='cover'>
        <Flex w="100%" bg='dark.300' h="100%" align='center' justify='center'>
          <Container maxW='1160px'>
            <Flex justify={['center', 'flex-start']} h='100%'>
              <Heading mt={['0','340px']} fontSize={["28px","48px"]} fontWeight='semibold'>{post.heading}</Heading>
            </Flex>
          </Container>
        </Flex>
      </Flex>      
      
      <Container maxW='1160px'>
        <SimpleGrid py='80px' columns={[1,2]} alignItems='center'>
          <Text fontSize={['14px','24px']}>{post.descSingle}</Text>

          <Box>
            <SimpleGrid px={['0','30px']} py={['20px', '0']} columns={3}>
              <Flex direction="column" align={["flex-start","center"]} textAlign='center'>
                <Heading fontSize={["24px","48px"]} color='highlight.500'>{post.countrys}</Heading>
                <Text fontSize={['18px','20px']} fontWeight={["medium","semibold"]}>países</Text>
              </Flex>

              <Flex direction="column" align={["flex-start","center"]} textAlign='center'>
                <Heading fontSize={["24px","48px"]} color='highlight.500'>{post.linguages}</Heading>
                <Text fontSize={['18px','20px']} fontWeight={["medium","semibold"]}>línguas</Text>
              </Flex>

              <Flex direction="column" align={["flex-start","center"]} textAlign='center'>
                <Heading fontSize={["24px","48px"]} color='highlight.500'>{post.citys}</Heading>
                <Flex align={["flex-start","center"]} textAlign={['left','center']} gap='5px'>
                  <Text fontSize={['18px','20px']} fontWeight={["medium","semibold"]}>cidades +100</Text>
                  <Tooltip label={post.info} aria-label='A tooltip'>
                    <Box><FiInfo /></Box>
                  </Tooltip>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Container>

      <Cities />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const response = await api.get(`/continents/${id}`);

  const post = {
    title: id,
    heading: response.data.title,
    image: response.data.image,
    descSingle: response.data.descSingle,
    countrys: response.data.countrys,
    linguages: response.data.linguages,
    citys: response.data.citys,
    city: response.data.city,
    info: response.data.descSingle,
  }
  
  return {
    props: {
      post,
    }
  }
}
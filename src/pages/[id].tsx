import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import api from "../services/api";
import LogoReturn from "../components/LogoReturn";
import BannerSingle from "../components/BannerSingle";
import Bio from "../components/Bio";
import Cities from "../components/Cities";

interface PostProps {
  post: {
    title: string;
    heading: string;
    image: string;
  }
}


export default function Post({ post }: PostProps) {

  return (
    <>
      <Head>
        <title>{post.heading} | World Trip ✈️</title>
      </Head>

      <LogoReturn />
      <Flex color="light.100" backgroundImage={post.image} w='100%' h='500px' backgroundPosition="center" bgRepeat='no-repeat' bgSize='cover'>
        <Flex w="100%" bg='dark.300' h="100%" align='center' justify='center'>
          <Container maxW='1160px'>
            <Flex justify='bottom' h='100%'>
              <Heading mt='340px' fontSize="48px" fontWeight='semibold'>{post.heading}</Heading>
            </Flex>
          </Container>
        </Flex>
      </Flex>
      <Bio />
      <Cities />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const response = await api.get(`/continents/${id}`);

  const post = {
    title: id,
    heading: response.data.headingTitle,
    image: response.data.image,
  }

  return {
    props: {
      post,
    }
  }
}
import Head from "next/head";
import BannerHome from "../components/BannerHome";
import DividerUi from "../components/Divider";
import Logo from "../components/Logo";
import TravelTypes from "../components/TravelTypes";
import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from "next/link";
import api from "../services/api";
import { GetServerSideProps, GetStaticProps } from "next";

type Post = {
  id: string;
  slug: string;
  image: string;
  headingTitle: string;
  desc: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Home( {posts}: PostsProps ) {
  return (
    <>
      <Head>
        <title>World Trip | Seja Bem Vindo ✈️</title>
      </Head>

      <Logo />
      <BannerHome />
      <TravelTypes />
      <DividerUi />

      <Flex w='100%' align='center' justify='center' my='50px'>
        <Heading maxW='536px'textAlign='center' fontWeight='medium'>Vamos nessa? Então escolha seu continente</Heading>
      </Flex>

      <Container maxW='1160px' my='80px'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {posts.map(post => (
            <SwiperSlide key={post.id}>   
              <Link href={`/${post.id}`} passHref>
                <Flex color="light.100" borderRadius={4} backgroundPosition="center" backgroundImage={post.image} h='450px' bgRepeat='no-repeat' bgSize='cover'>
                  <Flex w="100%" cursor='pointer' bg='dark.500' h="100%" align='center' justify='center'>
                    <Flex         
                      align='center'
                      justify='center'
                      direction='column'
                      textAlign='center'
                    >
                      <Stack spacing="20px">
                        <Heading fontWeight='medium'>{post.headingTitle}</Heading>
                        <Text maxW='500px' fontSize='20px' color='light.150'>{post.desc}</Text>
                      </Stack>
                    </Flex>
                  </Flex>
                </Flex>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents');

  const posts = response.data.map(post => {
    return {
      id: post.id,
      image: post.image,
      headingTitle: post.headingTitle,
      desc: post.desc,
    };
  });

  return {
    props: {posts}
  }
}

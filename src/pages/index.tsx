import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import BannerHome from "../components/BannerHome";
import DividerUi from "../components/Divider";
import Logo from "../components/Logo";
import TravelTypes from "../components/TravelTypes";

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from "next/link";

export default function Home() {
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
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Link href="single" passHref>
              <Flex color="light.100" borderRadius={4} backgroundImage='/images/ContinentImage.png' h='450px' bgRepeat='no-repeat' bgSize='cover'>
                <Flex w="100%" cursor='pointer' bg='dark.500' h="100%" align='center' justify='center'>
                  <Flex         
                    align='center'
                    justify='center'
                    direction='column'
                    textAlign='center'
                  >
                    <Stack spacing="20px">
                      <Heading fontWeight='medium'>Europa</Heading>
                      <Text maxW='500px' fontSize='20px' color='light.150'>O continente mais antigo.</Text>
                    </Stack>
                  </Flex>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Flex color="light.100" borderRadius={4} backgroundImage='https://images.unsplash.com/photo-1517462035531-76bc910a6903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' h='450px' bgRepeat='no-repeat' bgSize='cover'>
              <Flex w="100%" h="100%" bg='dark.500' align='center' justify='center'>
                <Flex         
                  align='center'
                  justify='center'
                  direction='column'
                  textAlign='center'
                >
                  <Stack spacing="20px">
                    <Heading fontWeight='medium'>América do Norte</Heading>
                    <Text fontSize='20px' maxW='500px' color='light.150'>A fronteira entre Estados Unidos e Canadá é a maior fronteira entre países do mundo, com 8.851 quilômetros de extensão.</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex color="light.100" borderRadius={4}  backgroundImage='https://images.unsplash.com/photo-1542043026809-6ec421047f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' h='450px' bgRepeat='no-repeat' bgSize='cover'>
              <Flex w="100%" h="100%" bg='dark.500' align='center' justify='center'>
                <Flex         
                  align='center'
                  justify='center'
                  direction='column'
                  textAlign='center'
                >
                  <Stack spacing="20px">
                    <Heading fontWeight='medium'>América do Sul</Heading>
                    <Text maxW='500px' fontSize='20px' color='light.150'>O continente é o lar da cidade mais ao sul do mundo, Ushuaia, conhecida como o Fim do Mundo.</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex color="light.100" borderRadius={4}  backgroundImage='https://images.unsplash.com/photo-1610238115534-e1cb1bd12c9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' h='450px' bgRepeat='no-repeat' bgSize='cover'>
              <Flex w="100%" h="100%" bg='dark.500' align='center' justify='center'>
                <Flex         
                  align='center'
                  justify='center'
                  direction='column'
                  textAlign='center'
                >
                  <Stack spacing="20px">
                    <Heading fontWeight='medium'>Ásia</Heading>
                    <Text maxW='500px' fontSize='20px' color='light.150'>Na Ásia está o pico mais alto do planeta</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex color="light.100" borderRadius={4}  backgroundImage='https://images.unsplash.com/photo-1597426061335-e50c8697630b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' h='450px' bgRepeat='no-repeat' bgSize='cover'>
              <Flex w="100%" h="100%" bg='dark.500' align='center' justify='center'>
                <Flex         
                  align='center'
                  justify='center'
                  direction='column'
                  textAlign='center'
                >
                  <Stack spacing="20px">
                    <Heading fontWeight='medium'>África</Heading>
                    <Text fontSize='20px' maxW='500px' color='light.150'>O Nilo é considerado o maior rio em extensão do mundo, podendo, inclusive, ser visto do espaço.</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex color="light.100" borderRadius={4}  backgroundImage='https://images.unsplash.com/photo-1656177054067-e18d932a7ee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' h='450px' bgRepeat='no-repeat' bgSize='cover'>
              <Flex w="100%" h="100%" bg='dark.500' align='center' justify='center'>
                <Flex         
                  align='center'
                  justify='center'
                  direction='column'
                  textAlign='center'
                >
                  <Stack spacing="20px">
                    <Heading fontWeight='medium'>Oceania</Heading>
                    <Text fontSize='20px' maxW='500px' color='light.150'>É onde fica um dos lugares mais isolados da Terra</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}

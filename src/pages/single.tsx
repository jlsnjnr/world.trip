import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import BannerHome from "../components/BannerHome";
import BannerSingle from "../components/BannerSingle";
import LogoReturn from "../components/LogoReturn";


export default function Single() {
  return (
    <>
      <Head>
        <title>World Trip | Europa ✈️</title>
      </Head>

      <LogoReturn />
      <BannerSingle />
    </>
  )
}
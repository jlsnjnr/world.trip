import Head from "next/head";
import BannerSingle from "../components/BannerSingle";
import Bio from "../components/Bio";
import Cities from "../components/Cities";
import LogoReturn from "../components/LogoReturn";

export default function Single() {
  return (
    <>
      <Head>
        <title>World Trip | Europa ✈️</title>
      </Head>

      <LogoReturn />
      <BannerSingle />
      <Bio />
      <Cities />
    </>
  )
}
import { Layout } from "../../components/Layout";
import DarthVader from "../../assets/images/background/home.png";
import { BackgroundImage, HeroText } from "./index.styled";

export function Home() {
  return (
    <Layout>
      <BackgroundImage>
        <img src={DarthVader} alt="" width={400} />
        <HeroText>WELCOME YOUNG PADAWAN</HeroText>
      </BackgroundImage>
    </Layout>
  );
}

export default Home;

import { Content } from "../../components/Content";
import ImageSlider from "../../components/ImageSlider";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { FADED_PLANETS_IMAGES } from "../../consts/images";
import { useAllPlanetsQuery } from "../../generated/graphql";

export function Planets() {
  const { data, loading } = useAllPlanetsQuery();
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ImageSlider
            data={data?.allPlanets?.planets as any}
            fadeImages={FADED_PLANETS_IMAGES}
          />
        </Content>
      )}
    </Layout>
  );
}

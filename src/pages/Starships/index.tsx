import { Content } from "../../components/Content";
import ImageSlider from "../../components/ImageSlider";
import { Layout } from "../../components/Layout";
import Loading from "../../components/Loading";
import { FADED_STARSHIPS_IMAGES } from "../../consts/images";
import { useAllStarshipsQuery } from "../../generated/graphql";

export function Starships() {
  const { data, loading } = useAllStarshipsQuery();
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ImageSlider
            data={data?.allStarships?.starships as any}
            fadeImages={FADED_STARSHIPS_IMAGES}
          />
        </Content>
      )}
    </Layout>
  );
}

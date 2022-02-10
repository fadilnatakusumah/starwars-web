import { useParams } from "react-router-dom";

import { Content } from "../../../components/Content";
import { Layout } from "../../../components/Layout";
import ListPeople from "../../../components/ListPeople";
import { Loading } from "../../../components/Loading";
import { useFilmQuery } from "../../../generated/graphql";
import FilmsSelector from "../FilmsSelector";
import { PosterFilm } from "./index.styled";


export function DetailFilms() {
  const params = useParams();
  const { data, loading } = useFilmQuery({ variables: { id: params.id } });
  return (
    <Layout>
      <Content>
        {loading ? (
          <Loading />
        ) : (
          <>
            <FilmsSelector />
            <PosterFilm>
              <img
                width={250}
                alt=""
                src="https://m.media-amazon.com/images/I/518cyoMPU8L._AC_SY679_.jpg"
              />
              <div>
                <h1>{data?.film?.title}</h1>
                <p>{data?.film?.openingCrawl}</p>
              </div>
            </PosterFilm>
            <ListPeople
              title={"CHARACTERS"}
              data={data?.film?.characterConnection?.characters!}
            />
          </>
        )}
      </Content>
    </Layout>
  );
}

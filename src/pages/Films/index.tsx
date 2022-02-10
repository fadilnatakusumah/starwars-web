import { Link } from "react-router-dom";

import { Content } from "../../components/Content";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { useAllFilmsQuery } from "../../generated/graphql";
import FilmsSelector from "./FilmsSelector";
import { FilmContent } from "./index.styled";

export function Films() {
  const { data, loading } = useAllFilmsQuery();

  return (
    <Layout>
      <Content>
        {loading ? (
          <Loading />
        ) : (
          <>
            <FilmsSelector />
            {data?.allFilms?.films?.map((film) => (
              <FilmContent key={film?.id}>
                <div>
                  <Link to={`/films/${film?.id}`}>
                    <h2>{film?.title}</h2>
                  </Link>
                  <p>{film?.openingCrawl}</p>
                </div>
                <div>
                  <img
                    src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=1%2C318%2C999%2C499&width=480"
                    alt=""
                  />
                </div>
              </FilmContent>
            ))}
          </>
        )}
      </Content>
    </Layout>
  );
}

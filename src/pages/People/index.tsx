import { Content } from "../../components/Content";
import { Layout } from "../../components/Layout";
import ListPeople from "../../components/ListPeople";
import { Loading } from "../../components/Loading";
import { useAllPeopleQuery } from "../../generated/graphql";

export function People() {
  const { data, loading } = useAllPeopleQuery();
  return (
    <Layout>
      <Content>
        {loading ? <Loading /> : <ListPeople data={data?.allPeople?.people!} />}
      </Content>
    </Layout>
  );
}

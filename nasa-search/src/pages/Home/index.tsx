import { Layout, Typography } from "antd";
import { useState } from "react";
import { IMediaItem } from "../../api/interfaces/mediaItem";
import getSearchResult from "../../api/search";
import HomeSearchForm from "../../components/Home/SearchForm";
import MediaItemTeaser from "../../components/MediaItemTeaser";

export default function HomePage() {
  const [mediaItemTeasers, setMediaItemTeasers] = useState<IMediaItem[]>([]);
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <Typography.Title color='primary'>NASA media</Typography.Title>
      </Header>
      <HomeSearchForm
        onSubmit={(search) => {
          getSearchResult(search).then((result) => {
            setMediaItemTeasers(result.data);
          });
        }}
      />
      <Content>
        {mediaItemTeasers.map((props, index) => (
          <MediaItemTeaser key={index} {...props} />
        ))}
      </Content>
    </Layout>
  );
}

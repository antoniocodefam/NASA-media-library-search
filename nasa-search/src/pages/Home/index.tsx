import { useState } from "react";
import { IMediaItemTeaser } from "../../interfaces/mediaItem";
import getSearchResult from "../../api/search";
import HomeSearchForm from "../../components/Home/SearchForm";
import MediaItemTeaser from "../../components/MediaItemTeaser";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function HomePage() {
  const [mediaItemTeasers, setMediaItemTeasers] = useState<IMediaItemTeaser[]>([]);

  return (
    <>
      <HomeSearchForm
        onSubmit={({ search, from, until }) => {
          getSearchResult(search, from, until).then((result) => {
            setMediaItemTeasers(result.data);
          });
        }}
      />
      <Row className='mt-5'>
        {mediaItemTeasers.map((props, index) => (
          <Col md={4} key={index} className='mb-5 px-3'>
            <MediaItemTeaser {...props} />
          </Col>
        ))}
      </Row>
    </>
  );
}

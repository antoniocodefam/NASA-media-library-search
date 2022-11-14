import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMediaItemDetails } from '@i/mediaItem';
import getDetailsResult from '@a/details';
import Details from '@c/Details';

export default function DetailsPage() {
  const [details, setDetails] = useState<IMediaItemDetails>();
  const params = useParams();

  useEffect(() => {
    getDetailsResult(params.id!).then(({ data, error }) => {
      if (!error) {
        setDetails(data[0]);
      }
    });
  }, [params.id]);

  return details ? (
    <Container>
      <Details {...details} />
    </Container>
  ) : null;
}

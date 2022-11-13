import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import getDetailsResult from "../../api/details";
import { useEffect, useState } from "react";
import Details from "../../components/Details";
import { IMediaItemDetails } from "../../interfaces/mediaItem";

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

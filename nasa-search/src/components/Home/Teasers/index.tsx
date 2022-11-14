import MediaItemTeaser from '@c/MediaItemTeaser';
import { IMediaItemTeaser } from '@i/mediaItem';
import Col from "react-bootstrap/Col";

interface HomeTeasersProps {
  teasers: IMediaItemTeaser[];
}
export default function HomeTeasers({ teasers }: HomeTeasersProps) {
  return (
    <>
      {teasers.map((props, index) => (
        <Col md={4} key={index} className="mb-5 px-3">
          <MediaItemTeaser {...props} />
        </Col>
      ))}
    </>
  );
}

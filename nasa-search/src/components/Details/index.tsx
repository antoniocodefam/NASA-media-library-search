import BackButton from '@c/Buttons/Back';
import DetailsContent from '@c/Details/Content';
import DetailsKeyword from '@c/Details/Keywords';
import { IMediaItemDetails } from '@i/mediaItem';
import Stack from "react-bootstrap/Stack";


export default function Details({
  title,
  photographer,
  dateCreated,
  description,
  images,
  location,
  keywords,
}: IMediaItemDetails) {
  return (
    <Stack gap={2}>
      <BackButton />
      <DetailsContent
        title={title}
        photographer={photographer}
        dateCreated={dateCreated}
        images={images}
        description={description}
        location={location}
      />
      <DetailsKeyword keywords={keywords} />
    </Stack>
  );
}

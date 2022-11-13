import { useState } from "react";
import { IMediaItem } from "../../interfaces/mediaItem";
import getSearchResult from "../../api/search";
import HomeSearchForm from "../../components/Home/SearchForm";
import MediaItemTeaser from "../../components/MediaItemTeaser";

export default function HomePage() {
  const [mediaItemTeasers, setMediaItemTeasers] = useState<IMediaItem[]>([]);

  return (
    <>
      <HomeSearchForm
        onSubmit={({ search, from, until }) => {
          getSearchResult(search, from, until).then((result) => {
            setMediaItemTeasers(result.data);
          });
        }}
      />
      {mediaItemTeasers.map((props, index) => (
        <MediaItemTeaser key={index} {...props} />
      ))}
    </>
  );
}

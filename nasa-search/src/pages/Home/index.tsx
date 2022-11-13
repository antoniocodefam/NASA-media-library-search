import { useEffect, useState } from "react";
import { IMediaItemTeaser } from "../../interfaces/mediaItem";
import getSearchResult from "../../api/search";
import HomeSearchForm, {
  IHomeSearchFormInputs,
} from "../../components/Home/Search/Form";
import Row from "react-bootstrap/Row";
import HomeTeasers from "../../components/Home/Teasers";
import { useSearchParams } from "react-router-dom";
import HomeSearchNoResults from "../../components/Home/Search/NoResults";

function extractFormValuesFromParams(
  searchParams: URLSearchParams
): IHomeSearchFormInputs {
  return {
    search: searchParams.get("search") ?? "",
    until: searchParams.get("until") ?? "",
    from: searchParams.get("from") ?? "",
  };
}

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mediaItemTeasers, setMediaItemTeasers] = useState<IMediaItemTeaser[]>(
    []
  );

  const handleSubmit = ({ search, from, until }: IHomeSearchFormInputs) => {
    setSearchParams({
      ...(search && { search }),
      ...(until && { until }),
      ...(from && { from }),
    });
  };

  useEffect(() => {
    const { search, from, until } = extractFormValuesFromParams(searchParams);
    getSearchResult(search, from, until).then((result) => {
      setMediaItemTeasers(result.data);
    });
  }, [searchParams]);

  return (
    <>
      <HomeSearchForm
        onSubmit={handleSubmit}
        initialValues={extractFormValuesFromParams(searchParams)}
      />
      <Row className="mt-5">
        {mediaItemTeasers.length === 0 ? (
          <HomeSearchNoResults />
        ) : (
          <HomeTeasers teasers={mediaItemTeasers} />
        )}
      </Row>
    </>
  );
}

import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { useSearchParams } from "react-router-dom";
import HomeSearchLanding from '@c/Home/Search/Landing';
import HomeSearchForm, { IHomeSearchFormInputs } from '@c/Home/Search/Form';
import { IMediaItemTeaser } from '@i/mediaItem';
import getSearchResult from '@a/search';
import HomeSearchNoResults from '@c/Home/Search/NoResults';
import HomeSearchPagination, { TEASERS_PER_PAGE } from '@c/Pagination';
import HomeTeasers from '@c/Home/Teasers';

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
  const [currentPage, setCurrentPage] = useState(1);

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

    const page = searchParams.get("page");

    setCurrentPage(page ? +page - 1 : 0);
  }, [searchParams]);

  return (
    <>
      <HomeSearchForm
        onSubmit={handleSubmit}
        initialValues={extractFormValuesFromParams(searchParams)}
      />
      <Row className="mt-5">
        {mediaItemTeasers.length === 0 ? (
          searchParams.toString() ? (
            <HomeSearchNoResults />
          ) : (
            <HomeSearchLanding />
          )
        ) : (
          <HomeTeasers
            teasers={mediaItemTeasers.slice(
              currentPage,
              currentPage + TEASERS_PER_PAGE
            )}
          />
        )}
      </Row>
      {mediaItemTeasers.length > TEASERS_PER_PAGE && (
        <Row>
          <HomeSearchPagination
            itemsAmount={mediaItemTeasers.length}
            currentPage={currentPage + 1}
            onPageChange={(nextPage) => {
              setSearchParams({ ...searchParams, page: nextPage.toString() });
            }}
          />
        </Row>
      )}
    </>
  );
}

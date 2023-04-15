import type { ReadonlyURLSearchParams } from 'next/navigation';

export type PageProps = {
  params: {};
  searchParams: ReadonlyURLSearchParams & {
    location: string;
  };
};

export function parseToAppState<T>(
  pageProps: PageProps,
  initialAppState: T,
): T {
  if (!pageProps.searchParams.location) {
    return initialAppState;
  }

  let jsonString = decodeURIComponent(pageProps.searchParams.location);
  const json = JSON.parse(jsonString);
  return json;
}

export function getQueryStringByAppState<T>(appState: T): string {
  const queryString = `location=${encodeURIComponent(
    JSON.stringify(appState),
  )}`;
  return queryString;
}

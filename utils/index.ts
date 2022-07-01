export const simplify = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

export const fetcher = (url: RequestInfo | URL, init: RequestInit | undefined) => {
  return fetch(url, init).then((r) => r.json());
};

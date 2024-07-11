import type { Load } from '@sveltejs/kit';
import type { Comic } from '$lib/ComicType';
import moment from 'moment';

export const load: Load = async ({
  fetch,
}: {
  fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}) => {
  const email = new URLSearchParams();
  email.append('email', 'i.lobazov@innopolis.university');
  const response = await fetch(
    'https://fwd.innopolis.university/api/hw2?' + email
  );
  const id = new URLSearchParams();
  id.append('id', await response.json());
  const comicResponse = await fetch(
    'https://fwd.innopolis.university/api/comic?' + id
  );
  const comic = (await comicResponse.json()) as Comic;

  const date = new Date(
    parseInt(comic.year),
    parseInt(comic.month) - 1,
    parseInt(comic.day)
  );
  const publishedDate = moment(date).fromNow();

  return {
    comic,
    publishedDate,
  };
};

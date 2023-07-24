import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_ANIME_LIST = gql`
  query {
    Page {
      media {
        id
        title {
          romaji
          english
          native
        }
        episodes
        status
        coverImage {
          medium
        }
      }
    }
  }
`;

const AnimeList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ANIME_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const animeList = data?.Page.media ?? [];

  return (
    <div>
      <h1>Anime List</h1>
      <ul>
        {animeList.map((anime: any) => (
          <li key={anime.id}>
            <img src={anime.coverImage.medium} alt={anime.title.romaji} />
            <h2>{anime.title.romaji}</h2>
            <p>Status: {anime.status}</p>
            <p>Episodes: {anime.episodes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;

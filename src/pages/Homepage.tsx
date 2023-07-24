import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card, CardContainer, CardImage, CardList, HorizontalScrollContainer } from '../styles/Card.styles';

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
        <h1>Anime Popular</h1>
        <HorizontalScrollContainer>
        {animeList.map((anime:any)=>(
                    <Card key={anime.id}>
                        <CardImage src={anime.coverImage.medium} alt={anime.title.romaji}/>
                        <h2>{anime.title.romaji}</h2>
                        <p>Status: {anime.status}</p>
                        <p>Episodes: {anime.episodes}</p>
                    </Card>
                ))}
      </HorizontalScrollContainer>
      <h1>Anime List</h1>
     
        <div style={{width:"100%"}}>
        <CardContainer>
            {animeList.map((anime:any)=>(
                 <CardList key={anime.id}>
                    <CardImage src={anime.coverImage.medium} alt={anime.title.romaji}/>
                    <h2>{anime.title.romaji}</h2>
                    <p>Status: {anime.status}</p>
                    <p>Episodes: {anime.episodes}</p>
                 </CardList>
            ))}
        </CardContainer>
        </div>
    </div>
  );
};

export default AnimeList;

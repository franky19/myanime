import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card, CardContainer, CardContent, CardImage, CardList, CardText, HorizontalScrollContainer } from '../styles/Card.styles';
import { useNavigate } from 'react-router-dom';
import HorizontalCard from '../styles/HorizontalCard';

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
  const navigate = useNavigate()
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const animeList = data?.Page.media ?? [];


  const OnClickDetail = (id:any) => {
    navigate(`/detail/${id}`)
  }
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
      {animeList.map((anime:any)=>(
    <>
      <CardContainer>
            {animeList.map((anime:any)=>(
                 <CardList key={anime.id} onClick={()=>OnClickDetail(anime.id)}>
                    <CardImage src={anime.coverImage.medium} alt={anime.title.romaji}/>
                    <h2>{anime.title.romaji}</h2>
                    <p>Status: {anime.status}</p>
                    <p>Episodes: {anime.episodes}</p>
                 </CardList>
            ))}
        </CardContainer>
        {animeList.map((anime:any)=>(
          <>
            <HorizontalCard
              imageSrc={anime.coverImage.medium}
              title={anime.title.romaji}
              textEpisode={anime.episodes}
              updatedAt='' textStatus={`Status : anime.status`}
              onClick={()=>OnClickDetail(anime.id)}
              // onClick={()=>OncClickDetail(anime.id)}
              />
          </>
        ))}
    </>
        ))}
    </div>
  );
};

export default AnimeList;

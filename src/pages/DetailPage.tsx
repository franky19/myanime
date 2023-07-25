// src/components/DetailAnime.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Card, CardDescription, CardImage, CardTitle } from '../styles/Card.styles';

// Define TypeScript types for the anime data
interface Anime {
  id: number;
  title: {
    romaji: string;
    english?: string;
  };
  description: string;
  episodes: number;
  status: string;
  averageScore: number;
  coverImage: {
    large: string;
  };
}

interface AnimeData {
  Media: Anime;
}

type params = {
    animeId: string
}

const GET_ANIME_DETAILS = gql`
  query GetAnimeDetails($animeId: Int!) {
    Media(id: $animeId, type: ANIME) {
      id
      title {
        romaji
        english
      }
      description
      episodes
      status
      averageScore
      coverImage {
        large
      }
    }
  }
`;

const DetailAnime: React.FC = () => {
    const {animeId} = useParams<params>();
  const { loading, error, data } = useQuery<AnimeData>(GET_ANIME_DETAILS, {
    variables: { animeId: parseInt(animeId || '') },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  
  const anime = data?.Media;

  return (
    <div>
        <Card>
            <CardImage src={anime?.coverImage.large} alt={anime?.title.romaji}/>
        </Card>
        <CardTitle>{anime?.title.romaji}</CardTitle>
        <CardDescription>
        <div dangerouslySetInnerHTML={{__html: anime?.description || ''}} />;
            
            <p>Episodes: {anime?.episodes}</p>
            <p>Status: {anime?.status}</p>
            <p>Average Score: {anime?.averageScore}</p>
        </CardDescription>
        {/* <div style={{width:"350px"}}>
            <div dangerouslySetInnerHTML={{__html: anime?.description || ''}} />;
            
            <p>Episodes: {anime?.episodes}</p>
            <p>Status: {anime?.status}</p>
            <p>Average Score: {anime?.averageScore}</p>
        </div> */}
        {/* {anime?.title.english && <p>{anime.title.english}</p>}
        <p>Episodes: {anime?.episodes}</p>
        <p>Status: {anime?.status}</p>
        <p>Average Score: {anime?.averageScore}</p>
        <img src={anime?.coverImage.large} alt={anime?.title.romaji} />
        <p>{anime?.description}</p> */}
        {/* <HorizontalScrollContainer>
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
                 <CardList key={anime.id} onClick={()=>OncClickDetail(anime.id)}>
                    <CardImage src={anime.coverImage.medium} alt={anime.title.romaji}/>
                    <h2>{anime.title.romaji}</h2>
                    <p>Status: {anime.status}</p>
                    <p>Episodes: {anime.episodes}</p>
                 </CardList>
            ))}
        </CardContainer>
        </div> */}
    </div>
    // <div>
    //   <h1>{anime?.title.romaji}</h1>
    //   {anime?.title.english && <p>{anime.title.english}</p>}
    //   <p>Episodes: {anime?.episodes}</p>
    //   <p>Status: {anime?.status}</p>
    //   <p>Average Score: {anime?.averageScore}</p>
    //   <img src={anime?.coverImage.large} alt={anime?.title.romaji} />
    //   <p>{anime?.description}</p>
    // </div>
  );
};

export default DetailAnime;

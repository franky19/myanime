import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Card, CardDescription, CardImage, CardTitle } from '../styles/Card.styles';

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
    </div>
  );
};

export default DetailAnime;

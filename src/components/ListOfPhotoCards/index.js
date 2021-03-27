import React from "react";
import { ListOfPhotoCard } from "./styles";
import { PhotoCard } from "../PhotoCard";
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = categoryId => {
  const { loading, data, error } = useQuery(getPhotos, { variables: { categoryId } })
  return { loading, data, error }
}


export const ListOfPhotoCards = (props) => {
  const { categoryId } = props;
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })

  //{Es SUPER IMPORANTE HACER LA VALIDACION DEL LOADING, SI NO, DARA ERROR POR UNDEFINED}
  if (loading) return 'Cargando...'
  if (error) return <p>Error</p>

  return (
    <ListOfPhotoCard>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </ListOfPhotoCard>
  );
};

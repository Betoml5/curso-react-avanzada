import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const getSinglePhoto = gql`
  query getSinglePhoto($id: ID! ) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`


// export const useGetSinglePhoto = id => {
//   const { loading, data, error } = useQuery(getSinglePhoto, { variables: { id } })
//   return { loading, data, error }
// }

export const PhotoCardWithQuery = (props) => {
  const { id } = props;
  const { loading, error, data } = useQuery(getSinglePhoto, { variables: { id } })




  //{Es SUPER IMPORANTE HACER LA VALIDACION DEL LOADING, SI NO, DARA ERROR POR UNDEFINED}
  if (loading) return 'Cargando...'
  if (error) return <p>Error</p>


  return (

    <PhotoCard {...data?.photo} />
  )
}




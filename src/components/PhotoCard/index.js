import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost';
import { FavButton } from "../FavButton";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";



export const useLikePhoto = (id) => {
  const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input:$input){
      id,
      liked,
      likes
    }
  }
      `
  const [toggleLike] = useMutation(LIKE_PHOTO)
  return [toggleLike]
}




export const PhotoCard = (props, { id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);




  const [toggleLike] = useLikePhoto()
  const handleFavClick = () => {
    console.log(`id de la photo ${props.id}`)
    setLiked(!liked)
    toggleLike({ variables: { input: { id: props.id } } })
  }




  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${props.id}`}>
            <ImgWrapper>
              <Img src={props.src} alt="image" loading="lazy" />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={props.likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

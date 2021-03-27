import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { GlobalStyle } from "../styles/GlobalStyles";
import React from 'react'


export const Home = (props) => {
    return (

        <>
            <ListOfCategories />
            <GlobalStyle />
            <ListOfPhotoCards categoryId={props.id} />
        </>

    )
}

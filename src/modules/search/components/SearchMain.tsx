import React from "react"
import {SearchHead} from "./SearchHead";
import {SearchFields} from "./SearchFields";
import {SearchResult} from "./SearchResult";
import {Box, Grid2} from "@mui/material";

export const SearchMain = () => {

    return (
        <Grid2 display={'grid'} padding={6}
               gridTemplateAreas={{md: `"header header" "nav main"`, xs: '"header" "nav" "main"'}}
               gridTemplateRows={'auto 1fr'} gap={6} gridTemplateColumns={{md: '300px 1fr', xs: '1fr'}}>
            <Box gridArea={'header'}>
                <SearchHead/>
            </Box>
            <Box gridArea={'nav'}>
                <SearchFields/>
            </Box>
            <Box gridArea={'main'}>
                <SearchResult/>
            </Box>
        </Grid2>
    )
}
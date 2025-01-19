import React from "react"
import {SearchHead} from "./SearchHead";
import {SearchFields} from "./SearchFields";
import {SearchResult} from "./SearchResult";
import {Box, Grid2} from "@mui/material";

export const SearchMain = () => {

    return (
        <Grid2 display={'grid'} padding={6} gridTemplateAreas={`"header header" "nav main"`}
               gridTemplateRows={'auto 1fr'} gap={6} gridTemplateColumns={'20% 1fr'}>
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
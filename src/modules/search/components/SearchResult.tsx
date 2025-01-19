import React, {ChangeEvent, useEffect} from "react"
import {userApi} from "../../user/store/services/user.services";
import {useSelector} from "react-redux";
import * as sessionSelectors from "../../user/store/selectors/session";
import {Spinner} from "../../../common/components/Spinner/Spinner";
import {Box, Grid2, Stack} from "@mui/material";
import {SearchCard} from "./SearchCard";
import {Pagination} from "@mui/lab";
import {useSearchParams} from "react-router-dom";

export const SearchResult = () => {
    const token = useSelector(sessionSelectors.userToken);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        setSearchParams(prev => {
            prev.set('page', page.toString());
            return prev;
        });
    }

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams(prev => {
                prev.set('page', '1');
                return prev;
            });
        }
    }, []);

    const {
        data: dataUsers,
        isFetching,
        isUninitialized,
    } = userApi.useGetUserListQuery({token}, {skip: !token});

    if (isUninitialized || isFetching) return <Spinner/>;

    if (!dataUsers) return <div>Something went wrong</div>;

    return (
        <Stack height={'100%'} width={'100%'} justifyContent={'space-between'} gap={2}>
            <Grid2 display={'grid'} gridTemplateColumns={'repeat(4,1fr)'} gap={2}>
                {dataUsers.data.map((user) => (
                    <SearchCard key={user._id} user={user}/>
                ))}
            </Grid2>
            <Box marginX={'auto'} width={'max-content'}>
                <Pagination page={+(searchParams.get('page') ?? 1)} onChange={handleChange}
                            variant="outlined" shape="rounded" count={Math.ceil(dataUsers.count / 8)}/>
            </Box>
        </Stack>
    )
}
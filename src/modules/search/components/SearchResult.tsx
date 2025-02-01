import React, {ChangeEvent, useEffect, useState} from "react"
import {userApi} from "../../user/store/services/user.services";
import {useSelector} from "react-redux";
import * as sessionSelectors from "../../user/store/selectors/session";
import {Spinner} from "../../../common/components/Spinner/Spinner";
import {Box, Grid2, Pagination, Stack} from "@mui/material";
import {SearchCard} from "./SearchCard";
import {useSearchParams} from "react-router-dom";
import {userDto} from "../../user/types/user.types";
import {AllParams, useSearchCards} from "../hooks/useSearchCards";

const handleSearch = ({
                          page,
                          age,
                          gender,
                          city,
                          searchType,
                          avatar,
                          search
                      }: AllParams, data: userDto[], count: number) => {
    const today = new Date();
    const getAge = (birthday: Date) => {
        const diff = today.getTime() - birthday.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    return data.slice((+(page) - 1) * count, +(page) * count)
        .filter(user => {
            if (!user.map_data) return false;
            const usersAge = user.map_data.birthday ? getAge(new Date(user.map_data.birthday)) : null;
            if (gender && (!user.map_data.gender || user.map_data.gender !== gender))
                return false;
            if (avatar && !user.map_data.avatar)
                return false;
            if (age && (!usersAge || usersAge < +(age[0]) || usersAge > +(age[1])))
                return false;
            if (city && (!user.map_data.city || user.map_data.city !== city))
                return false;
            if (searchType && (!user.map_data.searchType || user.map_data.searchType !== searchType))
                return false;
            return !(search && !user.name.toLowerCase().includes(search.toLowerCase()));

        });
}

export const SearchResult = () => {
    const token = useSelector(sessionSelectors.userToken);
    const [searchParams, setSearchParams] = useSearchParams();

    const [dataAfterParams, setDataAfterParams] = useState<userDto[] | null>(null);

    const [dataCount] = useState(8);

    const {serializedParams: serializedSearchParams} = useSearchCards();

    const {data: dataUsers} = userApi.useGetUserListQuery({token}, {skip: !token});

    useEffect(() => {
        if (dataUsers) {
            setDataAfterParams(handleSearch(serializedSearchParams, dataUsers.data, dataCount));
        }
    }, [dataUsers, serializedSearchParams]);

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams(prev => {
                prev.set('page', '1');
                return prev;
            });
        }
    }, []);

    const handleChange = (_event: ChangeEvent<unknown>, page: number) => {
        setSearchParams(prev => {
            prev.set('page', page.toString());
            return prev;
        });
    }

    if (!dataAfterParams || !dataUsers) return <Spinner/>;

    return (
        <Stack height={'100%'} width={'100%'} justifyContent={'space-between'} gap={2}>
            <Grid2 display={'grid'}
                   gridTemplateColumns={{
                       lg: 'repeat(4,1fr)',
                       md: 'repeat(3,1fr)',
                       sm: 'repeat(2,1fr)',
                       xs: 'repeat(1,1fr)'
                   }} gap={2}>
                {dataAfterParams.map((user) => (
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
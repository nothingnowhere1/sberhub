import React from "react"
import {Box, Button, Checkbox, FormControlLabel, MenuItem, Slider, Stack, Typography} from "@mui/material";
import {GendersText, SearchTypeText} from "../../user/types/user.types";
import {Controller, useForm} from "react-hook-form";
import {SelectInput} from "../../../common/components/Inputs/SelectInput";
import {CityInput} from "../../../common/components/Inputs/CityInput";
import {useSearchParams} from "react-router-dom";

interface SearchParams {
    age: number[],
    gender: string,
    city: string,
    searchType: string,
    avatar: boolean,
}

export const SearchFields = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {control, handleSubmit, reset} = useForm<SearchParams>({
        defaultValues: {
            age: searchParams.get('age')?.split('-').map((el) => +(el)) || [18, 37],
            avatar: searchParams.get('avatar') === 'true' ?? false,
            city: searchParams.get('city') ?? '',
            gender: searchParams.get('gender') ?? '',
            searchType: searchParams.get('searchType') ?? '',
        }
    });

    const onSubmit = (data: SearchParams) => {
        setSearchParams((prev) => {
            Object.entries(data).forEach(([key, value]) => {
                if (!value || (key === 'age' && value[0] === 18 && value[1] === 37)) {
                    prev.delete(key);
                    return;
                }
                if (key === 'age') {
                    prev.set(key, value.join('-'));
                    return;
                }
                prev.set(key, value);
            });
            return prev;
        })
    }

    const onReset = () => {
        setSearchParams((prev) => {
            prev.delete('age');
            prev.delete('avatar');
            prev.delete('city');
            prev.delete('searchType');
            prev.delete('gender');
            return prev;
        })
        reset({
            age: [18, 37],
            avatar: false,
            city: '',
            gender: '',
            searchType: '',
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack padding={2} gap={1} bgcolor={'white'} borderRadius={'7px'}>
                <Stack>
                    <Typography>Пол</Typography>
                    <SelectInput margin={'dense'} control={control} name={'gender'}
                                 items={Object.keys(GendersText).map((el) => (
                                     <MenuItem value={el} key={el}>
                                         {GendersText[el]}
                                     </MenuItem>
                                 ))}/>
                </Stack>
                <Stack>
                    <Typography>Положение</Typography>
                    <SelectInput margin={'dense'} control={control} name={'searchType'}
                                 items={Object.keys(SearchTypeText).map((el) => (
                                     <MenuItem value={el} key={el}>
                                         {SearchTypeText[el]}
                                     </MenuItem>
                                 ))}/>
                </Stack>
                <Stack>
                    <Typography>Город</Typography>
                    <CityInput margin={'dense'} control={control} name={'city'}/>
                </Stack>
                <Box>
                    <Controller control={control} name={'avatar'} render={({field}) =>
                        <FormControlLabel
                            control={<Checkbox checked={field.value} {...field}/>}
                            label={'С фотографией'}
                        />
                    }/>
                </Box>
                <Stack>
                    <Typography>Возраст</Typography>
                    <Controller control={control} name={'age'} render={({field}) =>
                        <Slider
                            {...field}
                            valueLabelDisplay="auto"
                            max={37}
                            min={18}
                            marks={[{value: 18, label: '18'}, {value: 37, label: '37'}]}
                        />
                    }/>
                </Stack>
                <Button type={'submit'}>
                    Поиск по фильтрам
                </Button>
                <Button onClick={onReset}>
                    Удалить фильтры
                </Button>
            </Stack>
        </form>
    )
}
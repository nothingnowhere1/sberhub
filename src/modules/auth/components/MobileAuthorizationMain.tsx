import {TabContext, TabPanel} from "@mui/lab";
import {Box, styled, Tab, Tabs} from "@mui/material";
import AuthorizationMainSection from "./AuthorizationMainSection";
import RegistrationMainSection from "./RegistrationMainSection";
import React, {useState} from "react";

const CustomTabs = styled(Tabs)(() => ({
    '& .MuiTabs-indicator': {
        backgroundColor: 'transparent',
    },
}))

const CustomTab = styled(Tab)(({theme}) => ({
    borderRadius: '8px',
    padding: '10px 20px',
    margin: '0 4px',
    textTransform: 'none',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        background: `linear-gradient(180deg, white 70%, lightblue 100%)`,
    },
    '&.Mui-selected': {
        background: `linear-gradient(180deg, white 70%, lightblue 100%)`,
        color: 'black',
    },
}));

export const MobileAuthorizationMain = () => {

    const [value, setValue] = useState('auth');

    return (
        <>
            <TabContext value={value}>
                <Box marginX={'auto'} marginTop={2}>
                    <CustomTabs value={value} onChange={(_event, value) => setValue(value)}>
                        <CustomTab label='Авторизация' value={"auth"}/>
                        <CustomTab label="Регистрация" value={'reg'}/>
                    </CustomTabs>
                </Box>
                <TabPanel value={"auth"}>
                    <AuthorizationMainSection/>
                </TabPanel>
                <TabPanel value={"reg"}>
                    <RegistrationMainSection/>
                </TabPanel>
            </TabContext>
        </>
    )
}
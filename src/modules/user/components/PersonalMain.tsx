import {Box, Button, Stack, SxProps, Theme} from "@mui/material";
import React, {useState} from "react";
import UserAvatar from "../../../common/components/Avatar/UserAvatar";
import {ChangePhotoDialog} from "../dialogs/ChangePhotoDialog";
import {Edit, Photo} from "@mui/icons-material";
import {PersonalMainInfo} from "./PersonalMainInfo";
import {PersonalMainEdit} from "./PersonalMainEdit";

type PageType = 'info' | 'edit';

const buttonStylesSx: SxProps<Theme> = {
    display: 'flex',
    gap: 1,
    justifyContent: "space-between",
    color: 'rgba(239, 135, 172, 1)',
    fontSize: '20px',
    textTransform: 'none',
    textWrap: 'nowrap'
}

export default function PersonalMain() {

    const [pageState, setPageState] = useState<PageType>('info');

    const [openModal, setOpenModal] = useState(false);

    const handlePageChange = () => {
        setPageState(prev => prev === 'info' ? 'edit' : 'info');
    }


    return (
        <>
            <Box padding={7}>
                <Stack direction={'row'} padding={4} gap={8} borderRadius={'16px'} sx={{
                    background: '#ffffff'
                }}>
                    <Stack gap={2}>
                        <UserAvatar size={300} variant={'rounded'}/>
                        <Button onClick={handlePageChange} sx={buttonStylesSx}><Edit width={48} height={48}/>Редактировать
                            профиль</Button>
                        <Button onClick={() => setOpenModal(true)} sx={buttonStylesSx}><Photo width={48} height={48}/>
                            Изменить фотографию
                        </Button>
                    </Stack>
                    {
                        pageState === 'info' ? <PersonalMainInfo/> :
                            <PersonalMainEdit handlePageChange={handlePageChange}/>
                    }
                </Stack>
            </Box>
            <ChangePhotoDialog open={openModal} close={() => setOpenModal(false)}/>
        </>
    )
}
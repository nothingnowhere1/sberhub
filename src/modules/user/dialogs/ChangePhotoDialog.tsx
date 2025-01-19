import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {DropZone} from "../../../common/components/DropZone/DropZone";
import React, {useState} from "react";
import {LoadingButton} from "@mui/lab";
import {enqueueSnackbar} from "../../../common/components/Snackbar/slice";
import {userApi} from "../store/services/user.services";
import {useSelector} from "react-redux";
import * as sessionSelectors from "../store/selectors/session";

interface Props {
    open: boolean,
    close: () => void,
}

export const ChangePhotoDialog = ({open, close}: Props) => {

    const {user, token} = useSelector(sessionSelectors.userSessionToken);

    const [avatar, setAvatar] = useState<string | null>(null);

    const [trigger, status] = userApi.useUpdateUserMutation();

    const onSubmit = () => {
        if (!avatar) {
            enqueueSnackbar({message: 'Выберите фотографию', severity: 'error'})
            return;
        }
        if (!user || !token) {
            enqueueSnackbar({message: 'Повторите позднее', severity: 'error'})
            return;
        }
        trigger({
            name: user.name,
            email: user.email,
            token: token,
            id: user._id,
            map_data: {
                ...(user.map_data),
                avatar: avatar
            }
        })
    }

    return (
        <Dialog open={open} onClose={close} maxWidth="sm" fullWidth={true}>
            <DialogContent>
                <DialogTitle>Изменение фотографии</DialogTitle>
                <DropZone onChange={setAvatar}/>
                <DialogActions>
                    <LoadingButton loading={status.isLoading} onClick={onSubmit}>Изменить</LoadingButton>
                    <Button onClick={close}>Отменить</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}
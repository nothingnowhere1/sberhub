import {Avatar, Box, CircularProgress, IconButton, Paper, Stack, Typography} from '@mui/material';
import {Accept, useDropzone} from 'react-dropzone';
import React, {useState} from 'react';
import {Close, CloudUpload} from '@mui/icons-material';
import {base} from "@uploadcare/upload-client";
import {MEDIA_URL} from "../../../Env";
import {enqueueSnackbar} from "../Snackbar/slice";
import {useDispatch} from "react-redux";

interface Props {
    onChange: (url: string | null) => void;
    value?: string | null;
}

const acceptFileTypes: Accept = {
    'img/jpg': ['.jpg'],
    'img/png': ['.png'],
    'img/heic': ['.heic', '.heif'],
    'img/jpeg': ['.jpeg']
};

type statusTypes = 'processing' | 'finish' | 'noPhoto';

export const DropZone = ({value, onChange}: Props) => {
    const [fileUrl, setFileUrl] = useState<string | null | undefined>(value);
    const [status, setStatus] = useState<statusTypes>('noPhoto');
    const dispatch = useDispatch()

    const onDrop = async (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setStatus('processing');
            try {
                const result = await base(
                    acceptedFiles[0],
                    {
                        publicKey: 'e5b359c12213cc9bea38',
                        store: 'auto',
                        metadata: {
                            subsystem: 'uploader',
                            pet: 'cat'
                        }
                    }
                )

                const avatarUrl = `${MEDIA_URL}/${result.file}/`;

                onChange(avatarUrl);
                setFileUrl(avatarUrl)
                setStatus('finish')
            } catch (err) {
                setStatus('noPhoto');
                dispatch(enqueueSnackbar({
                    message: 'Произошла ошибка при загрузке фото. Повторите загрузку.',
                    severity: 'error'
                }));
            }

        }
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: acceptFileTypes
    });

    const deleteFile = () => {
        setFileUrl(null);
        onChange(null);
    };

    if (status === 'processing') {
        return (
            <Box>
                <Paper style={{
                    padding: '20px',
                    gap: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Typography>Загрузка...</Typography>
                    <CircularProgress/>
                </Paper>
            </Box>
        );
    }

    if ((status === 'finish' && fileUrl) || fileUrl) {
        return (
            <Box>
                <Paper style={{
                    padding: '20px',
                    gap: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Typography>Превью</Typography>
                    <Stack direction={'row'} alignItems={'center'} sx={{
                        padding: 2
                    }}>
                        <Avatar style={{
                            width: '150px',
                            height: '150px'
                        }} src={fileUrl}/>
                        <IconButton color="primary" aria-label="upload picture" component="span"
                                    style={{marginLeft: 'auto', color: 'red'}} onClick={deleteFile}>
                            <Close/>
                        </IconButton>
                    </Stack>
                </Paper>
            </Box>
        );
    }

    return (
        <Box>
            <Box
                {...getRootProps()}
                sx={{
                    cursor: 'pointer',
                    display: 'block',
                    width: '100%',
                    p: 2,
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                }}
            >
                <input {...getInputProps()} />
                <Box
                    sx={{
                        border: '2px dashed #ccc',
                        borderRadius: 1,
                        p: 3,
                        textAlign: 'center',
                        backgroundColor: isDragActive ? '#f0f8ff' : 'transparent',
                        transition: 'background-color 0.3s ease'
                    }}
                >
                    <CloudUpload sx={{fontSize: 40, color: 'primary.main', mb: 1}}/>
                    <Typography variant="body1" gutterBottom>
                        {isDragActive ? 'Перенесте фотографии сюда...' : 'Перенесите фото или нажмите для выбора'}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
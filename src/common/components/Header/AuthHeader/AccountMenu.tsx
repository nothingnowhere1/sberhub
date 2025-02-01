import React from 'react';
import {Logout, Person} from '@mui/icons-material';
import {Divider, ListItemIcon, Menu, MenuItem, MenuProps, PaperProps} from '@mui/material';
import {AccountCard} from "./AccountCard";
import Link from "../../Link/Link";
import {SignOut} from "../../../core/api";
import {RoutePool} from "../../../../Route";

interface Props {
    onClose: () => void;
    anchorEl: MenuProps['anchorEl'];
}

export default function AccountMenu({onClose, anchorEl}: Props) {
    const open = Boolean(anchorEl);

    const PaperProps: Partial<PaperProps> = {
        elevation: 0,
        sx: {
            overflow: 'visible',
            boxShadow: 'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -15px 15px 40px -4px',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
            },
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
            }
        }
    };

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                slotProps={{
                    paper: PaperProps
                }}
                sx={{boxShadow: 0}}
                onClose={onClose}
                onClick={onClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <AccountCard/>
                <Divider/>
                <MenuItem>
                    <Link noLinkStyles to={RoutePool.PersonalURL.url}>
                        <ListItemIcon><Person fontSize="small"/></ListItemIcon>
                        Профиль
                    </Link>
                </MenuItem>
                <MenuItem onClick={SignOut}>
                    <ListItemIcon><Logout fontSize="small"/></ListItemIcon>
                    Выйти из аккаунта
                </MenuItem>
            </Menu>
        </>
    );
}

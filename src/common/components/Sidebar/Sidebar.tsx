import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {Close as CloseIcon, Home, Info, Menu as MenuIcon, People, Search} from '@mui/icons-material';
import {closeSidebar, toggleSidebar} from "./slice/sidebar";
import {sidebarSelector} from "./selectors/sidebar";
import Link from "../Link/Link";
import {RoutePool} from "../../../Route";

const Sidebar = () => {
    const isOpen = useSelector(sidebarSelector);
    const dispatch = useDispatch();

    const onClose = useCallback(() => {
        dispatch(closeSidebar());
    }, [])

    const onToggle = useCallback(() => {
        dispatch(toggleSidebar());
    }, [])

    return (
        <>
            <IconButton onClick={onToggle}>
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={onClose}
            >
                <div style={{width: 250}}>
                    <IconButton onClick={onClose} style={{margin: '8px'}}>
                        <CloseIcon/>
                    </IconButton>
                    <List>
                        <Link to={RoutePool.MainURL.url} noLinkStyles>
                            <ListItem>
                                <ListItemIcon><Home/></ListItemIcon>
                                <ListItemText title={'Главная'}>
                                    Главная
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link to={RoutePool.SearchURL.url} noLinkStyles>
                            <ListItem>
                                <ListItemIcon><Search/></ListItemIcon>
                                <ListItemText title={'Поиск'}>
                                    Поиск
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link to={RoutePool.About.url} noLinkStyles>
                            <ListItem>
                                <ListItemIcon><Info/></ListItemIcon>
                                <ListItemText title={'О нас'}>
                                    О нас
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link to={RoutePool.PersonalURL.url} noLinkStyles>
                            <ListItem>
                                <ListItemIcon><People/></ListItemIcon>
                                <ListItemText title={'Персональная'}>
                                    Персональная
                                </ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default Sidebar;
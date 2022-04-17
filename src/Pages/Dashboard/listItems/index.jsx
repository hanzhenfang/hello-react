import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import StarBorder from '@material-ui/icons/StarBorder';

export default function MainListItems() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Welcome
                    </ListSubheader>
                }
            >
                <ListItem component={NavLink} to='home' >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="首页" />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="商品" />
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button >
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="品类管理" />
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem button >
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="商品管理" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}

export function SecondaryListItems() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="首页" />
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button >
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
        </div>
    );
}
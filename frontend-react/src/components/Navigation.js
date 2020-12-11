import React from "react";
import {
    Link,
} from 'react-router-dom';
import { AppBar, Toolbar, Container, List, ListItem, ListItemText } from "@material-ui/core";
//import SideDrawer from './SideDrawer';

const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Dersler", path: "/dersler/1" }
];
class Navigation extends React.Component {
    constructor(props){ 
        super(props); 
        this.state = { color : '#4cb96b' }; 
    } 
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Container>
                            <List component="nav" aria-labelledby="main navigation">
                                {navLinks.map(({ title, path }) => (
                                    <Link to={path} key={title}>
                                        <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    </Link>
                                    ))
                                }
                            </List>
                            {/*<SideDrawer navLinks={navLinks} />*/}
                        </Container>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navigation;
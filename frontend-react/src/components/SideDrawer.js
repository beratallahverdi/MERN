import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

class SideDrawer extends React.Component {
    constructor(props){ 
        super(props); 
        this.state = { color : '#4cb96b', right:false};  
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    sideDrawerList(anchor){
        return (
            <div role="presentation"
              onClick={(event) => this.toggleDrawer("right", false, event)}
              onKeyDown={(event) => this.toggleDrawer("right", false, event)}
            >
              <List component="nav">
                {this.props.navLinks.map(({ title, path }) => (
                  <Link to={path}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </div>
        );
    }
    toggleDrawer(anchor, open, event){
        if ( event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") ) {
            return
        }
        this.setState({[anchor]: open});
    }
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <IconButton edge="start" aria-label="menu" onClick={(event) => this.toggleDrawer("right", true, event)}>
                    <Menu />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={this.state.right}
                    onOpen={(event) => this.toggleDrawer("right", true, event)}
                    onClose={(event) => this.toggleDrawer("right", false, event)}
                >
                    {this.sideDrawerList("right")}
                </Drawer>
            </React.Fragment>
        );
    }
}

export default SideDrawer; 
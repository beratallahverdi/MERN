import React from "react";
import { Container } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { Divider, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Alert, AlertTitle } from "@material-ui/lab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
const styles = {
  tableCellHead: {
    fontSize: 16,
  },
  tableCellBody: {
    fontSize: 10,
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#333333",
    },
  },
};

const programlar = [
  {
    id: "715701",
    ustid: "7158",
    ad: "ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ",
  },
  {
    id: "716025",
    ustid: "7579",
    ad: "MAKİNE MÜHENDİSLİĞİ",
  },
  {
    id: "716026",
    ustid: "7580",
    ad: "YAZILIM MÜHENDİSLİĞİ",
  },
  {
    id: "715781",
    ustid: "7239",
    ad: "GIDA MÜHENDİSLİĞİ",
  },
  {
    id: "715783",
    ustid: "7240",
    ad: "İNŞAAT MÜHENDİSLİĞİ",
  },
  {
    id: "716081",
    ustid: "7658",
    ad: "HUKUK",
  },
  {
    id: "999999",
    ustid: "7658",
    ad: "BERAT",
  },
];

const STableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const STableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      ders: "",
      names: [],
      open: false,
      style: props.classes,
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  componentDidMount() {
    let dersKodu = this.props.match.params.dersKodu;
    this.setState({ ders: dersKodu });
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }
  render() {
    return (
      <Container maxWidth="lg">
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Persistent drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="persistent" anchor="left" open={this.state.open}>
            <div>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main>
            <div>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
              <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableHead>
                    <STableRow>
                      <STableCell className={this.state.style.tableCellHead}>
                        Ders Adı
                      </STableCell>
                      <STableCell>Ders Kodu</STableCell>
                      <STableCell>id</STableCell>
                    </STableRow>
                  </TableHead>
                  <TableBody>
                    {programlar.map((row) => (
                      <STableRow key={row.id}>
                        <STableCell
                          className={this.state.style.tableCellBody}
                          component="th"
                          scope="row"
                        >
                          {row.ad}
                        </STableCell>
                        <STableCell>{row.id}</STableCell>
                        <STableCell>{row.ustid}</STableCell>
                      </STableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </main>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Contact);

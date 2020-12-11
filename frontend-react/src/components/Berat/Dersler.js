import React from 'react';
import {Container} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ChipSelect from '../ChipSelect';
const uri = "http://192.168.1.128:8080/dersler/getDerslerByDersKodu/";

const programlar = [
    {
        id: "715701",
        ustid: "7158",
        ad: "ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ"
    },
    {
        id: "716025",
        ustid: "7579",
        ad: "MAKİNE MÜHENDİSLİĞİ"
    },
    {
        id: "716026",
        ustid: "7580",
        ad: "YAZILIM MÜHENDİSLİĞİ"
    },
    {
        id: "715781",
        ustid: "7239",
        ad: "GIDA MÜHENDİSLİĞİ"
    },
    {
        id: "715783",
        ustid: "7240",
        ad: "İNŞAAT MÜHENDİSLİĞİ"
    },
    {
        id: "716081",
        ustid: "7658",
        ad: "HUKUK"
    },
    {
        id: "999999",
        ustid: "7658",
        ad: "BERAT"
    },
];

class Dersler extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            ders:"",
            names: []
        };
    }

    componentDidMount() {
        let dersKodu = this.props.match.params.dersKodu;
        this.setState({ders:dersKodu});
        fetch(uri+this.props.match.params.dersKodu)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.Data,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }
    
    render() {
        const { error, isLoaded, items } = this.state;
        const chipSelect = <ChipSelect options={programlar} mContext={this}/>;
        if(error){
            return (
                <div>
                    <Container>
                        <h2>Dersler View</h2>
                        <p>{error.message}</p>
                    </Container>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div>
                    <Container>
                        <h2>Dersler View</h2>
                        <p>Loading</p>
                    </Container>
                </div>
            );
        } else {
            return (
                <div>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <h2>Dersler View</h2>
                            </Grid>
                            <Grid item md={9}>
                                {chipSelect}
                            </Grid>
                        </Grid>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Ders Adı</TableCell>
                                        <TableCell align="right">Ders Kodu</TableCell>
                                        <TableCell align="right">TU</TableCell>
                                        <TableCell align="right">Kredi</TableCell>
                                        <TableCell align="right">AKTS</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {items.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell component="th" scope="row">{row.DERS_ADI_TR}</TableCell>
                                        <TableCell align="right">{row.DERS_KODU}</TableCell>
                                        <TableCell align="right">{row.TU}</TableCell>
                                        <TableCell align="right">{row.KREDI}</TableCell>
                                        <TableCell align="right">{row.AKTS}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </div>            
            );
        }
    }
}

export default Dersler; 
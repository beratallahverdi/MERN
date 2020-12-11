import React from "react";
import { Input, InputLabel, Chip, Select, FormControl, MenuItem, FormHelperText } from "@material-ui/core";
//import SideDrawer from './SideDrawer';


class ChipSelect extends React.Component {
    constructor(props){ 
        super(props); 
        this.state = { 
            color : '#4cb96b',
            options: this.props.options,
            selected: [],
            hasError: false,
            context: this.props.mContext
        };
        this.handleChange = this.handleChange.bind(this);
        this.chipRender = this.chipRender.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.chipsFetch = this.chipsFetch.bind(this);
    }


    chipRender(val,index){
        let json_data = JSON.parse(val);
        return (<Chip key={json_data.id} label={json_data.ad} className="chip" />);
    }

    handleChange(event) {
        this.setState({
            selected: event.target.value,
        });
        //this.setState({ selected: event.target.value });
    }

    handleClick() {
        this.setState(state => ({ hasError: !state.selected }));
    }

    chipsFetch(data){
        let PROG_IDs = [];
        let {context} = this.state;
        // eslint-disable-next-line array-callback-return
        data.map((val, index) => {
            PROG_IDs.push(JSON.parse(val).id);
        });
        if(PROG_IDs.length>0){
            fetch("http://192.168.1.128:8080/dersler/getDerslerByProgramlar",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"PROG_IDs":PROG_IDs})
            })
            .then(function(res){ return res.json(); })
            .then(
                (result) => {
                    context.setState({
                        isLoaded: true,
                        items: result.Data
                    });
                },
                (error) => {
                    context.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        }
        else{
            context.componentDidMount();
        }
    }
    
    render() {
        const { selected, hasError, options } = this.state;
        return (
            <div>
                <FormControl className="formControl" width={1}>
                    <InputLabel id="demo-mutiple-chip-label" width={1}>Chip</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        name="chiplet"
                        multiple={true}
                        value={selected}
                        onFocus={(e) => {this.chipsFetch(selected)}}
                        onClick={() => this.handleClick()}
                        onChange={(event) => this.handleChange(event)}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className="chips">
                                {selected.map(this.chipRender)}
                            </div>
                        )}
                        >
                        {options.map((option) => (
                            <MenuItem key={option.id} value={JSON.stringify(option)}>
                                {option.ad}
                            </MenuItem>
                        ))}
                    </Select>
                    {hasError && <FormHelperText>This is required!</FormHelperText>}
                </FormControl>
            </div>
        );
    }
}

export default ChipSelect;


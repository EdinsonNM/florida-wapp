import React, {useEffect} from 'react';
import {
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    makeStyles
} from '@material-ui/core';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
    checkbox: {
        color: 'white',
        borderColor: '#ffffff',
        '&:before': {
            borderColor: 'white'
        }
    }
});

export default function FilterOptionsCheckbox({
    title,
    data = [],
    keyName,
    label,
    handleChangeFilter,
    filterId,
    selected
}) {
    const options = {};
    const classes = useStyles();
    data.forEach(item => {
        options[item[keyName]] = selected.includes(item[keyName]);
    });
    const [state, setState] = React.useState(options);
    const handleChange = name => event => {
        setState({...state, [name]: event.target.checked});
        handleChangeFilter({key: filterId, value: name});
    };
    return (
        <Grid container className="pr-20 pl-20 text-white">
            <Grid item xs={12}>
                <Typography
                    className="fs-16 fw-200 text-white mb-20 mt-10"
                    color="text-primary"
                    align="left"
                >
                    {title}
                </Typography>
                <FormGroup row style={{textAlign: 'left'}}>
                    {data.map(item => (
                        <Grid
                            key={`chk-${filterId}-${item[keyName]}`}
                            item
                            xs={6}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        classes={classes.checkbox}
                                        checked={state[item[keyName]]}
                                        onChange={handleChange(item[keyName])}
                                        value={`chk${item[keyName]}`}
                                    />
                                }
                                label={item[label]}
                            />
                        </Grid>
                    ))}
                </FormGroup>
            </Grid>
        </Grid>
    );
}

import React from 'react'
import useStyles from './styles'

const Form = () => {
    const classes = useStyles();
    return (
        <h1 className={classes.Form}>
            Upload your Pictures here...
        </h1>
    );
}

export default Form;
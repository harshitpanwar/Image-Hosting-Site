import React from 'react'
import useStyles from './styles'
import './Form.css';

const Form = () => {
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <h1 className={classes.form}>
            Upload your Pictures here...
            </h1>

            <div className={classes.Input}>
                <a>Enter Username</a>
                <div class="boxdiv"><input className={classes.box}></input></div>

                <a>Enter Title of the post</a>
                <div class="boxdiv"><input className={classes.box}></input></div>

                <a>Enter Description of the post</a>
                <div class="boxdiv"><input className={classes.box}></input></div>

                <a>Enter Tags</a>
                <div class="boxdiv"><input className={classes.box}></input></div>

                <div class="upload-button">
                    <button class="uploadbutton">Upload a file</button>
                    <input type="file" name="file"/>
                </div>
            </div>
        </div>
    );
}

export default Form;
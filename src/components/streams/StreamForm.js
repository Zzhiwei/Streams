import React from 'react';
import { Field, reduxForm } from 'redux-form';
//reduxForm used in same way as connect

//a field is anything that solicits an input
//component prop of a field is the thing that's actually gonna show up
//passing prop component -> don't invoke!
//everytime the field component calls component function it is gonna pass in some arg
//any other prop passed into Field is gonna turn up in arg object passed into component fx

class StreamForm extends React.Component {
    renderError = ({error, touched}) => {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    renderInput = ({input, label, meta}) => {        
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (    
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    //some arg other than event is gonna be passed into this function by handleSubmit
    //event.preventDefault() is done by redux form so you don't have to do
    //the arg is gonna be the info submitted to the form 
    onSubmit = formValues => {   
        this.props.onSubmit(formValues);
    }

    render() {    
        console.log(this.initialValues);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
        
    }
};


//why created outside? dk
//if name of prop of returned error object matches name of any Field, redux form takes 
//the error message and passes it into Field component fx
//used by redux form, why never used anywhere: no need to worry, just have to wire up with redux form
const validate = (formValues) => {
    const errors = {};
    
    if (!formValues.title) {
        errors.title = 'you must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'you must enter a description';
    }

    return errors;
}


export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);


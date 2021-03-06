import React,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { submitForm } from '../actions/index';



const renderInput = field => {  
  return(
    <div className={`form-group ${field.meta.touched && field.meta.error ? ' has-error' : '' }`}>
        <input {...field.input} className='form-control' type={field.type} 
        placeholder={field.meta.touched && field.meta.error ? field.meta.error : field.input.name}/>
    </div>
  )
}

const renderTextarea = field => { 
  return(
    <div className={`form-group ${field.meta.touched && field.meta.error ? ' has-error' : '' }`}>
        <textarea {...field.input} className='form-control' type={field.type}
        placeholder={field.meta.touched && field.meta.error ? field.meta.error : field.input.name}/>
    </div>
  )
}

class Contact extends Component{

    render(){
        const { handleSubmit,reset,onSubmitSuccess,onSubmitFail } = this.props;
        return(
            <div className='container noPadding' id='contact' href='#contact'>
                <h1 className='text-center'>Contact</h1>
                <form onSubmit={handleSubmit(submitForm)} className='col-xs-12 col-sm-6'>
                    <Field component={renderInput} type='text' className='form-control' placeholder='Name' name='Name' /> 
                    <Field component={renderInput} type='email' className='form-control' placeholder='Email' name='Email' />
                    <Field component={renderInput} type='text' className='form-control' placeholder='Phone' name='Phone' />
                    <Field component={renderTextarea} className='form-control' placeholder='Message' name='Message' />
                    <button type='submit'id='mybtn' className='btn center-block' >Send</button>
                </form>
                <div className='text-center hidden-xs col-sm-6' >
                    <i id='contactText'className="fa fa-paper-plane-o" aria-hidden="true" id='plane'></i> 
                </div>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.Name){
        errors.Name = 'Please enter your name'
    }
    if(!values.Email){
        errors.Email = 'Please enter your email'
    }
    if(!values.Message){
        errors.Message = 'Please enter your message'
    }
    return errors;
}


export default reduxForm({
    form:'ContactForm',
    validate
},null,{submitForm})(Contact);
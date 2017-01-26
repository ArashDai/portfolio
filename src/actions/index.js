import axios from 'axios';

export const SUBMIT_FORM = 'SUBMIT_FORM'

export function submitForm(values,dispatch,props){
    console.log(values,dispatch,props)
    const contactInfo = {
        name:values.Name,
        phone:values.Phone,
        email:values.Email,
        message:values.Message
    }

    const request = axios.post('/contact',contactInfo)
    .then(
        () => {  props.reset() },
        () => {  console.log('Something Went Wrong')}
    )
    //right here need to handle success and error response from server
    //  if successful I want to : pop a modal that says you were successful
    //  if failed I want to : pop a modal that says your message failed please try again
    return {
        type:SUBMIT_FORM,
        payload:request
    }
}
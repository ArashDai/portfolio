import axios from 'axios';

export const SUBMIT_FORM = 'SUBMIT_FORM'

const Root = process.env.PORT || 8080;


export function submitForm(props){

    const contactInfo = {
        name:props.Name,
        phone:props.Phone,
        email:props.Email,
        message:props.Message
    }

    const request = axios.post('/contact',contactInfo)
    .then(()=>{
        if(request.PromiseValue.data === 'success'){ console.log('IT WORKED')}
        else if(request.PromiseValue.onerror.length > 0 ){ console.log('Something Went Wrong')}
    })
    //right here need to handle success and error response from server
    //  if successful I want to : pop a modal that says you were successful
    //  if failed I want to : pop a modal that says your message failed please try again
    return {
        type:SUBMIT_FORM,
        payload:request
    }
}
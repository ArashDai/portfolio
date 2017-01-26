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
    const request = axios.post('/contact',contactInfo);
    console.log(request)
    return {
        type:SUBMIT_FORM,
        payload:request
    }
}
import axios from 'axios';


export const SUBMIT_FORM = 'SUBMIT_FORM'


export function submitForm(props){

    const request = props;
    return {
        type:SUBMIT_FORM,
        payload:request
    }
}
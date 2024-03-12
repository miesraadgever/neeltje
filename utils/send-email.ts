import { FormData } from '../src/components/Contact';
import toast from "react-hot-toast";

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';
    console.log(apiEndpoint)
    console.log(data)

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            toast.success("Je email is verstuurd. Bedankt voor je bericht!")
        })
        .catch((err) => {
            toast.error("Je email kon niet worden verstuurd. Probeer later opnieuw!")
        });
}
import { toast } from 'react-toastify';

const handleError = (err: any) => {
    let msg = 'An unexpected error occured';
    if (err.response) {
        const { status } = err.response;
        if (status >= 500) {
            msg = 'An error occured on our servers!';
        } else if (status === 404) {
            msg = "We don't have what you reuested!";
        } else if (err.response.data) {
            msg = err.response.data.msg;
        }
    }

    toast(msg, { type: 'error' });
};

export default handleError;
import { Header } from '../../components/Header';
import './contact.css'

// export default function Contact() {
function Contact() {
    return (
        <main className="mt-6 main">
            {/* <h1 className="text-2xl font-semibold">Contact page</h1> */}
            <h1 className='header'>Contact page</h1>
            <p className="mt-5">To reach me just write an e-mail.</p>
            <a className='btn' href = "mailto: nguyentaidhsp@gmail.com">Send Email</a>
            <p className="mt-5">Or call me by this phone number.</p>
            <a className='btn' href = "tel: 84 334099085">Call</a>
        </main>
    );
}

export default Contact;

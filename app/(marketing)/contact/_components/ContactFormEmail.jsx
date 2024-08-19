export default function ContactFormEmail({ name, email, phone, company, message }) {
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Phone Number: {phone}</li>
                <li>Company: {company}</li>
                <li>Message: {message}</li>
            </ul>
        </div>
    );
}

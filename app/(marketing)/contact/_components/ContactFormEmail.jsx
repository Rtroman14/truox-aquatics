export default function ContactFormEmail({ name, email, phone, company, message }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
            <p>Company: {company}</p>
            <p>Message: {message}</p>
        </div>
    );
}

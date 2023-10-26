import {text} from "stream/consumers";
export default RegisterUserForm;

function RegisterUserForm (props: any) {
return (
    <form onSubmit={props.onSubmit}>
        <input type = "text" name = "login"/>
        <br/>
        <input type = "password" name = "password"/>
        <button type = "submit">Register</button>
    </form>
);
}
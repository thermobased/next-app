function RegisterForm (props) {

    return(

        <div>
            <form onSubmit={props.submit}>
                <input type = "text" name = "login"/>
                <br/>
                <input type = "password" name = "password"/>
                <br/>
                <button type = "submit" value = "register" name = "action">Register</button>
            </form>
        </div>

    )

}
export default RegisterForm;
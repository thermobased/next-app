function LoginForm (props) {

    return(

        <div>
            <form onSubmit={props.submit}>
                <input type = "text" name = "login"/>
                <br/>
                <input type = "password" name = "password"/>
                <br/>
                <button type = "submit" value = "login" name = "action" disabled={props.isDisabled}>Login</button>
            </form>
        </div>

    )

}
export default LoginForm;
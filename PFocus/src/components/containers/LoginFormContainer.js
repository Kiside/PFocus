import LoginForm from "../presentational/LoginForm.jsx";


function LoginFormContainer()
{

    const handleLoginClick = (user, psw) =>
    {
        console.log(`result: ${user} - ${psw}`);
    }

    return (<LoginForm onLoginClick={handleLoginClick}/>);

}

export default LoginFormContainer;
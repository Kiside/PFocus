import PropTypes from "prop-types";
import '../common/Modal.css';
import {useState} from "react";

function LoginForm({onLoginClick})
{

    const [userField, setUserField] = useState('');
    const [pswField, setPswField] = useState('');

    return(
        <div className="overlay">
            <div className="modal">
                <form>
                    <input className="userNameInput" type="text"
                           onChange={(e) => setUserField(e.target.value)}/>
                    <input className="pswNameInput" type="text"
                           onChange={(e) => setPswField(e.target.value)}/>
                    <button onClick={() => onLoginClick(userField,pswField)}>Login</button>
                </form>
            </div>
        </div>
    )

}

LoginForm.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
}

export default LoginForm;
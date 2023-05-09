import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Inputs from './Inputs';

const LoginPage = () => {
    return (
        <>
            <section className="login-screen-body">
                <div className="login-screen-content">
                    <div className="login-screen-heading">
                        <h1>Signin to your</h1>
                        <h1>PopX account</h1>
                    </div>
                    <div className="landing-screen-desc">
                        <p>Lorem ipsum dolor sit amef,</p>
                        <p>consectetur adipiscing elit.</p>
                    </div>
                    <div className="landing-screen-inputs">

                        <Inputs InputData={InputData} />

                    </div>

                    <div className="login-btn">
                        <button>Login</button>
                    </div>






                </div>
            </section>
        </>
    )
}

export default LoginPage


const InputData = [
    {
        id: 1,
        label: 'Email Address',
        placeholder: 'Enter Email Address'
    },
    {
        id: 2,
        label: 'Password',
        placeholder: 'Enter Password'
    }
]
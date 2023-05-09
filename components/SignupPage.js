import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Inputs from './Inputs';


const SignupPage = () => {
    return (
        <>
            <section className='signup-screen-body'>
                <div className="signup-text-inputs">

                    <div className="login-screen-heading">
                        <h1>Create your</h1>
                        <h1>PopX account</h1>
                    </div>
                    <div className="signup-screen-inputs">

                        <Inputs InputData={InputData} />

                    </div>
                    <div className="radio-groups-input">
                        <p>Are you an Agency?</p>

                        <FormControl style={{ marginTop: '-10px' }}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Yes" className='dark-input-text' control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" className='dark-input-text' control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>

                    </div>
                </div>

                <div className="signup-btn">
                    <div className="create-account-btn">
                        <button>Create Account</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SignupPage



const InputData = [
    {
        id: 1,
        label: 'Full name',
        placeholder: 'Marry Doe'
    },
    {
        id: 2,
        label: 'Phone number',
        placeholder: 'Marry Doe'
    },
    {
        id: 3,
        label: 'Email address',
        placeholder: 'Marry Doe'
    },
    {
        id: 4,
        label: 'Password',
        placeholder: 'Marry Doe'
    },
    {
        id: 5,
        label: 'Company name',
        placeholder: 'Marry Doe'
    }
]
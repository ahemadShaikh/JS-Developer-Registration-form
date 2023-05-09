import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Inputs = ({ InputData }) => {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                {
                    InputData.map(x => {
                        return <TextField
                            key={x.id}
                            required
                            id="outlined-required"
                            label={x.label}
                            defaultValue={x.placeholder}
                        />
                    })
                }

            </Box>
        </>
    )
}

export default Inputs
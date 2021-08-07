import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import logo from '../location_pin.png'
const cities = ['Alexandria', 'Cairo', 'Hurghada', 'Marasi']
export default function CityInput(props) {
    return (
        <Autocomplete
            id={props.id}
            options={props.cities.map(el => el.en)}
            onChange={(e, v) => props.onChange(v)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant='standard'
                    margin='normal'
                    required
                    fullWidth
                    error={props.error}
                    name={props.name}
                    label={props.label}
                    autoFocus={props.autoFocus}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <>
                                <InputAdornment position='start'>
                                    <img src={logo} height='24px' alt='' />
                                </InputAdornment>
                                {params.InputProps.startAdornment}
                            </>
                        )
                    }}
                />)}
        />
    )
}
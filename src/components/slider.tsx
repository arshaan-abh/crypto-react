import {Slider, styled} from "@mui/material"

const ReactSlider = styled(Slider)({
    color: '#33cccc',
    height: 16,
    '& .MuiSlider-rail': {
        opacity: '1',
        color: '#17194a'
    },
    '& .MuiSlider-thumb': {
        height: '1.5rem',
        width: '1.5rem',
        backgroundColor: 'white',
        '&:hover': {
            boxShadow: '0px 0px 0px 8px #ffffff80'
        },
        '&:focus': {
            boxShadow: '0px 0px 0px 8px #ffffff80'
        },
        '&.Mui-focusVisible': {
            boxShadow: '0px 0px 0px 8px #ffffff80'
        },
        '&.Mui-active': {
            boxShadow: '0px 0px 0px 16px #ffffff80'
        }
    },
    '& .MuiSlider-valueLabel': {
        '&:after': {
            content: '"%"'
        },
        fontSize: '1rem',
        background: 'transparent',
        color: 'white',
        fontFamily: '"Noto Sans", sans-serif',
        textTransform: 'uppercase',
        fontWeight: 900
    }
})

export default ReactSlider

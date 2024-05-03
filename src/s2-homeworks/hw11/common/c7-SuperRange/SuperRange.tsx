import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            valueLabelDisplay="auto"
            sx={{ 'color': "#01CB22",
                'width': '150px',
                // '& .MuiSlider-rail': {// стили для слайдера // пишет студент
                // 'width': '170px'}
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ 'color': "#01CB22",
                '& .MuiSlider-rail': {// стили для слайдера // пишет студент
                'width': '147px'}
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

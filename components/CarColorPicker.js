//import Swatch from "./Swatch";
import { useState } from 'react';
import Image from 'next/image';
import Swatches from "./Swatches"

const CarColorPicker = ({ colors }) => {
    const [activeColor, SetActiveColor] = useState(colors[0]);

    return <div>
            <h2>Color Picker</h2>
            <div>
                <Image 
                    src={`/vehicles/crosstrek/colors/crosstrek-${activeColor.slug}.webp`}
                    alt={`Crosstrek ${activeColor.color}`}
                    width={575}
                    height={300}
                />
            </div>
            <Swatches 
                colors={colors} 
                clickHandler={SetActiveColor}
                activeColor={activeColor}
            /> 
                
            <h3>{activeColor.name}</h3>
        </div>
}
export default CarColorPicker;
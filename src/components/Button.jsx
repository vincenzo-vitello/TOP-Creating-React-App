import { useState } from "react";
const COLORS = ['pink', 'brown', 'red']

const Button = () => {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0])

    const handleBtnClick = (color) => {
        setBackgroundColor(color)
    }
    const body = document.querySelector('body')
    body.style.backgroundColor = backgroundColor

    return (
       <>
            <div className="button">
                {COLORS.map((color) => {
                    return (
                        <button 
                            type="button" 
                            key={color} 
                            onClick={() => handleBtnClick(color)} className={backgroundColor === color ? 'selected' : ''}
                            >
                            {color}
                        </button>
                    )
                })}
            </div>
            <div>Background color is: {backgroundColor}</div>
       </>
    )
}

export default Button
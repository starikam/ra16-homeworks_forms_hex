import { useRef, useState } from "react";

const Hex = () => {
    
const [color, setColor] = useState("#567843")
const inputRef: React.MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement >()


const chooseColor = (event: React.FormEvent) => {
    event.preventDefault()


    if (!inputRef.current.value.startsWith("#")) {
        inputRef.current.value = "#" + inputRef.current.value
    }

    if (/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(inputRef.current.value)){ 
        const color : string = inputRef.current.value
        setColor(color) 
    }
    else {setColor("#990303")}

}   

function hexToRgb(hex : string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb: (${parseInt(result[1], 16)},  ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  }


    return (
        <div 
        className="container"
        style={{backgroundColor: color}}
        >
        
        <div className="rgb">
            <form className="colorizer" onSubmit={(event)=> chooseColor(event)}>
                <input className="colorizer__input"
                type="text" 
                ref={inputRef}
                />
                <label 
                className="colorizer__label"
                style={{backgroundColor: color}}
                >{color == "#990303" ? "Ошибка" : hexToRgb(color)  }</label>
            
            </form>
        
        </div>
        </div>
    )
}


export default Hex
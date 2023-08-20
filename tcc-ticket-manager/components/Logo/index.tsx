import React from "react";

interface props {
    imagem:string; // src
}


const Logo : React.FC<props> = ({ imagem}) => {
    return(
        <div className="Logo">
            <img src={imagem} alt="Logo" />
        </div>
    )
}

export default Logo;
import React from "react";

import CSS from 'csstype';


export interface Props{
    label: string;
    to: string
}


  const CustomLink = ({label, to}:Props) => {
    const styles: CSS.Properties = {
        height: '30px',
        width: '150px',
        color: 'white',
        backgroundColor: '#ff5964',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        margin: '5px'
    }
    return (
        <a href={`${to}`}>
            <button style={styles} >
                {label}
            </button>
        </a>
    )
}


export default CustomLink
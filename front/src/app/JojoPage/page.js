import React from 'react';

function Page() {
    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#d3dce4',
        color: '#202831',
    };

    return (
        <div style={centerStyle}>
            <h1>Jojo Presenta:</h1>
            <p>Fushiguro Toji, el más increíble</p>
            <img src='img/Toji_Fushiguro.webp' alt="Fushiguro Toji" />
            <p> Toji Fushiguro (伏黒甚爾 Fushiguro Tōji?) previamente conocido como Toji Zenin (禪院甚爾 Zen'in Tōji?),</p> 
            <p> como Usuario Maldito luego de abandonar el Clan Zenin, </p> 
            <p>    recibió un trabajo de la Asociación de Vasijas del Tiempo con el fin de asesinar a la próxima </p> 
            <p>    Vasija de la Sustancia Estelar del Señor Tengen. Falleció como resultado de su enfrentamiento </p> 
            <p>    contra Satoru Gojo y antes de morir, dejó a Megumi en su cuidado.</p>
        </div>
    );
}

export default Page;
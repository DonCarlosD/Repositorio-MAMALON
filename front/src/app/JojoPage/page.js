import React from 'react';
import Toji from './img/Toji.jpg';

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
            <img src={Toji} alt="Fushiguro Toji" />
            <p> Toji Fushiguro (伏黒甚爾 Fushiguro Tōji?) previamente conocido como Toji Zenin (禪院甚爾 Zen'in Tōji?), 
                es uno de los personajes de la serie manga Jujutsu Kaisen. Fue miembro del Clan Zenin y el padre de Megumi Fushiguro 
                y Tsumiki Fushiguro.
                Durante sus días trabajando como Usuario Maldito luego de abandonar el Clan Zenin, 
                recibió un trabajo de la Asociación de Vasijas del Tiempo con el fin de asesinar a la próxima 
                Vasija de la Sustancia Estelar del Señor Tengen. Falleció como resultado de su enfrentamiento 
                contra Satoru Gojo y antes de morir, dejó a Megumi en su cuidado.</p>
        </div>
    );
}

export default Page;
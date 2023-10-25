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

    const imageStyle = {
        maxWidth: '10%', // Cambia el tamaño máximo de la imagen según tus preferencias.
        height: 'auto', // Ajusta la altura automáticamente para mantener la proporción.
    };

    const titleStyle = {
        fontSize: '36px', // Aquí puedes ajustar el tamaño de la fuente en píxeles.
        textAlign: 'center', // Centra el título horizontalmente.
    };

    const textStyle = {
        fontSize: '20px', // Aquí puedes ajustar el tamaño de la fuente en píxeles.
        textAlign: 'center', // Centra el título horizontalmente.
    };

    return (
        <div style={centerStyle}>
            <h1 style={titleStyle}>Jojo Presenta:</h1>
            <p style={textStyle}>Fushiguro Toji - Quiero ser como ese</p>
            <img
                src='img/Toji_Fushiguro.webp'
                alt="Fushiguro Toji"
                style={imageStyle} // Aplica el estilo de la imagen.
            />
            <p> Toji Fushiguro (伏黒甚爾 Fushiguro Tōji?) previamente conocido como Toji Zenin (禪院甚爾 Zen'in Tōji?),</p> 
            <p> como Usuario Maldito luego de abandonar el Clan Zenin, </p> 
            <p>    recibió un trabajo de la Asociación de Vasijas del Tiempo con el fin de asesinar a la próxima </p> 
            <p>    Vasija de la Sustancia Estelar del Señor Tengen. Falleció como resultado de su enfrentamiento </p> 
            <p>    contra Satoru Gojo y antes de morir, dejó a Megumi en su cuidado.</p>


            <img
                src='img/Toji.jpg'
                alt="Fushiguro Toji"
                style={imageStyle} // Aplica el estilo de la imagen.
            />
            <p>Por su atencion Gracias</p>
        </div>
    );
}

export default Page;
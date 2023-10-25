import React from 'react';

function Page() {
    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Esto centra verticalmente en la pantalla
        backgroundColor: '#d3dce4', // Establece el color de fondo
        color: '#202831', // Establece el color del texto
      };

      return (
        <div style={centerStyle}>
          <h1>Jojo Presenta:</h1>
          <p>Fushiguro Toji, el mas vergas</p>
          <<img src="/img/Toji.jpg" alt="Mi Imagen" />
        </div>
      );
}

export default Page;
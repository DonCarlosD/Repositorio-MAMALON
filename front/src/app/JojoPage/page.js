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
          <h1>Mi página personal</h1>
          <p>Bienvenido a mi página.</p>
        </div>
      );
}

export default Page;
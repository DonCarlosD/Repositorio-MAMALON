import React from 'react';

function Page() {
    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Esto centra verticalmente en la pantalla
      };

      return (
        <div style={centerStyle}>
          <h1>Mi página personal</h1>
          <p>Bienvenido a mi página.</p>
        </div>
      );
}

export default Page;
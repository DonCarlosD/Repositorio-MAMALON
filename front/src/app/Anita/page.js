import React from 'react';

const page = () => {
    const pageStyle = {
        backgroundColor: 'lightblue', // Fondo azul cielo
    };

    const headerStyle = {
        borderBottom: '2px solid blue',
        paddingBottom: '10px',
        marginBottom: '20px',
        backgroundColor: 'yellow', // Relleno del encabezado en color amarillo
    };

    return (
        <div style={pageStyle}>
            <div style={headerStyle}>
                <h1>Mi pagina mamalona</h1>
            </div>
            <button>Touch me</button>
        </div>
    );
}

export default page;

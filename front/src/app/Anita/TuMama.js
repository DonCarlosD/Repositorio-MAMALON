import React from 'react';

const Page = () => {
    const headerStyle = {
        borderBottom: '2px solid blue',
        paddingBottom: '10px',
        marginBottom: '20px'
    };

    return (
        <div>
            <div style={headerStyle}>
                <h1>Mi pagina mamalona</h1>
            </div>
            <button>Touch me</button>
        </div>
    );
}

export default Page;

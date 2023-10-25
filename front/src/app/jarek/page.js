import React from 'react';
import './Page.css'; // Asegúrate de tener un archivo CSS para estilos personalizados si es necesario

const Page = () => {
    // Puedes declarar variables u objetos de estado aquí si es necesario
    const mensaje = "¡Hola mundo!";
    const productos = ['Producto 1', 'Producto 2', 'Producto 3'];
    const contenido = [
        { id: 1, titulo: "Sergio", contenido: "Mama" },
        { id: 2, titulo: "Joel", contenido: "Papa" },
        { id: 3, titulo: "Carlos", contenido: "Hijo" }
    ];

    return (
        <div className="center-content">
            <h1>{mensaje}</h1>

            <div className="product-list">
                <h2>Lista de productos:</h2>
                <ul>
                    {productos.map((producto, index) => (
                        <li key={index}>{producto}</li>
                    ))}
                </ul>
            </div>

            <h2>Tabla de contenido:</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título  </th>
                        <th>Contenido   </th>
                    </tr>
                </thead>
                <tbody>
                    {contenido.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.titulo}</td>
                            <td>{item.contenido}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>Este es un párrafo adicional.</p>

            {/* Puedes agregar más elementos JSX según tus necesidades */}
        </div>
    );
};

export default Page;

import React from 'react';
import './page.css'; // Asegúrate de tener un archivo CSS para estilos personalizados si es necesario

const Page = () => {
    // Puedes declarar variables u objetos de estado aquí si es necesario
    const mensaje = "¡Tabla de Cumpleaños!";
    const productos = [' '];
    const contenido = [
        { id: 1, titulo: "Jojo", contenido: "21 Mayo 1998" },
        { id: 2, titulo: "Jarek", contenido: "20 Enero 2001" },
        { id: 3, titulo: "Martha", contenido: "10 Octubre 2001" },
        { id: 3, titulo: "Alef", contenido: "30 Marzo 2002" },
        { id: 3, titulo: "Mony", contenido: "2 mayo 2002" },
        { id: 3, titulo: "Carlos", contenido: "8 Mayo 2002" },
        { id: 3, titulo: "Leal", contenido: "23 Julio 2002" },
        { id: 3, titulo: "Ana", contenido: "24 Julio 2002" },
        { id: 3, titulo: "Martin", contenido: "20 Septiembre 2002" }
    ];

    return (
        <div className="center-content">
            <h1>{mensaje}</h1>

            <div className="product-list">
                
                <ul>
                    {productos.map((producto, index) => (
                        <li key={index}>{producto}</li>
                    ))}
                </ul>
            </div>
            <h2> </h2>
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

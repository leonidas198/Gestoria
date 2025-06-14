import './PublicidadAmazon.css'; // ✅ Ruta relativa

function ProductoAmazon({ enlace, imagen, titulo }) {
  return (
    <a href={enlace} target="_blank" rel="noopener noreferrer" className="producto-amazon">
      <img src={imagen} alt={titulo} className="producto-imagen" />
      <p className="producto-titulo">{titulo}</p>
    </a>
  );
}

export const PublicidadAmazon = () => {
  const productos = [
    {
      titulo: "Impresora multifunción Epson",
      enlace: "https://amzn.to/3FDDLOr",
      imagen: "https://m.media-amazon.com/images/I/71hHYq1cqcL._AC_SY450_.jpg",
    },
    {
      titulo: "Libro de Contabilidad",
      enlace: "https://amzn.to/3TmDkuP",
      imagen: "https://m.media-amazon.com/images/I/61ka0QzlWHL._SY342_.jpg",
    },
    {
      titulo: "Calculadora científica Casio",
      enlace: "https://amzn.to/45UizhC",
      imagen: "https://m.media-amazon.com/images/I/51KAO1axBXL._AC_SY450_.jpg",
    },
  ];

  return (
    <section className="publicidad-amazon">
      <h2>Recomendados para tu oficina</h2>
      <div className="productos-contenedor">
        {productos.map((p, i) => (
          <ProductoAmazon key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

import { useState } from "react"

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {name, email, message};

    try {
      const response = await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      setStatus(result);
    } catch (error) {
      setStatus("Hubo un error al mostrar el mensaje.");
      console.error(error);
    }

    setName("");
    setEmail("");
    setMessage("");

  };

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Tu nombre"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Ingresa tu correo"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea 
          rows="4"
          placeholder="Escribí tu consulta"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>

      {status && <p>{status}</p>}

    </section>
  );

};









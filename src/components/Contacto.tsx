import type { FormEvent } from "react";
import { contacto } from "../data/perfil";

function Contacto() {
  function prepararCorreo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const datos = new FormData(event.currentTarget);
    const asunto = String(datos.get("asunto"));
    const descripcion = String(datos.get("descripcion"));
    const correoUsuario = String(datos.get("correo"));
    const cuerpo = [
      descripcion,
      "",
      `Correo para responder: ${correoUsuario}`,
    ].join("\n");

    window.location.href =
      `mailto:${contacto.email}?subject=${encodeURIComponent(asunto)}` +
      `&body=${encodeURIComponent(cuerpo)}`;
  }

  return (
    <section
      className="contacto"
      id="contacto"
      aria-labelledby="contacto-titulo"
    >
      <div className="contacto__contenido">
        <header className="contacto__encabezado">
          <p className="proyectos__eyebrow">Hablemos</p>
          <h2 id="contacto-titulo">Contacto</h2>
          <p>¿Tienes una propuesta o quieres saber más? Escríbeme.</p>
        </header>

        <div className="contacto__rejilla">
          <address className="contacto__datos">
            <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            <a href={`tel:${contacto.telefono}`}>{contacto.telefono}</a>
            <span>{contacto.ubicacion}</span>
          </address>

          <form className="contacto__formulario" onSubmit={prepararCorreo}>
            <label htmlFor="contacto-correo">Tu correo electrónico</label>
            <input
              autoComplete="email"
              id="contacto-correo"
              name="correo"
              required
              type="email"
            />

            <label htmlFor="contacto-asunto">Asunto</label>
            <input id="contacto-asunto" name="asunto" required type="text" />

            <label htmlFor="contacto-descripcion">Mensaje</label>
            <textarea
              id="contacto-descripcion"
              name="descripcion"
              required
              rows={5}
            />

            <button className="contacto__enviar" type="submit">
              Preparar correo
            </button>
            <p className="contacto__aviso">
              Se abrirá tu aplicación de correo para que puedas revisar y enviar
              el mensaje. Si no se abre, revisa que tengas configurada una
              aplicación de correo en tu dispositivo. En caso de que no
              funcione, puedes enviarme un correo directamente a <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;

import type { FormacionItem } from "../types/formacion";

interface FormacionCardProps {
  formacion: FormacionItem;
}

function FormacionCard({ formacion }: FormacionCardProps) {
  return (
    <article className="educacion__card">
      <div className="educacion__encabezado">
        <h3>{formacion.titulo}</h3>
        <p className="educacion__institucion">{formacion.institucion}</p>
      </div>
      {formacion.ubicacion && (
        <p className="educacion__ubicacion">{formacion.ubicacion}</p>
      )}
      <ul className="educacion__detalles">
        {formacion.detalles.map((detalle) => (
          <li key={detalle}>{detalle}</li>
        ))}
      </ul>
    </article>
  );
}

export default FormacionCard;

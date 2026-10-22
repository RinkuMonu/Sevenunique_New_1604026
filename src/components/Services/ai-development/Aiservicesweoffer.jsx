export default function AiServicesSection({ data }) {
  if (!data) return null;

  return (
    <section>
      <p>{data.sectionLabel}</p>
      <h2>{data.heading}</h2>
      <p>{data.description}</p>

      {data.services.map((service, index) => (
        <div key={index}>
          <h3>{service.title}</h3>

          <ul>
            {service.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
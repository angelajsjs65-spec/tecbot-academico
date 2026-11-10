import { useState } from "react";
import type { FormEvent } from "react";

function QueryForm() {
  const [question, setQuestion] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (question.trim() === "") {
      setError("La consulta no puede estar vacía.");
      setConfirmation(null);
      return;
    }

    setError(null);
    setConfirmation("Consulta enviada correctamente.");
    setQuestion("");
  }

  return (
    <section>
      <h2>Consulta académica</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Pregunta</label>
        <textarea
          id="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Escribe tu consulta académica..."
        />
        <button type="submit">Enviar</button>
      </form>
      {error !== null && <p className="form-error">{error}</p>}
      {confirmation !== null && (
        <p className="form-confirmation" role="status">
          {confirmation}
        </p>
      )}
    </section>
  );
}

export default QueryForm;

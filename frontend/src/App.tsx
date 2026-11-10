import { useEffect, useState } from "react";

import { getHealth } from "./api/client";
import type { HealthResponse } from "./types";

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);

  useEffect(() => {
    getHealth()
      .then(setHealth)
      .catch(() => setHealth(null));
  }, []);

  return (
    <main>
      <h1>TecBot Académico</h1>
      <p>Backend: {health?.status ?? "sin conexión"}</p>
    </main>
  );
}

export default App;

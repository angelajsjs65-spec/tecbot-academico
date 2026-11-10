import type { HealthResponse } from "../types";

const API_URL = import.meta.env.VITE_API_URL ?? "/api";

export async function getHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error(`Error ${response.status} al consultar /health`);
  }

  return (await response.json()) as HealthResponse;
}

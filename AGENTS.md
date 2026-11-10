# AGENTS.md

Proyecto académico **tec_bot**. Stack: **FastAPI** (backend) + **React/TypeScript** con **Vite** (frontend).

## Comandos

Backend (desde `backend/`):
- Instalar: `python -m venv .venv`, activar (`.venv\Scripts\activate` en Windows o `source .venv/bin/activate`), `pip install -r requirements.txt`
- Dev: `uvicorn app.main:app --reload` (API en `http://localhost:8000`)
- Tests: `pytest`

Frontend (desde `frontend/`):
- Instalar: `npm install`
- Dev: `npm run dev` (Vite en `http://localhost:5173`, proxy `/api` -> `http://localhost:8000`)
- Build + typecheck: `npm run build`
- Solo typecheck: `npm run typecheck`

## Estructura

- `backend/app/main.py`: entrada FastAPI, CORS y routers.
- `backend/app/core/config.py`: configuración vía `pydantic-settings` (`.env`).
- `backend/app/api/routes/`: endpoints; se montan con prefijo `/api`.
- `backend/app/schemas/`: modelos Pydantic (contratos de entrada/salida).
- `backend/app/services/`: lógica de negocio.
- `backend/app/models/`: modelos de datos/ORM (pendiente de persistencia).
- `backend/tests/`: tests con `pytest` y `TestClient`.
- `frontend/src/api/client.ts`: cliente HTTP tipado.
- `frontend/src/types/index.ts`: tipos espejo de los schemas Pydantic.

## Reglas de desarrollo

- No añadir dependencias ni herramientas sin justificarlas; el stack acordado es FastAPI, React, TypeScript y Vite.
- Todo el código nuevo debe ir tipado: `type hints` en Python, tipos explícitos en TypeScript (evitar `any`).
- Validar entradas/salidas de la API con modelos **Pydantic**; no devolver dicts sueltos.
- Mantener alineados `backend/app/schemas/` y `frontend/src/types/index.ts`.
- No commitear secretos, `.env`, `node_modules/`, `__pycache__/` ni artefactos de build.
- Añadir tests junto con la funcionalidad nueva; no dejar tests rotos.
- Cambios pequeños y enfocados; explicar el propósito antes de refactors grandes.

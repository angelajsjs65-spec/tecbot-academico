# TecBot Académico

Aplicación académica con backend **FastAPI** y frontend **React + TypeScript** (Vite).

## Estructura

- `backend/`: API FastAPI, configuración, schemas, servicios y tests.
- `frontend/`: aplicación React con TypeScript y Vite.

## Requisitos

- Python 3.11+
- Node.js 20+ y npm

## Backend

Desde `backend/`:

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux/macOS
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

- API: http://localhost:8000
- Salud: http://localhost:8000/api/health
- Docs: http://localhost:8000/docs
- Tests: `pytest`

## Frontend

Desde `frontend/`:

```bash
npm install
cp .env.example .env
npm run dev
```

- App: http://localhost:5173
- Vite redirige `/api` a `http://localhost:8000` (ver `vite.config.ts`).
- Build: `npm run build`
- Typecheck: `npm run typecheck`

## Variables de entorno

Cada carpeta incluye un `.env.example`. Los archivos `.env` reales no se versionan.

# express-mini-quality-api

API REST mínima construida con Node.js y Express para demostrar prácticas de **calidad de software** y **CI/CD**.

## 📋 Descripción

Este proyecto es una API de laboratorio diseñada para implementar y demostrar:
- Integración Continua (CI)
- Pruebas automatizadas
- Análisis de código con linter
- Cobertura de código
- Pipeline automatizado con GitHub Actions

## ✨ Características

### Endpoints de la API

1. **GET /health**
   - Endpoint de verificación del estado del servidor
   - Responde: `{ "status": "ok" }`

2. **GET /users**
   - Devuelve una lista de usuarios (datos en memoria)
   - Responde: Array de usuarios con `id` y `name`

3. **POST /math/sum**
   - Realiza la suma de dos números
   - Body: `{ "a": number, "b": number }`
   - Responde: `{ "result": number }` o error 400 si los parámetros son inválidos

## 🔧 Requisitos previos

- **Node.js**: versión 18.x o superior
- **npm**: versión 9.x o superior
- **Git**: para clonar el repositorio

## 📦 Instalación

\`\`\`bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/express-mini-quality-api.git

# Navegar al directorio
cd express-mini-quality-api

# Instalar dependencias
npm install
\`\`\`

## 🚀 Uso

### Iniciar el servidor

\`\`\`bash
# Modo producción
npm start

# Modo desarrollo (con nodemon)
npm run dev
\`\`\`

El servidor se ejecutará en `http://localhost:3000`

### Ejemplos de uso

\`\`\`bash
# Health check
curl http://localhost:3000/health

# Obtener usuarios
curl http://localhost:3000/users

# Sumar dos números
curl -X POST http://localhost:3000/math/sum \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'
\`\`\`

## 🧪 Calidad de código

### Linter

El proyecto usa **ESLint** para análisis estático de código:

\`\`\`bash
npm run lint
\`\`\`

### Pruebas unitarias

Framework de pruebas: **Jest** con **Supertest**

\`\`\`bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch
npm run test:watch

# Generar reporte de cobertura
npm run coverage
\`\`\`

### Cobertura de código

- **Umbral mínimo configurado**: 80% global
- Métricas evaluadas: líneas, funciones, branches, statements
- El comando `npm test` falla automáticamente si no se alcanza el umbral

## 🔄 CI/CD

### GitHub Actions Workflow

El proyecto incluye un pipeline automatizado (`.github/workflows/ci-quality.yml`) que:

1. **Se ejecuta en**:
   - Push a ramas `main` o `develop`
   - Pull requests hacia `main` o `develop`

2. **Pasos del pipeline**:
   - ✅ Checkout del código
   - ✅ Configuración de Node.js (versiones 18.x y 20.x)
   - ✅ Instalación de dependencias
   - ✅ Ejecución del linter
   - ✅ Ejecución de pruebas con cobertura
   - ✅ Verificación del umbral de cobertura
   - ✅ Generación de artefactos con reportes

3. **Criterios de fallo**:
   - Errores de linting
   - Pruebas fallidas
   - Cobertura por debajo del 80%

### Simulación local con `act`

Puedes ejecutar el workflow localmente usando [nektos/act](https://github.com/nektos/act):

\`\`\`bash
# Instalar act (si no lo tienes)
# macOS: brew install act
# Linux: ver documentación oficial

# Simular un push event
act push

# Simular un pull request
act pull_request
\`\`\`

## 📁 Estructura del proyecto

\`\`\`
express-mini-quality-api/
├── .github/
│   └── workflows/
│       └── ci-quality.yml          # Pipeline de CI/CD
├── src/
│   ├── __tests__/                  # Pruebas unitarias
│   │   ├── health.test.js
│   │   ├── users.test.js
│   │   └── math.test.js
│   └── index.js                    # Servidor Express
├── .gitignore
├── eslint.config.js                # Configuración ESLint
├── jest.config.js                  # Configuración Jest
├── package.json
└── README.md
\`\`\`

## 🛠️ Tecnologías utilizadas

- **Runtime**: Node.js
- **Framework**: Express.js
- **Linter**: ESLint
- **Testing**: Jest + Supertest
- **CI/CD**: GitHub Actions
- **Simulación local**: nektos/act

## 📊 Métricas de calidad

| Métrica | Valor objetivo |
|---------|----------------|
| Cobertura de líneas | ≥ 80% |
| Cobertura de funciones | ≥ 80% |
| Cobertura de branches | ≥ 80% |
| Cobertura de statements | ≥ 80% |

## 📝 Licencia

ISC

## 👥 Autor

Proyecto creado para fines académicos - demostración de calidad de software y CI/CD.

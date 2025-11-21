

# 📘 **README.md — express-mini-quality-api** 

# **express-mini-quality-api**

API REST minimalista creada con **Node.js + Express**, diseñada específicamente para demostrar **calidad de software**, incluyendo:

* Pruebas unitarias
* Cobertura de código
* Análisis estático con ESLint
* Pipeline CI/CD en GitHub Actions
* Validación del pipeline en local usando `act`

Este proyecto forma parte del **Parcial III – Calidad de Software Avanzado**.

---

# 📌 **1. Descripción general**

`express-mini-quality-api` es una API simple con tres funcionalidades principales:

* Verificar el estado del servicio
* Listar usuarios en memoria
* Realizar una suma validada vía JSON

El objetivo académico es demostrar la aplicación real de prácticas de calidad y CI/CD sobre un proyecto Express muy pequeño pero bien estructurado.

---

# ⚙️ **2. Endpoints del proyecto**

## ✔ GET `/health`

Devuelve el estado del servicio.
**Ejemplo de respuesta:**

```json
{ "status": "ok" }
```

## ✔ GET `/users`

Retorna una lista de usuarios almacenados en memoria.
Tres usuarios precargados.

**Estructura:**

```json
{ "id": 1, "name": "Ana" }
```

## ✔ POST `/math/sum`

Recibe dos números y devuelve su suma.

**Body esperado:**

```json
{ "a": 5, "b": 3 }
```

**Validaciones:**

* Ambos parámetros obligatorios
* Ambos deben ser numéricos
* Errores devuelven `400`

---

# 🧱 **3. Requisitos previos**

* Node.js (18.x o 20.x recomendado)
* npm
* GitHub Actions habilitado
* Docker (si usarás `act`)
* `act` instalado (opcional)

---

# 🚀 **4. Instalación**

Clonar el repositorio:

```
git clone <URL_DE_TU_REPO>
cd express-mini-quality-api
```

Instalar dependencias:

```
npm install
```

---

# ▶️ **5. Scripts**

| Comando                  | Descripción                             |
| ------------------------ | --------------------------------------- |
| `npm start`              | Inicia el servidor                      |
| `npm run dev`            | Modo desarrollo (si usas nodemon)       |
| `npm test`               | Ejecuta las pruebas unitarias           |
| `npm test -- --coverage` | Ejecuta pruebas + cobertura             |
| `npm run lint`           | Ejecuta ESLint                          |
| `npx eslint . --fix`     | Corrige errores de lint automáticamente |

---

# 🧪 **6. Pruebas unitarias**

Este proyecto usa:

* **Jest** para pruebas unitarias
* **Supertest** para probar endpoints HTTP

Las pruebas cubren:

* `/health`
* `/users`
* `/math/sum` (casos válidos y error)

La cobertura mínima configurada es del **80%**, y el pipeline falla si no se cumple.

---

# 🧹 **7. Linter (ESLint)**

ESLint valida:

* Uso correcto de comillas
* Puntos y coma
* Reglas de estilo del proyecto
* Posibles errores de sintaxis o variables sin usar

El pipeline de CI falla automáticamente si ESLint detecta errores.

---

# 🔄 **8. CI/CD con GitHub Actions**

El proyecto incluye un workflow que se ejecuta en:

* `push` a `main` o `develop`
* `pull_request` a `main` o `develop`

### El pipeline ejecuta:

1. **Checkout del código**
2. **Configuración de Node**
3. **Instalación de dependencias**
4. **Ejecución de ESLint**
5. **Pruebas unitarias**
6. **Verificación de cobertura mínima**
7. **Subida del reporte de cobertura como artifact**

Si algo falla → pipeline rojo ❌
Si todo pasa → pipeline verde ✔️

---

# 🐳 **9. Validación del pipeline en local con `act`**

Puedes simular la ejecución del workflow sin hacer push:

### Listar workflows:

```
act -l
```

### Ejecutar el pipeline como si fuera un push:

```
act push
```

Esto ejecuta exactamente los mismos pasos que GitHub Actions (lint, tests, cobertura, artifacts).

Es ideal para detectar fallos **antes de subir código**.

---

# 📄 **10. Archivo RESPUESTAS.md**

El proyecto incluye un documento donde se explica:

* Diferencia entre CI y CD
* Herramientas de calidad aplicadas
* Ejemplo de ejecución fallida del pipeline
* Ejecución exitosa posterior
* Uso de `act`
* Reflexión sobre IA y ética académica

---

# 🎯 **11. Objetivo académico**

Este proyecto se creó siguiendo las restricciones del parcial:

* Código escrito manualmente
* CI/CD real
* Pruebas completas
* Cobertura mínima
* Uso de herramientas profesionales de calidad



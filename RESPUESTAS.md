# 📄 **RESPUESTAS.md**

# **Segundo Proyecto — express-task-manager-api**

**Parcial III – Calidad de Software Avanzado**

---

# 🧩 1. Diferencia entre CI y CD

### ✔ **Integración Continua (CI)**

La integración continua es el proceso de ejecutar automáticamente:

* Linter (análisis estático),
* Pruebas unitarias,
* Verificación de cobertura,
* Validación del proyecto en múltiples versiones de Node,

cada vez que se hace un **push** o un **pull request**.
El objetivo es detectar errores **lo antes posible** y mantener el código siempre en un estado estable.

### ✔ **Entrega Continua (CD)**

La entrega continua garantiza que una vez que el pipeline pasa correctamente:

* el proyecto está listo para ser desplegado,
* los artefactos generados (coverage, build, etc.) son consistentes,
* cada commit deja el proyecto preparado para una entrega real.

En este proyecto, CD se evidencia en la **subida automática del reporte de cobertura** como artifact cuando la ejecución es exitosa.

---

# 🧱 2. Estrategia de calidad usada en el proyecto

### ✔ Lenguaje y framework

* Node.js + Express
* API REST de tareas sin base de datos

### ✔ Validación de calidad

* **ESLint** para análisis estático

  * Reglas para estilo consistente y errores comunes
* **Jest + Supertest** para pruebas unitarias
* **Cobertura mínima del 80%**

  * Configurada en `jest.config.js`
* **GitHub Actions** para CI/CD

  * Matriz de versiones Node (18.x y 20.x)
  * Pasos: install → lint → tests → cobertura → artifacts
* **act** para validar el pipeline de manera local

---

# 🧪 3. Evidencia de ejecución local del pipeline usando `act`

## 📌 3.1. `act -l`

**Comando usado:**

```
act -l
```

📸 **Espacio para la captura:**

> **PEGAR AQUÍ CAPTURA #1**
> (Debe mostrar los workflows detectados por act, incluyendo tu archivo .yml)

---

## 📌 3.2. `act push` — ejecución completa con linter + tests + cobertura

**Comando usado:**

```
act push
```

Esto simula un push real y ejecuta:

* Instalación de dependencias
* Linter (ESLint)
* Pruebas unitarias
* Cobertura
* Verificación del umbral
* Subida de artifacts

📸 **Espacio para la captura:**

> **PEGAR AQUÍ CAPTURA #2**
> (Debe mostrarse la tabla de cobertura, el linter pasando, y los pasos de CI en verde exactamente como en GitHub)

---

# 🔍 4. Análisis del Linter (ESLint)

### ✔ ¿Qué valida el linter?

* Estilo de código uniforme
* Comillas simples
* Punto y coma
* Variables usadas correctamente
* Evitar errores comunes de sintaxis

### ✔ ¿Por qué puede fallar?

* Comillas dobles en lugar de simples
* Falta de `;`
* Código muerto
* Variables sin usar

## 📌 4.1. Testeo del linter (sin errores)

**Comando usado:**

```
npm run lint
```

📸 **Espacio para la captura:**

> **PEGAR AQUÍ CAPTURA #3**
> (Muestra eslint pasando sin errores)

---

## 📌 4.2. Aplicando fix en caso de errores

**Comando usado:**

```
npx eslint . --fix
```

📸 **Espacio para la captura:**

> **PEGAR AQUÍ CAPTURA #4**
> (Debe mostrar el fix corrigiendo errores, si los hubo)

---

# 🧪 5. Evidencias de pruebas locales (tests)

## ✔ ¿Qué prueban los tests?

* Funcionamiento correcto de TODOS los endpoints
* Validaciones
* Errores esperados (400 / 404)
* Cambios de estado (`toggle`)
* Formato de las tareas
* Cobertura mínima

## 📌 5.1. Ejecución de tests locales

**Comando usado:**

```
npm test
```

📸 **Espacio para la captura:**

> **PEGAR AQUÍ CAPTURA #5**
> (Debe mostrar los  tests pasando)

---

## 📌 5.2. Ejecución de tests con cobertura

**Comando usado:**

```
npm test -- --coverage
```

📸 **Espacio para la captura:**

> **PEGAR AQUÍ CAPTURA #6**
> (Debe mostrar la tabla con el porcentaje de cobertura)

---

# ⚠️ 6. Evidencia de ejecución fallida del pipeline (CI)

Para cumplir el parcial, se debe mostrar un **run fallido**.

Tu error puede ser por:

* Fallo de ESLint
* Test roto
* Cobertura insuficiente

📸 **Espacio para la captura:**

> **PEGAR AQUÍ CAPTURA #7**
> (Debe mostrar el workflow fallido en rojo y el mensaje del error)

**Explicación breve:**
Describe aquí qué rompiste y por qué falló.

---

# ✅ 7. Evidencia de ejecución exitosa del pipeline (CI)

📸 **Espacio para la captura:**

> **PEGAR AQUÍ CAPTURA #8**
> (Workflow completo en verde con lint + tests + coverage correctos)

**Explicación breve:**
Describe aquí qué corregiste para que todo volviera a verde.

---

# 🤖 8. Reflexión sobre el uso de IA en proyectos académicos

### ✔ Métodos para intentar detectar IA

1. Comparación de estilos (inconsistencias humanas vs. uniformidad de IA)
2. Análisis semántico y patrones de redacción
3. Herramientas de detección basadas en modelos lingüísticos

### ✔ Por qué NO es posible garantizar detección al 100%

* La IA puede imitar estilos humanos.
* Estudiantes pueden reescribir contenidos generados.
* No existen marcadores técnicos obligatorios de autoría.

### ✔ Política ética propuesta

* La IA puede servir como apoyo conceptual (explicaciones, dudas).
* **No debe generar código, soluciones completas ni artefactos del parcial.**
* Todo código debe ser escrito, entendido y explicado por el estudiante.
* Se debe declarar el uso de IA como asistencia, no como generación.
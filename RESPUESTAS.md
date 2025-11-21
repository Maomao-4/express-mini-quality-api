# **express-mini-quality-api** 

### **Parcial III – Calidad de Software Avanzado**

---

# 🧩 1. Diferencia entre CI y CD

### ✔ **Integración Continua (CI)**

La integración continua es un proceso en el que cada cambio enviado al repositorio ejecuta automáticamente:

* Análisis estático (ESLint)
* Pruebas unitarias (Jest + Supertest)
* Verificación de cobertura mínima
* Validación del proyecto en múltiples versiones de Node

El objetivo de CI es detectar errores **rápidamente**, mantener el código estable y asegurar que cada commit respete las reglas de calidad definidas.

### ✔ **Entrega Continua (CD)**

La entrega continua garantiza que, después de pasar CI:

* El proyecto queda **listo para ser entregado o desplegado**.
* Los artefactos (como el reporte de cobertura) se generan automáticamente.
* No es necesaria intervención manual para validar calidad.

En este proyecto, CD se evidencia en la **subida automática del artifact de cobertura** y en mantener siempre el repositorio en un estado “deploy-ready”.

---

# 🧱 2. Estrategia de calidad aplicada al proyecto

### ✔ Herramientas usadas

* **Node.js + Express** → servidor API
* **Jest + Supertest** → pruebas unitarias y HTTP
* **ESLint** → análisis estático
* **GitHub Actions** → pipeline CI/CD
* **act** → ejecución local del workflow
* **Cobertura mínima** → 80% configurado en `jest.config.js`

### ✔ Validaciones del proyecto

* Todos los endpoints probados
* Cobertura mínima respetada
* Linter sin errores
* Pipeline configurado para fallar si:

  * Linter falla
  * Tests fallan
  * Cobertura insuficiente

---

# 🧪 3. Ejecución local del pipeline con `act`

## 📌 3.1. `act -l`

**Comando usado:**

```
act -l
```

📸 **Inserta aquí tu imagen del comando `act -l`:**

> *(CAPTURA #1)*

---

## 📌 3.2. `act push` con linter + tests + coverage

**Comando usado:**

```
act push
```

Esto ejecuta exactamente los mismos pasos que GitHub Actions:

* Instalación de dependencias
* ESLint
* Pruebas unitarias
* Cobertura
* Verificación del umbral
* Subida de artifacts

📸 **Inserta aquí la captura completa del pipeline ejecutado con `act`:**

> *(CAPTURA #2 – donde se vea ESLint, los tests y la cobertura)*

---

# 🔍 4. Evidencia de Linter (ESLint)

### ✔ ¿Qué valida el linter?

* Estilo del código
* Comillas simples
* Puntos y coma
* Variables mal usadas
* Errores comunes de sintaxis

### ✔ ¿Por qué es importante?

Garantiza un estilo **consistente** y evita errores que no son detectados por tests.

---

## 📌 4.1. Ejecución de lint (sin errores)

**Comando:**

```
npm run lint
```

📸 **Inserta aquí captura del lint pasando correctamente:**

> *(CAPTURA #3)*

---

## 📌 4.2. Fix (si fue necesario)

**Comando:**

```
npx eslint . --fix
```

📸 **Inserta aquí la captura del fix corrigiendo errores:**

> *(CAPTURA #4)*

---

# 🧪 5. Evidencias de pruebas locales

## 📌 5.1. Pruebas unitarias

**Comando usado:**

```
npm test
```

📸 **Inserta captura de las pruebas pasando:**

> *(CAPTURA #5)*

---

## 📌 5.2. Pruebas con cobertura

**Comando usado:**

```
npm test -- --coverage
```

📸 **Inserta captura de la tabla de cobertura:**

> *(CAPTURA #6)*

Debes mostrar:

* Cobertura ≥ 80%
* Tests totales
* Tests pasados
* Archivo con estadísticas

---

# ⚠️ 6. Ejemplo de ejecución fallida del pipeline (requerido en el parcial)

Para esta evidencia:

* Rompí un test / rompí ESLint / bajé cobertura
* Hice push
* El pipeline falló como se esperaba

📸 **Inserta aquí la captura del run fallido (GitHub Actions en rojo):**

> *(CAPTURA #7)*

### ✔ Explicación breve:

> *Describe aquí qué rompiste (por ejemplo modificar un valor esperado en un test) y por qué Actions lo detectó.*

---

# ✅ 7. Ejecución exitosa del pipeline

Después de corregir el error:

📸 **Inserta aquí captura del pipeline en verde (run exitoso):**

> *(CAPTURA #8)*

### ✔ Explicación breve:

> *Explica qué corregiste y cómo regresó a verde.*

---

# 🤖 8. Reflexión sobre IA y ética

### ✔ Métodos posibles para detectar código generado por IA

1. Análisis de estilo (repetición, estructuras uniformes)
2. Herramientas automáticas de detección (no siempre confiables)
3. Comparación con otros trabajos del estudiante

### ✔ Por qué **NO** puede garantizarse detección al 100%

* La IA puede imitar estilos humanos
* Los estudiantes pueden reescribir código
* No existen marcadores técnicos que aseguren autoría
* El código puede ser generado por humanos pero “parecer IA” o viceversa

### ✔ Propuesta de política ética

* La IA es aceptable para **investigar, aclarar conceptos o pedir explicaciones**
* **Código del parcial debe ser 100% escrito por el estudiante**
* Prohibido generar archivos completos o soluciones automáticas
* El estudiante debe poder explicar cada línea del proyecto

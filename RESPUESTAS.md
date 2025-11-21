# **express-mini-quality-api** 

### **Parcial III – Calidad de Software Avanzado**

**Yanisca Herrera Francp**

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

<img width="1241" height="60" alt="image" src="https://github.com/user-attachments/assets/4f5a8eee-0be9-4e29-98b4-543a4d7bcfb1" />


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

<img width="1347" height="785" alt="image" src="https://github.com/user-attachments/assets/a529c9da-2a84-4746-9e9a-2260e9a815e7" />


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

<img width="371" height="58" alt="image" src="https://github.com/user-attachments/assets/dad26553-09cd-49d2-b849-35db73c7c162" />


---

## 📌 4.2. Fix (Error controlado)

**Comando:**

```
npx eslint . --fix
```

<img width="928" height="105" alt="image" src="https://github.com/user-attachments/assets/a2bff105-16ad-4804-b65b-4d23ae989096" />


---

# 🧪 5. Evidencias de pruebas locales

## 📌 5.1. Pruebas unitarias

**Comando usado:**

```
npm test
```

<img width="595" height="319" alt="image" src="https://github.com/user-attachments/assets/3a01393a-13d9-4da0-97aa-8271d63a742a" />

---

## 📌 5.2. Pruebas con cobertura

**Comando usado:**

```
npm test -- --coverage
```

<img width="601" height="316" alt="image" src="https://github.com/user-attachments/assets/318d2418-7c91-45a0-949f-d56fb5338995" />

muestra:

* Cobertura ≥ 80%
* Tests totales
* Tests pasados
* Archivo con estadísticas

---

# ⚠️ 6. Ejemplo de ejecución fallida del pipeline

Para esta evidencia:

* Rompí un test / rompí ESLint / bajé cobertura
* Hice push
* El pipeline falló como se esperaba

<img width="1542" height="543" alt="image" src="https://github.com/user-attachments/assets/f0007730-7ea7-4fdb-a816-16645595119a" />


### ✔ Explicación breve:

> En esta ejecución modifiqué intencionalmente uno de los tests para que fallara (cambié el valor esperado en una de las pruebas de los endpoints).
> Al hacer `git push`, GitHub Actions ejecutó el workflow y el job se detuvo en el paso **“Ejecutar pruebas unitarias con cobertura”**, marcando el pipeline en rojo.
> En los logs se puede ver el mensaje de Jest indicando que el valor recibido no coincide con el esperado.
> Esta ejecución demuestra que el pipeline detecta automáticamente errores en los tests y evita que cambios defectuosos pasen la validación de CI.

---

# ✅ 7. Ejecución exitosa del pipeline

Después de corregir el error:

<img width="1881" height="636" alt="image" src="https://github.com/user-attachments/assets/6aade190-8581-4ede-bcb7-039cb63e6d33" />


### ✔ Explicación breve:

> Después de identificar el fallo en la ejecución anterior, revertí el cambio en el test y dejé nuevamente el valor esperado correcto.
> Volví a hacer `git push` y el workflow de GitHub Actions se ejecutó otra vez sobre las ramas configuradas.
> En esta captura se puede ver que todos los pasos del job se completan en verde:
>
> * checkout del código
> * instalación de dependencias
> * ejecución de ESLint
> * pruebas unitarias con cobertura
> * verificación de la cobertura mínima
> * subida del reporte de cobertura como artifact
>
> Esta ejecución exitosa muestra que, una vez corregido el problema, el pipeline confirma que el proyecto está en un estado estable y listo para ser entregado.

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

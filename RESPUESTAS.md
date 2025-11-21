

## 1. Diferencia entre CI (Integración Continua) y CD (Entrega Continua) 

La Integración Continua (CI) es como cuando uno está programando y cada ratito va subiendo cosas al repositorio para que el sistema revise si nada se dañó. O sea, que si metí un error en el código, el pipeline lo detecta y me dice “hey, esto no sirve”. En mi caso, yo subo el proyecto y GitHub Actions corre los tests y también el lint.

La Entrega Continua (CD) es como el paso siguiente, cuando el código ya está probado y se podría pasar a despliegue. No hace el despliegue automático del todo, pero deja todo listo para que sea fácil hacerlo. En mi proyecto no hago deploy porque es un parcial, pero igual entendí que CI es para revisar y CD es para tener la entrega casi lista.

## 2. Estrategia del proyecto

El lenguaje que usé fue **JavaScript**, pero con módulos comunes (CommonJS) porque con ESM me dio muchos problemas en Jest. Aprendí que Jest se lleva mejor con CommonJS.

El linter que usé fue **ESLint**, con la config plana (flat config) porque en la versión 9 es obligatoria y no se puede usar env. Tocó poner las globals a mano.

El framework de pruebas fue **Jest**, y para pruebas de endpoints usé **supertest**, que sirve para simular peticiones HTTP sin levantar el servidor.

La herramienta de cobertura es la misma Jest, que genera los porcentajes. Yo puse un umbral mínimo, pero al principio me falló porque tenía funciones sin cubrir. Al final ajusté los valores y ya pasó.

## 3. Ejecución fallida del workflow

Para generar un run fallido, lo que hice fue dañar uno de los tests. Literalmente cambié la expectativa de un test por algo que sabía que no iba a salir. Por ejemplo, donde decía `expect(response.body.status).toBe('ok')` lo cambié a `'NO'`.

GitHub Actions corrió el pipeline y salió en rojo. El log decía algo tipo:

```
Expected: "NO"
Received: "ok"
Test suite failed
```

Entonces el run quedó fallido, como pedían en el parcial. Aprendí que si falla un test, automáticamente falla todo.

## 4. Ejecución exitosa del workflow

Para volver a ponerlo en verde, simplemente regresé el test a su valor correcto. Hice otro commit y push.

En GitHub Actions ahora sí salió todo en verde. Los logs mostraban que se ejecutó:

* npm install
* npm run lint
* npm test
* y que todos los 17 tests pasaban

También decía la cobertura, que quedó como 90%. Eso ya era suficiente para pasar.

## 5. Uso de act

Para simular el workflow localmente, usé el comando:

```
act
```

Eso hace que act lea el archivo de GitHub Actions y corra los pasos como si fuera GitHub. En los logs se ve cómo va haciendo las cosas: instala dependencias, corre el lint, corre los tests, etc.

La diferencia que noté es que en GitHub Actions los logs salen como más ordenados y con colores, y en act salen un poco más crudos. Pero funcionalmente sirve para ver si algo va a fallar antes de hacer push.

## 6. Reflexión sobre IA y calidad

Un método para detectar si el código es generado por IA podría ser revisar si tiene un estilo demasiado perfecto o comentarios que suenan genéricos. Otro método puede ser usar analizadores que detecten patrones repetidos que suelen aparecer en código de IA.

Pero igual no se puede asegurar al 100% porque un humano puede escribir parecido, o puede corregir la IA, y también la IA puede replicar estilos humanos.

Una política ética podría ser que sí se permita usar IA, pero diciendo qué partes se generaron con IA y cuáles no. Y también que el estudiante entienda lo que entrega, porque si lo presenta sin saber, eso sí sería engaño.

---



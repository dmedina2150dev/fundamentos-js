# Teoria en JavaScript

## [Comentarios](https://es.javascript.info/comments#comments)

## [Variables](https://es.javascript.info/variables)

Es un contenedor de información que apunta a un lugar en memoria.
Dicha información puede cambiar en el futuro.

[MDN - teoria](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables)

[MDN - var](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)

[MDN - let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)

[MDN - let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)

[MDN - hoisting](https://developer.mozilla.org/es/docs/Glossary/Hoisting)

[MDN - scope](https://developer.mozilla.org/es/docs/Glossary/Scope)

[MDN - clousure](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

[Medium - scope in functions](https://medium.com/nerd-for-tech/function-scope-block-scope-in-js-d29c8e7cd216) (Function Scope & Block Scope)

## [Veriones]

- 1996: LiveScript a Javascript(estándar)
- 1997: __ES1 (ECMAScript 1)__ - Primera liberación del estandar de javascript
- 2009: __ES5 (ECMAScript 5)__ - Se libero la 5 versión del estandar (Con muchas caracteristicas nuevas, formas de trabajar con ciclos, declaración de variables con __var__)
- 2015: __ES6/ES2025 (ECMAScript 2015)__ - Que fue la actualización más grande que Javascript hasta el momento. (Symbol, const, let, mejoro el scope de las variable, mejorar el rendimiento de javascript, creación de clases).
- 2015: Se estableció el año de nuevos lanzamientos de JavaScript anual. En lugar de esperar 6 años. Ahora se realizan cada año 2016/2017/2018/2019/2020/... con pequeñas caracteristicas faciles de implementar.


> ¿Qué versión debo utilizar?

*  __ES5__: (Que es el conocido por todos)
   *  Soportada en todos los navegadores web.
   *  Compatibilidad
* __ES6/ES2015, ES7/2016, ES8/ES2017__:
  * Actualmente soportados por la mayoría de los navegadores modernos
  * Pero se pierde compatibilidad con navegadores web antiguos.
  * (Para estos navegadores o dispositivos más antiguos) Muchas de las nuevas caracteristicas pueden ser implementadas con polyfills.


> ¿Qué es un Polyfill?

Es un código que provee el funcionamiento de una nueva característica de javascript (ES6), en versiones viejas como ES5. Como por ejemplo una función de flecha, clases, etc. 
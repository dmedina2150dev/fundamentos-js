let aa = 12,
    bb = 10,
    cc = 10,
    dd= 10,
    xx = aa + bb;

// TODO: Formas de identificar lo que mandamos a la consola
console.log('aa', aa);
console.log('bb', bb);
console.log('cc', cc);
console.log('dd', dd);

console.log('%c Mis variables', 'color:blue; font-weight:bold') //? Añadir CSS a la consola 
console.log({ aa });
console.log({ bb });
console.log({ cc });
console.log({ dd });

// TODO: Metodos del console
console.warn(xx); // Para mostrar warning
console.error(xx); // Para mostrar Error
console.info(xx); // Para mostrar Info


let aaa = 12,
    bbb = 10,
    ccc = 'Hola ',
    ddd = 'Spiderman',
    xxx = aaa + bbb;
// TODO: Metodos del console
console.table([aaa, bbb, ccc, ddd, xxx]);
console.table({aaa, bbb, ccc, ddd, xxx});

const saludo = ccc + ddd;

console.log(saludo)
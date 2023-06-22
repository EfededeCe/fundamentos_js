
const suma = (a, ...b) => {
    let resultado = a;
    b.forEach(e => resultado += e)
    return resultado;
};

const resta = (a, ...b) => {
    let resultado = a;
    b.forEach(e => resultado -= e)
    return resultado;
};


// export const cuentas = {
//     suma,
//     resta
// };

const cuentas = {
    suma,
    resta
};

export default cuentas;

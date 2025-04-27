export function encontrarPalavraMaisLonga(str) {
    const palavras = str.split(' ');
    let maisLonga = '';
    palavras.forEach(p => {
        if (p.length > maisLonga.length) maisLonga = p;
    });
    return maisLonga;
}

export function inverterString(str) {
    return str.split('').reverse().join('');
}

export function filtrarStringsGrandes(array) {
    return array.filter(str => str.length > 5);
}
const {describe, expect, it } = require ('@jest/globals')
const calculadora = require ('../src/operacoes')

describe ('Teste da calculadora', () =>{

    it('operação de soma', () =>{
        let resultado = calculadora.sum(1,2);

        expect(resultado). toEqual(3);

        resultado = calculadora.sum(-1,2);

        expect(resultado). toEqual(1);

        resultado = () => calculadora.sum(2,"a");

        expect(resultado). toThrow('Não é um número');
    })

})

it ('Operação sub',  () => {
    let resultado = calculadora.sub(1,2);
    expect(resultado).toEqual(-1);

    
})
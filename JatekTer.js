

import Lampa from "./Lampa.js"

export default class JatekTer {

    #lista = [];

    constructor(lista) {
        this.#lista = lista;

        this.#lista.forEach((element,index) => {
            new Lampa(element, index, $(".jatekter"));
        })
    }
}



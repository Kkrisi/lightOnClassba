
import JatekTer from "./JatekTer.js"


class Allapot {
    #lista = [false, false, true, true, false, true, true, false, true]
    constructor(){
        new JatekTer(this.#lista);

        $(window).on("kapcsolat", (event) => {
            let id = event.detail;
            lista[id] != lista[id];
            new JatekTer(lista)
        });
    }

    
    #szomszedokValtozasa(id){
        this.#lista[id] != this.#lista[id];

        if(id % 3 !== 0){
            this.#lista[id - 1] != this.#lista[id - 1];
        }

        if(id % 3 !== 2){
            this.#lista[id + 1] != this.#lista[id + 1];
        }

        if(id > 2){
            this.#lista[id + 3] != this.#lista[id + 3];
        }

        if(id < 6){
            this.#lista[id + 3] != this.#lista[id + 3];
        }
    }
}
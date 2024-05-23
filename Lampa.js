

export default class Lampa {

    #allapot = false;
    #id;
    #szuloElem;
    #divElem;

    constructor(allapot,id,szuloElem){
        this.#allapot = allapot;
        this.#id = id;
        this.#szuloElem = szuloElem;
        this.#megjelenit()
        this.#divElem = this.#szuloElem.children("div:last-child")
        this.#szinBeallit()
    }

    #megjelenit(){
        let txt = `
                <div class="lampa">
                
                </div>
                `

        this.#szuloElem.append(txt)
    }

    #szinBeallit(){
        if(this.#allapot){
            this.#divElem.addClass("felkapcs")
        }
    }

    #trigger(esemenynev){
        const e = new CustomEvent(esemenynev,{detail:this.#id})
        window.dispatchEvent(e);
    }
}
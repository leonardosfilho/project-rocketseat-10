import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from "./timer.js";



//escuta os clicks
export function registerControls( ) {

    controls.addEventListener('click', (event) => {
        const action= event.target.dataset.action

        if (typeof actions[action] != "function") {
            return
        }

    actions[action]()        
    })
}

export function setMinutes(){
    el.minutes.addEventListener('focus', () =>{
        el.minutes.textContent = ""
    })
    //  /\d/ so aceita numeros com a function onkeypress
    //expressao regular permite observar um conjunto de caracteres
    el.minutes.onkeypress = (event) => /\d/.test(event.key) 

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        //time é maior que 60  ?
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0


        updateDisplay()
        el.minutes.removeAttribute('contenteditable', true)
    })
    
}
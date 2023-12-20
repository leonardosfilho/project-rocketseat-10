import state from './state.js'
import * as event from './event.js'
import * as timer from './timer.js'

export function start(minutes,seconds) {
    state.minutes = minutes
    state.seconds = seconds
    
   timer.updateDisplay()
   event.registerControls()
   event.setMinutes()

}

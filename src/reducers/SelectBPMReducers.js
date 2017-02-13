import { SELECT_BPM } from '../actions/SelectBPMActions.js'

export default function selectedBPM( state = 128, action ) {
    switch ( action.type ) {
        case SELECT_BPM:
            return state + 1
        default:
            return state
    }
}

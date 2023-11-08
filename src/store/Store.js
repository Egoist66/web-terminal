import {configureStore} from "@reduxjs/toolkit";
import {TerminalSliceReducer} from './Slices'


const store = configureStore({
    reducer: {
        terminal: TerminalSliceReducer,

    }
})


export default store
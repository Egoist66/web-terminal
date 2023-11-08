import {createSlice} from "@reduxjs/toolkit";

const TerminalSlice = createSlice({
    name: 'terminal',
    initialState: {
        isHidden: true,
        commandLine: '',
        process: 'Pending',
        output: null,
        node: false,
        terminalTime: new Date().toString()
    },
    reducers: {
        switchTerminal(state, action) {
            state.isHidden = action.payload

        },

        nodeEnabled(state, action){
            state.node = action.payload
        },

        updateTerminalTime(state, action){
            state.terminalTime = action.payload
        },

        mangeProcess(state, action){
            state.process = action.payload
        },

        CommandLineOn(state, action){
            state.commandLine = action.payload.trimStart().toLowerCase()
        },

        setOutput(state, action){
            state.output = action.payload
        }

    }
})


export const {
    switchTerminal,
    CommandOn,
    CommandLineOn,
    mangeProcess,
    updateTerminalTime,
    setOutput,
    nodeEnabled
} = TerminalSlice.actions

const TerminalSliceReducer = TerminalSlice.reducer

export {TerminalSliceReducer}
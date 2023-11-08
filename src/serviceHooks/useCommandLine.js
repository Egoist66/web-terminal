import {useDispatch, useSelector} from "react-redux";
import {CommandLineOn, updateTerminalTime} from "../store/Slices";
import useTerminalEngine from "./useTerminalEngine";

import _dispatcher from "../service/dispatcher";
import {useEffect} from "react";


const useCommandLine = () => {

    const dispatch = useDispatch()
    const {validateCommands} = useTerminalEngine()
    const {commandLine, terminalTime} = useSelector(state => state.terminal)

    const handleLineCommands = (e) => {

        const target = e.target
        _dispatcher([target.value], dispatch, CommandLineOn)

    }

    const TerminalTimeUpdate= () => {
        _dispatcher([new Date().toString()], dispatch, updateTerminalTime)
    }

    const handleLineCommandsByKeyboard = (e) => {

        if(e.key === "Enter"){
            e.preventDefault()

        }

        if(e.ctrlKey && e.key === "Enter"){
            validateCommands(commandLine)
            _dispatcher([''], dispatch, CommandLineOn)
        }




    }

    useEffect(() => {
        const timer = setInterval(TerminalTimeUpdate, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [terminalTime])


    return {
        handleLineCommands,
        handleLineCommandsByKeyboard
    }
}

export default useCommandLine
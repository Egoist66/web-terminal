import terminalCommands from '../commands/commands.json'
import {useDispatch} from "react-redux";
import {mangeProcess, switchTerminal, setOutput, nodeEnabled} from "../store/Slices";

import _dispatcher from "../service/dispatcher";

export const delay = (fn, ms) => {
    const timer = setTimeout(() => {
        fn()
        clearTimeout(timer)

    }, ms)
}

const useTerminalEngine = () => {

    const dispatch = useDispatch()

    const validateCommands = (commands) => {
        if (commands.trim() === '') {
            return
        }

        const terminal = terminalCommands.find(item => item.command.includes(commands))

        if (terminal?.command) {
            switch (commands) {
                case 'exit':
                    _dispatcher(
                        ['Executing...'],
                        dispatch,
                        mangeProcess
                    )

                    delay(() => {

                        _dispatcher(
                            ['Executed', true], 
                            dispatch, 
                            mangeProcess, 
                            switchTerminal
                        )

                        document.location.reload()

                    }, 1500)
                    break
                case 'env --show':
                    _dispatcher(
                        ['Executing...'],
                        dispatch,
                        mangeProcess
                    )

                    delay(() => {

                        _dispatcher(
                            ['Executed', navigator.userAgent], 
                            dispatch, 
                            mangeProcess,
                            setOutput 
                        )


                    }, 1500)
                    break
                case 'node':
                    _dispatcher(
                        ['Executing...'],
                        dispatch,
                        mangeProcess
                    )
                    delay(() => {

                        _dispatcher(
                            [
                            'Executed',
                            'JS env mode activated! Be careful eval() scope may affect danger consequences!',
                            true],
                            dispatch, 
                            mangeProcess,
                            setOutput,
                            nodeEnabled
                        )

                    }, 1500)

                    break    
                case 'node --off':
                    _dispatcher(
                        ['Executing...'],
                        dispatch,
                        mangeProcess
                    )
                    delay(() => {

                        _dispatcher(
                            ['Executed', 
                            'JS env mode deactivated', false], 
                            dispatch, 
                            mangeProcess,
                            setOutput,
                            nodeEnabled
                        )

                    }, 1500)

                    break;

                case 'get-time':
                    _dispatcher(['Executing...'], dispatch, mangeProcess)
                    delay(() => {

                        _dispatcher(
                            ['Executed', new Date().toDateString()], 
                            dispatch, 
                            mangeProcess,
                            setOutput
                        )

                    }, 1500)
                    break;

                case 'terminal --help':
                    _dispatcher(
                        ['Executing...'],
                        dispatch,
                        mangeProcess
                    )

                    delay(() => {
                        const data = `
                           ${JSON.stringify(terminalCommands, null, 2)}
                        
                        `
                        _dispatcher(
                            ['Executed', data],
                            dispatch,
                            mangeProcess, setOutput
                        )


                    }, 1500)
                    break


                default:
                    _dispatcher([
                        `Unknown command... - ${new Date().toISOString()}`],
                        dispatch,
                        mangeProcess
                    )
                    delay(() => {
                        _dispatcher(
                            ['Pending', null], 
                            dispatch, 
                            mangeProcess, 
                            setOutput
                        )

                    }, 2500)


            }
        } else {
            _dispatcher(
                [`Unknown command... - ${new Date().toISOString()}`, null],
                dispatch,
                mangeProcess,
                setOutput
            )
            console.log('Unknown command')
        }


    }

    return {
        validateCommands
    }
}

export default useTerminalEngine
import terminalCommands from '../commands/commands.json'
import {useDispatch} from "react-redux";
import {switchTerminal} from "../store/Slices";
import _dispatcher from "../service/dispatcher";

console.log(terminalCommands)


const useTerminal = () => {

    const dispatch = useDispatch()

    const terminalOn = (e) => {

        if(e.shiftKey && e.key === "~"){
            console.log('Terminal activated', new Date())
      
            _dispatcher([false], dispatch, switchTerminal)
            document.removeEventListener('keydown', terminalOn)

        }
        else {
            console.log('Wrong Command')
        }

    }

    const onTerminal = () => {

        document.addEventListener('keydown', terminalOn)

    }



    return {
        onTerminal
    }
}

export default useTerminal
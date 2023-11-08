import { useDispatch} from "react-redux"
import _dispatcher from "../service/dispatcher"
import { mangeProcess, setOutput, nodeEnabled} from "../store/Slices"
import { delay } from "./useTerminalEngine"

const useNodeEval = () => {

    const dispatch = useDispatch()


    const evalNodeValue = (nodeEnabled, commandLine) => {
        if(nodeEnabled){
            _dispatcher(
                ['Executing...'],
                dispatch,
                mangeProcess
            )
            
            delay(() => {

                const result = eval(commandLine)
                console.log(result);
                _dispatcher(
                    ['Executed',
                    JSON.stringify(result)],
                    dispatch,
                    mangeProcess,
                    setOutput
                )

            }, 500)
        }
    }

    const exitNodeEvalValue = () => {
        _dispatcher(
            ['Executing...'],
            dispatch,
            mangeProcess
        )
            
        delay(() => {

            _dispatcher(['Executed', 'Mode off', false], 
                dispatch, 
                mangeProcess, 
                setOutput, 
                nodeEnabled
            )

        }, 1500)
    }

    return {
        evalNodeValue,
        exitNodeEvalValue
    }
}

export default useNodeEval
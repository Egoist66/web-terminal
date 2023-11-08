import { useSelector } from 'react-redux'
import terminalStyles from '../terminal.module.scss'
import Button from '../Button/Button'
import useNodeEval from '../../../serviceHooks/useNodeEval'

const Output = () => {

    const { process, node, commandLine, output } = useSelector(state => state.terminal)
    const { evalNodeValue, exitNodeEvalValue } = useNodeEval()

    const handleEvalNode = () => {
        evalNodeValue(node, commandLine)
    }

    const addExecInterface = (nodeEnabled) => {
        if (nodeEnabled) {
            return (
                <>

                    <Button onClick={handleEvalNode}>Execute</Button>
                    <Button onClick={exitNodeEvalValue}>Exit mode</Button>

                </>
            )
        }
    }

    return (
        <div className={terminalStyles.terminalStatus}>
            <pre>
                Status: <span style={{ color: "red" }}>{process}</span>
            </pre>

            {addExecInterface(node)}

            <pre className={terminalStyles.terminalOutput}>
                Output: <span id='output' style={{ color: "skyblue" }}>{output}</span>
            </pre>
        </div>
    )
}

export default Output
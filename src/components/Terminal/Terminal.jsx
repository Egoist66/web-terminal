import terminalStyles from "./terminal.module.scss";
import { useSelector } from "react-redux";
import useTerminal from "../../serviceHooks/useTerminal";
import { useEffect } from "react";
import useCommandLine from "../../serviceHooks/useCommandLine";
import Output from "./Output/Output";

const Terminal = ({ hidden = false }) => {
  const { isHidden, commandLine, terminalTime} = useSelector(
    (state) => state.terminal
  );
  const { onTerminal } = useTerminal();
  const { handleLineCommands, handleLineCommandsByKeyboard } = useCommandLine();

    useEffect(() => {
        onTerminal();

    }, []);

  if (!hidden) {
    return (
      <div className={terminalStyles.terminalContainer}>
        <textarea
        onKeyDown={handleLineCommandsByKeyboard}
        value={`${commandLine}`}
        onChange={handleLineCommands}
        placeholder={`> Command line: ${new Date().toString()}`}
        className={terminalStyles.terminal}
        ></textarea>

        <Output />

      </div>
    );
  }

  return (
    <>
      {isHidden ? null : (
        <div className={terminalStyles.terminalContainer}>
          <textarea
            onKeyDown={handleLineCommandsByKeyboard}
            value={commandLine}
            onChange={handleLineCommands}
            placeholder={`> Command line: ${terminalTime}`}
            className={terminalStyles.terminal}
          ></textarea>

          <Output />

        </div>
      )}
    </>
  );
};

export default Terminal;

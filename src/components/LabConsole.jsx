import { useEffect, useRef, useState } from "react";
import {
  getHelpText,
  getCommandOutput,
  isProjectCommand,
  getProjectName
} from "./LabConsoleCommands";

function LabConsole() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState([
    {
      type: "system",
      text: "Developer Lab initialized."
    },
    {
      type: "system",
      text: "Type 'help' to view available commands."
    }
  ]);

  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const addOutput = (text, type = "normal") => {
    setOutput((prev) => [
      ...prev,
      {
        type,
        text
      }
    ]);
  };

  const navigateToProjects = () => {
    setTimeout(() => {
      const projectElement = document.getElementById("projects");

      if (projectElement) {
        projectElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 250);
  };

  const runCommand = (rawCommand) => {
    const trimmedCommand = rawCommand.trim();

    if (!trimmedCommand) return;

    setHistory((prev) => [...prev, trimmedCommand]);
    setHistoryIndex(-1);

    addOutput(`> ${trimmedCommand}`, "command");

    const parts = trimmedCommand.split(" ");
    const baseCommand = parts[0].toLowerCase();
    const argument = parts.slice(1).join(" ").trim();

    if (baseCommand === "clear") {
      setOutput([]);
      return;
    }

    if (baseCommand === "help") {
      addOutput(getHelpText());
      return;
    }

    const result = getCommandOutput(baseCommand, argument);

    if (result) {
      addOutput(result.text, result.type);

      if (result.navigate) {
        navigateToProjects();
      }

      return;
    }

    if (isProjectCommand(baseCommand)) {
      addOutput(
        `Opening ${getProjectName(baseCommand)}...`,
        "success"
      );

      navigateToProjects();
      return;
    }

    addOutput(
      `Command not found: ${baseCommand}\nType 'help' to see available commands.`
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    runCommand(command);
    setCommand("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (history.length === 0) {
        return;
      }

      const newIndex =
        historyIndex === -1
          ? history.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(newIndex);
      setCommand(history[newIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (history.length === 0) {
        return;
      }

      if (historyIndex === -1) {
        return;
      }

      const newIndex = historyIndex + 1;

      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setCommand("");
        return;
      }

      setHistoryIndex(newIndex);
      setCommand(history[newIndex]);
    }
  };

  return (
    <section className="lab-console" id="lab">
      <div className="console-header">
        <span>DEVELOPER LAB</span>
        <span>INTERACTIVE TERMINAL</span>
      </div>

      <div className="console-body">
        <div className="console-output" ref={outputRef}>
          {output.map((item, index) => (
            <p
              key={`${item.text}-${index}`}
              className={`console-line console-${item.type}`}
            >
              {item.text.split("\n").map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < item.text.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>

        <form className="console-input" onSubmit={handleSubmit}>
          <span>&gt;</span>

          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command..."
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </section>
  );
}

export default LabConsole;
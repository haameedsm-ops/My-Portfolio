import { useEffect, useRef, useState } from "react";

const projectAliases = {
  forensics: "forensix",
  chatjump: "chatjump",
  disease: "diseaseAnalyzer",
  quiz: "quizApp",
  fileexplorer: "miniFileExplorer"
};

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

  const runCommand = (rawCommand) => {
    const trimmedCommand = rawCommand.trim();

    if (!trimmedCommand) {
      return;
    }

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
      addOutput(
        "Available commands:\n\n" +
          "whoami       → About me\n" +
          "about        → Developer profile\n" +
          "skills       → Technical skills\n" +
          "projects     → Project list\n" +
          "ls           → List projects\n" +
          "status       → Current system status\n" +
          "forensics    → Open ForensiX\n" +
          "chatjump     → Open ChatJump\n" +
          "disease      → Open Disease Analyzer\n" +
          "quiz         → Open Quiz Application\n" +
          "fileexplorer → Open Mini File Explorer\n" +
          "open <name>  → Open a project\n" +
          "github       → GitHub information\n" +
          "contact      → Contact information\n" +
          "clear        → Clear console"
      );
      return;
    }

    if (baseCommand === "whoami") {
      addOutput(
        "HAAMEED\n" +
          "3rd Year Computer Science Engineering Student\n" +
          "Builder • Explorer • Problem Solver"
      );
      return;
    }

    if (baseCommand === "about") {
      addOutput(
        "I'm a Computer Science Engineering student who enjoys building\n" +
          "practical software, exploring cybersecurity, and learning by\n" +
          "turning ideas into working systems."
      );
      return;
    }

    if (baseCommand === "skills") {
      addOutput(
        "Languages: C, C++, Java, Python, JavaScript, SQL\n" +
          "Frontend: HTML, CSS, React\n" +
          "Backend: Flask\n" +
          "Tools: Git, GitHub, VS Code\n" +
          "Other: Android, Cybersecurity, APIs"
      );
      return;
    }

    if (baseCommand === "projects" || baseCommand === "ls") {
      addOutput(
        "PROJECTS\n\n" +
          "01  FORENSIX\n" +
          "02  CHATJUMP\n" +
          "03  DISEASE ANALYZER\n" +
          "04  QUIZ APPLICATION\n" +
          "05  MINI FILE EXPLORER"
      );
      return;
    }

    if (baseCommand === "status") {
      addOutput(
        "SYSTEM STATUS\n\n" +
          "Portfolio     : ONLINE\n" +
          "Developer Lab : ONLINE\n" +
          "Projects      : ACTIVE\n" +
          "Learning      : CONTINUOUS"
      );
      return;
    }

    if (baseCommand === "github") {
      addOutput("GitHub → Check the GitHub link in the Contact section.");
      return;
    }

    if (baseCommand === "contact") {
      addOutput(
        "CONTACT\n\n" +
          "Email   → Available below\n" +
          "GitHub  → Available below\n" +
          "LinkedIn → Available below"
      );
      return;
    }

    if (baseCommand === "open") {
      if (!argument) {
        addOutput("Usage: open <project>");
        return;
      }

      const normalizedProject =
        projectAliases[argument.toLowerCase()] || argument.toLowerCase();

      const validProjects = [
        "forensix",
        "chatjump",
        "diseaseAnalyzer",
        "quizApp",
        "miniFileExplorer"
      ];

      if (validProjects.includes(normalizedProject)) {
        addOutput(`Opening ${normalizedProject}...`, "success");

        setTimeout(() => {
          const projectElement = document.getElementById("projects");

          if (projectElement) {
            projectElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }, 250);

        return;
      }

      addOutput(
        `Project '${argument}' not found.\nType 'projects' to see available projects.`
      );
      return;
    }

    if (projectAliases[baseCommand]) {
      const projectName = projectAliases[baseCommand];

      addOutput(`Opening ${projectName}...`, "success");

      setTimeout(() => {
        const projectElement = document.getElementById("projects");

        if (projectElement) {
          projectElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, 250);

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
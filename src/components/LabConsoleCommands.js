const projectAliases = {
  forensics: "forensix",
  chatjump: "chatjump",
  disease: "diseaseAnalyzer",
  quiz: "quizApp",
  fileexplorer: "miniFileExplorer"
};

const projectNames = {
  forensix: "ForensiX",
  chatjump: "ChatJump",
  diseaseAnalyzer: "Disease Analyzer",
  quizApp: "Quiz Application",
  miniFileExplorer: "Mini File Explorer"
};

const projectCommands = {
  whoami: {
    text:
      "HAAMEED\n" +
      "3rd Year Computer Science Engineering Student\n" +
      "Builder • Explorer • Problem Solver"
  },

  about: {
    text:
      "I'm a Computer Science Engineering student who enjoys building\n" +
      "practical software, exploring cybersecurity, and learning by\n" +
      "turning ideas into working systems."
  },

  skills: {
    text:
      "Languages: C, C++, Java, Python, JavaScript, SQL\n" +
      "Frontend: HTML, CSS, React\n" +
      "Backend: Flask\n" +
      "Tools: Git, GitHub, VS Code\n" +
      "Other: Android, Cybersecurity, APIs"
  },

  projects: {
    text:
      "PROJECTS\n\n" +
      "01  FORENSIX\n" +
      "02  CHATJUMP\n" +
      "03  DISEASE ANALYZER\n" +
      "04  QUIZ APPLICATION\n" +
      "05  MINI FILE EXPLORER"
  },

  ls: {
    text:
      "PROJECTS\n\n" +
      "01  FORENSIX\n" +
      "02  CHATJUMP\n" +
      "03  DISEASE ANALYZER\n" +
      "04  QUIZ APPLICATION\n" +
      "05  MINI FILE EXPLORER"
  },

  status: {
    text:
      "SYSTEM STATUS\n\n" +
      "Portfolio     : ONLINE\n" +
      "Developer Lab : ONLINE\n" +
      "Projects      : ACTIVE\n" +
      "Learning      : CONTINUOUS"
  },

  github: {
    text: "GitHub → Check the GitHub link in the Contact section."
  },

  contact: {
    text:
      "CONTACT\n\n" +
      "Email   → Available below\n" +
      "GitHub  → Available below\n" +
      "LinkedIn → Available below"
  }
};

export const getHelpText = () =>
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
  "clear        → Clear console";

export const isProjectCommand = (command) =>
  Boolean(projectAliases[command]);

export const getProjectName = (command) =>
  projectNames[projectAliases[command]] || command;

export const getCommandOutput = (command, argument) => {
  if (projectCommands[command]) {
    return {
      text: projectCommands[command].text,
      type: "normal"
    };
  }

  if (command === "open") {
    if (!argument) {
      return {
        text: "Usage: open <project>",
        type: "normal"
      };
    }

    const normalizedProject =
      projectAliases[argument.toLowerCase()] ||
      argument.toLowerCase();

    if (projectNames[normalizedProject]) {
      return {
        text: `Opening ${projectNames[normalizedProject]}...`,
        type: "success",
        navigate: true
      };
    }

    return {
      text:
        `Project '${argument}' not found.\n` +
        "Type 'projects' to see available projects.",
      type: "normal"
    };
  }

  return null;
};
import "./LabIntro.css";

function LabIntro() {
  return (
    <div className="lab-intro">
      <div className="lab-intro-grid"></div>

      <div className="lab-glow"></div>

      <div className="lab-orbit orbit-one"></div>
      <div className="lab-orbit orbit-two"></div>

      <div className="lab-elements">
        <span className="lab-element element-1">&lt;/&gt;</span>
        <span className="lab-element element-2">{"{ }"}</span>
        <span className="lab-element element-3">01</span>
        <span className="lab-element element-4">AI</span>
        <span className="lab-element element-5">#</span>
        <span className="lab-element element-6">()</span>
      </div>

      <div className="lab-circuit circuit-one"></div>
      <div className="lab-circuit circuit-two"></div>
      <div className="lab-circuit circuit-three"></div>

      <div className="lab-node node-one"></div>
      <div className="lab-node node-two"></div>
      <div className="lab-node node-three"></div>
      <div className="lab-node node-four"></div>

      <div className="lab-terminal">
        <div className="terminal-line line-one"></div>
        <div className="terminal-line line-two"></div>
        <div className="terminal-line line-three"></div>
      </div>

      <div className="lab-name">

        <div className="lab-small-name">
          <span className="lab-first-name">
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>I</span>
            <span>K</span>
          </span>

          <span className="lab-space">&nbsp;</span>

          <span className="lab-middle-name">
            <span>M</span>
            <span>O</span>
            <span>H</span>
            <span>A</span>
            <span>M</span>
            <span>M</span>
            <span>E</span>
            <span>D</span>
          </span>
        </div>

        <div className="lab-last-name">
          <span>H</span>
          <span>A</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
          <span>E</span>
          <span>D</span>
        </div>

      </div>

      <div className="lab-scan-line"></div>
      <div className="lab-cursor"></div>
      <div className="lab-flash"></div>
    </div>
  );
}

export default LabIntro;
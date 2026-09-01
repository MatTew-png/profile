import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, AlertCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EncryptedText } from './ui/EncryptedText';
import { testSuites } from '../data/testSuites';

export default function TestRunnerWidget() {
  const [activeSuiteId, setActiveSuiteId] = useState('cypress-e2e');
  const [isRunning, setIsRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isFinished, setIsFinished] = useState(false);
  const terminalLogsRef = useRef(null);

  const activeSuite = testSuites.find((s) => s.id === activeSuiteId) || testSuites[0];

  // Auto-scroll terminal to bottom when new logs appear
  useEffect(() => {
    if (terminalLogsRef.current) {
      terminalLogsRef.current.scrollTop = terminalLogsRef.current.scrollHeight;
    }
  }, [completedSteps, currentStepIndex]);

  const handleSelectSuite = (suiteId) => {
    if (isRunning) return;
    setActiveSuiteId(suiteId);
    setCompletedSteps([]);
    setCurrentStepIndex(-1);
    setIsFinished(false);
  };

  const handleRunTests = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompletedSteps([]);
    setIsFinished(false);

    const tests = activeSuite.tests;

    for (let i = 0; i < tests.length; i++) {
      setCurrentStepIndex(i);
      // Simulate realistic test execution latency
      await new Promise((resolve) => setTimeout(resolve, 450));
      setCompletedSteps((prev) => [...prev, tests[i]]);
    }

    setCurrentStepIndex(-1);
    setIsFinished(true);
    setIsRunning(false);

    // Fire celebration confetti!
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#34d399', '#a855f7', '#fbbf24']
      });
    } catch {
      // ignore if canvas not supported
    }
  };

  const handleReset = () => {
    if (isRunning) return;
    setCompletedSteps([]);
    setCurrentStepIndex(-1);
    setIsFinished(false);
  };

  return (
    <section id="test-runner" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <ShieldCheck size={14} className="badge-icon" />
          <span>Automated QA & Reliability</span>
        </div>
        <h2 className="font-headline-md section-title">Live Automated Test Runner</h2>
        <p className="font-body-md section-subtitle">
          Experience our test-driven development in action. Click <strong>Run Tests</strong> to simulate live Cypress & API assertion suites.
        </p>
      </div>

      <div className="terminal-widget glass-panel reveal-on-scroll stagger-2">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="terminal-title">
            <Terminal size={14} className="terminal-icon" />
            <span><EncryptedText text="qa-tester@burapha-cs:~/" />{activeSuite.id} (bash)</span>
          </div>
          <div className="terminal-status">
            {isRunning ? (
              <span className="status-running">
                <span className="pulsing-dot" /> Running Specs...
              </span>
            ) : isFinished ? (
              <span className="status-passed">
                <CheckCircle2 size={13} /> 100% Passed
              </span>
            ) : (
              <span className="status-idle">Ready</span>
            )}
          </div>
        </div>

        {/* Test Suite Selector Tabs */}
        <div className="terminal-tabs">
          {testSuites.map((suite) => (
            <button
              key={suite.id}
              onClick={() => handleSelectSuite(suite.id)}
              disabled={isRunning}
              className={`terminal-tab ${activeSuiteId === suite.id ? 'active' : ''}`}
            >
              <span>{suite.name}</span>
              <span className="tab-count">{suite.totalTests} tests</span>
            </button>
          ))}
        </div>

        {/* Terminal Screen / Output Body */}
        <div className="terminal-body" ref={terminalLogsRef}>
          <div className="terminal-cli-command">
            <span className="cli-prompt">$</span>
            <span className="cli-text">{activeSuite.command}</span>
          </div>

          <div className="terminal-meta-line">
            <span className="meta-dim">Framework:</span> {activeSuite.runner} |{' '}
            <span className="meta-dim">Target:</span> {activeSuite.description}
          </div>

          {/* Render Completed Tests */}
          <div className="terminal-tests-list">
            {completedSteps.map((test, idx) => (
              <div key={idx} className="terminal-test-item passed-item">
                <div className="test-header-row">
                  <span className="pass-badge">
                    <CheckCircle2 size={14} /> PASS
                  </span>
                  <span className="test-title-text">{test.title}</span>
                  <span className="test-duration">
                    <Clock size={12} /> {test.duration}
                  </span>
                </div>
                <div className="test-details-line">
                  <code>{test.details}</code>
                </div>
              </div>
            ))}

            {/* Currently Executing Step */}
            {isRunning && currentStepIndex >= 0 && activeSuite.tests[currentStepIndex] && (
              <div className="terminal-test-item running-item">
                <div className="test-header-row">
                  <span className="running-badge">
                    <span className="spin-indicator" /> RUNS
                  </span>
                  <span className="test-title-text">
                    {activeSuite.tests[currentStepIndex].title}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Completed Summary Banner */}
          {isFinished && (
            <div className="terminal-summary-card">
              <div className="summary-headline">
                <Sparkles size={16} className="text-emerald" />
                <span>All {activeSuite.tests.length} test specs executed successfully!</span>
              </div>
              <div className="summary-metrics">
                <div className="metric-box">
                  <span className="metric-num text-emerald">{activeSuite.tests.length}</span>
                  <span className="metric-label">Passed</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">0</span>
                  <span className="metric-label">Failed</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num text-cyan">{activeSuite.duration}</span>
                  <span className="metric-label">Duration</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num text-emerald">100%</span>
                  <span className="metric-label">Coverage</span>
                </div>
              </div>
            </div>
          )}

          {!isRunning && !isFinished && completedSteps.length === 0 && (
            <div className="terminal-empty-hint">
              Press <strong>"Run Automated Tests"</strong> below to execute this suite in real time.
            </div>
          )}
        </div>

        {/* Terminal Controls Bar */}
        <div className="terminal-controls">
          <div className="control-left">
            <span className="terminal-hint">
              <ShieldCheck size={14} /> TDD & Regression Suite
            </span>
          </div>
          <div className="control-right">
            <button
              onClick={handleReset}
              disabled={isRunning || completedSteps.length === 0}
              className="terminal-btn btn-reset"
              title="Reset Terminal"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
            <button
              onClick={handleRunTests}
              disabled={isRunning}
              className={`terminal-btn btn-run ${isRunning ? 'running' : ''}`}
            >
              {isRunning ? (
                <>
                  <span className="spin-indicator" />
                  <span>Executing...</span>
                </>
              ) : (
                <>
                  <Play size={14} fill="currentColor" />
                  <span>Run Automated Tests</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

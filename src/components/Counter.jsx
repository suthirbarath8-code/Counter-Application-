import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  RotateCcw, 
  AlertCircle, 
  Sparkles, 
  Activity, 
  Sliders 
} from 'lucide-react';

export default function Counter() {
  // Primary state requirement: Initialize counter value using useState hook
  const [count, setCount] = useState(0);
  
  // Additional helpful state to deepen useState understanding
  const [step, setStep] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [lastAction, setLastAction] = useState('Initialized');

  // Handle Increment
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + step);
    setClickCount((prev) => prev + 1);
    setLastAction(`Incremented by ${step}`);
  };

  // Handle Decrement with prevention from going below zero
  const handleDecrement = () => {
    if (count <= 0) {
      setLastAction('Attempted decrement below zero');
      return;
    }
    setCount((prevCount) => Math.max(0, prevCount - step));
    setClickCount((prev) => prev + 1);
    setLastAction(`Decremented by ${step}`);
  };

  // Handle Reset to zero
  const handleReset = () => {
    setCount(0);
    setClickCount((prev) => prev + 1);
    setLastAction('Reset to 0');
  };

  // Check if minimum limit is reached
  const isMinLimit = count === 0;

  return (
    <div className="counter-card">
      {/* Top Status */}
      <div className="card-top-tag">
        <span className="live-pulse">
          <span className="pulse-dot"></span>
          UI State: Active
        </span>
      </div>

      <div className="card-header">
        <h1 className="main-title">Counter Application</h1>
        <p className="subtitle">
          Dynamic state management powered by React&apos;s functional component &amp; useState hook.
        </p>
      </div>

      {/* Counter Value Display Area */}
      <div className="counter-display-wrapper">
        <div className={`counter-number-box ${isMinLimit ? 'is-zero' : 'is-positive'}`}>
          <div className="number-label">CURRENT VALUE</div>
          <div className="number-value" key={count}>
            {count}
          </div>
          
          {/* Quick status indicator */}
          <div className="number-meta">
            {count > 0 ? (
              <span className="meta-tag parity-tag">
                {count % 2 === 0 ? 'Even Number' : 'Odd Number'}
              </span>
            ) : (
              <span className="meta-tag zero-tag">Base Ground State</span>
            )}
            {count >= 20 && (
              <span className="meta-tag milestone-tag">
                <Sparkles size={13} /> Milestone Reached!
              </span>
            )}
          </div>
        </div>

        {/* Conditional Rendering Alert: "Minimum limit reached" */}
        <div className="conditional-notice-container">
          {isMinLimit ? (
            <div className="alert-box limit-reached-alert" role="status" aria-live="polite">
              <AlertCircle size={18} className="alert-icon" />
              <div className="alert-content">
                <strong>Minimum limit reached</strong>
                <span>Counter cannot decrease below 0.</span>
              </div>
            </div>
          ) : (
            <div className="alert-box normal-status-alert">
              <Sparkles size={18} className="success-icon" />
              <div className="alert-content">
                <strong>Counter is advancing</strong>
                <span>Click Decrement or Reset anytime to adjust.</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons: Decrement, Reset, Increment */}
      <div className="controls-group">
        {/* Decrement Button */}
        <button
          type="button"
          className={`btn btn-decrement ${isMinLimit ? 'btn-disabled' : ''}`}
          onClick={handleDecrement}
          disabled={isMinLimit}
          title={isMinLimit ? 'Minimum limit reached (0)' : `Decrease count by ${step}`}
          aria-label="Decrement counter"
        >
          <span className="btn-icon-circle">
            <Minus size={20} strokeWidth={2.5} />
          </span>
          <div className="btn-text-col">
            <span className="btn-action-name">Decrement</span>
            <span className="btn-action-hint">-{step}</span>
          </div>
        </button>

        {/* Reset Button */}
        <button
          type="button"
          className="btn btn-reset"
          onClick={handleReset}
          disabled={isMinLimit && lastAction === 'Reset to 0'}
          title="Reset counter back to 0"
          aria-label="Reset counter to zero"
        >
          <span className="btn-icon-circle">
            <RotateCcw size={18} strokeWidth={2.3} />
          </span>
          <div className="btn-text-col">
            <span className="btn-action-name">Reset</span>
            <span className="btn-action-hint">to 0</span>
          </div>
        </button>

        {/* Increment Button */}
        <button
          type="button"
          className="btn btn-increment"
          onClick={handleIncrement}
          title={`Increase count by ${step}`}
          aria-label="Increment counter"
        >
          <span className="btn-icon-circle">
            <Plus size={20} strokeWidth={2.5} />
          </span>
          <div className="btn-text-col">
            <span className="btn-action-name">Increment</span>
            <span className="btn-action-hint">+{step}</span>
          </div>
        </button>
      </div>

      {/* Step Size Selector (Interactive Feature) */}
      <div className="step-selector-row">
        <span className="step-label">
          <Sliders size={14} /> Step size:
        </span>
        <div className="step-pills">
          {[1, 5, 10].map((val) => (
            <button
              key={val}
              type="button"
              className={`step-btn ${step === val ? 'active' : ''}`}
              onClick={() => setStep(val)}
            >
              +{val}
            </button>
          ))}
        </div>
      </div>

      {/* State Inspector / Learning Panel */}
      <div className="state-inspector">
        <div className="inspector-header">
          <Activity size={14} className="icon-gold" />
          <span>React Component State Snapshot</span>
        </div>
        <div className="inspector-grid">
          <div className="inspect-item">
            <span className="inspect-key">count:</span>
            <span className="inspect-val highlight">{count}</span>
          </div>
          <div className="inspect-item">
            <span className="inspect-key">step:</span>
            <span className="inspect-val">{step}</span>
          </div>
          <div className="inspect-item">
            <span className="inspect-key">clicks:</span>
            <span className="inspect-val">{clickCount}</span>
          </div>
          <div className="inspect-item">
            <span className="inspect-key">lastAction:</span>
            <span className="inspect-val action-text">&ldquo;{lastAction}&rdquo;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

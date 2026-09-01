import React from 'react';
import {
  Coffee,
  Activity,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Wifi,
  Bot,
  Printer,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const ProjectMockupBanner = ({ type, title, accentColor = '#38bdf8' }) => {
  if (type === 'pos') {
    return (
      <div className="mockup-window glass-panel">
        {/* Browser / App Header */}
        <div className="mockup-header">
          <div className="mockup-dots">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
          </div>
          <div className="mockup-url-bar font-label-mono">
            <Coffee size={11} className="text-emerald inline-block mr-1" />
            <span>monkkato-pos.local/cashier • Branch: Chonburi</span>
          </div>
          <div className="mockup-status-tag font-label-mono">
            <span className="live-dot" /> POS Active
          </div>
        </div>

        {/* Mockup Canvas */}
        <div className="mockup-body mockup-pos-layout">
          {/* Menu Column */}
          <div className="mockup-menu-col">
            <div className="mockup-category-pills">
              <span className="pill active font-label-mono">☕ Coffee</span>
              <span className="pill font-label-mono">🍵 Tea</span>
              <span className="pill font-label-mono">🥐 Bakery</span>
            </div>
            <div className="mockup-items-grid">
              <div className="mockup-item-card active-card">
                <div className="item-img-placeholder bg-emerald-500/20 text-emerald">☕</div>
                <div className="item-meta">
                  <span className="item-name font-label-mono">Caramel Macchiato</span>
                  <span className="item-price">฿65</span>
                </div>
              </div>
              <div className="mockup-item-card">
                <div className="item-img-placeholder bg-cyan-500/20 text-cyan">🍵</div>
                <div className="item-meta">
                  <span className="item-name font-label-mono">Matcha Latte</span>
                  <span className="item-price">฿60</span>
                </div>
              </div>
              <div className="mockup-item-card">
                <div className="item-img-placeholder bg-purple-500/20 text-purple">🥐</div>
                <div className="item-meta">
                  <span className="item-name font-label-mono">Butter Croissant</span>
                  <span className="item-price">฿45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cart & Queue Column */}
          <div className="mockup-cart-col glass-panel">
            <div className="cart-header font-label-mono">
              <span className="queue-tag">Queue: #042</span>
              <span className="member-tag">⭐ Member: 140 pts</span>
            </div>
            <div className="cart-item-row font-label-mono">
              <span>1x Caramel Macchiato (Sweet 50%)</span>
              <span>฿65</span>
            </div>
            <div className="cart-item-row font-label-mono text-emerald">
              <span>Point Discount (-20 pts)</span>
              <span>-฿20</span>
            </div>
            <div className="cart-footer">
              <div className="total-row font-label-mono">
                <span>Total:</span>
                <span className="total-val text-emerald font-bold">฿45</span>
              </div>
              <div className="mockup-btn-print font-label-mono">
                <Printer size={11} /> Print PDF Receipt
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'iot') {
    return (
      <div className="mockup-window glass-panel">
        {/* Browser / App Header */}
        <div className="mockup-header">
          <div className="mockup-dots">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
          </div>
          <div className="mockup-url-bar font-label-mono">
            <Activity size={11} className="text-cyan inline-block mr-1" />
            <span>hospital-telemetry.health.org • Ward 4B</span>
          </div>
          <div className="mockup-status-tag font-label-mono">
            <Wifi size={11} className="text-cyan" /> 35ms WS
          </div>
        </div>

        {/* Mockup Canvas */}
        <div className="mockup-body mockup-health-layout">
          {/* Bed 1 Normal */}
          <div className="health-bed-card glass-panel">
            <div className="bed-top-row font-label-mono">
              <span className="bed-title">Bed 01 • Somchai P.</span>
              <span className="vital-badge-ok"><CheckCircle2 size={11} /> Normal</span>
            </div>
            <div className="vital-metrics-row">
              <div className="vital-box">
                <span className="vital-label font-label-mono">Heart Rate</span>
                <span className="vital-num text-cyan font-mono">76 <span className="text-[10px]">bpm</span></span>
              </div>
              <div className="vital-box">
                <span className="vital-label font-label-mono">SpO2</span>
                <span className="vital-num text-emerald font-mono">99%</span>
              </div>
              <div className="vital-box">
                <span className="vital-label font-label-mono">Respiration</span>
                <span className="vital-num font-mono">18 <span className="text-[10px]">rpm</span></span>
              </div>
            </div>
            {/* Wave SVG Graph */}
            <div className="wave-svg-box">
              <svg viewBox="0 0 200 30" className="vital-wave-line">
                <path
                  d="M0 15 Q 15 15, 20 5 T 30 25 T 40 15 L 80 15 Q 95 15, 100 2 T 110 28 T 120 15 L 200 15"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* AI Clinical Assistant Alert Sidebar */}
          <div className="health-ai-col glass-panel">
            <div className="ai-header font-label-mono">
              <Bot size={13} className="text-purple" />
              <span>LLM AiAsk Assistant</span>
            </div>
            <div className="ai-bubble font-body-sm">
              <span className="ai-q font-label-mono text-cyan">"Summarize Bed 01 sleep cycle:"</span>
              <p className="ai-ans text-slate-300">
                Patient slept 6.8 hrs. REM stability 94%. No abnormal movement events in last 24h.
              </p>
            </div>
            <div className="ai-alert-pill font-label-mono">
              <AlertTriangle size={11} className="text-amber-400" /> Fall Sensor: Armed (35ms)
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Complaint Management / Default
  return (
    <div className="mockup-window glass-panel">
      <div className="mockup-header">
        <div className="mockup-dots">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
        </div>
        <div className="mockup-url-bar font-label-mono">
          <FileText size={11} className="text-purple inline-block mr-1" />
          <span>citizen-portal.gov/triage • RBAC Admin</span>
        </div>
        <div className="mockup-status-tag font-label-mono">
          <ShieldCheck size={11} className="text-emerald" /> Cypress Verified
        </div>
      </div>

      <div className="mockup-body mockup-complaint-layout">
        <div className="ticket-card glass-panel">
          <div className="ticket-header font-label-mono">
            <span className="ticket-id font-bold text-purple">#TKT-2024-089</span>
            <span className="status-pill-resolved">Resolved</span>
          </div>
          <p className="ticket-desc font-body-sm text-slate-300">
            Public lighting defect reported at District 4 • Assigned to Dept. of Works
          </p>
          <div className="timeline-steps font-label-mono">
            <div className="t-step done">✓ Submitted</div>
            <div className="t-line active" />
            <div className="t-step done">✓ Triaged</div>
            <div className="t-line active" />
            <div className="t-step done">✓ Fixed</div>
          </div>
        </div>

        <div className="cypress-qa-badge-box glass-panel">
          <div className="qa-badge-head font-label-mono text-emerald">
            <ShieldCheck size={13} />
            <span>Cypress E2E Suite</span>
          </div>
          <span className="qa-stat font-mono text-cyan">18 / 18 Passed (100%)</span>
          <span className="qa-time font-label-mono text-slate-400">Duration: 4.2s</span>
        </div>
      </div>
    </div>
  );
};

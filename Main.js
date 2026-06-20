// ── ENGINE ────────────────────────────────────────────────────

let history = [];
let current  = null;

// DOM refs
const coverScreen  = document.getElementById('cover-screen');
const storyScreen  = document.getElementById('story-screen');
const storyContent = document.getElementById('story-content');
const progressFill = document.getElementById('progress-fill');
const partLabel    = document.getElementById('part-label');

// ── TYPEWRITER (cover title) ───────────────────────────────────
// The title is typed out character by character. "Mad" is wrapped
// in <em> so it keeps its red/italic styling while being typed.
const TYPEWRITER_SEGMENTS = [
  { text: "Mad", em: true  },
  { text: " Man", em: false }
];
const TYPEWRITER_SPEED_MS = 250;  // delay between each character
const TYPEWRITER_START_DELAY_MS = 1200; // wait for eyebrow fade-in first

function runTypewriter() {
  const textEl   = document.getElementById('typewriter-text');
  const cursorEl = document.getElementById('typewriter-cursor');
  if (!textEl) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Skip the animation entirely — render the full title at once.
    TYPEWRITER_SEGMENTS.forEach((seg) => {
      if (seg.em) {
        const em = document.createElement('em');
        em.textContent = seg.text;
        textEl.appendChild(em);
      } else {
        textEl.appendChild(document.createTextNode(seg.text));
      }
    });
    if (cursorEl) cursorEl.style.display = 'none';
    revealCoverContent();
    return;
  }

  // Flatten segments into a list of {char, em} so we can type
  // across segment boundaries seamlessly.
  const chars = [];
  TYPEWRITER_SEGMENTS.forEach((seg) => {
    seg.text.split('').forEach((ch) => chars.push({ ch, em: seg.em }));
  });

  let i = 0;
  let currentEm = null;
  let emSpan = null;

  function typeNext() {
    if (i >= chars.length) {
      // Typing finished — reveal the rest of the cover content.
      revealCoverContent();
      return;
    }

    const { ch, em } = chars[i];

    if (em) {
      // Start (or continue) an <em> span for styled characters.
      if (currentEm !== true) {
        emSpan = document.createElement('em');
        textEl.appendChild(emSpan);
        currentEm = true;
      }
      emSpan.textContent += ch;
    } else {
      // Plain text node.
      textEl.appendChild(document.createTextNode(ch));
      currentEm = false;
    }

    i++;
    setTimeout(typeNext, TYPEWRITER_SPEED_MS);
  }

  setTimeout(typeNext, TYPEWRITER_START_DELAY_MS);
}

function revealCoverContent() {
  // Stagger-reveal the elements that come after the title now that
  // typing has finished, instead of relying on a fixed time delay
  // that could fall out of sync with how long typing actually took.
  const selectors = [
    '.cover-divider',
    '.cover-subtitle',
    '.cover-author',
    '.cover-description',
    '.btn-start'
  ];
  selectors.forEach((sel) => {
    const el = document.querySelector(sel);
    if (el) el.classList.add('reveal');
  });
}

// Kick off the typewriter once the page has loaded.
document.addEventListener('DOMContentLoaded', runTypewriter);

// ── START ──────────────────────────────────────────────────────
function startStory() {
  coverScreen.style.display  = 'none';
  storyScreen.style.display  = 'block';
  history = [];
  renderNode('prologue');
}

// ── RENDER NODE ───────────────────────────────────────────────
function renderNode(id) {
  const node = nodes[id];
  if (!node) {
    console.error('Node not found:', id);
    return;
  }

  current = id;

  // Update progress bar
  const pct = node.progress || 0;
  progressFill.style.width = pct + '%';

  // Update header label
  partLabel.textContent = node.part;

  // Build HTML
  let html = '<div class="fade-in">';

  html += `<div class="node-label">${node.part}</div>`;
  html += `<div class="node-title">${node.title}</div>`;

  html += `<div class="story-body">${node.body}</div>`;

  // Choices
  if (node.choices && node.choices.length > 0) {
    // Only show the "What do you do?" prompt when there's an actual
    // decision to make (2+ options). A single choice is just a
    // linear continuation (e.g. "Next Page") and doesn't need it.
    const isRealChoice = node.choices.length > 1;
    if (isRealChoice) {
      html += '<div class="choices-label">What do you do?</div>';
    }
    html += '<div class="choices-list">';
    node.choices.forEach((c) => {
      // data-next stored on button, event handler attached after render
      html += `<button class="choice-btn" data-next="${c.next}">${c.text}</button>`;
    });
    html += '</div>';
  }

  // Ending block
  if (node.ending) {
    const e = node.ending;
    html += `
      <div class="ending-block ${e.type}">
        <div class="ending-type">— ${node.part} —</div>
        <div class="ending-quote">${e.quote}</div>
        <div class="ending-desc">${e.desc}</div>
        <button class="btn-restart" id="btn-restart">Begin again</button>
      </div>
    `;
  }

  html += '</div>';

  storyContent.innerHTML = html;

  // Attach choice events
  storyContent.querySelectorAll('.choice-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      choose(btn.dataset.next);
    });
  });

  // Attach restart event
  const restartBtn = document.getElementById('btn-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', restartStory);
  }

  // Scroll to top of story content area
  storyScreen.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── CHOOSE ────────────────────────────────────────────────────
function choose(nextId) {
  history.push(current);
  renderNode(nextId);
}

// ── BACK ──────────────────────────────────────────────────────
// function goBack() {
//   if (history.length === 0) {
//     // Return to cover
//     storyScreen.style.display = 'none';
//     coverScreen.style.display = 'flex';
//     return;
//   }
//   const prev = history.pop();
//   renderNode(prev);
// }

// ── RESTART ───────────────────────────────────────────────────
function restartStory() {
  history  = [];
  current  = null;
  storyScreen.style.display = 'none';
  coverScreen.style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── KEYBOARD NAV ──────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && storyScreen.style.display !== 'none') {
    // Only fire if user isn't in a text input
    if (document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      goBack();
    }
  }
});
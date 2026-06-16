// ── ENGINE ────────────────────────────────────────────────────

let history = [];
let current  = null;

// DOM refs
const coverScreen  = document.getElementById('cover-screen');
const storyScreen  = document.getElementById('story-screen');
const storyContent = document.getElementById('story-content');
const progressFill = document.getElementById('progress-fill');
const partLabel    = document.getElementById('part-label');

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
    html += '<div class="choices-label">What do you do?</div>';
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
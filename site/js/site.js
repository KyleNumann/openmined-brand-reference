/* ══════════════════════════════════════════════════════════════════
   SITE.JS — OpenMined Brand Reference: data, rendering, interactions
   ══════════════════════════════════════════════════════════════════ */


// ── Brand token data ──────────────────────────────────────────────────
//    These arrays are the single source of truth for all data-driven
//    sections. Edit here to add or remove tokens / swatches.

const COLOR_FAMILIES = [
  { name: 'Grayscale', prefix: 'grayscale', steps: [50, 100, 150, 200, 300, 400, 500, 550, 600, 700, 750, 800, 850, 900, 950, 1000] },
  { name: 'Gold',      prefix: 'gold',      steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  { name: 'Orange',    prefix: 'orange',    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  { name: 'Red',       prefix: 'red',       steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  { name: 'Violet',    prefix: 'violet',    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  { name: 'Blue',      prefix: 'blue',      steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  { name: 'Teal',      prefix: 'teal',      steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  { name: 'Green',     prefix: 'green',     steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  { name: 'Lime',      prefix: 'lime',      steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  { name: 'Yellow',    prefix: 'yellow',    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
];

const INTERACTIVE_TOKENS = [
  '--color-interactive-default',
  '--color-interactive-hover',
  '--color-interactive-focus',
  '--color-interactive-active',
  '--color-interactive-disabled',
];

const TEXT_TOKENS = [
  '--text-headline',
  '--text-body',
  '--text-subtle',
  '--text-headline-light',
  '--text-body-light',
];

const GRADIENTS = [
  { token: '--gradient-gold-orange',  label: 'Gold → Orange' },
  { token: '--gradient-orange-red',   label: 'Orange → Red' },
  { token: '--gradient-red-violet',   label: 'Red → Violet' },
  { token: '--gradient-violet-blue',  label: 'Violet → Blue' },
  { token: '--gradient-teal-green',   label: 'Teal → Green' },
  { token: '--gradient-green-lime',   label: 'Green → Lime' },
  { token: '--gradient-lime-yellow',  label: 'Lime → Yellow' },
];

const SEMANTIC_BG_SURFACES = [
  { token: '--surface-background-default', label: 'Background Default' },
  { token: '--surface-background-bright',  label: 'Background Bright' },
  { token: '--surface-background-dim',     label: 'Background Dim' },
];

const SEMANTIC_FG_SURFACES = [
  { token: '--surface-foreground-lowest',  label: 'Foreground Lowest' },
  { token: '--surface-foreground-low',     label: 'Foreground Low' },
  { token: '--surface-foreground-default', label: 'Foreground Default' },
  { token: '--surface-foreground-high',    label: 'Foreground High' },
  { token: '--surface-foreground-highest', label: 'Foreground Highest' },
];

const DARK_BG_SURFACES = [
  { token: '--dark-surface-background-default', label: 'Background Default' },
  { token: '--dark-surface-background-bright',  label: 'Background Bright' },
  { token: '--dark-surface-background-dim',     label: 'Background Dim' },
];

const DARK_FG_SURFACES = [
  { token: '--dark-surface-foreground-lowest',  label: 'Foreground Lowest' },
  { token: '--dark-surface-foreground-low',     label: 'Foreground Low' },
  { token: '--dark-surface-foreground-default', label: 'Foreground Default' },
  { token: '--dark-surface-foreground-high',    label: 'Foreground High' },
  { token: '--dark-surface-foreground-highest', label: 'Foreground Highest' },
];

const SPACING_STEPS = [
  { name: '3XS',  token: '--spacing-3XS' },
  { name: '2XS',  token: '--spacing-2XS' },
  { name: 'XS',   token: '--spacing-XS' },
  { name: 'S',    token: '--spacing-S' },
  { name: 'M',    token: '--spacing-M' },
  { name: 'L',    token: '--spacing-L' },
  { name: 'XL',   token: '--spacing-XL' },
  { name: '2XL',  token: '--spacing-2XL' },
  { name: '3XL',  token: '--spacing-3XL' },
  { name: '4XL',  token: '--spacing-4XL' },
  { name: '5XL',  token: '--spacing-5XL' },
  { name: 'Full', token: '--spacing-full' },
];

const RADII = [
  { name: 'XS',   token: '--border-radius-XS' },
  { name: 'S',    token: '--border-radius-S' },
  { name: 'M',    token: '--border-radius-M' },
  { name: 'L',    token: '--border-radius-L' },
  { name: 'XL',   token: '--border-radius-XL' },
  { name: 'Full', token: '--border-radius-full' },
];

const SHADOWS = [
  { name: 'sm', token: '--shadow-sm' },
  { name: 'md', token: '--shadow-md' },
  { name: 'lg', token: '--shadow-lg' },
];

const TRANSITIONS = [
  { name: 'base',  token: '--transition-base',  desc: '0.4s ease — buttons, links, icons, surfaces' },
  { name: 'theme', token: '--transition-theme', desc: '0.4s ease — theme switch bg/color transitions' },
];

const ICONS = [
  'logo-github', 'logo-twitter', 'logo-linkedin', 'logo-youtube',
  'arrow-forward-outline', 'arrow-back-outline', 'chevron-forward-outline', 'chevron-down-outline',
  'close-outline', 'menu-outline', 'search-outline',
  'copy-outline', 'link-outline', 'open-outline', 'download-outline',
  'checkmark-circle-outline', 'alert-circle-outline', 'information-circle-outline',
  'lock-closed-outline', 'shield-checkmark-outline', 'eye-outline', 'layers-outline',
];

const LOGO_GROUPS = [
  {
    group: 'Horizontal',
    logos: [
      { file: 'OpenMined-Logo.svg',            label: 'Full color',  dark: false },
      { file: 'OpenMined-Logo-Dark.svg',        label: 'Reversed',    dark: true  },
      { file: 'OpenMined-Logo-Ghost.svg',       label: 'Ghost',       dark: true  },
      { file: 'OpenMined-Logo-Mono-White.svg',  label: 'Mono white',  dark: true  },
      { file: 'OpenMined-Logo-Mono-Black.svg',  label: 'Mono black',  dark: false },
    ],
  },
  {
    group: 'Stacked',
    logos: [
      { file: 'OpenMined-Logo-Stacked.svg',            label: 'Full color', dark: false },
      { file: 'OpenMined-Logo-Stacked-Dark.svg',        label: 'Reversed',   dark: true  },
      { file: 'OpenMined-Logo-Stacked-Ghost.svg',       label: 'Ghost',      dark: true  },
      { file: 'OpenMined-Logo-Stacked-Mono-White.svg',  label: 'Mono white', dark: true  },
      { file: 'OpenMined-Logo-Stacked-Mono-Black.svg',  label: 'Mono black', dark: false },
    ],
  },
  {
    group: 'Icon mark',
    logos: [
      { file: 'OpenMined-Icon.svg', label: 'Icon mark', dark: true },
    ],
  },
];

// Copy content for the graphic section buttons (keyed by data-copy-key attribute)
const GRAPHIC_COPY = {
  diamond: `import DiamondEmbed from '@brand/DiamondEmbed.astro';\n\n<DiamondEmbed\n  labelLeft="Non-Public Data"\n  labelRight="Attributable Insights"\n/>`,
  stream:  `import StreamEmbed from '@brand/StreamEmbed.astro';\n\n<StreamEmbed />`,
};


// ── Section renderers ─────────────────────────────────────────────────

function renderColorFamilies() {
  const root = document.getElementById('sg-color-families');
  if (!root) return;

  let html = COLOR_FAMILIES.map(family => `
    <div class="sg-color-family">
      <h3 class="sg-subsection-title">${family.name}</h3>
      <div class="sg-swatches">
        ${family.steps.map(step => `
          <div class="sg-swatch">
            <div class="sg-swatch__color" style="background-color: var(--color-${family.prefix}-${step});"></div>
            <span class="sg-swatch__label">${step}</span>
          </div>`).join('')}
      </div>
    </div>`).join('');

  html += `
    <h3 class="sg-subsection-title" style="margin-top: var(--spacing-3XL);">Interactive States</h3>
    <div class="sg-swatches">
      ${INTERACTIVE_TOKENS.map(token => `
        <div class="sg-swatch">
          <div class="sg-swatch__color" style="background-color: var(${token});"></div>
          <span class="sg-swatch__label">${token.replace('--color-interactive-', '')}</span>
        </div>`).join('')}
    </div>

    <h3 class="sg-subsection-title" style="margin-top: var(--spacing-3XL);">Text Tokens</h3>
    <div class="sg-token-table">
      ${TEXT_TOKENS.map(token => `
        <div class="sg-token-row">
          <div class="sg-swatch__color sg-swatch__color--sm" style="background-color: var(${token});"></div>
          <code>${token}</code>
        </div>`).join('')}
    </div>`;

  root.innerHTML = html;
}


function renderGradients() {
  const root = document.getElementById('sg-gradients');
  if (!root) return;

  root.innerHTML = `<div class="sg-gradients">${GRADIENTS.map(g => `
    <div class="sg-gradient-row">
      <div class="sg-gradient-strip" style="background: var(${g.token});"></div>
      <div class="sg-gradient-meta">
        <code>${g.token}</code>
        <span class="sg-gradient-label">${g.label}</span>
      </div>
    </div>`).join('')}</div>`;
}


function renderSurfaces() {
  const root = document.getElementById('sg-surfaces');
  if (!root) return;

  const cell = (token, label, darkText = false) => `
    <div class="sg-surface-cell" style="background-color: var(${token}); border: 1px solid var(--surface-foreground-default);">
      <code${darkText ? ' style="color: var(--text-headline-light);"' : ''}>${token}</code>
      <span${darkText ? ' style="color: var(--text-body-light);"' : ''}>${label}</span>
    </div>`;

  root.innerHTML = `
    <h3 class="sg-subsection-title">Semantic (theme-responsive)</h3>
    <div class="sg-surface-wrap" style="background: var(--surface-background-default);">
      <div class="sg-surface-grid sg-surface-grid--3">
        ${SEMANTIC_BG_SURFACES.map(s => cell(s.token, s.label)).join('')}
      </div>
      <div class="sg-surface-grid sg-surface-grid--5">
        ${SEMANTIC_FG_SURFACES.map(s => cell(s.token, s.label)).join('')}
      </div>
    </div>

    <h3 class="sg-subsection-title" style="margin-top: var(--spacing-3XL);">Invert Tokens</h3>
    <div class="sg-surface-wrap" style="background: var(--dark-surface-background-default);">
      <div class="sg-surface-grid sg-surface-grid--3">
        ${DARK_BG_SURFACES.map(s => cell(s.token, s.label, true)).join('')}
      </div>
      <div class="sg-surface-grid sg-surface-grid--5">
        ${DARK_FG_SURFACES.map(s => cell(s.token, s.label, true)).join('')}
      </div>
    </div>`;
}


function renderSpacing() {
  const root = document.getElementById('sg-spacing-list');
  if (!root) return;

  root.innerHTML = SPACING_STEPS.map(s => `
    <div class="sg-spacing-row">
      <code class="sg-spacing-label">${s.token}</code>
      <div class="sg-spacing-bar" style="width: var(${s.token});"></div>
      <span class="sg-spacing-name">${s.name}</span>
    </div>`).join('');
}


function renderStyles() {
  const radiiRoot = document.getElementById('sg-radii');
  if (radiiRoot) {
    radiiRoot.innerHTML = `<div class="sg-radius-grid">${RADII.map(r => `
      <div class="sg-radius-cell">
        <div class="sg-radius-box" style="border-radius: var(${r.token});"></div>
        <code>${r.token}</code>
        <span>${r.name}</span>
      </div>`).join('')}</div>`;
  }

  const shadowsRoot = document.getElementById('sg-shadows');
  if (shadowsRoot) {
    shadowsRoot.innerHTML = `<div class="sg-shadow-grid">${SHADOWS.map(s => `
      <div class="sg-shadow-cell" style="box-shadow: var(${s.token});">
        <code>${s.token}</code>
        <span>${s.name}</span>
      </div>`).join('')}</div>`;
  }

  const transitionsRoot = document.getElementById('sg-transitions');
  if (transitionsRoot) {
    transitionsRoot.innerHTML = `<div class="sg-transition-grid">${TRANSITIONS.map(t => `
      <div class="sg-transition-cell">
        <div class="sg-transition-box" style="transition: background-color var(${t.token});">Hover me</div>
        <code>${t.token}</code>
        <span>${t.desc}</span>
      </div>`).join('')}</div>`;
  }
}


function renderIcons() {
  const root = document.getElementById('sg-icon-grid');
  if (!root) return;

  root.innerHTML = ICONS.map(name => `
    <div class="sg-icon-cell">
      <ion-icon name="${name}" class="sg-icon"></ion-icon>
      <span class="text-caption">${name}</span>
    </div>`).join('');
}


function renderLogos() {
  const root = document.getElementById('sg-logos');
  if (!root) return;

  root.innerHTML = LOGO_GROUPS.map(group => `
    <div class="sg-logo-group">
      <h3 class="sg-subsection-title">${group.group}</h3>
      <div class="sg-logo-grid">
        ${group.logos.map(({ file, label, dark }) => `
          <div class="sg-logo-cell ${dark ? 'sg-logo-cell--dark' : 'sg-logo-cell--light'}"
               data-section="${dark ? 'always-dark' : 'always-light'}">
            <img src="../assets/logos/${file}" alt="${label}" class="sg-logo-img">
            <span class="text-caption">${label}</span>
            <a class="sg-logo-download" href="../assets/logos/${file}" download="${file}">
              <ion-icon name="download-outline"></ion-icon> ${file}
            </a>
          </div>`).join('')}
      </div>
    </div>`).join('');
}


// ── Interactions ───────────────────────────────────────────────────────

function initTheme() {
  const syncAriaChecked = () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.js-switch-theme[role="switch"]')
      .forEach(el => el.setAttribute('aria-checked', String(dark)));
  };

  new MutationObserver(syncAriaChecked).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  syncAriaChecked();

  document.addEventListener('click', e => {
    if (!e.target.closest('.js-switch-theme')) return;
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}


function initCopyButtons() {
  document.addEventListener('click', e => {
    // Graphic section copy buttons
    const graphicBtn = e.target.closest('.sg-graphic-copy');
    if (graphicBtn) {
      const text = GRAPHIC_COPY[graphicBtn.dataset.copyKey] ?? '';
      navigator.clipboard.writeText(text).then(() => {
        graphicBtn.classList.add('copied');
        setTimeout(() => graphicBtn.classList.remove('copied'), 2000);
      });
      return;
    }

    // Code block copy buttons
    const codeBtn = e.target.closest('.code-block-copy');
    if (codeBtn) {
      const code = codeBtn.closest('.code-block-wrap')?.querySelector('code');
      if (!code) return;
      navigator.clipboard.writeText(code.textContent?.trim() ?? '').then(() => {
        codeBtn.classList.add('copied');
        setTimeout(() => codeBtn.classList.remove('copied'), 2000);
      });
    }
  });
}


function initScrollspy() {
  const sections = Array.from(document.querySelectorAll('section.sg-section[id]'));
  const links    = document.querySelectorAll('.br-nav__link');
  const visible  = new Set();

  const setActive = () => {
    const current = sections.find(s => visible.has(s.id))?.id ?? null;
    links.forEach(link => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.isIntersecting ? visible.add(entry.target.id) : visible.delete(entry.target.id);
    });
    setActive();
  }, {
    // Section must be past the sticky nav (~56px) and in the top 60% of viewport
    rootMargin: '-56px 0px -40% 0px',
    threshold: 0,
  });

  sections.forEach(s => observer.observe(s));
}


// ── Boot ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderColorFamilies();
  renderGradients();
  renderSurfaces();
  renderSpacing();
  renderStyles();
  renderIcons();
  renderLogos();

  initTheme();
  initCopyButtons();
  initScrollspy();
});

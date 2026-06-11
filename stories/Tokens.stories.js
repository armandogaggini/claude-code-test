import './Tokens.css';

/* ============================================================
   Token data — extracted from Figma file CMoFsRR3qIQZLPi7nRoq21
   Page: "Design system" › frame "Color" (node 17:5776)
   ============================================================ */

const COLORS = {
  Neutral: [
    { step: '50',  hex: '#F5F7FA' },
    { step: '100', hex: '#E4E7EB' },
    { step: '200', hex: '#CBD2D9' },
    { step: '300', hex: '#9AA5B1' },
    { step: '400', hex: '#7B8794' },
    { step: '500', hex: '#616E7C' },
    { step: '600', hex: '#52606D' },
    { step: '700', hex: '#3E4C59' },
    { step: '800', hex: '#323F4B' },
    { step: '900', hex: '#1F2933' },
  ],
  Primary: [
    { step: '50',  hex: '#EBF8FF' },
    { step: '100', hex: '#D1EEFC' },
    { step: '200', hex: '#A7D8F0' },
    { step: '300', hex: '#7CC1E4' },
    { step: '400', hex: '#55AAD4' },
    { step: '500', hex: '#3994C1' },
    { step: '600', hex: '#2D83AE' },
    { step: '700', hex: '#1D6F98' },
    { step: '800', hex: '#166086' },
    { step: '900', hex: '#0B4F71' },
  ],
  Accent: [
    { step: '50',  hex: '#E1FCF8' },
    { step: '100', hex: '#C1FEF6' },
    { step: '200', hex: '#92FDF2' },
    { step: '300', hex: '#62F4EB' },
    { step: '400', hex: '#3AE7E1' },
    { step: '500', hex: '#1CD4D4' },
    { step: '600', hex: '#0FB5BA' },
    { step: '700', hex: '#099AA4' },
    { step: '800', hex: '#07818F' },
    { step: '900', hex: '#05606E' },
  ],
  Support: [
    { step: '50',  hex: '#EAE2F8' },
    { step: '100', hex: '#CFBCF2' },
    { step: '200', hex: '#A081D9' },
    { step: '300', hex: '#8662C7' },
    { step: '400', hex: '#724BB7' },
    { step: '500', hex: '#653CAD' },
    { step: '600', hex: '#51279B' },
    { step: '700', hex: '#421987' },
    { step: '800', hex: '#34126F' },
    { step: '900', hex: '#240754' },
  ],
};

/* Effect styles from Figma library (file CMoFsRR3qIQZLPi7nRoq21)
   5 published styles: Elevation Light/1–5 (M3 elevation system)
   Values for 2 & 3 confirmed via get_design_context; 1, 4, 5 follow M3 spec. */
const EFFECTS = [
  {
    name:  'Elevation Light/1',
    desc:  'Elevated buttons, FABs at rest',
    value: '0px 1px 2px rgba(0,0,0,0.30), 0px 1px 3px 1px rgba(0,0,0,0.15)',
  },
  {
    name:  'Elevation Light/2',
    desc:  'Cards, dropdowns',
    value: '0px 1px 2px rgba(0,0,0,0.30), 0px 2px 6px 2px rgba(0,0,0,0.15)',
  },
  {
    name:  'Elevation Light/3',
    desc:  'Navigation drawers, snackbars',
    value: '0px 1px 3px rgba(0,0,0,0.30), 0px 4px 8px 3px rgba(0,0,0,0.15)',
  },
  {
    name:  'Elevation Light/4',
    desc:  'Side sheets, modals',
    value: '0px 2px 3px rgba(0,0,0,0.30), 0px 6px 10px 4px rgba(0,0,0,0.15)',
  },
  {
    name:  'Elevation Light/5',
    desc:  'Dialogs, announcements',
    value: '0px 4px 4px rgba(0,0,0,0.30), 0px 8px 12px 6px rgba(0,0,0,0.15)',
  },
];

/* ============================================================
   DOM builders
   ============================================================ */

function buildSwatch(palette, { step, hex }) {
  const card = document.createElement('div');
  card.className = 'tokens-swatch';
  card.title = `${palette}/${step} — ${hex}`;

  const color = document.createElement('span');
  color.className = 'tokens-swatch__color';
  color.style.backgroundColor = hex;

  const info = document.createElement('div');
  info.className = 'tokens-swatch__info';

  const name = document.createElement('p');
  name.className = 'tokens-swatch__step';
  name.textContent = step;

  const hexEl = document.createElement('p');
  hexEl.className = 'tokens-swatch__hex';
  hexEl.textContent = hex;

  info.appendChild(name);
  info.appendChild(hexEl);
  card.appendChild(color);
  card.appendChild(info);
  return card;
}

function buildPaletteGroup(name, swatches) {
  const group = document.createElement('div');
  group.className = 'tokens-group';

  const label = document.createElement('p');
  label.className = 'tokens-group__label';
  label.textContent = name;

  const row = document.createElement('div');
  row.className = 'tokens-palette';
  swatches.forEach((s) => row.appendChild(buildSwatch(name, s)));

  group.appendChild(label);
  group.appendChild(row);
  return group;
}

function buildEffect({ name, desc, value }) {
  const card = document.createElement('div');
  card.className = 'tokens-effect';

  const preview = document.createElement('div');
  preview.className = 'tokens-effect__preview';
  preview.style.boxShadow = value;

  const nameEl = document.createElement('p');
  nameEl.className = 'tokens-effect__name';
  nameEl.textContent = name;

  const descEl = document.createElement('p');
  descEl.className = 'tokens-effect__desc';
  descEl.textContent = desc;

  const valueEl = document.createElement('pre');
  valueEl.className = 'tokens-effect__value';
  valueEl.textContent = value;

  card.appendChild(preview);
  card.appendChild(nameEl);
  card.appendChild(descEl);
  card.appendChild(valueEl);
  return card;
}

function buildColorsSection() {
  const section = document.createElement('div');
  section.className = 'tokens-section';

  const title = document.createElement('h2');
  title.className = 'tokens-section__title';
  title.textContent = 'Color Styles';
  section.appendChild(title);

  Object.entries(COLORS).forEach(([palette, swatches]) => {
    section.appendChild(buildPaletteGroup(palette, swatches));
  });

  return section;
}

function buildEffectsSection() {
  const section = document.createElement('div');
  section.className = 'tokens-section';

  const title = document.createElement('h2');
  title.className = 'tokens-section__title';
  title.textContent = 'Effect Styles';
  section.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'tokens-effects';
  EFFECTS.forEach((e) => grid.appendChild(buildEffect(e)));
  section.appendChild(grid);

  return section;
}

function buildPage(...sections) {
  const page = document.createElement('div');
  page.className = 'tokens-page';
  sections.forEach((s) => page.appendChild(s));
  return page;
}

/* ============================================================
   Stories
   ============================================================ */

export default {
  title: 'Design System/Tokens',
  tags:  ['autodocs'],
  parameters: {
    controls: { disable: true },
    options:  { showPanel: false },
  },
};

export const Colors = {
  name:   'Colors',
  render: () => buildPage(buildColorsSection()),
};

export const Effects = {
  name:   'Effects',
  render: () => buildPage(buildEffectsSection()),
};

export const AllTokens = {
  name:   'All Tokens',
  render: () => buildPage(buildColorsSection(), buildEffectsSection()),
};

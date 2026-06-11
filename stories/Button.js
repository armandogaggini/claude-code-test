import './Button.css';

const CHEVRON_SVG = `<svg class="btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
</svg>`;

/**
 * @param {object}  args
 * @param {string}  [args.label='Label']
 * @param {'filled'|'outlined'|'text'} [args.style='filled']
 * @param {'enabled'|'pressed'|'disabled'} [args.state='enabled']
 * @param {boolean} [args.showIcon=false]
 * @param {Function} [args.onClick]
 * @returns {HTMLButtonElement}
 */
export const createButton = ({
  label    = 'Label',
  style    = 'filled',
  state    = 'enabled',
  showIcon = false,
  onClick,
} = {}) => {
  const btn = document.createElement('button');

  const classes = ['btn', `btn--${style}`];
  if (showIcon)            classes.push('btn--has-icon');
  if (state === 'pressed') classes.push('btn--pressed');
  btn.className = classes.join(' ');

  if (state === 'disabled') btn.disabled = true;

  btn.innerHTML = `
    ${showIcon ? CHEVRON_SVG : ''}
    <span class="btn__label">${label}</span>
  `.trim();

  if (onClick) btn.addEventListener('click', onClick);

  return btn;
};

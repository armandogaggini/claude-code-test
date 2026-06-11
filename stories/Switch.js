import './Switch.css';

const CHECK_SVG = `<svg class="switch__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
</svg>`;

const CLOSE_SVG = `<svg class="switch__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
</svg>`;

/**
 * @param {object}   args
 * @param {boolean}  [args.selected=false] ON (true) / OFF (false)
 * @param {boolean}  [args.enabled=true]   Interactive vs disabled
 * @param {boolean}  [args.icon=false]     Show check (ON) or X (OFF) icon
 * @param {string}   [args.label='Switch'] aria-label
 * @param {Function} [args.onChange]       Click handler
 * @returns {HTMLButtonElement}
 */
export const createSwitch = ({
  selected = false,
  enabled  = true,
  icon     = false,
  label    = 'Switch',
  onChange,
} = {}) => {
  const el = document.createElement('button');
  el.type = 'button';
  el.setAttribute('role', 'switch');
  el.setAttribute('aria-checked', String(selected));
  el.setAttribute('aria-label', label);

  const classes = ['switch', selected ? 'switch--on' : 'switch--off'];
  if (icon)     classes.push('switch--icon');
  if (!enabled) classes.push('switch--disabled');
  el.className = classes.join(' ');

  if (!enabled) el.disabled = true;

  const thumb = document.createElement('span');
  thumb.className = 'switch__thumb';
  if (icon) thumb.innerHTML = selected ? CHECK_SVG : CLOSE_SVG;
  el.appendChild(thumb);

  if (onChange) el.addEventListener('click', onChange);

  return el;
};

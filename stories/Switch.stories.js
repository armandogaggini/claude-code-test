import './Switch.css';
import { createSwitch } from './Switch';

export default {
  title:    'Design System/Switch',
  tags:     ['autodocs'],
  render:   (args) => createSwitch(args),
  argTypes: {
    selected: {
      control:     'boolean',
      description: 'ON (true) or OFF (false)',
    },
    enabled: {
      control:     'boolean',
      description: 'Interactive (true) or Disabled (false)',
    },
    icon: {
      control:     'boolean',
      description: 'Show check icon when ON, X icon when OFF',
    },
    label: {
      control:     'text',
      description: 'Accessible aria-label',
    },
    onChange: { action: 'onChange' },
  },
  args: {
    selected: false,
    enabled:  true,
    icon:     false,
    label:    'Toggle setting',
  },
};

/* ============================================================
   ON — selected
   ============================================================ */

export const OnEnabled = {
  name: 'ON – Enabled',
  args: { selected: true, enabled: true, icon: false },
};

export const OnEnabledIcon = {
  name: 'ON – Enabled with Icon',
  args: { selected: true, enabled: true, icon: true },
};

export const OnDisabled = {
  name: 'ON – Disabled',
  args: { selected: true, enabled: false, icon: false },
};

export const OnDisabledIcon = {
  name: 'ON – Disabled with Icon',
  args: { selected: true, enabled: false, icon: true },
};

/* ============================================================
   OFF — not selected
   ============================================================ */

export const OffEnabled = {
  name: 'OFF – Enabled',
  args: { selected: false, enabled: true, icon: false },
};

export const OffEnabledIcon = {
  name: 'OFF – Enabled with Icon',
  args: { selected: false, enabled: true, icon: true },
};

export const OffDisabled = {
  name: 'OFF – Disabled',
  args: { selected: false, enabled: false, icon: false },
};

export const OffDisabledIcon = {
  name: 'OFF – Disabled with Icon',
  args: { selected: false, enabled: false, icon: true },
};

/* ============================================================
   ALL VARIANTS — showcase
   ============================================================ */

export const AllVariants = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:32px;padding:24px;background:#f8f9fa;';

    const section = (title, variants) => {
      const s = document.createElement('div');
      s.innerHTML = `<p style="margin:0 0 12px;font-family:sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#666">${title}</p>`;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:16px;align-items:center;';
      variants.forEach((args) => row.appendChild(createSwitch(args)));
      s.appendChild(row);
      return s;
    };

    wrapper.appendChild(section('ON (Selected)', [
      { selected: true, enabled: true,  icon: false, label: 'ON enabled'          },
      { selected: true, enabled: true,  icon: true,  label: 'ON enabled icon'     },
      { selected: true, enabled: false, icon: false, label: 'ON disabled'         },
      { selected: true, enabled: false, icon: true,  label: 'ON disabled icon'    },
    ]));

    wrapper.appendChild(section('OFF (Not Selected)', [
      { selected: false, enabled: true,  icon: false, label: 'OFF enabled'        },
      { selected: false, enabled: true,  icon: true,  label: 'OFF enabled icon'   },
      { selected: false, enabled: false, icon: false, label: 'OFF disabled'       },
      { selected: false, enabled: false, icon: true,  label: 'OFF disabled icon'  },
    ]));

    return wrapper;
  },
  parameters: {
    controls: { disable: true },
  },
};

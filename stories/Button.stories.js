import { createButton } from './Button';

export default {
  title:     'Design System/Button',
  tags:      ['autodocs'],
  render:    (args) => createButton(args),
  argTypes:  {
    style: {
      control:     { type: 'select' },
      options:     ['filled', 'outlined', 'text'],
      description: 'Visual variant — filled (high emphasis), outlined (medium), text (low)',
    },
    state: {
      control:     { type: 'select' },
      options:     ['enabled', 'pressed', 'disabled'],
      description: 'Interaction state',
    },
    label: {
      control:     'text',
      description: 'Button label text',
    },
    showIcon: {
      control:     'boolean',
      description: 'Show leading chevron icon',
    },
    onClick: { action: 'onClick' },
  },
  args: {
    label:    'Label',
    style:    'filled',
    state:    'enabled',
    showIcon: false,
  },
};

/* ============================================================
   FILLED
   ============================================================ */

export const FilledEnabled = {
  args: { style: 'filled', state: 'enabled' },
};

export const FilledPressed = {
  args: { style: 'filled', state: 'pressed' },
};

export const FilledDisabled = {
  args: { style: 'filled', state: 'disabled' },
};

export const FilledWithIcon = {
  args: { style: 'filled', state: 'enabled', showIcon: true },
};

/* ============================================================
   OUTLINED
   ============================================================ */

export const OutlinedEnabled = {
  args: { style: 'outlined', state: 'enabled' },
};

export const OutlinedPressed = {
  args: { style: 'outlined', state: 'pressed' },
};

export const OutlinedDisabled = {
  args: { style: 'outlined', state: 'disabled' },
};

export const OutlinedWithIcon = {
  args: { style: 'outlined', state: 'enabled', showIcon: true },
};

/* ============================================================
   TEXT
   ============================================================ */

export const TextEnabled = {
  args: { style: 'text', state: 'enabled' },
};

export const TextPressed = {
  args: { style: 'text', state: 'pressed' },
};

export const TextDisabled = {
  args: { style: 'text', state: 'disabled' },
};

export const TextWithIcon = {
  args: { style: 'text', state: 'enabled', showIcon: true },
};

/* ============================================================
   ALL VARIANTS — showcase
   ============================================================ */

export const AllVariants = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:32px;padding:24px;background:#f8f9fa;';

    const grid = (style) => {
      const section = document.createElement('div');
      section.innerHTML = `<p style="margin:0 0 12px;font-family:sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#666">${style}</p>`;

      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:12px;align-items:center;';

      const variants = [
        { state: 'enabled',  showIcon: false },
        { state: 'enabled',  showIcon: true  },
        { state: 'pressed',  showIcon: false },
        { state: 'pressed',  showIcon: true  },
        { state: 'disabled', showIcon: false },
        { state: 'disabled', showIcon: true  },
      ];

      variants.forEach(({ state, showIcon }) => {
        row.appendChild(createButton({ style, state, showIcon, label: 'Label' }));
      });

      section.appendChild(row);
      return section;
    };

    wrapper.appendChild(grid('filled'));
    wrapper.appendChild(grid('outlined'));
    wrapper.appendChild(grid('text'));

    return wrapper;
  },
  parameters: {
    controls: { disable: true },
  },
};

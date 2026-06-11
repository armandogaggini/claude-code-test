const q=`<svg class="switch__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
</svg>`,J=`<svg class="switch__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
</svg>`,X=({selected:n=!1,enabled:s=!0,icon:l=!1,label:m="Switch",onChange:a}={})=>{const e=document.createElement("button");e.type="button",e.setAttribute("role","switch"),e.setAttribute("aria-checked",String(n)),e.setAttribute("aria-label",m);const t=["switch",n?"switch--on":"switch--off"];l&&t.push("switch--icon"),s||t.push("switch--disabled"),e.className=t.join(" "),s||(e.disabled=!0);const g=document.createElement("span");return g.className="switch__thumb",l&&(g.innerHTML=n?q:J),e.appendChild(g),a&&e.addEventListener("click",a),e},P={title:"Design System/Switch",tags:["autodocs"],render:n=>X(n),argTypes:{selected:{control:"boolean",description:"ON (true) or OFF (false)"},enabled:{control:"boolean",description:"Interactive (true) or Disabled (false)"},icon:{control:"boolean",description:"Show check icon when ON, X icon when OFF"},label:{control:"text",description:"Accessible aria-label"},onChange:{action:"onChange"}},args:{selected:!1,enabled:!0,icon:!1,label:"Toggle setting"}},r={name:"ON – Enabled",args:{selected:!0,enabled:!0,icon:!1}},c={name:"ON – Enabled with Icon",args:{selected:!0,enabled:!0,icon:!0}},o={name:"ON – Disabled",args:{selected:!0,enabled:!1,icon:!1}},d={name:"ON – Disabled with Icon",args:{selected:!0,enabled:!1,icon:!0}},i={name:"OFF – Enabled",args:{selected:!1,enabled:!0,icon:!1}},u={name:"OFF – Enabled with Icon",args:{selected:!1,enabled:!0,icon:!0}},b={name:"OFF – Disabled",args:{selected:!1,enabled:!1,icon:!1}},p={name:"OFF – Disabled with Icon",args:{selected:!1,enabled:!1,icon:!0}},f={render:()=>{const n=document.createElement("div");n.style.cssText="display:flex;flex-direction:column;gap:32px;padding:24px;background:#f8f9fa;";const s=(l,m)=>{const a=document.createElement("div");a.innerHTML=`<p style="margin:0 0 12px;font-family:sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#666">${l}</p>`;const e=document.createElement("div");return e.style.cssText="display:flex;flex-wrap:wrap;gap:16px;align-items:center;",m.forEach(t=>e.appendChild(X(t))),a.appendChild(e),a};return n.appendChild(s("ON (Selected)",[{selected:!0,enabled:!0,icon:!1,label:"ON enabled"},{selected:!0,enabled:!0,icon:!0,label:"ON enabled icon"},{selected:!0,enabled:!1,icon:!1,label:"ON disabled"},{selected:!0,enabled:!1,icon:!0,label:"ON disabled icon"}])),n.appendChild(s("OFF (Not Selected)",[{selected:!1,enabled:!0,icon:!1,label:"OFF enabled"},{selected:!1,enabled:!0,icon:!0,label:"OFF enabled icon"},{selected:!1,enabled:!1,icon:!1,label:"OFF disabled"},{selected:!1,enabled:!1,icon:!0,label:"OFF disabled icon"}])),n},parameters:{controls:{disable:!0}}};var O,w,h;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'ON – Enabled',
  args: {
    selected: true,
    enabled: true,
    icon: false
  }
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var F,x,E;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'ON – Enabled with Icon',
  args: {
    selected: true,
    enabled: true,
    icon: true
  }
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var N,S,v;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'ON – Disabled',
  args: {
    selected: true,
    enabled: false,
    icon: false
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var D,I,y;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'ON – Disabled with Icon',
  args: {
    selected: true,
    enabled: false,
    icon: true
  }
}`,...(y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var C,_,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'OFF – Enabled',
  args: {
    selected: false,
    enabled: true,
    icon: false
  }
}`,...(T=(_=i.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var L,A,k;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'OFF – Enabled with Icon',
  args: {
    selected: false,
    enabled: true,
    icon: true
  }
}`,...(k=(A=u.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var M,z,H;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'OFF – Disabled',
  args: {
    selected: false,
    enabled: false,
    icon: false
  }
}`,...(H=(z=b.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var V,B,G;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'OFF – Disabled with Icon',
  args: {
    selected: false,
    enabled: false,
    icon: true
  }
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var $,j,K;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:32px;padding:24px;background:#f8f9fa;';
    const section = (title, variants) => {
      const s = document.createElement('div');
      s.innerHTML = \`<p style="margin:0 0 12px;font-family:sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#666">\${title}</p>\`;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:16px;align-items:center;';
      variants.forEach(args => row.appendChild(createSwitch(args)));
      s.appendChild(row);
      return s;
    };
    wrapper.appendChild(section('ON (Selected)', [{
      selected: true,
      enabled: true,
      icon: false,
      label: 'ON enabled'
    }, {
      selected: true,
      enabled: true,
      icon: true,
      label: 'ON enabled icon'
    }, {
      selected: true,
      enabled: false,
      icon: false,
      label: 'ON disabled'
    }, {
      selected: true,
      enabled: false,
      icon: true,
      label: 'ON disabled icon'
    }]));
    wrapper.appendChild(section('OFF (Not Selected)', [{
      selected: false,
      enabled: true,
      icon: false,
      label: 'OFF enabled'
    }, {
      selected: false,
      enabled: true,
      icon: true,
      label: 'OFF enabled icon'
    }, {
      selected: false,
      enabled: false,
      icon: false,
      label: 'OFF disabled'
    }, {
      selected: false,
      enabled: false,
      icon: true,
      label: 'OFF disabled icon'
    }]));
    return wrapper;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(j=f.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};const Q=["OnEnabled","OnEnabledIcon","OnDisabled","OnDisabledIcon","OffEnabled","OffEnabledIcon","OffDisabled","OffDisabledIcon","AllVariants"];export{f as AllVariants,b as OffDisabled,p as OffDisabledIcon,i as OffEnabled,u as OffEnabledIcon,o as OnDisabled,d as OnDisabledIcon,r as OnEnabled,c as OnEnabledIcon,Q as __namedExportsOrder,P as default};

const oe=`<svg class="btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
</svg>`,re=({label:e="Label",style:a="filled",state:r="enabled",showIcon:t=!1,onClick:n}={})=>{const s=document.createElement("button"),o=["btn",`btn--${a}`];return t&&o.push("btn--has-icon"),r==="pressed"&&o.push("btn--pressed"),s.className=o.join(" "),r==="disabled"&&(s.disabled=!0),s.innerHTML=`
    ${t?oe:""}
    <span class="btn__label">${e}</span>
  `.trim(),n&&s.addEventListener("click",n),s},le={title:"Design System/Button",tags:["autodocs"],render:e=>re(e),argTypes:{style:{control:{type:"select"},options:["filled","outlined","text"],description:"Visual variant — filled (high emphasis), outlined (medium), text (low)"},state:{control:{type:"select"},options:["enabled","pressed","disabled"],description:"Interaction state"},label:{control:"text",description:"Button label text"},showIcon:{control:"boolean",description:"Show leading chevron icon"},onClick:{action:"onClick"}},args:{label:"Label",style:"filled",state:"enabled",showIcon:!1}},l={args:{style:"filled",state:"enabled"}},d={args:{style:"filled",state:"pressed"}},c={args:{style:"filled",state:"disabled"}},i={args:{style:"filled",state:"enabled",showIcon:!0}},p={args:{style:"outlined",state:"enabled"}},u={args:{style:"outlined",state:"pressed"}},m={args:{style:"outlined",state:"disabled"}},g={args:{style:"outlined",state:"enabled",showIcon:!0}},b={args:{style:"text",state:"enabled"}},f={args:{style:"text",state:"pressed"}},h={args:{style:"text",state:"disabled"}},x={args:{style:"text",state:"enabled",showIcon:!0}},w={render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:32px;padding:24px;background:#f8f9fa;";const a=r=>{const t=document.createElement("div");t.innerHTML=`<p style="margin:0 0 12px;font-family:sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#666">${r}</p>`;const n=document.createElement("div");return n.style.cssText="display:flex;flex-wrap:wrap;gap:12px;align-items:center;",[{state:"enabled",showIcon:!1},{state:"enabled",showIcon:!0},{state:"pressed",showIcon:!1},{state:"pressed",showIcon:!0},{state:"disabled",showIcon:!1},{state:"disabled",showIcon:!0}].forEach(({state:s,showIcon:o})=>{n.appendChild(re({style:r,state:s,showIcon:o,label:"Label"}))}),t.appendChild(n),t};return e.appendChild(a("filled")),e.appendChild(a("outlined")),e.appendChild(a("text")),e},parameters:{controls:{disable:!0}}};var y,I,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    style: 'filled',
    state: 'enabled'
  }
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var S,T,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    style: 'filled',
    state: 'pressed'
  }
}`,...(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var C,L,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    style: 'filled',
    state: 'disabled'
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var F,_,D;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    style: 'filled',
    state: 'enabled',
    showIcon: true
  }
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,P,W;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    style: 'outlined',
    state: 'enabled'
  }
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var V,$,k;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    style: 'outlined',
    state: 'pressed'
  }
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var H,M,z;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    style: 'outlined',
    state: 'disabled'
  }
}`,...(z=(M=m.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var A,N,j;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    style: 'outlined',
    state: 'enabled',
    showIcon: true
  }
}`,...(j=(N=g.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var G,R,q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    style: 'text',
    state: 'enabled'
  }
}`,...(q=(R=b.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    style: 'text',
    state: 'pressed'
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    style: 'text',
    state: 'disabled'
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,se;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    style: 'text',
    state: 'enabled',
    showIcon: true
  }
}`,...(se=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,ne,ae;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:32px;padding:24px;background:#f8f9fa;';
    const grid = style => {
      const section = document.createElement('div');
      section.innerHTML = \`<p style="margin:0 0 12px;font-family:sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#666">\${style}</p>\`;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:12px;align-items:center;';
      [{
        state: 'enabled',
        showIcon: false
      }, {
        state: 'enabled',
        showIcon: true
      }, {
        state: 'pressed',
        showIcon: false
      }, {
        state: 'pressed',
        showIcon: true
      }, {
        state: 'disabled',
        showIcon: false
      }, {
        state: 'disabled',
        showIcon: true
      }].forEach(({
        state,
        showIcon
      }) => {
        row.appendChild(createButton({
          style,
          state,
          showIcon,
          label: 'Label'
        }));
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
    controls: {
      disable: true
    }
  }
}`,...(ae=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const de=["FilledEnabled","FilledPressed","FilledDisabled","FilledWithIcon","OutlinedEnabled","OutlinedPressed","OutlinedDisabled","OutlinedWithIcon","TextEnabled","TextPressed","TextDisabled","TextWithIcon","AllVariants"];export{w as AllVariants,c as FilledDisabled,l as FilledEnabled,d as FilledPressed,i as FilledWithIcon,m as OutlinedDisabled,p as OutlinedEnabled,u as OutlinedPressed,g as OutlinedWithIcon,h as TextDisabled,b as TextEnabled,f as TextPressed,x as TextWithIcon,de as __namedExportsOrder,le as default};

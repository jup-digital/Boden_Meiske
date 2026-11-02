/* @ds-bundle: {"format":4,"namespace":"BodenMeiskeDesignSystem_24c0cc","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Tabs","sourcePath":"components/content/Tabs.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"FeatureCard","sourcePath":"components/core/FeatureCard.jsx"},{"name":"MaterialTile","sourcePath":"components/core/MaterialTile.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"2cacef4172f4","components/content/StatBlock.jsx":"707d90b0d082","components/content/Tabs.jsx":"cb70a7d3a301","components/content/Testimonial.jsx":"8e41b048a95a","components/core/Badge.jsx":"380a791915f7","components/core/Card.jsx":"b193372c0138","components/core/Eyebrow.jsx":"a33f224bff2d","components/core/FeatureCard.jsx":"9ff7995134d9","components/core/MaterialTile.jsx":"18159ea7f732","components/core/Tag.jsx":"2312b2949771","components/forms/Button.jsx":"9ebda636d944","components/forms/Checkbox.jsx":"8e43957b2801","components/forms/Input.jsx":"8265992dc161","components/forms/Radio.jsx":"d1ed824ffdd7","components/forms/Select.jsx":"5e23a4481936","components/forms/Textarea.jsx":"9e4e3d00ac4f","components/navigation/Footer.jsx":"4cf69e2b0127","components/navigation/Header.jsx":"2db4b1a68777"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BodenMeiskeDesignSystem_24c0cc = window.BodenMeiskeDesignSystem_24c0cc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function Accordion({
  items
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      padding: '20px 4px',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, item.question, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: 'var(--bg-brand)',
      transition: 'transform var(--duration-base) var(--ease-standard)',
      transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open === i ? 400 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--duration-slow) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 4px 20px',
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, item.answer)))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-extrabold)',
      color: 'var(--rust-500)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  defaultIndex = 0
}) {
  const [active, setActive] = React.useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '14px 2px',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-semibold)',
      color: active === i ? 'var(--text-primary)' : 'var(--text-tertiary)',
      borderBottom: active === i ? '2px solid var(--bg-brand)' : '2px solid transparent',
      marginBottom: -1,
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-6)'
    }
  }, tabs[active]?.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  name,
  location,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      maxWidth: 640,
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 var(--space-6) 0'
    }
  }, "\u201E", quote, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 2,
      background: 'var(--bg-brand)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      fontSize: 'var(--text-sm)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-tertiary)',
      fontSize: 'var(--text-sm)'
    }
  }, location))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  brand: {
    background: 'var(--bg-brand-subtle)',
    color: 'var(--rust-700)'
  },
  neutral: {
    background: 'var(--bg-sunken)',
    color: 'var(--text-secondary)'
  },
  success: {
    background: 'var(--success-bg)',
    color: 'var(--success)'
  },
  warning: {
    background: 'var(--warning-bg)',
    color: 'var(--warning)'
  },
  inverse: {
    background: 'var(--bg-inverse)',
    color: 'var(--text-on-inverse)'
  }
};
function Badge({
  children,
  tone = 'brand',
  style
}) {
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-full)',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'var(--space-6)',
  hoverable = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid rgba(59,63,66,0.12)',
      borderRadius: 8,
      padding,
      boxShadow: hover ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--duration-base) var(--ease-standard)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--bg-brand)',
      fontFamily: 'var(--font-sans)',
      marginBottom: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: 'var(--bg-brand)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.2em',
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureCard.jsx
try { (() => {
function FeatureCard({
  number,
  title,
  description,
  points = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAFAFA',
      boxShadow: '0 12px 24px -8px rgba(59,63,66,0.18)',
      borderRadius: 8,
      padding: '48px 40px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '0.14em',
      color: 'var(--bg-brand)'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--text-primary)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      color: 'var(--text-primary)'
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      margin: '0 0 14px',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      opacity: 0.75,
      margin: '0 0 28px',
      color: 'var(--text-primary)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, points.map(pt => /*#__PURE__*/React.createElement("div", {
    key: pt,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bg-brand)',
      fontWeight: 800,
      marginTop: 1
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.8,
      lineHeight: 1.5
    }
  }, pt)))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/MaterialTile.jsx
try { (() => {
function MaterialTile({
  category,
  name,
  meta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAFAFA',
      boxShadow: '0 12px 24px -8px rgba(59,63,66,0.18)',
      borderRadius: 8,
      padding: '36px 32px 32px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--bg-brand)'
    }
  }, category), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'var(--bg-brand)',
      display: 'block',
      borderRadius: 'var(--radius-full)',
      marginTop: 4
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '0 0 12px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      opacity: 0.6,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, meta));
}
Object.assign(__ds_scope, { MaterialTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MaterialTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      border: `1px solid ${active ? 'var(--bg-brand)' : 'var(--border-default)'}`,
      background: active ? 'var(--bg-brand)' : hover ? 'var(--bg-sunken)' : 'transparent',
      color: active ? 'var(--text-on-brand)' : 'var(--text-primary)',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const sizes = {
  sm: {
    height: 40,
    padding: '0 18px',
    fontSize: 12
  },
  md: {
    height: 48,
    padding: '0 24px',
    fontSize: 13
  },
  lg: {
    height: 52,
    padding: '0 28px',
    fontSize: 13
  }
};
const variants = {
  primary: {
    background: 'var(--bg-brand)',
    color: 'var(--text-on-brand)',
    border: 'none'
  },
  secondary: {
    background: 'var(--bg-inverse)',
    color: 'var(--text-on-inverse)',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--text-primary)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: 'none'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : hover ? 0.9 : 1,
      transition: 'opacity var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      transform: press && !disabled ? 'scale(0.98)' : 'scale(1)',
      whiteSpace: 'nowrap',
      borderRadius: 8,
      ...s,
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${checked ? 'var(--bg-brand)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--bg-brand)' : 'var(--bg-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-brand)',
      fontSize: 13,
      lineHeight: 1
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  hint,
  required = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bg-brand)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: 'var(--bg-surface)',
      border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--bg-brand-subtle)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--bg-brand)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--bg-brand)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Bitte wählen',
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--text-primary)' : 'var(--text-tertiary)',
      background: 'var(--bg-surface)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 36px 12px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--bg-brand-subtle)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-tertiary)',
      fontSize: 12
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  hint,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: 'var(--bg-surface)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? '0 0 0 3px var(--bg-brand-subtle)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc,
  tagline,
  columns = [],
  bottomLeft,
  bottomRight,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-inverse)',
      color: 'var(--text-on-inverse)',
      borderTop: '1px solid rgba(250,250,250,0.08)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto',
      maxWidth: 1440,
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Boden Meiske",
    style: {
      height: 64,
      width: 'auto',
      display: 'block',
      marginBottom: 24,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: 1.7,
      opacity: 0.6,
      maxWidth: 320
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(120px,1fr))',
      gap: 40
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      opacity: 0.4,
      marginBottom: 16,
      fontWeight: 700
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 13,
      lineHeight: 1.8,
      opacity: 0.75
    }
  }, col.lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      opacity: 0.35
    }
  }, bottomLeft), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      opacity: 0.35
    }
  }, bottomRight))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function Header({
  logoSrc,
  links = [],
  ctaLabel = 'Angebot anfordern',
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--bg-page)',
      borderBottom: '1px solid rgba(59,63,66,0.08)',
      backdropFilter: 'saturate(180%) blur(12px)',
      fontFamily: 'var(--font-sans)',
      overflow: 'visible',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto',
      maxWidth: 1440,
      height: 88,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Boden Meiske",
    style: {
      height: 40,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "bm-header-nav",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      minWidth: 0,
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.label,
    onClick: l.onClick,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      transition: 'opacity var(--duration-fast) var(--ease-standard)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      background: 'var(--bg-brand)',
      color: 'var(--text-on-brand)',
      border: 'none',
      height: 44,
      padding: '0 22px',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      marginLeft: 22
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.MaterialTile = __ds_scope.MaterialTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

})();

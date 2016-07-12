const buttonStyle = {
  display: 'inline-block',
  padding: '6px 8px',
  cursor: 'pointer',
  borderRadius: '3px',
  boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, .4), 2px 2px 2px rgba(0, 0, 0, .3)'
}

export default {
  base: {
    ...buttonStyle,
    background: '#333',
    color: 'white',
  },
  active: {
    ...buttonStyle,
    background: 'transparent',
    color: '#333',
    boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, .4)'
  }
}

const buttonStyle = {
  display: 'inline-block',
  padding: '6px 4px',
  cursor: 'pointer',
  borderRadius: '2px',
  boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, .4)'
}

export default {
  base: {
    background: '#fff',
    padding: '10px',
    boxShadow: '0 3px 3px rgba(0,0,0,.1)'
  },
  container: { display: 'table', width: '100%' },
  col: {
    title: {display: 'table-cell', width: '50%', verticalAlign: 'middle'},
    actions: {display: 'table-cell', width: '50%', textAlign: 'right', verticalAlign: 'middle'},
    favorite: {display: 'table-cell', verticalAlign: 'middle', paddingLeft: '5px'}
  },
  title: {
    fontFamily: 'Chivo',
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: '20px',
    color: '#333',
    textAlign: 'center'
  },
  button: {
    ...buttonStyle,
    background: '#333',
    color: 'white',
  },
  buttonPressed: {
    ...buttonStyle,
    background: 'transparent',
    color: '#333'
  }
}

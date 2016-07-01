export default {
  base: {
    position: 'relative',
    margin: '20px 10px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  logo: {
    width: '72px',
    height: '72px',
    backgroundImage: `url('/images/logos.png')`,
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: '2',
    transition: 'all 0.3s'
  },
  pie: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '82px',
    height: '82px',
    zIndex: '1',
    margin: '-6px 0 0 -6px',
    opacity: '0.85',
    transition: 'all 0.3s'
  },
  record: {
    position: 'absolute',
    borderRadius: '3px',
    background: 'white',
    zIndex: '3',
    fontSize: '12px',
    textAlign: 'center',
    bottom: '0',
    left: '50%',
    transition: 'all 0.3s',
    border: '1px solid #333',
    padding: '1px 2px',
    transform: 'translateX(-50%)'
  }
}

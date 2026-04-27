// boot.jsx — wires window.__VARIANT__ to the correct component and renders.
// Variants render Moments themselves (so palette tokens stay scoped); this file
// only adds the FooterSwitcher underneath.

const VARIANT_MAP = {
  editorial:  'V1',
  diplomatic: 'V2',
  bold:       'V3',
  swiss:      'V4',
  warm:       'V5',
};

const MOBILE_QUERY = '(max-width: 760px)';

function useIsMobile() {
  const get = () => typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia(MOBILE_QUERY).matches;
  const [mobile, setMobile] = React.useState(get);
  React.useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange);
    };
  }, []);
  return mobile;
}

function App() {
  const id = window.__VARIANT__;
  const Cmp = window[VARIANT_MAP[id]];
  const mobile = useIsMobile();
  if (!Cmp) {
    return <div style={{padding: 40, fontFamily: 'monospace'}}>Unknown variant: {String(id)}</div>;
  }
  return (
    <>
      <Cmp mobile={mobile} />
      <FooterSwitcher current={id} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

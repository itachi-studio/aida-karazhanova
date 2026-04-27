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

function App() {
  const id = window.__VARIANT__;
  const Cmp = window[VARIANT_MAP[id]];
  if (!Cmp) {
    return <div style={{padding: 40, fontFamily: 'monospace'}}>Unknown variant: {String(id)}</div>;
  }
  return (
    <>
      <Cmp mobile={false} />
      <FooterSwitcher current={id} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

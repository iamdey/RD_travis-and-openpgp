const openpgp = require('openpgp');
import asciiKey from './key';

const getFingerprint = () => openpgp.key.readArmored(asciiKey).keys[0].primaryKey.fingerprint;

document.getElementById('app').innerHTML = `
  <h2>Hello world</h2>
  <p>I can has foo/bar ?</p>
  <hr/>
  <p class="alert">nope</p>
  <hr/>
  <p>I can has fingerprint ?</p>
  <hr />
  <p class="success">yes</p>
  <pre class="code">${getFingerprint()}</pre>
`;

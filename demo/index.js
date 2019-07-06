import { html, render } from 'lit-html';
import '../dile-spinner.js';
import '../dile-spinner-modal.js';

const title = 'test';
render(html`
<style>
.customized {
  --dile-spinner-color: #3ca;
  --dile-spinner-dot-size: 10px;
  --dile-spinner-global-background-color: #505050;
  --dile-spinner-global-box-color: #fff;
}
</style>
<h1>dile-spinner demo</h1>
<dile-spinner active></dile-spinner>
<h2>Customized spinner</h2>
<dile-spinner active class="customized"></dile-spinner>
<h2>dile-spinner-global demo</h2>
<dile-spinner-modal id="spinnerModal"></dile-spinner-modal>
<button @click=${

() => {
  let el = document.getElementById('spinnerModal')
  el.active = true;
  setTimeout( () => {
    el.active = false;
  }, 5000);
}

}>Open spinner modal for 5 seconds</button>
<dile-spinner-modal class="customized" id="spinnerModal2"></dile-spinner-modal>
<button @click=${

() => {
  let el2 = document.getElementById('spinnerModal2')
  el2.active = true;
  setTimeout( () => {
    el2.active = false;
  }, 5000);
}

}>Open customized spinner modal for 5 seconds</button>
`, document.querySelector('#demo'));

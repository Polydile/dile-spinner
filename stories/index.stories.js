import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import '../dile-spinner.js';
import { DileSpinner } from '../dile-spinner.js';
import '../dile-spinner-modal.js';

import readme from '../README.md';

storiesOf('dile-spinner', module)
  .addDecorator(withKnobs)
  .add(
    'Default active spinner',
    () => html`
      <dile-spinner active></dile-spinner>
      `,
  )
  .add(
    'Customized active spinner',
    () => html`
      <style>
      .customized {
        --dile-spinner-color: #3ca;
        --dile-spinner-dot-size: 8px;
        --dile-spinner-modal-background-color: #505050;
        --dile-spinner-modal-box-color: #fff;
      }
      </style>
      <dile-spinner active class="customized"></dile-spinner>
      `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileSpinner), { 
    notes: { markdown: readme },
    template: html`This is a checkbox!`

  })

  storiesOf('dile-spinner-modal', module)
  .add(
    'Customized modal spinner',
    () => html`
      <style>
      .customized {
        --dile-spinner-color: #c3a;
        --dile-spinner-dot-size: 5px;
        --dile-spinner-modal-background-color: #505050;
        --dile-spinner-modal-box-color: #fff;
      }
      </style>
      <dile-spinner-modal active class="customized"></dile-spinner-modal>
      `,
  )
  .add(
    'Interactive example',
    () => html`
      <style>
      * {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      }
      .customized {
        --dile-spinner-color: #ffc;
        --dile-spinner-dot-size: 5px;
        --dile-spinner-modal-background-color: rgba(20, 60, 90, 0.75);
        --dile-spinner-modal-box-color: #000;
      }
      button {
        padding: 15px;
        border-radius: 6px;
      }
      </style>
      <dile-spinner-modal class="customized" id="spinnerModal"></dile-spinner-modal>
      <h1>This is an interactive example</h1>
      <button @click=${

        () => {
          let el = document.getElementById('spinnerModal')
          el.active = true;
          setTimeout( () => {
            el.active = false;
          }, 5000);
        }

      }>Open spinner modal for 5 seconds</button>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magni, tenetur suscipit nobis provident labore accusantium pariatur rerum unde numquam cupiditate voluptas molestias incidunt porro. Reprehenderit ipsam minima reiciendis!</p>
      `,
  )
  
  ;

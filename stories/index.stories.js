import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import DileSpinner from '../src/DileSpinner.js';
import '../src/dile-spinner.js';

import readme from '../README.md';

storiesOf('dile-spinner', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(DileSpinner), { notes: { markdown: readme } })
  .add(
    'Alternative Header',
    () => html`
      <dile-spinner .header=${'Something else'}></dile-spinner>
    `,
  );

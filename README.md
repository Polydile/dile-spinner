# Moved

**This package has moved** and is now available at [@dile/ui](https://github.com/Polydile/dile-components). Please update your dependencies. This repository is no longer maintained. You can read the documentation at [Dile Components](https://dile-components.com/).

# dile-spinner

A pack of web components to implement the tipical "Ajax loading" spinner interface. Based on LitElement.

More details: [Go to DEMO page](https://dile-spinner.polydile.com)

## \<dile-spinner>

The simpler implementation. Useful to show a inline spinner element, localized in the place where you put the dile-spinner element.

### Installation
```bash
npm i dile-spinner
```

### Usage
```html
<script type="module">
  import 'dile-spinner/dile-spinner.js';
</script>

<dile-spinner active></dile-spinner>
```

#### Properties

- **active**: Boolean, defines the spinner visibility. The spinner only appears when active is true.

#### Styling

Custom property | Description | Default
----------------|-------------|---------
--dile-spinner-color | The ajax loading color | #888
--dile-spinner-dot-size | The size of the dots in the spinner animation | 6px

## \<dile-spinner-modal>

This is an adaptation of the dile-spinner element using a modal box, blocking the interface of the rest of the page when the spinner is active.

### Usage

Same as dile-spinner implementation.

```html
<script type="module">
  import 'dile-spinner/dile-spinner-modal.js';
</script>

<dile-spinner-modal active></dile-spinner-modal>
```

#### Styling

Custom property | Description | Default
----------------|-------------|---------
--dile-spinner-modal-background-color | The modal layer background color | rgba(255, 255, 255, 0.8)
--dile-spinner-modal-box-color | Color of a small layer rounding the spinner element for higher contrast and visibility | rgba(0, 0, 0, 0.9)

```html
<style>
.customized {
  --dile-spinner-color: #3ca;
  --dile-spinner-dot-size: 10px;
  --dile-spinner-modal-background-color: #505050;
  --dile-spinner-modal-box-color: #fff;
}
</style>
<dile-spinner-modal active class="customized" id="spinnerModal"></dile-spinner-modal>
```

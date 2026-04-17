# Rence Alert

A beautiful, responsive, customizable, and accessible replacement for JavaScript's standard popup boxes. Designed with strict adherence to **Material Design 3**, Rence Alert elevates the styling of standard windows alerts with beautiful enter/exit animations, promise-based confirm/cancel features, and modern Toasts.

[**🌐 Live Documentation & Demo**](https://davidabalaku.github.io/Rence-Alert/)

![Rence Alert Poster](https://raw.githubusercontent.com/DavidAbalaku/Rence-Alert/main/public/banner.png)

## Features
- **Zero Dependencies**: Core logic is completely standalone.
- **Material Design 3**: Fully compliant with M3 elevation shadows, corner radiuses, and spring-physics.
- **Promise Based**: Easy integration with React/Next.js using `.then()` for handling dismissals and confirmations.
- **Cancel Support**: Add cancel buttons effortlessly to ensure absolute user intent before taking destructive action.
- **Toasts**: Modern light-themed snackbars that slide in natively.

## Installation

### Method 1: jsDelivr CDN (Highly Recommended)
Use the NPM-based CDN to automatically get the latest version without hosting it yourself.

```html
<!-- Put this in the <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rence-alert@latest/public/rence-alert.css">

<!-- Put this anywhere before the closing </body> tag -->
<script src="https://cdn.jsdelivr.net/npm/rence-alert@latest/public/rence-alert.js"></script>
```

### Method 2: NPM 
Excellent for modern project builds (React, Next.js, etc.)

```bash
npm install rence-alert
```

## Basic Usage (HTML / Vanilla JS)
```html
<button onclick="showAlert()">Test</button>

<script>
  function showAlert() {
    RenceAlert.success('Saved!', 'Your settings are updated.');
  }
</script>
```

## Advanced Usage (React / Next.js)
Because RenceAlert mounts standard promises, you can use it confidently in React handler arrays:
```tsx
import { RenceAlert } from 'rence-alert';

export default function DeleteButton() {
  const handleDelete = () => {
    RenceAlert.fire({
      title: 'Warning',
      text: 'Do you want to drop this database?',
      icon: 'warning',
      showCancelButton: true
    }).then((res) => {
      if(res.isConfirmed) {
         console.log("Database Deleted");
      }
    });
  };

  return <button onClick={handleDelete}>Delete</button>;
}
```

## Designed By
Designed and Built by **David Abalaku**.

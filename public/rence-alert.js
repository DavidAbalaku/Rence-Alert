/**
 * Rence Alert - Universal Premium Alert Library
 */

const RenceAlert = (() => {
  const icons = {
    success: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    error: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    info: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    warning: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    question: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
  };

  class AlertInstance {
    constructor(options) {
      this.options = {
        title: '',
        text: '',
        icon: 'info',
        width: '420px',
        background: '#ffffff',
        iconColor: '',
        confirmButtonColor: '#6750A4',
        cancelButtonColor: '#f1f3f5',
        confirmButtonText: 'OK',
        showCancelButton: false,
        cancelButtonText: 'Cancel',
        customClass: '',
        ...options
      };
    }

    fire() {
      return new Promise((resolve) => {
        const container = document.createElement('div');
        container.className = `rence-container ${this.options.customClass}`;
        
        container.innerHTML = `
          <div class="rence-modal" style="width: ${this.options.width}; background: ${this.options.background};">
            <div class="rence-icon rence-icon-${this.options.icon}" style="${this.options.iconColor ? `color: ${this.options.iconColor}; border-color: ${this.options.iconColor}33; background: ${this.options.iconColor}0D;` : ''}">
              ${icons[this.options.icon]}
            </div>
            <h2 class="rence-title">${this.options.title}</h2>
            <p class="rence-text">${this.options.text}</p>
            <div class="rence-footer">
              ${this.options.showCancelButton ? `<button class="rence-button rence-btn-cancel" style="background-color: ${this.options.cancelButtonColor};">${this.options.cancelButtonText}</button>` : ''}
              <button class="rence-button rence-btn-confirm" style="background-color: ${this.options.confirmButtonColor};">${this.options.confirmButtonText}</button>
            </div>
          </div>
        `;

        document.body.appendChild(container);
        
        // Trap focus and animate
        setTimeout(() => container.classList.add('rence-visible'), 10);

        const closeAlert = (isConfirmed) => {
          container.classList.remove('rence-visible');
          setTimeout(() => {
            if (document.body.contains(container)) document.body.removeChild(container);
            resolve({ isConfirmed, isDismissed: !isConfirmed });
          }, 200);
        };

        container.querySelector('.rence-btn-confirm').onclick = () => closeAlert(true);
        if (this.options.showCancelButton) {
          container.querySelector('.rence-btn-cancel').onclick = () => closeAlert(false);
        }
      });
    }
  }

  class ToastInstance {
    constructor(title, text, type) {
      this.title = title;
      this.text = text;
      this.type = type;
    }

    fire() {
      let container = document.querySelector('.rence-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'rence-toast-container';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      toast.className = `rence-toast`;
      toast.innerHTML = `
        <div class="rence-icon-${this.type}" style="width:28px; height:28px; display:flex; align-items:center; justify-content:center; border-radius:50%; flex-shrink:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            ${this.type === 'success' ? '<polyline points="20 6 9 17 4 12"></polyline>' : ''}
            ${this.type === 'error' ? '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>' : ''}
            ${this.type === 'warning' ? '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>' : ''}
            ${this.type === 'info' ? '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>' : ''}
            ${this.type === 'question' ? '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>' : ''}
          </svg>
        </div>
        <div style="flex-grow: 1;">
          <div class="rence-toast-title">${this.title}</div>
          ${this.text ? `<div style="font-size:0.9rem; color:#666; margin-top: 2px;">${this.text}</div>` : ''}
        </div>
      `;

      container.appendChild(toast);
      setTimeout(() => toast.classList.add('rence-toast-visible'), 10);
      
      setTimeout(() => {
        toast.classList.remove('rence-toast-visible');
        setTimeout(() => container.removeChild(toast), 400);
      }, 3500);
    }
  }

  return {
    fire: (opts) => new AlertInstance(opts).fire(),
    success: (t, txt) => new AlertInstance({ title: t, text: txt, icon: 'success' }).fire(),
    error: (t, txt) => new AlertInstance({ title: t, text: txt, icon: 'error' }).fire(),
    warning: (t, txt) => new AlertInstance({ title: t, text: txt, icon: 'warning' }).fire(),
    info: (t, txt) => new AlertInstance({ title: t, text: txt, icon: 'info' }).fire(),
    question: (t, txt) => new AlertInstance({ title: t, text: txt, icon: 'question', showCancelButton: true }).fire(),
    toast: (t, txt, type = 'info') => new ToastInstance(t, txt, type).fire(),
    snackbar: (t, actionText = 'OK') => {
      const sb = document.createElement('div');
      sb.className = 'rence-snackbar';
      sb.innerHTML = `<span>${t}</span><button onclick="this.parentElement.remove()">${actionText}</button>`;
      document.body.appendChild(sb);
      setTimeout(() => sb.classList.add('visible'), 10);
      setTimeout(() => { sb.classList.remove('visible'); setTimeout(() => sb.remove(), 400); }, 5000);
    }
  };
})();

window.RenceAlert = RenceAlert;

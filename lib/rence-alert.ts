/**
 * Rence Alert Service (Next.js / React version)
 * This follows a clean Service pattern for modern apps.
 */

export const RenceAlert = {
  success: (title: string, text: string) => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.success(title, text);
    }
  },

  error: (title: string, text: string) => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.error(title, text);
    }
  },

  warning: (title: string, text: string) => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.warning(title, text);
    }
  },

  info: (title: string, text: string) => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.info(title, text);
    }
  },
  
  question: (title: string, text: string) => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.question(title, text);
    }
  },
  
  toast: (title: string, text: string, type: string = 'info') => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.toast(title, text, type);
    }
  },

  snackbar: (text: string, actionText: string = 'OK') => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.snackbar(text, actionText);
    }
  },
  
  fire: (options: any) => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      return (window as any).RenceAlert.fire(options);
    }
  },

  showLoading: () => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.showLoading();
    }
  },

  hideLoading: () => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.hideLoading();
    }
  }
};

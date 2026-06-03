/**
 * Rence Alert Service (Next.js / React version)
 * This follows a clean Service pattern for modern apps.
 */

// ─── Shared Types ────────────────────────────────────────────────────────────

export type RenceAlertType = 'success' | 'error' | 'warning' | 'info' | 'question';

export interface RenceToastOptions {
  /** The bold headline shown in the toast. */
  title: string;
  /** Optional supporting text shown below the title. */
  text?: string;
  /** Icon variant. Defaults to 'info'. */
  type?: RenceAlertType;
  /** Auto-dismiss timer in ms. Defaults to 3500. */
  timer?: number;
  /** Toast position on screen. Defaults to 'top-right'. */
  position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
  /** Show the shrinking progress bar. Defaults to true. */
  showProgressBar?: boolean;
}

export interface RenceFireOptions {
  title?: string;
  text?: string;
  icon?: RenceAlertType;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  width?: string;
  background?: string;
  iconColor?: string;
  customClass?: string;
}

// ─── Service ─────────────────────────────────────────────────────────────────

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

  /**
   * Show a non-blocking toast notification.
   *
   * Two supported call signatures:
   *
   * 1. **Options object** (recommended):
   *    ```ts
   *    RenceAlert.toast({ title: 'Saved', text: 'Your changes were saved.', type: 'success' });
   *    ```
   *
   * 2. **Positional strings** (quick usage):
   *    ```ts
   *    RenceAlert.toast('Saved', 'Your changes were saved.', 'success');
   *    ```
   */
  toast: (
    titleOrOpts: string | RenceToastOptions,
    text?: string,
    type: RenceAlertType = 'info',
  ) => {
    if (typeof window === 'undefined' || !(window as any).RenceAlert) return;

    // Normalise to a plain options object so the native lib always receives
    // { title, text, type, … } — never a raw JS object as the first positional
    // arg, which previously caused the title to render as "[object Object]".
    const options: RenceToastOptions =
      typeof titleOrOpts === 'object'
        ? { type: 'info', ...titleOrOpts }          // object path — preserve all fields
        : { title: titleOrOpts, text, type };        // positional-string path

    (window as any).RenceAlert.toast(options);
  },

  snackbar: (text: string, actionText: string = 'OK') => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      (window as any).RenceAlert.snackbar(text, actionText);
    }
  },

  fire: (options: RenceFireOptions): Promise<{ isConfirmed: boolean; isDismissed: boolean }> => {
    if (typeof window !== 'undefined' && (window as any).RenceAlert) {
      return (window as any).RenceAlert.fire(options);
    }
    // Script not loaded yet — return a safe resolved Promise so .then() never crashes
    return Promise.resolve({ isConfirmed: false, isDismissed: true });
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
  },
};

declare global {
  interface Window {
    Desmos?: {
      GraphingCalculator: (
        element: HTMLElement,
        options?: Record<string, unknown>
      ) => {
        setExpression: (expr: { id: string; latex: string }) => void;
        destroy: () => void;
      };
    };
  }
}

export {};

import React, { useEffect, useRef } from "react";

interface DesmosGraphProps {
  expressions?: Array<{ id: string; latex: string }>;
  width?: string;
  height?: string;
}

const DesmosGraph: React.FC<DesmosGraphProps> = ({
  expressions = [{ id: "graph1", latex: "y = x^2" }],
  width = "100%",
  height = "500px",
}) => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Defensive check for Desmos and ref
    if (!window.Desmos || !calculatorRef.current) {
      console.warn("Desmos not loaded or ref not available");
      return;
    }

    // Create calculator
    const calculator = window.Desmos.GraphingCalculator(calculatorRef.current, {
      keypad: true,
      graphpaper: true,
      expressions: true,
      settingsMenu: true,
      zoomButtons: true,
    });

    // Add expressions
    expressions.forEach((expr) => {
      calculator.setExpression(expr);
    });

    // Cleanup
    return () => {
      calculator.destroy();
    };
  }, [expressions]);

  return (
    <div
      ref={calculatorRef}
      style={{
        width,
        height,
        border: "1px solid #ccc",
      }}
    />
  );
};

export default DesmosGraph;

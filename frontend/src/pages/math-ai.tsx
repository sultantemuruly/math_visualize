import { useState } from "react";
import ChatInterface, { Expression } from "@/components/chat-interface";
import DesmosGraph from "@/components/desmos-graph";

const MathAI = () => {
  const [customExpressions, setCustomExpressions] = useState<Expression[]>([]);

  const handleNewExpressions = (exprs: Expression[]) => {
    setCustomExpressions((prev) => {
      const existingLatex = new Set(prev.map((e) => e.latex.trim()));
      const newUnique = exprs.filter((e) => !existingLatex.has(e.latex.trim()));
      return [...newUnique]; //reset with new expressions
    });
  };

  const handleClearGraph = () => {
    // Manually clear all expressions from the state
    setCustomExpressions([]);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen p-4 gap-4 justify-center items-center">
      <div className="flex gap-2 w-[90%] md:w-[40%] h-1/2 md:h-[80%]">
        <ChatInterface
          onNewExpressions={handleNewExpressions}
          handleClearGraph={handleClearGraph} // Pass the clear handler to ChatInterface
        />
      </div>
      <div className="w-[90%] md:w-[40%] h-1/2 md:h-[80%]">
        <DesmosGraph
          expressions={customExpressions}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default MathAI;

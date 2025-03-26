import { useState } from "react";
import ChatInterface, { Expression } from "@/components/chat-interface";
import DesmosGraph from "@/components/desmos-graph";

const MathAI = () => {
  const [customExpressions, setCustomExpressions] = useState<Expression[]>([
    { id: "line", latex: "y = 2x + 1" },
    { id: "parabola", latex: "y = x^2 - 3" },
  ]);

  const handleNewExpressions = (exprs: Expression[]) => {
    setCustomExpressions((prev) => {
      const existing = new Set(prev.map((e) => `${e.id}:${e.latex}`));
      const newUnique = exprs.filter(
        (e) => !existing.has(`${e.id}:${e.latex}`)
      );
      return [...prev, ...newUnique];
    });
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen p-4 gap-4 overflow-hidden justify-center items-center">
      <div className="w-[90%] md:w-[40%] h-1/2 md:h-[80%]">
        <ChatInterface onNewExpressions={handleNewExpressions} />
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

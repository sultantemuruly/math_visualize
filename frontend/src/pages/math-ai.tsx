import ChatInterface from "@/components/chat-interface";
import DesmosGraph from "@/components/desmos-graph";

const MathAI = () => {
  const customExpressions = [
    { id: "line", latex: "y = 2x + 1" },
    { id: "parabola", latex: "y = x^2 - 3" },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-screen p-4 gap-4 overflow-hidden justify-center items-center">
      <div className="w-[90%] md:w-[40%] h-1/2 md:h-[80%]">
        <ChatInterface />
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

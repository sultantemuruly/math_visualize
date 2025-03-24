import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-sm">
      <h1 className="text-xl font-bold">Math Visualize</h1>
      <div>
        {!isHome && (
          <Button variant="outline" onClick={() => navigate("/")}>
            <ChevronLeft /> Back
          </Button>
        )}
        {isHome && (
          <div className="flex gap-2">
            <Button variant={"outline"} onClick={() => navigate("/")}>
              Start
            </Button>
            <Button variant={"outline"} onClick={() => navigate("/demo")}>
              Demo
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

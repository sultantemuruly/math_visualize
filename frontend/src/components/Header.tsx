import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-sm">
      <h1 className="text-xl font-bold">Math Visualize</h1>
      <div>
        {!isHome && (
          <Link to="/">
            <Button variant="outline">
              <ChevronLeft /> Back
            </Button>
          </Link>
        )}
        {isHome && (
          <div className="flex gap-2">
            <Link to="/math-ai">
              <Button variant={"outline"}>Math AI</Button>
            </Link>
            <Link to="/demo">
              <Button variant={"outline"}>Demo</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

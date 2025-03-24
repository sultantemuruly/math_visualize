import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-sm">
      <h1 className="text-xl font-bold">Math Visualize</h1>
      <Button variant={"outline"}>Start</Button>
    </header>
  );
};

export default Header;

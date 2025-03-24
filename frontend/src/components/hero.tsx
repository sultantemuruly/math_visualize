import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Explore the World of Math Through Visualization
                </h1>
                <p className="pt-10 max-w-[600px] text-muted-foreground md:text-2xl">
                  Discover mathematical concepts through beautiful, interactive
                  animations. See formulas come to life and gain intuitive
                  understanding of complex ideas.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 p-1">
                    <div className="h-[180px] w-full rounded-md bg-white p-2">
                      <img
                        src="/math-image1.jpg"
                        width={180}
                        height={180}
                        alt="image"
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 p-1">
                    <div className="h-[180px] w-full rounded-md bg-white p-2">
                      <img
                        src="/math-image2.jpg"
                        width={180}
                        height={180}
                        alt="image"
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 pt-8">
                  <div className="overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                    <div className="h-[180px] w-full rounded-md bg-white p-2">
                      <img
                        src="math-image3.jpg"
                        width={180}
                        height={180}
                        alt="image"
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 p-1">
                    <div className="h-[180px] w-full rounded-md bg-white p-2">
                      <img
                        src="math-image4.jpg"
                        width={180}
                        height={180}
                        alt="image"
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Visualize Complex Concepts
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our library of mathematical animations makes abstract concepts
                concrete and intuitive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M2 12h20" />
                  <path d="M2 12c0-4.4 3.6-8 8-8" />
                  <path d="M2 12c0 4.4 3.6 8 8 8" />
                  <path d="M10 12c0-2.2 1.8-4 4-4" />
                  <path d="M10 12c0 2.2 1.8 4 4 4" />
                  <path d="M18 12h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Graph Functions</h3>
              <p className="text-muted-foreground text-center">
                Explore the behavior of various mathematical functions through
                animated visualizations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 12v5h12V8l-5 5-4-4Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Probability Distributions</h3>
              <p className="text-muted-foreground text-center">
                Understand statistical concepts through dynamic visualizations
                of probability distributions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 3v12" />
                  <path d="m8 11 4 4 4-4" />
                  <path d="M8 5a4 4 0 0 1 8 0" />
                  <path d="M20 19c0-5-4-5-8-5s-8 0-8 5" />
                  <path d="M4 19h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Interactive Learning</h3>
              <p className="text-muted-foreground text-center">
                Control the pace of animations to better understand each step of
                mathematical processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Explore?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Dive into world of mathematical animations and discover a new
                way to understand complex concepts.
              </p>
            </div>
            <div className="mx-auto max-w-sm flex gap-2">
              <Link to="/math-ai">
                <Button size="lg" className="w-full">
                  Math AI
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" className="w-full">
                  Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

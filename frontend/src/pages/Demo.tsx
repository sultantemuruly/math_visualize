import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimationGallery from "@/components/animation-components/animation-gallery";
import { graphAnimations, distributionAnimations } from "@/lib/animation-data";

export default function Demo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Manim Animation Viewer
        </h1>
        <p className="text-muted-foreground mt-2">
          Explore mathematical animations created with Manim
        </p>
      </header>

      <Tabs defaultValue="graphs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="graphs">Graph Animations</TabsTrigger>
          <TabsTrigger value="distributions">
            Distribution Animations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="graphs" className="mt-0">
          <AnimationGallery animations={graphAnimations} />
        </TabsContent>

        <TabsContent value="distributions" className="mt-0">
          <AnimationGallery animations={distributionAnimations} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

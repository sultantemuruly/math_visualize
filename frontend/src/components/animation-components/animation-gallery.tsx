"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimationPlayer } from "@/components/animation-components/animation-player";
import { AnimationThumbnail } from "@/components/animation-components/animation-thumbnail";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { AnimationType } from "@/lib/types";

interface AnimationGalleryProps {
  animations: AnimationType[];
}

export default function AnimationGallery({
  animations,
}: AnimationGalleryProps) {
  const [selectedAnimation, setSelectedAnimation] =
    useState<AnimationType | null>(
      animations.length > 0 ? animations[0] : null
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            {selectedAnimation ? (
              <AnimationPlayer animation={selectedAnimation} />
            ) : (
              <div className="flex items-center justify-center h-[400px] bg-muted">
                <p className="text-muted-foreground">
                  Select an animation to view
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {selectedAnimation && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">{selectedAnimation.title}</h2>
            <p className="text-muted-foreground mt-2">
              {selectedAnimation.description}
            </p>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Available Animations</h3>
        <ScrollArea className="h-[500px] rounded-md border">
          <div className="p-4 grid grid-cols-1 gap-4">
            {animations.map((animation) => (
              <AnimationThumbnail
                key={animation.id}
                animation={animation}
                isSelected={selectedAnimation?.id === animation.id}
                onClick={() => setSelectedAnimation(animation)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

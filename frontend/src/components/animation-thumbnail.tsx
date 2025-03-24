"use client";

import { cn } from "@/lib/utils";
import type { AnimationType } from "@/lib/types";

interface AnimationThumbnailProps {
  animation: AnimationType;
  isSelected: boolean;
  onClick: () => void;
}

export function AnimationThumbnail({
  animation,
  isSelected,
  onClick,
}: AnimationThumbnailProps) {
  return (
    <div
      className={cn(
        "cursor-pointer rounded-md overflow-hidden border-2 transition-all",
        isSelected
          ? "border-primary"
          : "border-transparent hover:border-primary/50"
      )}
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${animation.thumbnailUrl})` }}
        />
      </div>
      <div className="p-2">
        <h4 className="font-medium text-sm truncate">{animation.title}</h4>
        <p className="text-xs text-muted-foreground truncate">
          {animation.category}
        </p>
      </div>
    </div>
  );
}

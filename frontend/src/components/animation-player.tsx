"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";
import type { AnimationType } from "@/lib/types";

interface AnimationPlayerProps {
  animation: AnimationType;
}

export function AnimationPlayer({ animation }: AnimationPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(animation.duration || 0);

  // Update progress as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", () => {
      setDuration(video.duration);
    });

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  // Handle play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
        setIsPlaying(false);
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  // Handle video end
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    setProgress(0);
    setIsPlaying(true);
  };

  const handleSkipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.currentTime + 5,
        videoRef.current.duration
      );
    }
  };

  const handleProgressChange = (value: number[]) => {
    const newProgress = value[0];
    setProgress(newProgress);

    if (videoRef.current && duration) {
      videoRef.current.currentTime = (newProgress / 100) * duration;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="relative">
      {/* Video Player */}
      <div className="w-full aspect-video bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          src={animation.videoSrc}
          className="w-full h-full"
          poster={animation.previewUrl}
          muted={isMuted}
          playsInline
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying && (
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-full bg-background/80 hover:bg-background/90"
              onClick={handlePlayPause}
            >
              <Play className="h-8 w-8" />
            </Button>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-muted/90 backdrop-blur-sm p-4">
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="icon" onClick={handleRestart}>
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handlePlayPause}>
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={handleSkipForward}>
            <RotateCw className="h-4 w-4" />
          </Button>

          <div className="flex-1 mx-4">
            <Slider
              value={[progress]}
              max={100}
              step={0.1}
              onValueChange={handleProgressChange}
            />
          </div>

          <div className="text-xs text-muted-foreground w-20 text-right">
            {videoRef.current
              ? `${formatTime(videoRef.current.currentTime)} / ${formatTime(
                  duration
                )}`
              : `0:00 / ${formatTime(duration)}`}
          </div>

          <Button variant="ghost" size="icon" onClick={toggleMute}>
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

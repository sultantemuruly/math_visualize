export interface AnimationType {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  previewUrl: string;
  // Path to the MP4 file relative to the public directory
  videoSrc: string;
  // Optional metadata about the video
  duration?: number;
}

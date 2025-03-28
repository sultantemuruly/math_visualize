import type { AnimationType } from "./types";

export const graphAnimations: AnimationType[] = [
  {
    id: "linear-graph",
    title: "Linear Graph",
    description: "A linear graph defined by y = 2x + 1.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/LinearGraph.mp4",
  },
  {
    id: "quadratic-graph",
    title: "Quadratic Graph",
    description: "A quadratic graph defined by y = x^2 - x + 2.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/QuadraticGraph.mp4",
  },
  {
    id: "cubic-graph",
    title: "Cubic Graph",
    description: "A cubic graph defined by y = x^3 - 2x^2 + x + 1.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/CubicGraph.mp4",
  },
  {
    id: "exponential-graph",
    title: "Exponential Graph",
    description: "An exponential graph defined by y = 2^x.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/ExponentialGraph.mp4",
  },
  {
    id: "logarithmic-graph",
    title: "Logarithmic Graph",
    description: "A logarithmic graph defined by y = log_2(x).",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/LogarithmicGraph.mp4",
  },
  {
    id: "rational-graph",
    title: "Rational Graph",
    description: "A rational graph defined by y = (x^2 - 1)/(x - 1).",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/RationalGraph.mp4",
  },
  {
    id: "absolute-value-graph",
    title: "Absolute Value Graph",
    description: "An absolute value graph defined by y = |x|.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/AbsoluteValueGraph.mp4",
  },
  {
    id: "piecewise-graph",
    title: "Piecewise Graph",
    description:
      "A piecewise function graph where y = -x if x < 0, y = x/2 otherwise.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/PiecewiseGraph.mp4",
  },
  {
    id: "circle-graph",
    title: "Circle Graph",
    description: "A circle graph defined by (x - h)^2 + (y - k)^2 = r^2.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/CircleGraph.mp4",
  },
  {
    id: "elliptical-graph",
    title: "Elliptical Graph",
    description: "An elliptical graph defined by x^2/a^2 + y^2/b^2 = 1.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/EllipticalGraph.mp4",
  },
  {
    id: "hyperbolic-graph",
    title: "Hyperbolic Graph",
    description: "A hyperbolic graph defined by x^2/a^2 - y^2/b^2 = 1.",
    category: "Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/HyperbolicGraph.mp4",
  },
  {
    id: "sine-graph",
    title: "Sine Graph",
    description: "A sine graph defined by y = sin(x).",
    category: "Complex Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/SineGraph.mp4",
  },
  {
    id: "cosine-graph",
    title: "Cosine Graph",
    description: "A cosine graph defined by y = cos(x).",
    category: "Complex Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/CosineGraph.mp4",
  },
  {
    id: "tangent-graph",
    title: "Tangent Graph",
    description: "A tangent graph defined by y = tan(x).",
    category: "Complex Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/TangentGraph.mp4",
  },
  {
    id: "polar-spiral",
    title: "Polar Spiral",
    description: "A polar spiral graph defined by r = θ / π.",
    category: "Complex Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/PolarSpiral.mp4",
  },
  {
    id: "parametric-lissajous",
    title: "Parametric Lissajous",
    description:
      "A parametric Lissajous curve defined by x = sin(3t), y = sin(4t).",
    category: "Complex Graphs",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/graphs/ParametricLissajous.mp4",
  },
];

export const distributionAnimations: AnimationType[] = [
  {
    id: "normal-distribution",
    title: "Normal Distribution",
    description: "A normal distribution defined by f(x) = e^{-x^2/2} / √(2π).",
    category: "Probability Distributions",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/distribuitions/NormalDistribution.mp4",
  },
  {
    id: "binomial-distribution",
    title: "Binomial Distribution",
    description: "A binomial distribution with n = 10 and p = 0.5.",
    category: "Probability Distributions",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/distribuitions/BinomialDistribution.mp4",
  },
  {
    id: "poisson-distribution",
    title: "Poisson Distribution",
    description: "A Poisson distribution with λ = 2.",
    category: "Probability Distributions",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    previewUrl: "/placeholder.svg?height=720&width=1280",
    videoSrc: "/videos/distribuitions/PoissonDistribution.mp4",
  },
];

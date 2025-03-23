# type: ignore

from manim import *
import numpy as np
from math import factorial
from scipy.special import comb


class NormalDistribution(Scene):
    def construct(self):
        axes = Axes(
            x_range=[-5, 5],
            y_range=[0, 0.5],
            axis_config={"color": BLUE},
        )

        # Define the normal distribution function
        normal_curve = axes.plot(
            lambda x: np.exp(-(x**2) / 2) / np.sqrt(2 * np.pi), color=WHITE
        )
        normal_label = axes.get_graph_label(
            normal_curve, label="f(x) = e^{-x^2/2} / \sqrt{2\pi}"
        )

        self.play(Create(axes))
        self.play(Create(normal_curve), Write(normal_label))
        self.wait(2)


class BinomialDistribution(Scene):
    def construct(self):
        axes = Axes(
            x_range=[0, 10],
            y_range=[0, 1],
            axis_config={"color": BLUE},
        )

        # Define the binomial distribution parameters (n = 10, p = 0.5)
        n, p = 10, 0.5
        binomial_points = [
            comb(n, k, exact=True) * (p**k) * ((1 - p) ** (n - k)) for k in range(n + 1)
        ]

        # Create the binomial distribution bars
        bars = VGroup()
        for i, point in enumerate(binomial_points):
            bar = Rectangle(
                height=point,
                width=0.5,
                fill_color=WHITE,
                fill_opacity=0.7,
                stroke_width=0,
            ).move_to(
                axes.c2p(i, point / 2)
            )  # position bars at correct places
            bars.add(bar)

        # Label the bars
        bar_labels = VGroup()
        for i in range(len(binomial_points)):
            bar_label = MathTex(str(i), color=WHITE).next_to(bars[i], DOWN)
            bar_labels.add(bar_label)

        self.play(Create(axes))
        self.play(FadeIn(bars), Write(bar_labels))
        self.wait(2)


class PoissonDistribution(Scene):
    def construct(self):
        axes = Axes(
            x_range=[0, 10],
            y_range=[0, 0.4],
            axis_config={"color": BLUE},
        )

        # Define the Poisson distribution parameters (lambda = 2)
        lambd = 2
        poisson_points = [np.exp(-lambd) * lambd**k / factorial(k) for k in range(11)]

        # Create the Poisson distribution bars
        bars = VGroup()
        for i, point in enumerate(poisson_points):
            bar = Rectangle(
                height=point,
                width=0.5,
                fill_color=WHITE,
                fill_opacity=0.7,
                stroke_width=0,
            ).move_to(axes.c2p(i, point / 2))
            bars.add(bar)

        # Label the bars
        bar_labels = VGroup()
        for i in range(len(poisson_points)):
            bar_label = MathTex(str(i), color=WHITE).next_to(bars[i], DOWN)
            bar_labels.add(bar_label)

        self.play(Create(axes))
        self.play(FadeIn(bars), Write(bar_labels))
        self.wait(2)

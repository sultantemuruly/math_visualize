# type: ignore

from manim import *

class LinearGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-4, 4], y_range=[-4, 8], axis_config={"include_numbers": True})
        graph = axes.plot(lambda x: 2 * x + 1, color=BLUE)
        label = axes.get_graph_label(graph, label="y = 2x + 1")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class QuadraticGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-4, 4], y_range=[-2, 10], axis_config={"include_numbers": True})
        graph = axes.plot(lambda x: x**2 - x + 2, color=GREEN)
        label = axes.get_graph_label(graph, label="y = x^2 - x + 2")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class CubicGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-3, 3], y_range=[-10, 10], axis_config={"include_numbers": True})
        graph = axes.plot(lambda x: x**3 - 2 * x**2 + x + 1, color=RED)
        label = axes.get_graph_label(graph, label="y = x^3 - 2x^2 + x + 1")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class ExponentialGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-2, 4], y_range=[0, 20], axis_config={"include_numbers": True})
        graph = axes.plot(lambda x: 2 ** x, color=ORANGE)
        label = axes.get_graph_label(graph, label="y = 2^x")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class LogarithmicGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[0.1, 10], y_range=[-2, 4], axis_config={"include_numbers": True})
        graph = axes.plot(lambda x: math.log(x, 2), color=PURPLE)
        label = axes.get_graph_label(graph, label="y = log_2(x)")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class RationalGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-4, 4], y_range=[-10, 10], axis_config={"include_numbers": True})
        graph = axes.plot(lambda x: (x**2 - 1)/(x - 1) if x != 1 else 0, color=TEAL)
        label = axes.get_graph_label(graph, label="y = (x^2 - 1)/(x - 1)")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class AbsoluteValueGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-4, 4], y_range=[-1, 5], axis_config={"include_numbers": True})
        graph = axes.plot(lambda x: abs(x), color=YELLOW)
        label = axes.get_graph_label(graph, label="y = |x|")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class PiecewiseGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-4, 4], y_range=[-2, 4], axis_config={"include_numbers": True})
        def piecewise(x):
            if x < 0:
                return -x
            else:
                return x / 2
        graph = axes.plot(piecewise, color=WHITE)
        label = axes.get_graph_label(graph, label="piecewise")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class CircleGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-3, 3], y_range=[-3, 3], axis_config={"include_numbers": True})
        circle = Circle(radius=2, color=BLUE).move_to(axes.c2p(0, 0))
        self.play(Create(axes), Create(circle))
        self.wait()

class EllipticalGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-4, 4], y_range=[-3, 3], axis_config={"include_numbers": True})
        ellipse = Ellipse(width=4, height=2, color=GREEN).move_to(axes.c2p(0, 0))
        self.play(Create(axes), Create(ellipse))
        self.wait()

class HyperbolicGraph(Scene):
    def construct(self):
        axes = Axes(x_range=[-4, 4], y_range=[-4, 4], axis_config={"include_numbers": True})
        graph1 = axes.plot(lambda x: math.sqrt(x**2 / 4 - 1), x_range=[-3, -1.1], color=RED)
        graph2 = axes.plot(lambda x: math.sqrt(x**2 / 4 - 1), x_range=[1.1, 3], color=RED)
        graph3 = axes.plot(lambda x: -math.sqrt(x**2 / 4 - 1), x_range=[-3, -1.1], color=RED)
        graph4 = axes.plot(lambda x: -math.sqrt(x**2 / 4 - 1), x_range=[1.1, 3], color=RED)
        self.play(Create(axes), Create(graph1), Create(graph2), Create(graph3), Create(graph4))
        self.wait()

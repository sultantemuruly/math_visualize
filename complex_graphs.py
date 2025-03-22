# type: ignore

from manim import *
import math

class SineGraph(Scene):
    def construct(self):
        axes = Axes(
            x_range=[-2 * PI, 2 * PI], y_range=[-1.5, 1.5],
            x_length=10, y_length=3,
            axis_config={"include_numbers": True}
        )
        graph = axes.plot(lambda x: math.sin(x), color=BLUE)
        label = axes.get_graph_label(graph, label="y = sin(x)")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class CosineGraph(Scene):
    def construct(self):
        axes = Axes(
            x_range=[-2 * PI, 2 * PI], y_range=[-1.5, 1.5],
            x_length=10, y_length=3,
            axis_config={"include_numbers": True}
        )
        graph = axes.plot(lambda x: math.cos(x), color=GREEN)
        label = axes.get_graph_label(graph, label="y = cos(x)")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class TangentGraph(Scene):
    def construct(self):
        axes = Axes(
            x_range=[-PI, PI], y_range=[-5, 5],
            x_length=8, y_length=4,
            axis_config={"include_numbers": True}
        )
        graph = axes.plot(lambda x: math.tan(x), x_range=[-PI/2 + 0.1, PI/2 - 0.1], color=RED)
        label = axes.get_graph_label(graph, label="y = tan(x)")
        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

class PolarSpiral(Scene):
    def construct(self):
        axes = PolarPlane(radius_max=5).add_coordinates()
        graph = always_redraw(
            lambda: axes.plot_polar_curve(
                lambda theta: theta / PI,
                theta_range=[0, 4 * PI],
                color=ORANGE
            )
        )
        self.play(Create(axes), Create(graph))
        self.wait()

class ParametricLissajous(Scene):
    def construct(self):
        axes = Axes(
            x_range=[-2, 2], y_range=[-2, 2],
            x_length=6, y_length=6,
            axis_config={"include_numbers": True}
        )
        graph = axes.plot_parametric_curve(
            lambda t: np.array([
                math.sin(3 * t),
                math.sin(4 * t),
                0
            ]),
            t_range=[0, 2 * PI],
            color=PURPLE
        )
        self.play(Create(axes), Create(graph))
        self.wait()

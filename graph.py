from manim import *

class SimpleGraph(Scene):
    def construct(self):
        axes = Axes(
            x_range=[-3, 3, 1],
            y_range=[-2, 8, 1],
            x_length=6,
            y_length=4,
            axis_config={"include_numbers": True}
        )

        graph = axes.plot(lambda x: x**2, color=BLUE)
        label = axes.get_graph_label(graph, label="y = x^2")

        self.play(Create(axes), Create(graph), Write(label))
        self.wait()

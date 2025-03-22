import os

def render_scene(file_name, scene_name):
    os.system(f"manim -pql {file_name} {scene_name}")

# List of all scenes and files
scenes = [
    ("simple_graphs.py", "LinearGraph"),
    ("simple_graphs.py", "QuadraticGraph"),
    ("simple_graphs.py", "CubicGraph"),
    ("simple_graphs.py", "ExponentialGraph"),
    ("simple_graphs.py", "LogarithmicGraph"),
    ("simple_graphs.py", "RationalGraph"),
    ("simple_graphs.py", "AbsoluteValueGraph"),
    ("simple_graphs.py", "PiecewiseGraph"),
    ("simple_graphs.py", "CircleGraph"),
    ("simple_graphs.py", "EllipticalGraph"),
    ("simple_graphs.py", "HyperbolicGraph"),
    
    ("complex_graphs.py", "SineGraph"),
    ("complex_graphs.py", "CosineGraph"),
    ("complex_graphs.py", "TangentGraph"),
    ("complex_graphs.py", "PolarSpiral"),
    ("complex_graphs.py", "ParametricLissajous")
]

# Loop through and render each one
for file, scene in scenes:
    print(f"\nRendering {scene} from {file}")
    render_scene(file, scene)

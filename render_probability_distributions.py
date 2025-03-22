import os


def render_scene(file_name, scene_name):
    os.system(f"manim -pql {file_name} {scene_name}")


scenes = [
    ("probability_distributions.py", "NormalDistribution"),
    ("probability_distributions.py", "BinomialDistribution"),
    ("probability_distributions.py", "PoissonDistribution"),
]

for file, scene in scenes:
    print(f"\nRendering {scene} from {file}")
    render_scene(file, scene)

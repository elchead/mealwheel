import json
import sys
import os
from pathlib import Path


def send_json(dict, filename):
    with open(Path(os.getcwd()) / filename, "w") as f:
        json.dump(recipe, f)
    print(json.dumps(recipe))  # send via console output


def get_recipe():
    recipe = {"Ingredients": ["Apple", "Banana"], "Steps": "Do that..."}
    return recipe


recipe = get_recipe()
send_json(recipe, "data/recipe.json")
sys.stdout.flush()
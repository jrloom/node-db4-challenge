const db = require("../data/dbConfig");

function getRecipes(recipe_Id) {
  return db("recipes");
}

function getShoppingList(recipe_Id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "r.id", "ri.recipe_id")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .where({ recipe_id: recipe_Id })
    .select(
      "r.recipe",
      "ri.id",
      "i.ingredient",
      "ri.quantity",
      "ri.measurement"
    );
}

function getInstructions(recipe_Id) {
  return db("recipe_instructions")
    .select("instructions")
    .where({ recipe_id: recipe_Id });
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

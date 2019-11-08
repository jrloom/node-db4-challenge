exports.seed = function(knex) {
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      return knex("recipe_ingredients").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 1,
          measurement: "guesstimate"
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: 1,
          measurement: "guesstimate"
        },
        {
          recipe_id: 2,
          ingredient_id: 1,
          quantity: 1,
          measurement: "guesstimate"
        },
        {
          recipe_id: 2,
          ingredient_id: 3,
          quantity: 1,
          measurement: "guesstimate"
        },
        {
          recipe_id: 3,
          ingredient_id: 1,
          quantity: 1,
          measurement: "guesstimate"
        },
        {
          recipe_id: 3,
          ingredient_id: 4,
          quantity: 1,
          measurement: "guesstimate"
        }
      ]);
    });
};

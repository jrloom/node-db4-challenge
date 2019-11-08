exports.seed = function(knex) {
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { Ingredient: "Pot" },
        { Ingredient: "Chicken" },
        { Ingredient: "Beef" },
        { Ingredient: "Fish" }
      ]);
    });
};

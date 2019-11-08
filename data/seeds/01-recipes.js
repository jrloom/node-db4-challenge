exports.seed = function(knex) {
  return knex("recipes")
    .truncate()
    .then(function() {
      return knex("recipes").insert([
        { Recipe: "Chicken" },
        { Recipe: "Beef" },
        { Recipe: "Fish" }
      ]);
    });
};

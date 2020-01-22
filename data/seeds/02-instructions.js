exports.seed = function(knex) {
  return knex("recipe_instructions")
    .truncate()
    .then(function() {
      return knex("recipe_instructions").insert([
        { recipe_id: 1, instructions: "Roast the chicken" },
        { recipe_id: 2, instructions: "Stew the beef" },
        { recipe_id: 3, instructions: "Fry the fish" }
      ]);
    });
};

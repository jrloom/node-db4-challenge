exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("Recipe").notNullable();
    })
    .createTable("recipe_instructions", tbl => {
      tbl.increments();
      tbl.string("instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("Ingredient", 128).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl
        .integer("quantity")
        .unsigned()
        .notNullable();
      tbl.string("measurement").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_instructions")
    .dropTableIfExists("recipes");
};

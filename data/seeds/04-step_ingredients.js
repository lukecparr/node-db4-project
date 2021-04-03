
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {id: 1, step_id: 1, ingredient_id: 1, quantity: 1.0},
        {id: 2, step_id: 3, ingredient_id: 3, quantity: 1.0},
        {id: 3, step_id: 4, ingredient_id: 2, quantity: 1.0},
        {id: 4, step_id: 6, ingredient_id: 4, quantity: 1.0},
        {id: 5, step_id: 6, ingredient_id: 6, quantity: 1.0},
        {id: 6, step_id: 7, ingredient_id: 5, quantity: 2.0}
      ]);
    });
};

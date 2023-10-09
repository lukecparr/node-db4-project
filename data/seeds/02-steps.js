
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'Cook elbow noodles', recipe_id: 1},
        {id: 2, step_number: 2, instructions: 'Drain and rinse', recipe_id: 1},
        {id: 3, step_number: 3, instructions: 'Combine with tomato juice and heat', recipe_id: 1},
        {id: 4, step_number: 1, instructions: 'Cook spaghetti noodles', recipe_id: 2},
        {id: 5, step_number: 2, instructions: 'Strain and rinse', recipe_id: 2},
        {id: 6, step_number: 3, instructions: 'Chop pepperoni stick and add with sauce', recipe_id: 2},
        {id: 7, step_number: 1, instructions: 'Unrap poptart', recipe_id: 3},
        {id: 8, step_number: 2, instructions: 'Put in toaster', recipe_id: 3},
        {id: 9, step_number: 3, instructions: 'Let cool and eat', recipe_id: 3}
      ]);
    });
};

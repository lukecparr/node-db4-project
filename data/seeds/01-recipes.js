
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Noodles & Tomato Juice'},
        {id: 2, recipe_name: 'Spaghetti with Pepperoni'},
        {id: 3, recipe_name: 'Poptarts'}
      ]);
    });
};

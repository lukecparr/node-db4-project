
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Elbow noodles'},
        {id: 2, ingredient_name: 'Spaghetti noodles'},
        {id: 3, ingredient_name: 'Tomato juice'},
        {id: 4, ingredient_name: 'Pepperoni'},
        {id: 5, ingredient_name: 'Poptarts'},
        {id: 6, ingredient_name: 'Pasta sauce'}
      ]);
    });
};


exports.up = function(knex) {
  return knex.schema
		.createTable('recipes', tbl => {
			tbl.increments();
			tbl.text('recipe_name', 128)
				.unique()
				.notNullable();
		})
		.createTable('steps', tbl => {
			tbl.increments();
			tbl.integer('step_number')
				.unsigned()
				.notNullable();
			tbl.text('instructions')
				.notNullable();
			tbl.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipes.id')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		})
		.createTable('ingredients', tbl => {
			tbl.increments();
			tbl.text('ingredient_name')
				.notNullable()
				.unique();
		})
		.createTable('step_ingredients', tbl => {
			tbl.increments();
			tbl.integer('step_id')
				.unsigned()
				.notNullable()
				.references('steps.id')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('ingredients.id')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.decimal('quantity')
				.notNullable();
		})
};

exports.down = function(knex) {
  return knex.schema
		.dropTableIfExists('step_ingredients')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('recipes');
};

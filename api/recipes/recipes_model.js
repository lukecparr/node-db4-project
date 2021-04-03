const db = require('../../data/db-config');


const getRecipeById = async (id) => {
	const recipe = await db('recipes as r')
		.where({ 'r.id': id }).first();
	
		const steps = await db('steps as s')
		.where({'recipe_id': id})
		.leftJoin('step_ingredients as si', 'si.step_id', 's.id')
		.leftJoin('ingredients as i', 'si.ingredient_id', 'i.id')
		.select('s.id as step_id', 'step_number', 'instructions', 'quantity', 'i.id as ingredient_id', 'ingredient_name');
	
	let formattedRecipe = {};

	if (recipe) {
		formattedRecipe = {
			...recipe,
			steps: steps
		}
	} else {
		formattedRecipe = [];
	}

	return formattedRecipe;
};


module.exports = {
	getRecipeById
};
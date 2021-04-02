const router = require('express').Router();
const Recipes = require('./recipes_model');

router.get('/:id', (req, res) => {
	const { id } = req.params;
	
	Recipes.getRecipeById(id)
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(500).json({ message: err.message}));
});


module.exports = router;
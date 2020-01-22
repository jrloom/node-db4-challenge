const router = require("express").Router();
const db = require("./recipeModel");

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({ error: "server error" }));
});

router.get("/:id/shoppingList", (req, res) => {
  db.getShoppingList(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ error: "server error" }));
});

router.get("/:id/instructions", (req, res) => {
  db.getInstructions(req.params.id)
    .then(instruct => res.status(200).json(instruct))
    .catch(err => res.status(500).json({ error: "server error" }));
});

module.exports = router;

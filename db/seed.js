const User = require("../models/User")
const Recipe = require("../models/Recipe")
const mongoose = require('./connection')
mongoose.Promise = Promise
const bcrypt = require("bcrypt-nodejs")

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
      Recipe.find({}).remove(() => {
        User.create({
            local: {
                screenName: "Tony",
                email: "cheftony@gmail.com",
                password: createPassword("tonyisbest")
            }
        }).then(user => {
            Promise.all([
                Recipe.create({
                    name: "Pizza Dough",
                    ingredients: ["3 1/2 to 4 cups bread flour", "1 teaspoon sugar", "1 envelope instant dry yeast", "2 teaspoons kosher salt", "1 1/2 cups warm water", "2 tablespoons olive oil"],
                    directions: "Combine the bread flour, sugar, yeast and kosher salt in the bowl of a stand mixer and combine. While the mixer is running, add the water and 2 tablespoons of the oil and beat until the dough forms into a ball. If the dough is sticky, add additional flour, 1 tablespoon at a time, until the dough comes together in a solid ball. If the dough is too dry, add additional water, 1 tablespoon at a time. Scrape the dough onto a lightly floured surface and gently knead into a smooth, firm ball. Grease a large bowl with the remaining 2 teaspoons olive oil, add the dough, cover the bowl with plastic wrap and put it in a warm area to let it double in size, about 1 hour. Turn the dough out onto a lightly floured surface and divide it into 2 equal pieces. Cover each with a clean kitchen towel or plastic wrap and let them rest for 10 minutes.",
                    description: "Classic pizza dough",
                    more: "Using bread flour will give you a much crisper crust, you can substitute it with all-purpose flour which will give you a chewier crust.",
                    author: user._id
                }) .then(recipe => {
                    user.recipes.push(recipe)
                }).then(() => {
                    user.save(err => console.log(err))
                }),
                Recipe.create({
                    name: "Turkey Meatballs",
                    ingredients: ["1 large egg", "2 pounds ground turkey","2/3 cup Panko", "3 Tablespoons olive oil", "1/4 cup grated parmesan cheese", "3 cloves garlic", "2 teaspoons dried oregano", "2 teaspoons dried basil", "3/4 teaspoon salt", "1/2 teaspoon pepper", "1 large onion", "two 28-ounce cans crushed tomatoes"],
                    directions: "Beat the egg in a large mixing bowl. Add the ground turkey, Panko, 2 Tablespoons olive oil, parmesan, garlic, oregano, basil, salt, and pepper. Mix everything up just so the ingredients are combined - avoid overmixing. Roll into desired size balls  Place all rolled meatballs on a large baking sheet. Place onion slices in the bottom of the crockpot, topped with 1 can of crushed tomatoes. Coat a large skillet with remaining Tablespoon of olive oil and bring to medium-high heat. Lightly brown the meatballs. Layer the meatballs into the crockpot as you're browning each batch. Once all browned meatballs have been added to the crockpot, pour remaining can of tomatoes on top. Cover and cook on low for 6-6.5 hours",
                    description: "Slow cooker meatballs in red sauce",
                    more: "To add some fat, use 1 lb of 97% lean and 1 lb of 90% lean.",
                    author: user._id
                }).then(recipe => {
                    user.recipes.push(recipe)
                }).then(() => {
                    user.save(err => console.log(err))
                })
            ])
        })
        User.create({
            local: {
                screenName: "Jen",
                email: "jen.jones@gmail.com",
                password: createPassword("Chowda4all")
            }
        }).then(user => {
            Promise.all([
                Recipe.create({
                    name: "Clam Chowder",
                    ingredients: ["16 ounces bacon, diced", "2 onions", "2 cups diced celery", "3 cans minced or chopped clams, do not drain", "8 ounce bottle clam juice", "4 cups water", "2 cups heavy cream", "6 large potatoes, cubed", "season with salt and pepper"],
                    directions: "Have a slow cooker ready to go. Heat a large skillet over medium-high heat. Add the diced bacon. Cook, stirring often, until bacon is crisp and the fat has been rendered. Remove the bacon from the skillet with a slotted spoon and place in a bowl. Set aside to cool. Then refrigerate until ready to serve the chowder. Carefully spoon out all but 1-2 Tablespoons of the bacon fat. Add the onions and celery to the skillet. Cook for 5-10 minutes. Add the garlic and cook for 30-60 seconds more. Transfer the mixture to the slow cooker, making sure to scrape the skillet clean with a spatula or wooden spoon. To the slow cooker, add the clam juice, undrained canned clams, water, cream, potatoes, thyme, and some of the cooked bacon. Stir well. Place lid on slow cooker and set to HIGH for 4 hours or LOW for 6-8 hours. Check to see that the potatoes are tender. Tast, Season, garnish with remaining bacon",
                    description: "New England Clam Chowder",
                    more: "Best serverd in bread bowls.",
                    author: user._id
                }) .then(recipe => {
                    user.recipes.push(recipe)
                }).then(() => {
                    user.save(err => console.log(err))
                })
            ])
        })
      })
    })

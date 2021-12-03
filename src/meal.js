function nameMenuItem(item1) {
  return`Delicious ${item1}`;
}


function createMenuItem(selection, amountDue, mealType) {
  var menuItem = {
      name: selection,
      price: amountDue,
      type: mealType,
    }
  return menuItem;

}

function addIngredients(thing, ingredientList) {
if (!ingredientList.includes(thing)) {
  ingredientList.push(thing);
  }
  return ingredientList;
}
function formatPrice(total) {
  // formattedPrice = `$${initialPrice}`;
  return '$' + total;
}

function decreasePrice(rice) {
  decreasedPrice = rice - (rice * .1)
  return decreasedPrice;
}

function createRecipe(name, ingredients, menuItemType) {
  recipe = {
    title: name,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe;
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

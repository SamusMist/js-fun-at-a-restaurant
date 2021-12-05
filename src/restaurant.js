function createRestaurant(restaurantName) {
  var restaurantInfo = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurantInfo;
}

function addMenuItem(restaurantName, menuItem) {

  if (menuItem.type === 'lunch' &&
  !restaurantName.menus.lunch.includes(menuItem))
  {
    restaurantName.menus.lunch.push(menuItem);
  }
  if (menuItem.type === 'breakfast' &&
  !restaurantName.menus.breakfast.includes(menuItem))
  {
    restaurantName.menus.breakfast.push(menuItem);
  }
  if (menuItem.type === 'dinner' &&
  !restaurantName.menus.dinner.includes(menuItem))
   {
    restaurantName.menus.dinner.push(menuItem);
  }
}

function removeMenuItem(createdRestaurant, menuItemRemoved, itemType) {

  if (itemType === 'breakfast') {

  for (var i = 0; i < createdRestaurant.menus.breakfast.length; i++) {
    if (createdRestaurant.menus.breakfast[i].name === menuItemRemoved) {
    createdRestaurant.menus.breakfast.splice(i, 1);
    return `No one is eating our ${menuItemRemoved} - it has been removed from the ${itemType} menu!`;
    };
  }
}

  if (itemType === 'lunch') {

  for (var i = 0; i < createdRestaurant.menus.lunch.length; i++) {
    if (createdRestaurant.menus.lunch[i].name === menuItemRemoved) {
    createdRestaurant.menus.lunch.splice(i, 1);
    return `No one is eating our ${menuItemRemoved} - it has been removed from the ${itemType} menu!`;
    };
  }
};
  if (itemType === 'dinner') {

  for (var i = 0; i < createdRestaurant.menus.dinner.length; i++) {
    if (createdRestaurant.menus.dinner[i].name === menuItemRemoved) {
    createdRestaurant.menus.dinner.splice(i, 1);
    return `No one is eating our ${menuItemRemoved} - it has been removed from the ${itemType} menu!`;
    };
  }
}
  return `Sorry, we don't sell ${menuItemRemoved}, try adding a new recipe!`;
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

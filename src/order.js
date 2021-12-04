function takeOrder(order, delivery) {

  if(delivery.length < 3) {
    delivery.push(order);
  }
  return delivery;
}

function refundOrder(orderNo, delivery) {

  for (var i = 0; i < delivery.length; i++) {

    if (orderNo === delivery[i].orderNumber) {
      delivery.splice(i, 1);
    }
  }
}


function listItems(name) {

  var newList = [];
  
  for (var i = 0; i < name.length; i++) {
    newList.push(name[i].item);
  }
  return newList.join(', ');
}


function searchOrder(isListTrue, itemName) {

  for (i = 0; i < isListTrue.length; i++) {

    if (isListTrue[i].item === itemName) {
      return true;
    }
  };
  return false;
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

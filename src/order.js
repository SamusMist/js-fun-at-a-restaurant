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
var listedItem = [];

function listItems(name) {
  for (var i = 0; i < name.length; i++) {
    listedItem.push[i].item;
    return listedItem;
  }
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}

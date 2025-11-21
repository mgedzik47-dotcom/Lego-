let order = document.getElementById('form');
let orders = [];
order.addEventListener('submit' ,function(event){
event.preventDefault();
let order = {
    name :event.target['name'].value,
    id :event.target['id'].value,
    description:event.target['description'].value,
    price :event.target['price'].value,
    img :event.target['img'].value,
}
event.target.reset();
orders.push(order);
drawOrder(order);
console.log(JSON.stringify (order));
})
function createDownloadLink(order){
    let text = JSON.stringify(order);
    let download  = document.createElement('a');
    download.setAttribute('href' , 'data:text/plain;charset=utf-8,'+ encodeURIComponent(text));
    download.setAttribute('download','order.json');
    download.innerHTML = 'link'
    return download;
}
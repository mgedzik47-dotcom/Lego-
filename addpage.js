let form = document.getElementById('form');
let linkContainer = document.getElementById('link-container');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let order = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        description: document.getElementById('description').value,
        img: document.getElementById('img').value
    };

    console.log(order);

    form.reset();

    // создаём Blob и URL
    let blob = new Blob([JSON.stringify(order, null, 2)], {type: 'application/json'});
    let url = URL.createObjectURL(blob);

    // создаём параграф с ссылкой
    let p = document.createElement('p');
    let a = document.createElement('a');
    a.href = url;
    a.download = 'order-' + new Date().getTime() + '.json';
    a.innerText = 'Скачать JSON';
    p.appendChild(a);
    linkContainer.appendChild(p);
});
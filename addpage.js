document.querySelector(".generateorder").addEventListener("click", function() {

    let data = {
        id: document.querySelector(".id").value,
        name: document.querySelector(".name").value,
        price: document.querySelector(".price").value,
        description: document.querySelector(".description").value,
        img: document.querySelector(".img").value
    };

    let json = JSON.stringify(data, null, 4);

    let blob = new Blob([json], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    let link = document.createElement("a");
    link.href = url;
    link.download = "data.json";
    link.textContent = "Скачать JSON файл";

    let result = document.querySelector(".result");
    result.innerHTML = "";
    result.appendChild(link);
});

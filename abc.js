fetch("https://raw.githubusercontent.com/mgedzik47-dotcom/Lego-/main/db.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("form");

        data.users.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${item.photo_url}" alt="${item.name}" width="200">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(err => console.log("Error:", err));

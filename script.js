
fetch("data/daily.json")
    .then(res => res.json())
    .then(data => {
        document.getElementById("thought").textContent = data.thought;
        document.getElementById("image").src = data.image;
        document.getElementById("question").textContent = data.question;
    })
    .catch(err => {
        console.error("Fehler beim Laden der Daten:", err);
    });

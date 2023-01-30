const form = document.getElementById("crm-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const cp = document.getElementById("cp").value;
  const departement = document.getElementById("departement").value;
  const adresse = document.getElementById("adresse").value;
  const Nfacture = document.getElementById("Nfacture").value;
  const Mfacture = document.getElementById("Mfacture").value;
  const DateEfacture = document.getElementById("DateEfacture").value;
  const Mregler = document.getElementById("Mregler").value;

  if (!name || !email || !phone || !cp || !departement || !adresse || !Nfacture || !DateEfacture || !Mfacture) {
    alert("Veuillez remplir tous les champs");
    return;
  }

  fetch("/submit-crm-form", {
    method: "POST",
    body: JSON.stringify({ name, email, phone, cp , departement, adresse, Nfacture, Mfacture, DateEfacture }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Envoi réussi");
      } else {
        alert("Une erreur est survenue");
      }
    });
});

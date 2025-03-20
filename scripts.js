const input = document.querySelector("#new-item");
const form = document.querySelector("form");
const ul = document.querySelector(".items-list");
const alertBox = document.querySelector("#alert");
const deleteIcon = document.querySelector('.delete-icon');

// Evento de submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        if (input.value.trim() === "") {
            return alert("Campo vazio!");
        }

        addItem(input.value.trim());

        input.value = "";

    } catch (error) {
        console.error("Erro ao adicionar item:", error);
    }
});

// Função para adicionar um novo item na lista
function addItem(text) {

    const li = document.createElement("li");
    li.classList.add("item");

    const checkbox = document.createElement("img");
    checkbox.setAttribute("src", "assets/icons/check-default.svg");
    checkbox.classList.add("check");

    const span = document.createElement("span");
    span.style.color = "#374151";
    span.textContent = text;

    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "assets/icons/lixeira.svg");
    deleteButton.classList.add("delete");
    deleteButton.style.color = "red";


    let isChecked = false;

    checkbox.addEventListener("click", () => {
        isChecked = !isChecked;
        checkbox.setAttribute("src", isChecked ? "assets/icons/check-selected.svg" : "assets/icons/check-default.svg");
    });

    deleteButton.addEventListener("click", () => {
        if (isChecked) {
            ul.removeChild(li);
            mostrarAlerta();
        } else {
            alert("Selecione o item para remover!");
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    ul.appendChild(li);
}

// Exibir alerta de item removido
function mostrarAlerta() {
    try {
        alertBox.style.display = "flex";
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    } catch (error) {
        console.error("Erro ao exibir alerta:", error);
    }
}

// Evento de clique para fechar o alerta
deleteIcon.addEventListener('click', function () {
    const footer = document.querySelector('footer');
    footer.style.display = 'none';
});




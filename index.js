import { addTodo, deleteTodo, getTodos } from "./api.js";
import { renderLoginComponent } from "./components/login-component.js";
import { formatDateToRu, formatDateToUs } from "./lib/formatDate/formatDate.js";
import { format } from "date-fns";

    
    let tasks = [];
    // let password = prompt ('Введите пароль');//"123456"
    let token = "Bearer dgc0boasc8as6g5g5k5o5s5w606g39o3cc3e83ek3ck3b43k38o";

   token= null;

    const fetchTodosAndRender = () => {
      return getTodos({token}).then((responseData) => {
          tasks = responseData.todos;
          renderApp();
        });
    };

    const renderApp = () => {
        const appEl = document.getElementById("app");
        if (!token) {
            
            renderLoginComponent({
                appEl, 
                setToken: (newToken) => {
                    token = newToken;
                },
                fetchTodosAndRender,
            });
            return;
        }

        // const formatDate = (date) => {
        //     return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`};
        const country = "ru";
        const tasksHtml = tasks
                .map((task) => {
                return `
                <li class="task">
                    <p class="task-text">
                    ${task.text} (Создал: ${task.user?.name ?? 'Неизвестно'})
                    <button data-id="${task.id}" class="button delete-button">Удалить</button>
                    </p>
                    <p><i>Задача создана: ${country === "ru" ? formatDateToRu(new Date(task.created_at)) : formatDateToUs(new Date(task.created_at))}</i></p>
                </li>`;
        })
        .join("");

        const appHtml = `
                <h1>Список задач</h1>

            <ul class="tasks" id="list">
            <! --Список рендерится из JS —>
            ${tasksHtml}
            </ul>
            <br />
            <div class="form">
            <h3 class="form-title">Форма добавления</h3>
            <div class="form-row">
                Что нужно сделать:
                <input
                type="text"
                id="text-input"
                class="input"
                placeholder="Выпить кофе"
                />
            </div>
            <br />
            <button class="button" id="add-button">Добавить</button>
            </div>`;
            

      appEl.innerHTML = appHtml;

        const buttonElement = document.getElementById("add-button");
        const listElement = document.getElementById("list");
        const textInputElement = document.getElementById("text-input");
        const deleteButtons = document.querySelectorAll(".delete-button");

        for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", (event) => {
          event.stopPropagation();

          const id = deleteButton.dataset.id;

          deleteTodo({id, token}).then((responseData) => {
              tasks = responseData.todos;
              renderApp();
            });

          renderApp();
        });
      }


        buttonElement.addEventListener("click", () => {
            if (textInputElement.value === "") {
                return;
            }

            buttonElement.disabled = true;
            buttonElement.textContent = "Задача добавляется...";


                addTodo({
                    text:textInputElement.value,
                    token,
                })
                .then(() => {
                // TODO: кинуть исключение
                textInputElement.value = "";
                })
                .then(() => {
                return fetchTodosAndRender();
                })
                .then(() => {
                buttonElement.disabled = false;
                buttonElement.textContent = "Добавить";
                })
                .catch((error) => {
                console.error(error);
                alert("Кажется, у вас проблемы с интернетом, попробуйте позже");
                buttonElement.disabled = false;
                buttonElement.textContent = "Добавить";
                });

            renderApp();
        });  

      
    };

    // fetchTodosAndRender();
    renderApp();
   

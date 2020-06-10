"use strict";
window.addEventListener("load", function () {
    let control = document.getElementsByClassName("form__control");
    let btn = document.getElementsByClassName("btn");
    let tooltip = document.getElementsByClassName("form__tooltip");
    let popupOrder = document.getElementById("popup-order-call");
    let popupCompleted = document.getElementById("popup-completed");
    let orderCall = document.querySelectorAll(".order-call");
    let iconClose = document.querySelectorAll(".popup__icon-closed");

    //при клике на ссылку выводим форму для ввода номера
    let showForm = () => {
        for (let i = 0; i < orderCall.length; i++) {
            orderCall[i].addEventListener("click", () => {
                document.body.classList.toggle("main");
                popupOrder.style.display = "block";
            });
        }

    };
    showForm();


    //закрываем всплывающую форму кликом на крестик
    let closeForm = () => {
        for (let i = 0; i < iconClose.length; i++) {
            iconClose[i].addEventListener("click", () => {
                document.body.classList.toggle("main", false);
                popupOrder.style.display = "none";
            });
        }

    };
    closeForm();



    //проверяем, ввел ли пользователь информацию в поле ввода
    /*btn[0].addEventListener("click", function () {
        //если не ввел, то выводим надпись
        if (control[0].value === "") {
            tooltip[0].style.display = "block";
            control[0].style.borderColor = "#d04545";
            control[0].focus();
        } else {
            //иначе скрываем форму
            //toggle - добавляет, либо удаляет класс(если вторым
            // параметром передается значение false
            document.body.classList.toggle("main");
            popupOrder[0].style.display = "none";
            popupCompleted[0].style.display = "block";
        }
    });

    /*iconClose[0].addEventListener("keydown", function(event) {
        if (event.code === 13) {
            popupOrder[0].style.display = "none";
        }
    });*/
});


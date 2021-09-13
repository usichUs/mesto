// Находим форму в DOM
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#userName-input');
let jobInput = formElement.querySelector('#userAbout-input');
let profileEdit = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let likeButtons = document.querySelectorAll('.elements__like-button');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let getName = nameInput.value;
    let getJob = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name')
    let profileJob = document.querySelector('.profile__about')
    // Вставьте новые значения с помощью textContent
    profileName.textContent = getName;
    profileJob.textContent = getJob;

    closeEdit();
}

function openProfileEdit () {
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
}

function closeEdit () {
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';
}

function like(e) {
    e.target.classList.toggle('elements__like-button_active');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

profileEdit.addEventListener('click', openProfileEdit);

closePopup.addEventListener('click', closeEdit);

for (let likeItem of likeButtons) {
    likeItem.addEventListener('click', like);
}
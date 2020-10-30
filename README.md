# Game of Trones App
###### SPA для изучения и практики работы с Api, React, JavaScript + тестирование. Загрузка данных из API о персонажах, книгах, домах Game of Trones.
## Стек:
JavaScript, React, Jest, React-testing-library.
## Блоки и функциональность:
- Random Character - блок с динамически изменяющимися данными случайного персонажа. Данные обновляются каждые 15 секунд. Если в API нет данных, поле автоматически заполняется текстом "no data". Блок скрывается/раскрывается по клику на кнопку Toggle random character
- Characters - выводится кликабельный список персонажей. Можно выбрать любого персонажа, справа откроется окно с подробными характеристиками.
- Houses - выводится кликабельный список домов. Функциональность такая же как у блока Characters.
- Books - выводится кликабельный список книг. Окно с подробной характеристикой перерисовывает основной блок страницы, заменяет текущий элемент.
## Тестирование кода
**RandomChar** - проверка загрузки данных. Тестирование снимками. Тестирование на отображение заголовка "Random Character" 

**App** - Тестирование снимками. Тестирование на отображение кнопки "Random character"

**Header** - Тестирование снимками. Тестирование на отображение лого "Game of Thrones DB", отображение навигационого меню

`npm start` - открывает страницу по адресу (http://localhost:3000/)

`npm run test` - запускает тестрирование кода.

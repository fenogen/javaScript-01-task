# goit-js-hw-01

Модуль 1 - Переменные. Типы. Ветвления. Циклы

Task #1. Объявлено две переменные хранящие название и цену товара: name и price
Присвоено переменным следующие характеристики товара (сразу при объявлении)
название: Генератор защитного поля цена: 1000 Используя шаблонную строку
выведено в консоль информацию о товаре. Присвоено товару новую цену - 2000
Используя шаблонную строку выведено в консоль новая информация о товаре.

Task #2-1, №2-2. Скрипт проверки количества товаров на складе. Есть переменные
total (количество товаров на складе) и ordered (единиц товара в заказе).
Сравниваются эти значения и по результатам выводится: Если в заказе указано
число, превышающее количество товаров на складе, то выводится сообщение "На
складе недостаточно твоаров!". В другом случае выводится сообщение "Заказ
оформлен, с вами свяжется менеджер". Проверяется работоспособность кода с
разными значениями переменной ordered, например 20, 80 и 130.

Task #2, №2-3. Скрипт присвоения переменной message одной из двух строк в
зависимости от количества товаров на складе с помощью тернарного оператора и
обычной записи.

Task #3. Скрипт имитирующий авторизацию администратора в панели управления. Есть
переменная message в которую будет записано сообщение о результате. При загрузке
страницы у посетителя запрашивается пароль через prompt: Если нажали Cancel,
записать в message строку 'Отменено пользователем!' В протовном случае, если
введен пароль который совпадает со значением константы ADMIN_PASSWORD,
записывается в message строка 'Добро пожаловать!' В противном случае, то есть
если ни одно из предыдущих условий не выполнилось, записывается в message строку
'Доступ запрещен, неверный пароль!' После всех проверок выводится в alert
значение переменной message.

Task #4. На счету пользователя есть 23580 кредитов, значение хранится в
переменной credits. Пользователь решает купить ремонтных дроидов, которые стоят
по 3000 кредитов за штуку. Цена одного дроида хранится в переменной
pricePerDroid. При посещении страницы, используя prompt, спрашивает количество
дроидов которые пользователь хочет купить и сохранить в переменную. Скрипт
следующий: Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение
'Отменено пользователем!'. В противном случае, рассчитывает общую цену заказа и
сохраняет в переменной totalPrice. Проверяет сможет ли пользователь оплатить
заказ: если сумма к оплате превышает количество кредитов на счету, выводится в
консоль сообщение 'Недостаточно средств на счету!'. в противном случае
подсчитывается остаток кредитов на счету и выводится сообщение 'Вы купили
[число] дроидов, на счету осталось [число] кредитов.'.

Task #5.Пользователь может оформить доставку товара к себе в страну, указав ее
при посещении страницы в prompt. Учитывается что пользователь может ввести имя
страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'. Скрипт который
выводит сообщение о стоимости доставки в указанную страну. Используется
switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'. Но
доставка есть не везде, если указанной страны нет в списке, то выводит в alert
сообщение 'В вашей стране доставка не доступна'. Ниже приведен список стран и
стоимость доставки: // Китай - 100 кредитов // Чили - 250 кредитов //
Австралия - 170 кредитов // Индия - 80 кредитов // Ямайка - 120 кредитов

Task #6.Скрипт который просит посетителя ввести число в prompt до тех пор, пока
посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей
сумме. При загрузке страницы пользователю предлагается в prompt ввести число.
Ввод добавляется к значению переменной total. Операция ввода числа продолжается
до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как
пользователь прекратил ввод нажав кнопку Cancel, показывает alert со строкой
'Общая сумма чисел равна [сумма]'. 🔔 Делает проверку того, что пользователь
ввел именно число, а не произвольный набор символов. В случае некорректного
ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
при этом результат prompt не плюсуется к общей сумме, после чего снова
пользователю предлагается ввести число в prompt.

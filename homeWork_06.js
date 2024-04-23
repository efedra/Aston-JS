//1) Почитать про принципы программирования KISS, DRY, YAGNI + почитать про "Антипаттерны" Чистого кода
//KISS - Keep It Simple Stupid - большинство систем работают лучше всего, если они остаются простыми, а не усложняются.
// Поэтому в области проектирования простота должна быть одной из ключевых целей и следует избегать ненужной сложности.

//DRY - Don't Repeat Yourself - нацеленный на снижение повторения информации различного рода, особенно в системах со множеством слоёв абстрагирования.

//YAGNI - You aren't gonna need it - Вам это не понадобится - отказ добавления функциональности, в которой нет непосредственной надобности
//Согласно адептам принципа YAGNI, желание писать код, который не нужен прямо сейчас, но может понадобиться в будущем, приводит к следующим нежелательным последствиям:
//
// Тратится время, которое было бы затрачено на добавление, тестирование и улучшение необходимой функциональности.
// Новые функции должны быть отлажены, документированы и сопровождаться.
// Новая функциональность ограничивает то, что может быть сделано в будущем, — ненужные новые функции могут впоследствии
// помешать добавить новые нужные.
// Пока новые функции действительно не нужны, трудно полностью предугадать, что они должны делать, и протестировать их.
// Если новые функции тщательно не протестированы, они могут неправильно работать, когда впоследствии понадобятся.

//Антипаттерн;
//байк-шейдинг - атомщики долго соприли какой должен быть навес на велосипеде (bike-shed) - Не стоит тратить время на обсуждение тривиальных и субъективных тем.
//Например, какой цвет в интерфейсе
//WET - антипаттерн DRY - Write Everything Twice, We enjoy Typing
//Аналитический паралич -  Вместо чрезмерного анализа и спекуляций используйте пошаговое развитие(итерации).
//Класс Бога - Избегайте больших классов со слишком большими ответственностями и зависимостями
//Страх перед добавлением классов - Большое число классов – не признак плохого дизайна
//Эффект внутренней платформы - Избегайте переизобретения тех возможностей, которые уже есть в операционке или платформе.
//Магические числа и строчки(Ниндзя код) - Избегайте использования чисел или строковых констант без имён и пояснений.
//Управление через количество - Используйте числа для информирования, а не как основу для принятия решений - измерять работу программиста в количестве кода - глупо, КАК оенивать эффективность самолета по весу
//Спагетти-код - Файлы случайным образом разбросаны по случайным папкам. Ход программы трудно проследить, он полностью перепутан (как спагетти).
//Золотой молоток - если у тебя есть молоток, то все кажется гвоздями - всегда использовать один и тот же подход
//Лодочный якорь- то когда программисты оставляют неиспользуемый код в базе, потому что он может понадобиться им позже.

// 2) Прочитать про способы хранения LocalStorage, SessionStorage и Cookie
//LocalStorage - сохраняет данные после закрытия браузера. Этот объект один на все вкладки. WebKit удаляет если не пользовались 7 дней. Браузеры находятся во временном хранении данных, но можно переключить, чтобы он не удалял данные
//(async () => {
//   // boolean значение, указавающее на то, включен ли «постоянный» режим хранения данных изначально
//   const isAlreadyPersist = await window.navigator.storage?.persisted()
//
//   if (isAlreadyPersist) {
//     console.info('Хранилище уже переключено в постоянный режим хранения.')
//     return
//   }
//
//   // boolean значение, указывающее на то, удалось ли переключиться на «постоянный» режим хранения
//   const persistModeEnabled = await window.navigator.storage?.persist()
//
//   if (persistModeEnabled) {
//     console.info('Браузер успешно сменил режим хранения на «постоянный».')
//     return
//   }
//
//   console.info(
//     'Браузер столкнулся с проблемами при попытке смены режима. Возможно вам стоит обновиться до последней версии, либо использовать на сайте HTTPS протокол.'
//   )
// })()
//SessionStorage -  сохраняет данные после обновления страницы, но не после закрытия браузера

//Отличия Cookie от Storage
//Не отправляют данные при каждом запросе, поэтому мы можем хранить гораздо больше данных. Большинство современных браузеров могут выделить как минимум 5 мегабайтов данных (или больше), и этот размер можно поменять в настройках.
//сервер не может манипулировать объектами хранилища через HTTP-заголовки. Всё делается при помощи JavaScript.
//Хранилище привязано к источнику (домен/протокол/порт). Это значит, что разные протоколы или поддомены определяют разные объекты хранилища, и они не могут получить доступ к данным друг друга.
//Данные В хранилище не имеют срока давности, по которому истекают и удаляются

//Чего не знала?
//есть событие для изменения storage. window.onstorage + значения должны быть строками => используем JSON Для сохранения объектов

//Cookie - состоит из пар ключ=значение, разделённых ;. Каждая пара представляет собой отдельное куки. Чтобы найти определённое куки, достаточно разбить строку из document.cookie по ;, и затем найти нужный ключ
// Пара не должна весить больше 4кб -> не можем хранить большие данные. Общее количество куки на один домен ограничивается примерно 20+. Если куки не добавить время жизнм, то они удалятся после закрытия вкладки
//expires, max-age - задает время жизни. Если мы установим в expires прошедшую дату, то куки будет удалено.

// Где используются? Один из наиболее частых случаев использования куки – это аутентификация:
// При входе на сайт сервер отсылает в ответ HTTP-заголовок Set-Cookie для того, чтобы установить куки со специальным уникальным идентификатором сессии («session identifier»).
// Во время следующего запроса к этому же домену браузер посылает на сервер HTTP-заголовок Cookie.
// Таким образом, сервер понимает, кто сделал запрос.

//Есть куки, которые нельзя прочитать или записать из JavaScript. Если сервер устанавливает куки с параметром HttpOnly``
// (доступен только для установки сервером), то такие куки будут недоступны в document.cookie`. Как правило, такие куки
// используются для хранения чувствительной информации, как, например, токены для авторизации. Проверка авторизации происходит
// с помощью запроса с текущим авторизованным пользователем и считается при успешном ответе сервера.

// 3) HTML / CSS - Базовая структура html документа, БЭМ методология
// Б - Блоки, хранят цвет блока, размер. Все, кроме позиционирования. Как пишесят block
//Э - Элемент, хранит стили, связанные с позиционированием и отступами. Синтаксис block_elem
//М - Модификатор, служит для изменения базового стиля. Предположим, что все ссылки серые, а одну надо сделать красной, тогда следует добавить модификатор block_elem__red
//Что делать если блок должен иметь отсупы? Сделать микс из блока и элемента следующим образом : block, block_elem
//Так же нельзя смешивать элементы таким образов: block_elem1_elem2_elem3. Правильно разбивать элементы block_elem1, block_elem2

// 4) Почитать про паттерны функционального программирования + посмотреть примеры использования
//Композиция функций
//Моноиды - ассоциативность( неважно слева начать перебирать массив или справа), список эл-тов, нейтральный эл-нт
//Чистые функции -  это функции, которые не имеют побочных эффектов и всегда возвращают одинаковый результат при одинаковых входных данных
// Типы как множества
//Функции высшего порядка
//Рекурсия

// 5) Способы позиционирования контента на странице
//Позиционирование позволяет вам изымать элементы из нормального потока макета документа и заставить их вести себя по-другому.
// Вся идея позиционирования заключается в том, чтобы позволить нам переопределять поведение базового потока документа, описанного выше, для того чтобы производить интересные эффекты.
//Статическое позиционирование(static) — это умолчание, которое получает каждый элемент, что всего лишь значит "поставить элемент в его нормальное положение в потоке макета

//Относительное позиционирование(relative) - Оно очень похоже на статическое позиционирование, за исключением того что вы можете модифицировать окончательное положение позиционируемого объекта занявшего своё место в макете нормального потока, в том числе заставлять его перекрывать другие элементы на странице.

//Абсолютное позиционирование(absolute) - Абсолютно позиционированный элемент больше не существует в нормальном потоке макета документа. Вместо этого он располагается на своём собственном слое отдельно от всего остального.
//Да, margin-ы все ещё влияют на позиционируемый элемент. Absolute позиционируется относительно первого найденного родителя с заданным position(кроме static) если не найдет, то от окна браузера( <html>)

//Фиксированное позиционирование - Позиционируется от окна браузера
//
//Sticky -  По сути, это гибрид относительной и фиксированной позиции, который позволяет позиционируемому элементу вести себя как будто он относительно позиционирован, до тех пор пока он не будет прокручен до определённой пороговой точки (например, 10px от вершины окна просмотра), после чего он становится фиксированным.

// 6) Веса селекторов

//Давайте разберёмся, как браузер взвешивает селектор. Ниже перечислены типы селекторов по убыванию специфичности:
//
// Селекторы по идентификатору;
// Селекторы по классу, селекторы по атрибуту и селекторы с псевдоклассами;
// Селекторы по тегу, селекторы с псевдоэлементами.
// Комбинаторы +, >, ~, универсальный селектор * и псевдокласс :where() веса не имеют.

//Существует удобный способ вычисления веса селектора в уме. Выше мы перечислили три группы сущностей, из которых может состоять селектор. Представим любой селектор в виде трёх нулей: 0.0.0.
//
// Селекторы по идентификатору увеличивают первую цифру.
// Селекторы по классу, по атрибуту или псевдокласс увеличивают вторую цифру.
// Селектор по тегу или псевдоэлемент увеличивают третью цифру.
// Один селектор равен единице.

//CSS-свойства, написанные в атрибуте style внутри HTML-разметки, перебивают свойства, написанные для этого элемента во внешних CSS-файлах или внутри тега <style>. Так что формально атрибут style самый специфичный, у него самый большой вес.
//Ключевое слово !important нарушает все установленные спецификацией законы и насильно применяет свойство, после которого написано.
//Прикол:
//Но если нарастить класс .tomato им самим же… что?! Да-да, он выиграет в любом порядке: текст будет томатным.
//
// .tomato.tomato {
//   color: tomato;
// }
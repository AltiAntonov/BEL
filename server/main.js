import { Meteor } from 'meteor/meteor';
import '../imports/api/books.js';
import '../imports/api/authors.js';
import '../imports/api/characters.js';

import { Books } from '../imports/api/books.js';
import { Authors } from '../imports/api/authors.js';
import { Characters } from '../imports/api/characters';

Meteor.startup(() => {
  // code to run on server at startup
  authors = Authors.find().count();
  console.log(authors);
  if (authors == 0) {
    historyData = {
      "Алеко Константинов": [
        {
          title: "Бай Ганьо",
          genre: ["книга"],
          characters: [{
            name: "Бай Ганьо"
          }, {
            name: "Бодков"
          }, {
            name: "Бълг. студенти в Швейцария"
          }, {
            name: "Димитров"
          }, {
            name: "Асланов"
          }, {
            name: "Гочоолу"
          }, {
            name: "Дочоолу"
          }, {
            name: "Гуньо Адвокатина"
          }, {
            name: "Данко Харсъзина"
          }, {
            name: "Иваница Граматиков"
          }]
        }, {
          title: "Разни хора, разни идеали",
          genre: ["фейлетон"],
        }
      ],
      "Димитър Димов": [
        {
          title: "Тютюн",
          genre: ["роман"],
          characters: [{
            name: "Зара, любовницата на фон Гайер"
          }, {
            name: "фон Гайер"
          }, {
            name: "татко Пиер"
          }, {
            name: "Бимби"
          }, {
            name: "Ирина"
          }, {
            name: "Борис Морев"
          }, {
            name: "г-ца Дитрих"
          }, {
            name: "Мария"
          }, {
            name: "Динко"
          }, {
            name: "Лила"
          }, {
            name: "Варвара"
          }, {
            name: "Шишко"
          }, {
            name: "Чингиз"
          }]
        }
      ],
      "Елин Пелин": [
        {
          title: "Косачи",
          genre: ["разказ"],
          characters: [{
            name: "Лазо"
          }, {
            name: "Благолаж"
          }]
        }, {
          title: "Задушница",
          genre: ["разказ"],
          characters: [{
            name: "Стоилка"
          }, {
            name: "Станчо"
          }]
        }, {
          title: "Гераците",
          genre: ["повест"],
          characters: [{
            name: "3-та братя: Божан, Петър, Павел"
          }, {
            name: "Захаринчо и Елка – дете и съпруга на Павел – най-малкият брат"
          }, {
            name: "Дядо Матей Маралака"
          }, {
            name: "Баба Марга, жена на стария Герак- Йордан Герака (герак озн. ястреб)"
          }]
        }, {
          title: "Ветрена мелница",
          genre: ["разказ"],
          characters: [{
            name: "дядо Корчан"
          }, {
            name: "Лазар Дъбака"
          }, {
            name: "Христина, внучка на дядо Корчан"
          }]
        }, {
          title: "Андрешко",
          genre: ["разказ"],
        }, {
          title: "Чорба от греховете на отец Ник",
          genre: ["разказ"],
        }, {
          title: "Занемелите камбавни",
          genre: ["разказ"],
        }, {
          title: "Мечтатели",
          genre: ["разказ"],
          characters: [{
            name: "Доктора"
          }, {
            name: "циганчето Рустем"
          }]
        }, {
          title: "На оня свят",
          genre: ["разказ"],
          characters: [{
            name: "дядо Матейко"
          }]
        }
      ],
      "Йордан Йовков": [
        {
          title: "Серафим",
          genre: ["разказ"],
          characters: [{
            name: "Серафим"
          }, {
            name: "Еньо"
          }, {
            name: "Павлина"
          },]
        }, {
          title: "Последна радост",
          genre: ["разказ"],
          characters: [{
            name: "Люцкан"
          }]
        }, {
          title: "Шибил",
          genre: ["разказ"],
          characters: [{
            name: "Шибил"
          }, {
            name: "Рада"
          }, {
            name: "Мурад бей"
          }, {
            name: "Велико кехая"
          },]
        }, {
          title: "През чумавото",
          genre: ["разказ"],
          characters: [{
            name: "хаджи Драган"
          }, {
            name: "Тиха"
          }, {
            name: "Величко"
          }, {
            name: "Дочка вдовицата"
          }, {
            name: "дядо Нейко"
          }]
        }, {
          title: "Индже",
          genre: ["разказ"],
          characters: [{
            name: "Индже"
          }, {
            name: "Пауна"
          }, {
            name: "Гърбавото - детето на Индже и Пауна"
          },]
        }, {
          title: "Албена",
          genre: ["разказ"],
          characters: [{
            name: "Албена"
          }, {
            name: "Куцар"
          }, {
            name: "Нягул богаташа"
          }, {
            name: "Нягулица"
          }, {
            name: "дядо Влася"
          }]
        }, {
          title: "Другоселец",
          genre: ["разказ"],
          characters: [{
            name: "Йове"
          }, {
            name: "дядо Иван"
          }, {
            name: "Торашко"
          }]
        }, {
          title: "Песента на колелетата",
          genre: [""],
          characters: [{
            name: "Сали Яшар"
          }, {
            name: "Шакире"
          }, {
            name: "Джапар"
          }]
        }
      ],
      "Пейо Яворов": [
        {
          title: "Градушка",
          genre: ["поезия"],
        }, {
          title: "Стон",
          genre: ["поезия"],
        }, {
          title: "Сенки",
          genre: ["поезия"],
        }, {
          title: "Заточеници",
          genre: ["поезия"],
        }, {
          title: "Две души",
          genre: ["поезия"],
        }, {
          title: "Маска",
          genre: ["поезия"],
        }, {
          title: "Ще бъдеш в бяло",
          genre: ["поезия"],
        }, {
          title: "Две хубави очи",
          genre: ["поезия"],
        }, {
          title: "Песен на човека",
          genre: ["поезия"],
        },
      ],
      "Атанас Далчев": [
        {
          title: "Стаята",
          genre: ["поезия"],
        }, {
          title: "Болница",
          genre: ["поезия"],
        }, {
          title: "Книгите",
          genre: ["поезия"],
        }, {
          title: "Камък",
          genre: ["поезия"],
        }, {
          title: "Повест",
          genre: ["поезия"],
        }, {
          title: "Дяволско",
          genre: ["поезия"],
        }, {
          title: "Прозорец",
          genre: ["поезия"],
        }, {
          title: "Къщата",
          genre: ["поезия"],
        }
      ],
      "Димитър Талев": [
        {
          title: "Железният светилник",
          genre: ["роман"],
          characters: [{
            name: "Стоян Глаушев"
          }, {
            name: "Султана"
          }, {
            name: "чорбаджи Аврам"
          }, {
            name: "Немтур"
          }, {
            name: "Лазар"
          }, {
            name: "Ния"
          }, {
            name: "Катерина"
          }, {
            name: "Рафе Клинче"
          }, {
            name: "Борис Глаушев"
          }, {
            name: "Климент Бенков - Рилския монах"
          }]
        }
      ],
      "Елисавета Багряна": [
        {
          title: "Стихии",
          genre: ["поезия"],
        }, {
          title: "Потомка",
          genre: ["поезия"],
        }, {
          title: "Кукувица",
          genre: ["поезия"],
        }, {
          title: "Вечната",
          genre: ["поезия"],
        },
      ],
      "Никола Вапцаров": [
        {
          title: "Вяра",
          genre: ["поезия"],
        }, {
          title: "Писмо",
          genre: ["поезия"],
        }, {
          title: "Песен за човека",
          genre: ["поезия"],
        }, {
          title: "Прощално",
          genre: ["поезия"],
        }, {
          title: "Сън",
          genre: ["поезия"],
        }, {
          title: "История",
          genre: ["поезия"],
        }, {
          title: "Кино",
          genre: ["поезия"],
        }, {
          title: "Завод",
          genre: ["поезия"],
        }, {
          title: "Борбата е безмилостно жестока",
          genre: ["поезия"],
        },
      ],
      "Христо Ботев": [
        {
          title: "Майце си",
          genre: ["поезия"],
        }, {
          title: "Към брата си",
          genre: ["поезия"],
        }, {
          title: "Борба",
          genre: ["поезия"],
        }, {
          title: "Елегия",
          genre: ["поезия"],
          characters: [{
            name: "поезия"
          }]
        }, {
          title: "На прощаване в 1868 г.",
          genre: ["поезия"],
        }, {
          title: "До моето първо либе",
          genre: ["поезия"],
        }, {
          title: "Хаджи Димитър",
          genre: ["поезия"],
        }, {
          title: "Обесването на Васил Левски",
          genre: ["поезия"],
        }, {
          title: "Моята молитва",
          genre: ["поезия"],
        },
      ],
      "Гео Милев": [
        {
          title: "Септември",
          genre: ["поема"],
        }
      ],
      "Димчо Дебелянов": [
        {
          title: "Спи градът",
          genre: ["поезия"],
        }, {
          title: "Пловдив",
          genre: ["поезия"],
        }, {
          title: "Тиха победа",
          genre: ["поезия"],
        }, {
          title: "Черна песен",
          genre: ["поезия"],
        }, {
          title: "Да се върнеш...",
          genre: ["поезия"],
        }, {
          title: "Помниш ли, помниш ли...",
          genre: ["поезия"],
        }, {
          title: "Миг",
          genre: ["поезия"],
        }, {
          title: "Сиротна песен",
          genre: ["поезия"],
        }, {
          title: "Един убит",
          genre: ["поезия"],
        },
      ],
      "Иван Вазов": [
        {
          title: "Българският език",
          genre: ["поезия"],
        }, {
          title: "Опълченците на Шипка",
          genre: ["поезия"],
        }, {
          title: "При Рилския манастир",
          genre: ["поезия"],
        }, {
          title: "Чичовци",
          genre: ["повест"],
          characters: [{
            name: "Мунчо"
          }, {
            name: "Иван Селямсъза"
          }, {
            name: "Хаджи Смион"
          }, {
            name: "Иванчо Йотата"
          }, {
            name: "Мичо Бейзадето"
          }, {
            name: "Варлаам Копринарката"
          }, {
            name: "Тарильома"
          }, {
            name: "Коно Крилатия"
          }, {
            name: "Мирончо"
          }, {
            name: "г-н Фратю Пародията"
          }]
        }, {
          title: "Под игото",
          genre: ["роман"],
          characters: [{
            name: "д-р Соколов"
          }, {
            name: "Бойчо Огнянов"
          }, {
            name: "Рада Госпожина"
          }, {
            name: "Кандов"
          }, {
            name: "кака Гинка"
          }, {
            name: "г-н Фратю"
          }, {
            name: "чорбаджи Марко"
          }, {
            name: "Мичо Бейзадето"
          }, {
            name: "Заманов"
          }, {
            name: "чорбаджи Юрдан"
          }, {
            name: "отец Викентий"
          }, {
            name: "отец Йеротей"
          }, {
            name: "Кириак Стефчов"
          }, {
            name: "Безпортев"
          }]
        }, {
          title: "Дядо Йоцо гледа",
          genre: ["разказ"],
        }, {
          title: "Кочо",
          genre: ["поезия"],
        }, {
          title: "Паисий",
          genre: ["поезия"],
        }, {
          title: "Отечество любезно",
          genre: ["поезия"],
        }, {
          title: "Елате ни вижте",
          genre: ["поезия"],
        }, {
          title: "Линее нашто поколенье",
          genre: ["поезия"],
        }, {
          title: "Левски",
          genre: ["поезия"],
        }
      ],
      "Пенчо Славейков": [
        {
          title: "Cis moll",
          genre: ["поезия"],
        }, {
          title: "Ни лъх не дъхва над полени",
          genre: ["поезия"],
        }, {
          title: "Спи езерото",
          genre: ["поезия"],
        }, {
          title: "Самотен гроб в самотен кът",
          genre: ["поезия"],
        }, {
          title: "Ралица",
          genre: ["поема"],
        },
      ],
      "Христо Смирненски": [
        {
          title: "Ний",
          genre: ["поезия"],
        }, {
          title: "Да бъде ден",
          genre: ["поезия"],
        }, {
          title: "Йохан",
          genre: ["поезия"],
        }, {
          title: "Юноша",
          genre: ["поезия"],
        }, {
          title: "Стария музикант",
          genre: ["поезия"],
        }, {
          title: "Цветарка",
          genre: ["поезия"],
        }, {
          title: "Зимни вечери",
          genre: ["поезия"],
        },
      ]
    }
    _.map(historyData, function (value, key) {

      authorId = Authors.insert({ name: key });

      value.forEach((title) => {
        characterIds = []
        if (title["characters"]) {
          title["characters"].forEach((char) => {
            charId = Characters.insert(char);
            characterIds.push(charId);

          });
        }

        data = {
          author: authorId,
          title: title["title"],
          genre: title["genre"],
          characters: characterIds,
          createdAt: new Date()
        }

        bookId = Books.insert(data);

        characterIds.forEach((charId) => {
          Characters.update({_id: charId}, {$set: {bookId: bookId}});
        });
      });

    });
  }
});

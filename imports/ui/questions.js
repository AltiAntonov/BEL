import { Books } from '../api/books.js';
import { Authors } from '../api/authors.js';
import { Characters } from '../api/characters';
import { ReactiveDict } from 'meteor/reactive-dict';

import './questions.html';

Template.questions.onCreated(function bodyOnCreated() {
  this.question = new ReactiveDict();
});

Template.questions.helpers({
  questionData() {
    const instance = Template.instance();
    return instance.question;
  },
  question() {
    const instance = Template.instance();
    if (instance.question.get('question')) {
      return instance.question.get('question')
    }
    else {
      return ""
    }
  },
  answerOptions() {
    const instance = Template.instance();
    if (instance.question.get('answerOptions')) {
      return instance.question.get('answerOptions')
    }
    else {
      return []
    }
  },
  showAnswer() {
    const instance = Template.instance();
    if (instance.question.get('showAnswer')) {
      return true
    }
    else {
      return false
    }
  },
  answer() {
    const instance = Template.instance();
    if (instance.question.get('showAnswer')) {
      return instance.question.get('answer')
    }
    else {
      return ""
    }
  },
  clearAnswerType() {
    const instance = Template.instance();
    if (instance.question.get('answerType')) {
      return instance.question.get('answerType')
    }
    else {
      return ""
    }
  },
  answerType() {
    const instance = Template.instance();
    if (instance.question.get('showAnswer')) {
      return instance.question.get('answerType')
    }
    else {
      return ""
    }
  },
  books(authorId) {
    return Books.find({ author: authorId });
  },
  authors() {
    return Authors.find({});
  }
});

Template.questions.events({

  'click #showAnswer': function (event, template) {

    const instance = Template.instance();
    instance.question.set("showAnswer", true);
  },
  'click #newQuestion': function (event, template) {

    const instance = Template.instance();
    instance.question.set("showAnswer", false);
    choises = ["findAuthor", "findBooksByAuthor", "findGenres", "findCharacters", "findBookByCharacter", "chooseBookForCharacter"]
    choise = Random.choice(choises);
    switch (choise) {
      case "findAuthor":
        books = Books.find({}).fetch();
        chosenBook = Random.choice(books);
        instance.question.set("question", "Авторът на '" + chosenBook.title + "' е?");
        authorName = Authors.findOne({ _id: chosenBook.author }).name;
        instance.question.set("answer", authorName);
        instance.question.set("answerType", "автор");

        break;
      case "findBooksByAuthor":
        authors = Authors.find({}).fetch();
        chosenAuthor = Random.choice(authors);
        instance.question.set("question", "Кои са произведенията на " + chosenAuthor.name + "?");
        instance.question.set("answerType", "произведения");

        books = Books.find({ author: chosenAuthor._id }).fetch();
        booksArray = [];
        books.forEach((book) => {
          booksArray.push(book.title);
        });
        instance.question.set("answer", books);

        break
      case "findGenres":
        books = Books.find({}).fetch();
        chosenBook = Random.choice(books);

        instance.question.set("question", "Жанра на '" + chosenBook.title + "' е?");
        instance.question.set("answer", chosenBook.genre.join(', '));
        instance.question.set("answerType", "жанрове");

        break;
      case "findCharacters":
        books = Books.find({ characters: { $exists: true, $not: { $size: 0 } } }).fetch();
        chosenBook = Random.choice(books);
        instance.question.set("question", "Героите на '" + chosenBook.title + "' са?");
        characters = Characters.find({ "_id": { "$in": chosenBook.characters } }).fetch();

        instance.question.set("answer", characters);
        instance.question.set("answerType", "герои");
        break;
      case "findBookByCharacter":
        characters = Characters.find({}).fetch();
        chosenCharacter = Random.choice(characters);
        book = Books.findOne({ _id: chosenCharacter.bookId });
        author = Authors.findOne({ _id: book.author });
        instance.question.set("question", "От кое произведение е героя на " + author.name + ", " + chosenCharacter.name + "?");
        instance.question.set("answer", book.title);
      case "chooseCharacterForBook":
        books = Books.find({ characters: { $exists: true, $not: { $size: 0 } } }).fetch();
        chosenBook = Random.choice(books);
        author = Authors.findOne({ _id: book.author });
        characters = Characters.find({}).fetch();
        charactersForChosenBook = $.grep(characters, function (e) { return e.bookId == chosenBook._id; });
        chosenCharacter = Random.choice(charactersForChosenBook);
        charactersForOtherBooks = $.grep(characters, function (e) { return e.bookId != chosenBook._id; });
        chosenCharacter["correct"] = true
        answers = []
        answers.push(chosenCharacter);
        while (answers.length != 4) {
          chosenCharacter = Random.choice(charactersForOtherBooks);
          charactersForOtherBooks = $.grep(charactersForOtherBooks, function (e) {
            return e._id != chosenCharacter._id;
          });
          chosenCharacter["correct"] = false
          answers.push(chosenCharacter)
        }

        instance.question.set("question", "Кой от героите е в творбата на " + author.name + ", '" + chosenBook.title + "'?");
        instance.question.set("answerOptions", answers);
        instance.question.set("answerType", "въпросникЗаГерои");
        break
      case "chooseBookForCharacter":

        books = Books.find({ characters: { $exists: true, $not: { $size: 0 } } }).fetch();
        chosenBook = Random.choice(books);
        chosenBook["correct"] = true;
        
        characters = Characters.find({}).fetch();
        charactersForChosenBook = $.grep(characters, function (e) { return e.bookId == chosenBook._id; });
        chosenCharacter = Random.choice(charactersForChosenBook);
        
        answers = []
        answers.push(chosenBook);
        books = $.grep(books, function (e) {
            return e._id != chosenBook._id;
          });
        while (answers.length != 4) {
          chosenBook = Random.choice(books);
          books = $.grep(books, function (e) {
            return e._id != chosenBook._id;
          });
          chosenBook["correct"] = false
          answers.push(chosenBook)
        }

        instance.question.set("question", "От коя книга е героя " + chosenCharacter.name + "?");
        instance.question.set("answerOptions", answers);
        instance.question.set("answerType", "въпросникЗаКниги");
        break
      default:
        break;
    }
  }
});
import { Books } from '../api/books.js';
import { Authors } from '../api/authors.js';
import { Characters } from '../api/characters';

import './info.html';

Template.info.helpers({
  books(authorId) {
    return Books.find({ author: authorId });
  },
  authors() {
    return Authors.find({});
  },
  characterName(charId) {
    return Characters.findOne({ _id: charId }).name;
  }
});
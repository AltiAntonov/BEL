import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';
import './info.js';
import './questions.js';

Template.registerHelper('count1', function(count) { return count + 1; });
Template.registerHelper('equals', function (a, b) { return a === b; });

Template.body.onCreated(function bodyOnCreated() {
  this.showQuestions = new ReactiveVar(false);
});

Template.body.helpers({
  showQuestions() {
    const instance = Template.instance();
    
    return instance.showQuestions.get();
  }
});

Template.body.events({
  'click #showList': function (event, template) {

    const instance = Template.instance();
    instance.showQuestions.set(false);
  },
  'click #showQuestions': function (event, template) {

    const instance = Template.instance();
    instance.showQuestions.set(true);
  }
});
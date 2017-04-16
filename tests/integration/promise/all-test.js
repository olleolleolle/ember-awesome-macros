import RSVP from 'rsvp';
import { all } from 'ember-awesome-macros/promise';
import { module, test } from 'qunit';
import compute from 'ember-macro-test-helpers/compute';

const { resolve } = RSVP;

module('Integration | Macro | promise | all');

test('combines promises into array promise', function(assert) {
  return compute({
    assert,
    computed: all('firstPromise', 'secondPromise'),
    properties: {
      firstPromise: resolve('test1'),
      secondPromise: resolve('test2')
    },
    deepEqual: [
      'test1',
      'test2'
    ]
  }).promise;
});
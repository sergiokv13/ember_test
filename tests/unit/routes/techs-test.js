import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | techs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:techs');
    assert.ok(route);
  });
});

const KolibriModule = require('kolibri_module');
const rootvue = require('./vue');
const router = require('./router');
const store = require('./store');
const sync = require('vuex-router-sync').sync;
const Kolibri = require('kolibri');

class LearnModule extends KolibriModule {
  ready() {
    sync(store, router);
    router.start(rootvue, 'rootvue');
    Kolibri.resources.ContentNodeResource.setChannel('dummy_db');
  }
}

module.exports = new LearnModule();

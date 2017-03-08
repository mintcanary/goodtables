<template>
  <div class="app" :class="view">
    <div class="inner">

      <section class="add-source">
        <header class="main-header">
          <a v-on:click="view = 'default-view'" class="close"><span>Close</span></a>
          Add source
        </header>
      </section>

      <section class="settings">
        <header class="main-header">
          <a v-on:click="view = 'default-view'" class="close"><span>Close</span></a>
          Settings
        </header>
      </section>

      <div class="default">
        <nav class="main-nav">
          <header class="main-header">
            <a v-on:click="view = 'default-view'" class="show-view-default"><span>Default view</span></a>
            <a v-on:click="view = 'list-view'" class="show-view-list"><span>List view</span></a>
          </header>

          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#sources" aria-controls="sources" role="tab" data-toggle="tab">Sources</a></li>
          </ul>

          <ul class="secondary-nav nav nav-stacked">
            <li>
              <a v-on:click="view = 'add-view'"><span class="icon-plus label-success"></span> <span class="label label-success">Add source</span></a>
            </li>
            <li>
              <a v-on:click="view = 'settings-view'"><span class="icon-equalizer label-info"></span> <span class="label label-info">Settings</span></a>
            </li>
          </ul>

          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="sources">
              <source-item title="okfn/my-data" integration="github" jobnumber="77" jobtotal="77" status="valid" time="7 minutes ago"/>
              <source-item title="okfn/some-data" integration="aws" jobnumber="2" jobtotal="2"  status="valid" time="20 minutes ago"/>
              <source-item title="okfn/test-data" integration="github" jobnumber="8" jobtotal="8"  status="invalid" time="1 day ago" job="active"/>
              <source-item title="okfn/more-data" integration="aws" jobnumber="1" jobtotal="1"  status="invalid" time="2 days ago"/>
            </div>
          </div>

        </nav>
        <main class="source-view">
          <nuxt/>
        </main>
      </div>
    </div>

  </div>
</template>

<script>
import Logo from '~components/Logo.vue'
import SourceItem from '~components/source_list_item.vue'

export default {
  components: {
    Logo,
    SourceItem
  },
  data () {
    return {
      view: 'default-view'
    }
  }
}
</script>

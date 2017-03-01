<template>
  <div class="app">
    <div class="inner">
      <nav class="main-nav">
        <header class="main-header">
          <logo/>
        </header>

        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#sources" aria-controls="sources" role="tab" data-toggle="tab">Sources</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="sources">
            <source-item title="okfn/my-data" integration="github" jobnumber="77" status="valid" time="7 minutes ago"/>
            <source-item title="okfn/some-data" integration="aws" jobnumber="2"  status="valid" time="20 minutes ago"/>
            <source-item title="okfn/test-data" integration="github" jobnumber="8"  status="invalid" time="1 day ago" job="active"/>
            <source-item title="okfn/more-data" integration="aws" jobnumber="1"  status="invalid" time="2 days ago"/>
          </div>
        </div>

      </nav>
      <main class="source-view">
        <nuxt/>
      </main>
    </div>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

import SourceItem from '~components/source_list_item.vue'

export default {
  components: {
    SourceItem,
    Logo
  }
}
</script>

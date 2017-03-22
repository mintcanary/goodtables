<template>
  <div class="app" :class="view">
    <div class="inner">

      <section class="add-source">
        <header class="main-header">
          <a v-on:click="view = 'default-view'" class="close"><span class="icon-keyboard_arrow_left"><i>Close</i></span></a>
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#addGithub" aria-controls="addGithub" role="tab" data-toggle="tab">GitHub</a></li>
            <li role="presentation"><a href="#addAmazon" aria-controls="addAmazon" role="tab" data-toggle="tab">Amazon</a></li>
          </ul>
        </header>

        <div class="tab-content">
          <div role="tabpanel" class="github tab-pane active" id="addGithub">
            <div class="tool-bar">
              <span>
                <input type="search" class="form-control search" placeholder="Filter">
              </span>
              <span class="sync">
                <button data-toggle="tooltip" data-placement="left" title="Refresh your organizations and repositories">
                  <span class="icon-spinner11"><i>Sync account</i></span>
                </button>
              </span>
            </div>

            <ul class="repos">
              <li v-for="repo of repos" v-if="!repo.active">
                <button @click="activateRepo(repo)" class="activate">
                  <span class="icon-plus"><i>Activate</i></span>
                </button>
                <h3 class="repo-title">{{ repo.name }}</h3>
                <span class="repo-body">
                  <a :href="`https://github.com/${repo.name}`">View repository</a>
                </span>
              </li>
            </ul>

          </div>
          <div role="tabpanel" class="amazon tab-pane" id="addAmazon">
            amazon
          </div>
        </div>

      </section>

      <section class="settings">
        <header class="main-header">
          Settings
        </header>
      </section>

      <div class="default">
        <nav class="main-nav invalid">
          <header class="main-header">
            <a v-on:click="view = 'default-view'" class="show-view-default"><span>Default view</span></a>
            <a v-on:click="view = 'list-view'" class="show-view-list"><span>List view</span></a>
            <logo/>
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#sources" aria-controls="sources" role="tab" data-toggle="tab">Sources</a></li>
            </ul>
          </header>

          <ul class="secondary-nav">
            <li v-if="view != 'add-view'">
              <a v-on:click="view = 'add-view'"><span class="icon-plus label-success"></span> <span class="label label-success">Add source</span></a>
            </li>
            <li v-else>
              <a v-on:click="view = 'default-view'"><span class="icon-keyboard_arrow_left label-success"></span> <span class="label label-success">Close</span></a>
            </li>
            <li v-if="view != 'settings-view'">
              <a v-on:click="view = 'settings-view'"><span class="icon-equalizer label-info"></span> <span class="label label-info">Settings</span></a>
            </li>
            <li v-else>
              <a v-on:click="view = 'default-view'"><span class="icon-keyboard_arrow_left label-info"></span> <span class="label label-info">Close</span></a>
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
import $ from 'jquery'

export default {
  components: {
    Logo,
    SourceItem
  },
  mounted: () => {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  },
  data () {
    return {
      view: 'default-view',
      repos: [
        {
          'active': true,
          'id': '5246d166-0cd8-469e-a953-e7e174690837',
          'name': 'frictionlessdata/ADB-User-Study'
        },
        {
          'active': true,
          'id': 'efab972f-af97-47c2-94cd-a9d9d6636d4f',
          'name': 'frictionlessdata/datapackage-ckan-js'
        },
        {
          'active': true,
          'id': '2639b85d-a17f-43b7-afce-ada7ea20db39',
          'name': 'frictionlessdata/example-goodtables.io'
        },
        {
          'active': false,
          'id': '3d53c8ac-0750-4320-b3db-5ec90a8e9a16',
          'name': 'adamamyl/ckanpages'
        },
        {
          'active': false,
          'id': '70f7b61a-f411-4c90-b4e9-d93a432f259c',
          'name': 'ckan/ckanext-pages'
        },
        {
          'active': false,
          'id': '402cae81-6eb0-4aa9-9902-e70430a4b140',
          'name': 'frictionlessdata/datapackage-from-remote-js'
        },
        {
          'active': false,
          'id': '7dc38c79-f53a-4a5b-bbf9-86cb2e8ad13a',
          'name': 'frictionlessdata/datapackage-identifier-js'
        },
        {
          'active': false,
          'id': '3f700b03-8796-4b63-8534-1b7535de9bf6',
          'name': 'frictionlessdata/datapackage-init-js'
        },
        {
          'active': false,
          'id': '7ef45990-c0ff-48ca-b592-ed220d443b9a',
          'name': 'frictionlessdata/datapackage-js'
        },
        {
          'active': false,
          'id': 'b769deec-8015-4d1a-ae1f-0999154d8fe6',
          'name': 'frictionlessdata/datapackage-outfile-js'
        },
        {
          'active': false,
          'id': '7708e227-a7bd-4ee6-b743-a888ce529b33',
          'name': 'frictionlessdata/datapackage-pipelines'
        },
        {
          'active': false,
          'id': '8428c096-b18e-4ae5-983a-0fc2066e6e2a',
          'name': 'frictionlessdata/datapackage-py'
        },
        {
          'active': false,
          'id': 'aa9f8ad6-0bb2-4b23-8fa8-7b7ffa5687c0',
          'name': 'frictionlessdata/datapackage-r'
        },
        {
          'active': false,
          'id': 'bc54dbd7-f8fd-4859-b61f-a90f45406cec',
          'name': 'frictionlessdata/datapackage-rb'
        },
        {
          'active': false,
          'id': '9618ed67-70f3-4b09-bea1-4cf36f9e10fc',
          'name': 'frictionlessdata/datapackage-read-js'
        },
        {
          'active': false,
          'id': '7bcf4b19-fa2f-43ab-b430-2755a70897ad',
          'name': 'frictionlessdata/datapackage-registry-js'
        },
        {
          'active': false,
          'id': 'b9613d2b-56d6-4500-85b5-9069915a3dce',
          'name': 'frictionlessdata/datapackage-render-js'
        },
        {
          'active': false,
          'id': '0b1f9825-38d3-4b7c-9e4a-0871ec12f89f',
          'name': 'frictionlessdata/datapackage-to-google-spreadsheet'
        },
        {
          'active': false,
          'id': '2450d2b7-24dd-411a-a56c-6785922b037a',
          'name': 'frictionlessdata/datapackage-validate-js'
        },
        {
          'active': false,
          'id': '30836a77-e756-4a58-b8cf-979c09c3125f',
          'name': 'frictionlessdata/datapackagist'
        },
        {
          'active': false,
          'id': 'de586ba5-9f75-40b8-8b92-74d98e7b1f4f',
          'name': 'frictionlessdata/data-quality-cli'
        },
        {
          'active': false,
          'id': '99bb10a9-7642-4052-afdb-ce8d0c77f81c',
          'name': 'frictionlessdata/data-quality-dashboard'
        },
        {
          'active': false,
          'id': '3a76b6af-4453-456d-9f7e-ce9289dba462',
          'name': 'frictionlessdata/data-quality-databases'
        },
        {
          'active': false,
          'id': 'b3ec02da-36f6-40e8-99d5-198d6b164e4d',
          'name': 'frictionlessdata/data-quality-spec'
        },
        {
          'active': false,
          'id': '600e073b-71fa-4f22-91c9-944946a7a443',
          'name': 'frictionlessdata/dpm-js'
        },
        {
          'active': false,
          'id': 'bef46b8c-8585-4e5b-9a57-f01b60f285fa',
          'name': 'frictionlessdata/dpm-py'
        },
        {
          'active': false,
          'id': '92b8054e-aa79-4885-98af-0b395e629480',
          'name': 'frictionlessdata/dpr-api'
        },
        {
          'active': false,
          'id': 'db2c8a5a-225a-43d7-bafd-0cb026d35734',
          'name': 'frictionlessdata/dpr-docs'
        },
        {
          'active': false,
          'id': 'a12d90a2-5998-49bd-9ed9-b300ac4ec294',
          'name': 'frictionlessdata/dpr-js'
        },
        {
          'active': false,
          'id': '40124b36-ed6b-410d-bf3d-a9434e2b9af4',
          'name': 'frictionlessdata/example-continuous-data-integration'
        },
        {
          'active': false,
          'id': '51834e07-b24b-4155-b0ed-118138ef9cfb',
          'name': 'frictionlessdata/example-data-packages'
        },
        {
          'active': false,
          'id': 'c447dfb1-1961-4951-a1d9-8301dfb7eadb',
          'name': 'frictionlessdata/example-geojson'
        },
        {
          'active': false,
          'id': '5833ae73-5f02-4cdb-a53c-4081c8d217ff',
          'name': 'frictionlessdata/example-simple-tabular-data'
        },
        {
          'active': false,
          'id': 'd0bf7282-6e22-4f2c-a825-161563eb699c',
          'name': 'frictionlessdata/example-topojson'
        },
        {
          'active': false,
          'id': '4a07d259-a08e-4096-804d-4fcb5fe44395',
          'name': 'frictionlessdata/frictionlessdata.io'
        },
        {
          'active': false,
          'id': 'd250a761-e3ba-4619-910c-44fed5bd03fd',
          'name': 'frictionlessdata/goodtables-angular-js'
        },
        {
          'active': false,
          'id': '6a1ff227-30e9-449c-b848-7afa16eeed45',
          'name': 'frictionlessdata/goodtables.io'
        },
        {
          'active': false,
          'id': 'dc37b793-0580-4a2c-9738-38a858a63fc7',
          'name': 'frictionlessdata/goodtables-js'
        },
        {
          'active': false,
          'id': 'ba65c74d-e000-41dd-94ef-0d4838d52aa6',
          'name': 'frictionlessdata/goodtables-py'
        },
        {
          'active': false,
          'id': 'f9ff0daa-191d-4ea3-b25f-82506479f95b',
          'name': 'frictionlessdata/goodtables-react-js'
        },
        {
          'active': false,
          'id': 'a87e83ce-b40c-48d2-ad5b-50753acf4ef3',
          'name': 'frictionlessdata/goodtables-server-py'
        },
        {
          'active': false,
          'id': 'f7161dce-0839-4048-be12-b4a0f29bf177',
          'name': 'frictionlessdata/goodtables-vue-js'
        },
        {
          'active': false,
          'id': 'ef21971c-e846-45ee-8bf4-5c38fede806a',
          'name': 'frictionlessdata/goodtables-web'
        },
        {
          'active': false,
          'id': '65366001-6826-4fbf-8ab0-85eac04e6a02',
          'name': 'frictionlessdata/jsontableschema-bigquery-py'
        },
        {
          'active': false,
          'id': '038e0900-0c5c-4f87-a413-2811a5441725',
          'name': 'frictionlessdata/jsontableschema-js'
        },
        {
          'active': false,
          'id': 'f07f32a0-7bdb-403d-9da3-8bd43bd6c7ee',
          'name': 'frictionlessdata/jsontableschema-models-js'
        },
        {
          'active': false,
          'id': 'b6157416-fd1c-465b-90d5-a98b170b7fad',
          'name': 'frictionlessdata/jsontableschema-openrefine-py'
        },
        {
          'active': false,
          'id': '4b8fda9e-d758-4a7b-91dd-51268e2d01bd',
          'name': 'frictionlessdata/jsontableschema-pandas-py'
        },
        {
          'active': false,
          'id': 'f95df547-c07c-429c-bf24-e0bd75ad0708',
          'name': 'frictionlessdata/jsontableschema-py'
        },
        {
          'active': false,
          'id': '7fa3a279-f028-4df0-b4d8-07c1fda835d6',
          'name': 'frictionlessdata/jsontableschema-rb'
        },
        {
          'active': false,
          'id': '023ca0f0-d617-4052-9a3d-4ad986d25697',
          'name': 'frictionlessdata/jsontableschema-sql-py'
        },
        {
          'active': false,
          'id': 'fff43766-2837-4c92-90e5-44709e478916',
          'name': 'frictionlessdata/pilot-dm4t'
        },
        {
          'active': false,
          'id': '099481de-9ca0-4989-8de6-1c76f8c37c92',
          'name': 'frictionlessdata/pilot-open-archaeology'
        },
        {
          'active': false,
          'id': '36f676aa-4085-4184-be9f-7a2e663a9788',
          'name': 'frictionlessdata/pilot-pnnl'
        },
        {
          'active': false,
          'id': '443b0e1a-78db-4707-8eb2-fac2ada6279b',
          'name': 'frictionlessdata/pilot-wprdc'
        },
        {
          'active': false,
          'id': '96c7e2fe-3dcd-47d8-bfb9-f67a9ac58f14',
          'name': 'frictionlessdata/project'
        },
        {
          'active': false,
          'id': 'f31021a8-0fb8-4b40-b23b-806aaa3a1274',
          'name': 'frictionlessdata/schemas'
        },
        {
          'active': false,
          'id': '29309268-a463-4c81-9ada-92c97ad38cb4',
          'name': 'frictionlessdata/specs'
        },
        {
          'active': false,
          'id': 'a8b0bbe4-2c8b-427e-bed1-7c355115f1e6',
          'name': 'frictionlessdata/stack'
        },
        {
          'active': false,
          'id': 'ffa0fd77-1fc2-41d5-958f-e15de3667398',
          'name': 'frictionlessdata/tabulator-py'
        },
        {
          'active': false,
          'id': '28ca3392-b5e5-4dde-897a-fd3a3bf2a805',
          'name': 'frictionlessdata/testsuite-py'
        },
        {
          'active': false,
          'id': '496794ec-9be9-4281-80db-5e9b5906ad18',
          'name': 'frictionlessdata/toolfund'
        }
      ]
    }
  }
}
</script>

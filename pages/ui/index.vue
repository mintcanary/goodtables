<template>
  <div>
    <h2><code>.btn</code></h2>

    <!-- Standard button -->
    <button type="button" class="btn btn-default">Default</button>

    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <button type="button" class="btn btn-primary">Primary</button>

    <!-- Indicates a successful or positive action -->
    <button type="button" class="btn btn-success">Success</button>

    <!-- Contextual button for informational alert messages -->
    <button type="button" class="btn btn-info">Info</button>

    <!-- Indicates caution should be taken with this action -->
    <button type="button" class="btn btn-warning">Warning</button>

    <!-- Indicates a dangerous or potentially negative action -->
    <button type="button" class="btn btn-danger">Danger</button>

    <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
    <button type="button" class="btn btn-link">Link</button>

    <hr />


    <h2><code>.goodtables-ui-report</code></h2>
    <report :report_data="report"></report>
    <router-link to="/ui/report" class="btn btn-primary">
      More
    </router-link>
    <hr />
  </div>
</template>

<style lang="scss">
  .container {
    overflow: hidden;
  }
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 40px;
  }
  .btn {
    margin-right: 10px;
  }
</style>

<script>
  import Report from '~/components/report.vue'

  export default {
    components: {
      Report
    },
    head () {
      return {
        title: `Goodtables UI`
      }
    },
    layout: 'container',
    data () {
      return {
        report: [
          {
            'number': 1,
            'path': 'github/okfn/test-data/master/',
            'name': 'some-file.csv',
            'pass': false,
            'errors': [
              {
                'count': '1',
                'name': 'Missing Header',
                'table': {
                  'rows': [
                    {
                      'line': 1,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'id',
                          'status': 'pass'
                        },
                        {
                          'label': 'name',
                          'status': 'before-fail'
                        },
                        {
                          'label': '',
                          'status': 'fail'
                        },
                        {
                          'label': 'name',
                          'status': 'after-fail'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': '1',
                          'status': 'pass'
                        },
                        {
                          'label': 'english',
                          'status': 'pass'
                        },
                        {
                          'label': '',
                          'status': 'pass'
                        },
                        {
                          'label': '',
                          'status': 'pass'
                        }
                      ]
                    }
                  ]
                }
              }
            ],
            'passes': [
              {
                'name': 'No blank headers'
              },
              {
                'name': 'No missing values'
              }
            ]
          }
        ]
      }
    }
  }
</script>

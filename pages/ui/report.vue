<template>
  <div>

    <h1><code>.goodtables-ui-report</code></h1>
    <report :report_data="report"></report>

  </div>
</template>

<script>
  import Report from '~/components/report.vue'

  export default {
    components: {
      Report
    },
    head () {
      return {
        title: `.goodtables-ui-report`
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
              },
              {
                'count': '1',
                'name': 'Duplicate Header',
                'table': {
                  'rows': [
                    {
                      'line': 1,
                      'status': 'has-fails',
                      'cells': [
                        {
                          'label': 'id',
                          'status': 'before-fail'
                        },
                        {
                          'label': 'name',
                          'status': 'fail'
                        },
                        {
                          'label': '',
                          'status': 'after-fail'
                        },
                        {
                          'label': 'name',
                          'status': 'fail'
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
              },
              {
                'count': '72',
                'name': 'Defective Row',
                'table': {
                  'rows': [
                    {
                      'line': 1,
                      'status': 'before-fail',
                      'cells': [
                        {
                          'label': 'id',
                          'status': 'pass'
                        },
                        {
                          'label': 'name',
                          'status': 'pass'
                        },
                        {
                          'label': '',
                          'status': 'pass'
                        },
                        {
                          'label': 'name',
                          'status': 'pass'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': '1',
                          'status': 'pass'
                        },
                        {
                          'label': 'english',
                          'status': 'pass'
                        }
                      ]
                    },
                    {
                      'line': 3,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': '1',
                          'status': 'pass'
                        },
                        {
                          'label': 'english',
                          'status': 'pass'
                        }
                      ]
                    },
                    {
                      'line': 4,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': '1',
                          'status': 'pass'
                        },
                        {
                          'label': 'german',
                          'status': 'pass'
                        },
                        {
                          'label': '1',
                          'status': 'pass'
                        },
                        {
                          'label': '2',
                          'status': 'pass'
                        },
                        {
                          'label': '3',
                          'status': 'pass'
                        }
                      ]
                    },
                    {
                      'line': 5,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': '',
                          'status': 'pass'
                        },
                        {
                          'label': '',
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
              },
              {
                'count': '1',
                'name': 'Duplicate Row',
                'table': {
                  'rows': [
                    {
                      'line': 1,
                      'status': 'before-fail',
                      'cells': [
                        {
                          'label': 'id',
                          'status': 'pass'
                        },
                        {
                          'label': 'name',
                          'status': 'pass'
                        },
                        {
                          'label': '',
                          'status': 'pass'
                        },
                        {
                          'label': 'name',
                          'status': 'pass'
                        }
                      ]
                    },
                    {
                      'line': 3,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': '1',
                          'status': 'pass'
                        },
                        {
                          'label': 'english',
                          'status': 'pass'
                        }
                      ]
                    },
                    {
                      'line': 4,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': '1',
                          'status': 'pass'
                        },
                        {
                          'label': 'german',
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
          },
          {
            'number': 2,
            'path': 'github/okfn/test-data/master/',
            'name': 'another-file.csv',
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
                'name': 'No duplicate headers'
              },
              {
                'name': 'No missing values'
              },
              {
                'name': 'No duplicate rows'
              },
              {
                'name': 'No defective rows'
              }
            ]
          },
          {
            'number': 3,
            'path': 'github/okfn/test-data/master/',
            'name': 'a-third-file.csv',
            'pass': true,
            'passes': [
              {
                'name': 'No blank headers'
              },
              {
                'name': 'No duplicate headers'
              },
              {
                'name': 'No missing headers'
              },
              {
                'name': 'No missing values'
              },
              {
                'name': 'No duplicate rows'
              },
              {
                'name': 'No defective rows'
              }
            ]
          }
        ]
      }
    }
  }
</script>

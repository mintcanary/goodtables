<template>
  <div :class="sideView">
    <div class="primary-secondary source-view">
      <a class="integration icon-github"></a>
      <h1>okfn/test-data</h1>
      <div>
        <section class="main report">

          <div class="latest-job">
            <div class="icon">
              <span class="label label-danger"><span class="icon-cross"><i>Invalid</i></span></span>
            </div>
            <div class="status invalid">
              <h2>
                Validation failed
                <small>Pushed by amercader on master branch</small>
              </h2>
            </div>
            <div class="meta">
              <ul>
                <li>
                  8 days ago
                </li>
                <li>
                  #2928dd
                </li>
              </ul>
            </div>

          </div>

          <report :report_data="report"></report>
          <a v-on:click="sideView = 'default-side-view'" class="expand-view left">Expand sidebar</a>
        </section>
        <section class="history aside">
          <div>
            <a v-on:click="sideView = 'collapsed-side-view'" class="collapse-view right">Collapse sidebar</a>
            <h3 class="aside-title"><span class="icon-clock"></span><span class="text">Job history</span></h3>
            <div class="source-item">
              <div class="panel panel-info">
                <div class="github">
                  <span class="source">
                    <a class="avatar">
                      <img src="~static/avatar/48.png" alt="" />
                    </a>
                    <h3 class="panel-title">Job restarted</h3>
                  </span>
                  <a class="job">
                    <span class="jobcount"><span class="jobnumber"> #2928dd</span></span>
                    <span class="label label-info"><span class="icon-dots-three-horizontal"><i>Info</i></span></span>
                    <span class="time"> A minute ago</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="source-item">
              <div class="panel panel-success">
                <div class="github">
                  <span class="source">
                    <a class="avatar">
                      <img src="https://avatars1.githubusercontent.com/u/557395?s=48" alt="" />
                    </a>
                    <h3 class="panel-title">Pushed on master</h3>
                  </span>
                  <a class="job">
                    <span class="jobcount"><span class="jobnumber"> #2928dd</span></span>
                    <span class="label label-success"><span class="icon-checkmark"><i>Valid</i></span></span>
                    <span class="time"> 7 minutes ago</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="source-item">
              <div class="panel panel-danger">
                <div class="github">
                  <span class="source">
                    <a class="avatar">
                      <img src="https://avatars1.githubusercontent.com/u/200230?s=48" alt="" />
                    </a>
                    <h3 class="panel-title">Pushed on master</h3>
                  </span>
                  <a class="job">
                    <span class="jobcount"><span class="jobnumber"> #2928dd</span></span>
                    <span class="label label-danger"><span class="icon-cross"><i>Invalid</i></span></span>
                    <span class="time"> 8 days ago</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>

  </div>
</template>

<script>
  import SourceItem from '~/components/source_list_item.vue'
  import Report from '~/components/report.vue'
  // import $ from 'jquery'

  export default {
    layout: 'app',
    components: {
      SourceItem,
      Report
    },
    head () {
      return {
        title: `Goodtables Report`
      }
    },
    data () {
      return {
        sideView: 'default-side-view',
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
                          'label': 'id'
                        },
                        {
                          'label': 'name'
                        },
                        {
                          'label': '',
                          'status': 'fail'
                        },
                        {
                          'label': 'name'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': ''
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': ''
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
                          'label': 'id'
                        },
                        {
                          'label': 'name',
                          'status': 'fail'
                        },
                        {
                          'label': ''
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
                          'label': ''
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': ''
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
                          'label': 'id'
                        },
                        {
                          'label': 'name'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'name'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': '1'
                        },
                        {
                          'label': 'english'
                        }
                      ]
                    },
                    {
                      'line': 3,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': '1'
                        },
                        {
                          'label': 'english'
                        }
                      ]
                    },
                    {
                      'line': 4,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': '1'
                        },
                        {
                          'label': 'german'
                        },
                        {
                          'label': '1'
                        },
                        {
                          'label': '2'
                        },
                        {
                          'label': '3'
                        }
                      ]
                    },
                    {
                      'line': 5,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': ''
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': ''
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
                          'label': 'id'
                        },
                        {
                          'label': 'name'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'name'
                        }
                      ]
                    },
                    {
                      'line': 3,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': '1'
                        },
                        {
                          'label': 'english'
                        }
                      ]
                    },
                    {
                      'line': 4,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': ''
                        },
                        {
                          'label': ''
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
                          'label': 'id'
                        },
                        {
                          'label': 'name'
                        },
                        {
                          'label': '',
                          'status': 'fail'
                        },
                        {
                          'label': 'name'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': ''
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': ''
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
    },
    mounted: () => {
      /* TODO debug - doesn't work correctly at some windows heights
      function stickyHeading () {
        // TODO: Needs offset for subsequent headings, once a sticky heading is active
        $('.file-heading').each(function () {
          var windowTop = $(window).scrollTop()
          var divTop = $(this).offset().top
          if (windowTop > divTop) {
            $('.file-heading span').removeClass('stick')
            $('.file-heading span').width('100%')
            $(this).children('span').addClass('stick')
            $(this).children('span').width($(this).parents('.report').outerWidth())
          } else {
            $(this).children('span').removeClass('stick').width('100%')
          }
        })
      }
      $(function () {
        $(window).scroll(stickyHeading)
      })
      */
    }
  }
</script>

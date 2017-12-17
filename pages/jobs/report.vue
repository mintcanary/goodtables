<template>
  <div :class="sideView">
    <div class="primary-secondary source-view">
      <a class="integration icon-github"></a>
      <h1>okfn/test-data</h1>
      <div>
        <section class="main invalid report">
          <div class="inner">
            <div class="latest-job">
              <div class="icon">
                <span class="label label-danger"><span class="icon-cross"><i>Invalid</i></span></span>
              </div>
              <div class="status">
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
                    Job #2928dd
                  </li>
                </ul>
              </div>

            </div>

            <report :report_data="report"></report>
            <a v-on:click="sideView = 'default-side-view'" class="expand-view left">Expand sidebar</a>
          </div>

        </section>
        <section class="history aside">
          <div class="inner">
            <div>
              <div v-bar>
                <div>
                  <a v-on:click="sideView = 'collapsed-side-view'" class="collapse-view right">Collapse sidebar</a>
                  <h3 class="aside-title"><span class="text">Job history</span></h3>
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

                  <div class="source-item active">
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
  import $ from 'jquery'

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
                'name': 'Missing Header',
                'messages': [
                  'Missing header in row 1, column 3'
                ],
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
                'name': 'Duplicate Header',
                'messages': [
                  'Column 2 is a duplicate of column 4'
                ],
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
                'name': 'Defective Row',
                'messages': [
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message',
                  'Message'
                ],
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
                'name': 'Duplicate Row',
                'messages': [
                  'Row 3 is a duplicate of row 2'
                ],
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
                'name': 'Missing Header',
                'messages': [
                  'Missing header in row 1, column 3'
                ],
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
      function stickyHeading () {
        $('.file-heading').each(function () {
          var windowTop = $(window).scrollTop()
          var divTop = $(this).offset().top
          if (windowTop > (divTop - 30)) {
            $('.file-heading .inner').removeClass('stick')
            $('.file-heading .inner').width('100%')
            $(this).children('.inner').addClass('stick')
            $(this).children('.inner').width($(this).parents('.report .inner').outerWidth() - 45)
          } else {
            $(this).children('.inner').removeClass('stick').width('100%')
          }
        })
      }
      $(function () {
        $(window).scroll(stickyHeading)
      })
    }
  }
</script>

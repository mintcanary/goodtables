<template>
  <div>
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

          <report></report>

        </section>
        <section class="history aside">
          <div>
            <h3 class="aside-title">Job history</h3>
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

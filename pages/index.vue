<template>
  <div class="inner">
    <figure class="screenshot">
      <img src="~~/static/screenshot.png" alt="" />
    </figure>

    <h2>Continuous data validation for spreadsheets</h2>

    <div class="features">
      <figure>
        <img src="~~/static/screenshot-details/1.png" alt="" />
        <figcaption>
          Monitor files in multiple formats, including CSV, Excel, LibreOffice, and <a href="http://docs.goodtables.io/" rel="external">more</a>.
        </figcaption>
      </figure>
      <figure>
        <img src="~~/static/screenshot-details/2.png" alt="" />
        <figcaption>
          Checks the data structure and contents of your tables for potential issues.
        </figcaption>
      </figure>
      <figure>
        <img src="~~/static/screenshot-details/3.png" alt="" />
        <figcaption>
          See errors in familiar context, so they can be easily isolated and resolved.
        </figcaption>
      </figure>
      <figure>
        <img src="~~/static/screenshot-details/4.png" alt="" />
        <figcaption>
          Automatically validate on every change, helping you to keep your data error free.
        </figcaption>
      </figure>
    </div>

    <div class="info">
      <div class="item">
        <div class="inner">
          <h3>What does it cost?</h3>
          <p>
            It's free! While the basic service of goodtables.io will always remain free, there will be additional features for paid plans in the future.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="inner">
          <h3>How easy is it to set up?</h3>
          <p>
            If your data is hosted on GitHub, you'll be up and running in a few clicks. We also have an <a href="http://docs.goodtables.io/" rel="external">option for technical users</a> to monitor data from Amazon S3.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="inner">
          <h3>Is it private and secure?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis ut ante id fermentum. Mauris sagittis, tellus quis condimentum finibus.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    layout: 'landing',
    pageTitle: 'Have confidence in your data',
    pageTag: 'With continuous data validation, you’ll be the first to know if there’s a problem',
    ctaText: 'See how your data is doing',
    ctaSubText: 'Sign in with GitHub',
    ctaLink: '/dashboard'
  }
</script>

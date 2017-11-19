<template>
  <div class="result">
    <div>
      <span class="count">{{ count }} x</span>
      <a v-if="count === 1" class="label label-error collapsed" role="button" data-toggle="collapse" v-bind:href="'#errorDetails'+ filenumber + '_' + errornumber" aria-expanded="false" v-bind:aria-controls="'errorDetails'+ filenumber + '_'  + errornumber">{{ title }}</a>
      <a v-else class="label label-error collapsed" role="button" data-toggle="collapse" v-bind:href="'#errorDetails'+ filenumber + '_'  + errornumber" aria-expanded="false" v-bind:aria-controls="'errorDetails'+ filenumber + '_'  + errornumber">{{ title }}s</a>
    </div>
    <div class="collapse" v-bind:id="'errorDetails'+ filenumber + '_'  + errornumber">
      <div class="error-details">
        <div v-if="description" class="error-description">
          {{ description }}
        </div>
        <div v-else-if="title === 'Non-Matching Header'" class="error-description">
          <p>One of the data source headers doesn't match the field name defined in the schema.</p>
          <p>How it could be resolved:</p>
          <ul>
            <li>Rename header in the data source or field in the schema</li>
            <li>If this error should be ignored disable <code>non-matching-header</code> check in <code>goodtables.yml</code>.
            </li>
          </ul>
        </div>
        <div v-else-if="title === 'Extra Header'" class="error-description">
          <p>The first row of the data source contains header that doesn't exist in the schema.</p>
          <p>How it could be resolved:</p>
          <ul>
            <li>Remove the extra column from the data source or add the missing field to the schema</li>
            <li>If this error should be ignored disable <code>extra-header</code> check in <code>goodtables.yml</code>.</li>
          </ul>
        </div>
        <div v-else-if="title === 'Type or Format Error'" class="error-description">
          <p>The value does not match the schema type and format for this field.</p>
          <p>How it could be resolved:</p>
          <ul>
            <li>If this value is not correct, update the value.</li>
            <li>If this value is correct, adjust the type and/or format.</li>
            <li>To ignore the error, disable the <code>type-or-format-error</code> check in <code>goodtables.yml</code>. In this case all schema checks for row values will be ignored.</li>
          </ul>
        </div>
        <div class="error-list">
          <p class="error-list-heading">
            The full list of error messages:
          </p>
          <ul>
            <li v-for="m of messages">
              {{ m }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="table-view">
      <div class="inner">
        <slot></slot>
      </div>
    </div>
    <a v-if="count > '10'" class="show-more">Show more <span class="icon-keyboard_arrow_down"></span></a>
  </div>
</template>

<script>
  export default {
    props: ['title', 'count', 'description', 'type', 'messages', 'filenumber', 'errornumber']
  }
</script>

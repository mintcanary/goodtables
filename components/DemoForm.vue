<template>
  <div id="form">
    <form>
      <fieldset>
        <div>
          <label for="source">Source</label>

          <div class="radio-inline">
            <input type="radio" name="data-field" id="data-field-1" class="data-field-url" value="option1" checked="">
            <label for="data-field-1">
              URL
            </label>
          </div>
          <div class="radio-inline">
            or
          </div>
          <div class="radio-inline">
            <input type="radio" name="data-field" id="data-field-2" class="data-field-file" value="option2">
            <label for="data-field-2">
              File
            </label>
          </div>

          <strong>(Required)</strong>

          <input name="source" class="form-control input-lg" type="text" placeholder="http://data.source/url">
          <input name="source" class="form-control input-lg hidden" type="file" placeholder="http://data.source/url">

          <small>Add a data table to validate.</small>

        </div>
      </fieldset>
      <fieldset>
        <div class="row-schema">
          <div class="row">
            <div class="form-group col-md-8">
              <label for="schema">Schema</label>

              <div class="radio-inline">
                <input type="radio" name="schema-field" id="schema-field-1" class="schema-field-url" value="option1" checked="">
                <label for="schema-field-1">
                  URL
                </label>
              </div>
              <div class="radio-inline">
                <input type="radio" name="schema-field" id="schema-field-2" class="schema-field-file" value="option2">
                <label for="schema-field-2">
                  File
                </label>
              </div>

               (Optional)

              <input type="text" class="form-control" name="schema" placeholder="http://table.schema/url">
              <input type="file" class="form-control hidden" name="schema" placeholder="http://table.schema/url">

              <small>
                Select to validate this data against a Table Schema (<a href="http://specs.frictionlessdata.io/table-schema/" target="_blank" rel="noopener noreferrer">What is it?</a>).
              </small>

            </div>
            <div class="form-group col-md-2">
              <div class="form-group">
                <label for="format">Format</label>
                <select name="format" class="form-control">
                  <option value="">Auto</option>
                  <option value="csv">CSV</option>
                  <option value="gsheet">Google Sheet</option>
                  <option value="json">JSON</option>
                  <option value="ndjson">NDJSON</option>
                  <option value="ods">ODS</option>
                  <option value="tsv">TSV</option>
                  <option value="xls">XLS</option>
                  <option value="xlsx">XLSX</option>
                </select>
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="encoding">Encoding</label>
                <select name="encoding" class="form-control">
                  <option value="">Auto</option>
                  <option value="utf-8">UTF-8</option>
                  <option value="ascii">ASCII</option>
                  <option value="iso-8859-2">ISO-8859-2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row-flags">
          <div class="row">
            <div class="col-md-4">
              <div class="checkbox">
                <label for="errorLimit">
                  <input name="errorLimit" type="checkbox">Stop on first error
                </label>
              </div>
              <small>Indicate whether validation should stop on the first error, or attempt to collect all errors.</small>
            </div>
            <div class="col-md-4">
              <div class="checkbox">
                <label for="ignoreBlankRows">
                  <input name="ignoreBlankRows" type="checkbox">Ignore blank rows
                </label>
              </div>
              <small>Indicate whether blank rows should be considered as errors, or simply ignored.</small>
            </div>
            <div class="col-md-4">
              <div class="checkbox">
                <label for="ignoreDuplicateRows">
                  <input name="ignoreDuplicateRows" type="checkbox">Ignore duplicate rows
                </label>
              </div>
              <small>Indicate whether duplicate rows should be considered as errors, or simply ignored.</small>
            </div>
          </div>
        </div>

      </fieldset>

      <div class="input-group-btn" style="width: 1%;">
        <button class="btn btn-success">Validate</button>
      </div>

    </form>
  </div>
</template>

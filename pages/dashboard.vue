<template>
  <div class="dashboard">
    <section class="actions">
      <h1>Action required</h1>

      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingOne">
            <span class="label label-danger"><span class="icon-cross"><i>Invalid</i></span></span>
            <h3 class="panel-title">
              okfn/test-data
              <small>1 day ago (2928dd)</small>
            </h3>
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <span class="icon-keyboard_arrow_down"><i>Toggle details</i></span>
            </a>
            <span class="count label label-danger">74</span>
          </div>
          <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
              <ul class="dash-files">
                <dash-file name="some-file.csv" count="73">
                  <div class="report-thumb">
                    <table class="table">
                      <tbody>
                        <tr class="row-pass">
                          <td class="result-row-index">1</td>
                          <td>file</td>
                          <td>year</td>
                          <td>manufacturer</td>
                          <td>model</td>
                          <td>description</td>
                          <td>euro_standard</td>
                          <td>tax_band</td>
                          <td>transmission</td>
                          <td>transmission_type</td>
                          <td>engine_capacity</td>
                          <td>fuel_type</td>
                          <td>urban_metric</td>
                          <td>extra_urban_metric</td>
                          <td>combined_metric</td>
                          <td>urban_imperial</td>
                          <td>extra_urban_imperial</td>
                          <td>combined_imperial</td>
                          <td>noise_level</td>
                          <td>co2</td>
                          <td>thc_emissions</td>
                          <td>co_emissions</td>
                          <td>nox_emissions</td>
                          <td>thc_nox_emissions</td>
                          <td>particulates_emissions</td>
                          <td>fuel_cost_12000_miles</td>
                          <td>fuel_cost_6000_miles</td>
                          <td>standard_12_months</td>
                          <td>standard_6_months</td>
                          <td>first_year_12_months</td>
                          <td>first_year_6_months</td>
                          <td>date_of_change</td>
                        </tr>
                        <tr class="row-before-fail">
                          <td class="result-row-index">2</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="fail">
                          <td class="result-row-index">3</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="row-after-fail">
                          <td class="result-row-index">4</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </dash-file>
                <dash-file name="another-file.csv" count="1">
                  <div class="report-thumb">
                    <table class="table">
                      <tbody>
                        <tr class="row-pass">
                          <td class="result-row-index">1</td>
                          <td>file</td>
                          <td>year</td>
                          <td>manufacturer</td>
                          <td>model</td>
                          <td>description</td>
                          <td>euro_standard</td>
                          <td>tax_band</td>
                          <td>transmission</td>
                          <td>transmission_type</td>
                          <td>engine_capacity</td>
                          <td>fuel_type</td>
                          <td>urban_metric</td>
                          <td>extra_urban_metric</td>
                          <td>combined_metric</td>
                          <td>urban_imperial</td>
                          <td>extra_urban_imperial</td>
                          <td>combined_imperial</td>
                          <td>noise_level</td>
                          <td>co2</td>
                          <td>thc_emissions</td>
                          <td>co_emissions</td>
                          <td>nox_emissions</td>
                          <td>thc_nox_emissions</td>
                          <td>particulates_emissions</td>
                          <td>fuel_cost_12000_miles</td>
                          <td>fuel_cost_6000_miles</td>
                          <td>standard_12_months</td>
                          <td>standard_6_months</td>
                          <td>first_year_12_months</td>
                          <td>first_year_6_months</td>
                          <td>date_of_change</td>
                        </tr>
                        <tr class="row-before-fail">
                          <td class="result-row-index">2</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="fail">
                          <td class="result-row-index">3</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="row-after-fail">
                          <td class="result-row-index">4</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </dash-file>
              </ul>
              <router-link to="/jobs/report" class="btn btn-default">See full report</router-link>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingTwo">
            <span class="label label-danger"><span class="icon-cross"><i>Invalid</i></span></span>
            <h3 class="panel-title">
              okfn/more-data
              <small>2 days ago (2928dd)</small>
            </h3>
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <span class="icon-keyboard_arrow_down"><i>Toggle details</i></span>
            </a>
            <span class="count label label-danger">14</span>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">
              <ul class="dash-files">
                <dash-file name="some-file.csv" count="3">
                  <div class="report-thumb">
                    <table class="table">
                      <tbody>
                        <tr class="row-pass">
                          <td class="result-row-index">1</td>
                          <td>file</td>
                          <td>year</td>
                          <td>manufacturer</td>
                          <td>model</td>
                          <td>description</td>
                          <td>euro_standard</td>
                          <td>tax_band</td>
                          <td>transmission</td>
                          <td>transmission_type</td>
                          <td>engine_capacity</td>
                          <td>fuel_type</td>
                          <td>urban_metric</td>
                          <td>extra_urban_metric</td>
                          <td>combined_metric</td>
                          <td>urban_imperial</td>
                          <td>extra_urban_imperial</td>
                          <td>combined_imperial</td>
                          <td>noise_level</td>
                          <td>co2</td>
                          <td>thc_emissions</td>
                          <td>co_emissions</td>
                          <td>nox_emissions</td>
                          <td>thc_nox_emissions</td>
                          <td>particulates_emissions</td>
                          <td>fuel_cost_12000_miles</td>
                          <td>fuel_cost_6000_miles</td>
                          <td>standard_12_months</td>
                          <td>standard_6_months</td>
                          <td>first_year_12_months</td>
                          <td>first_year_6_months</td>
                          <td>date_of_change</td>
                        </tr>
                        <tr class="row-before-fail">
                          <td class="result-row-index">2</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="fail">
                          <td class="result-row-index">3</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="row-after-fail">
                          <td class="result-row-index">4</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </dash-file>
                <dash-file name="another-file.csv" count="4">
                  <div class="report-thumb">
                    <table class="table">
                      <tbody>
                        <tr class="row-pass">
                          <td class="result-row-index">1</td>
                          <td>file</td>
                          <td>year</td>
                          <td>manufacturer</td>
                          <td>model</td>
                          <td>description</td>
                          <td>euro_standard</td>
                          <td>tax_band</td>
                          <td>transmission</td>
                          <td>transmission_type</td>
                          <td>engine_capacity</td>
                          <td>fuel_type</td>
                          <td>urban_metric</td>
                          <td>extra_urban_metric</td>
                          <td>combined_metric</td>
                          <td>urban_imperial</td>
                          <td>extra_urban_imperial</td>
                          <td>combined_imperial</td>
                          <td>noise_level</td>
                          <td>co2</td>
                          <td>thc_emissions</td>
                          <td>co_emissions</td>
                          <td>nox_emissions</td>
                          <td>thc_nox_emissions</td>
                          <td>particulates_emissions</td>
                          <td>fuel_cost_12000_miles</td>
                          <td>fuel_cost_6000_miles</td>
                          <td>standard_12_months</td>
                          <td>standard_6_months</td>
                          <td>first_year_12_months</td>
                          <td>first_year_6_months</td>
                          <td>date_of_change</td>
                        </tr>
                        <tr class="row-before-fail">
                          <td class="result-row-index">2</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="fail">
                          <td class="result-row-index">3</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="row-after-fail">
                          <td class="result-row-index">4</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </dash-file>
                <dash-file name="some-file.csv" count="5">
                  <div class="report-thumb">
                    <table class="table">
                      <tbody>
                        <tr class="row-pass">
                          <td class="result-row-index">1</td>
                          <td>file</td>
                          <td>year</td>
                          <td>manufacturer</td>
                          <td>model</td>
                          <td>description</td>
                          <td>euro_standard</td>
                          <td>tax_band</td>
                          <td>transmission</td>
                          <td>transmission_type</td>
                          <td>engine_capacity</td>
                          <td>fuel_type</td>
                          <td>urban_metric</td>
                          <td>extra_urban_metric</td>
                          <td>combined_metric</td>
                          <td>urban_imperial</td>
                          <td>extra_urban_imperial</td>
                          <td>combined_imperial</td>
                          <td>noise_level</td>
                          <td>co2</td>
                          <td>thc_emissions</td>
                          <td>co_emissions</td>
                          <td>nox_emissions</td>
                          <td>thc_nox_emissions</td>
                          <td>particulates_emissions</td>
                          <td>fuel_cost_12000_miles</td>
                          <td>fuel_cost_6000_miles</td>
                          <td>standard_12_months</td>
                          <td>standard_6_months</td>
                          <td>first_year_12_months</td>
                          <td>first_year_6_months</td>
                          <td>date_of_change</td>
                        </tr>
                        <tr class="row-before-fail">
                          <td class="result-row-index">2</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="fail">
                          <td class="result-row-index">3</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="row-after-fail">
                          <td class="result-row-index">4</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </dash-file>
                <dash-file name="another-file.csv" count="3">
                  <div class="report-thumb">
                    <table class="table">
                      <tbody>
                        <tr class="row-pass">
                          <td class="result-row-index">1</td>
                          <td>file</td>
                          <td>year</td>
                          <td>manufacturer</td>
                          <td>model</td>
                          <td>description</td>
                          <td>euro_standard</td>
                          <td>tax_band</td>
                          <td>transmission</td>
                          <td>transmission_type</td>
                          <td>engine_capacity</td>
                          <td>fuel_type</td>
                          <td>urban_metric</td>
                          <td>extra_urban_metric</td>
                          <td>combined_metric</td>
                          <td>urban_imperial</td>
                          <td>extra_urban_imperial</td>
                          <td>combined_imperial</td>
                          <td>noise_level</td>
                          <td>co2</td>
                          <td>thc_emissions</td>
                          <td>co_emissions</td>
                          <td>nox_emissions</td>
                          <td>thc_nox_emissions</td>
                          <td>particulates_emissions</td>
                          <td>fuel_cost_12000_miles</td>
                          <td>fuel_cost_6000_miles</td>
                          <td>standard_12_months</td>
                          <td>standard_6_months</td>
                          <td>first_year_12_months</td>
                          <td>first_year_6_months</td>
                          <td>date_of_change</td>
                        </tr>
                        <tr class="row-before-fail">
                          <td class="result-row-index">2</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="fail">
                          <td class="result-row-index">3</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr class="row-after-fail">
                          <td class="result-row-index">4</td>
                          <td>DatapartC_july2000.csv</td>
                          <td>2000</td>
                          <td>Alfa Romeo</td>
                          <td>145</td>
                          <td>Range</td>
                          <td>1.6</td>
                          <td>Twin Spark</td>
                          <td>16v</td>
                          <td>2</td>
                          <td></td>
                          <td>M5</td>
                          <td>Manual</td>
                          <td>1598</td>
                          <td>Petrol</td>
                          <td>11.1</td>
                          <td>6.5</td>
                          <td>8.2</td>
                          <td>25.4</td>
                          <td>43.5</td>
                          <td>34.4</td>
                          <td>74</td>
                          <td>195</td>
                          <td></td>
                          <td>980</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>618</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </dash-file>
              </ul>
              <router-link to="/jobs/report" class="btn btn-default">See full report</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="jobs">
      <div class="inner">
        <div>
          <div v-bar>
            <div>
              <h1>Jobs</h1>
              <div class="source-list">
                <source-item title="okfn/my-data" integration="github" jobnumber="77" jobid="2928dd" status="valid" time="7 minutes ago"/>
                <source-item title="okfn/some-data" integration="aws" jobnumber="2" jobid="2928dd"  status="valid" time="20 minutes ago"/>
                <source-item title="okfn/test-data" integration="github" jobnumber="8" jobid="2928dd"  status="invalid" time="1 day ago"/>
                <source-item title="okfn/more-data" integration="aws" jobnumber="1" jobid="2928dd"  status="invalid" time="2 days ago"/>
                <source-item title="okfn/my-data" integration="github" jobnumber="77" jobid="2928dd" status="valid" time="7 minutes ago"/>
                <source-item title="okfn/some-data" integration="aws" jobnumber="2" jobid="2928dd"  status="valid" time="20 minutes ago"/>
                <source-item title="okfn/test-data" integration="github" jobnumber="8" jobid="2928dd"  status="invalid" time="1 day ago"/>
                <source-item title="okfn/more-data" integration="aws" jobnumber="1" jobid="2928dd"  status="invalid" time="2 days ago"/>
                <source-item title="okfn/my-data" integration="github" jobnumber="77" jobid="2928dd" status="valid" time="7 minutes ago"/>
                <source-item title="okfn/some-data" integration="aws" jobnumber="2" jobid="2928dd"  status="valid" time="20 minutes ago"/>
                <source-item title="okfn/test-data" integration="github" jobnumber="8" jobid="2928dd"  status="invalid" time="1 day ago"/>
                <source-item title="okfn/more-data" integration="aws" jobnumber="1" jobid="2928dd"  status="invalid" time="2 days ago"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SourceItem from '~/components/source_list_item.vue'
  import DashFile from '~/components/dash_file.vue'

  export default {
    layout: 'app',
    components: {
      SourceItem,
      DashFile
    },
    head () {
      return {
        title: `Goodtables Dashboard`
      }
    }
  }
</script>

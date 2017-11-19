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
                'name': 'Duplicate Row',
                'messages': [
                  'Row 4 is a duplicate of row 3',
                  'Row 7 is a duplicate of row 6'
                ],
                'table': {
                  'rows': [
                    {
                      'line': 1,
                      'status': 'row-pass',
                      'cells': [
                        {
                          'label': 'file'
                        },
                        {
                          'label': 'year'
                        },
                        {
                          'label': 'manufacturer'
                        },
                        {
                          'label': 'model'
                        },
                        {
                          'label': 'description'
                        },
                        {
                          'label': 'euro_standard'
                        },
                        {
                          'label': 'tax_band'
                        },
                        {
                          'label': 'transmission'
                        },
                        {
                          'label': 'transmission_type'
                        },
                        {
                          'label': 'engine_capacity'
                        },
                        {
                          'label': 'fuel_type'
                        },
                        {
                          'label': 'urban_metric'
                        },
                        {
                          'label': 'extra_urban_metric'
                        },
                        {
                          'label': 'combined_metric'
                        },
                        {
                          'label': 'urban_imperial'
                        },
                        {
                          'label': 'extra_urban_imperial'
                        },
                        {
                          'label': 'combined_imperial'
                        },
                        {
                          'label': 'noise_level'
                        },
                        {
                          'label': 'co2'
                        },
                        {
                          'label': 'thc_emissions'
                        },
                        {
                          'label': 'co_emissions'
                        },
                        {
                          'label': 'nox_emissions'
                        },
                        {
                          'label': 'thc_nox_emissions'
                        },
                        {
                          'label': 'particulates_emissions'
                        },
                        {
                          'label': 'fuel_cost_12000_miles'
                        },
                        {
                          'label': 'fuel_cost_6000_miles'
                        },
                        {
                          'label': 'standard_12_months'
                        },
                        {
                          'label': 'standard_6_months'
                        },
                        {
                          'label': 'first_year_12_months'
                        },
                        {
                          'label': 'first_year_6_months'
                        },
                        {
                          'label': 'date_of_change'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'row-before-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv'
                        },
                        {
                          'label': '2000'
                        },
                        {
                          'label': 'Alfa Romeo'
                        },
                        {
                          'label': '145'
                        },
                        {
                          'label': 'Range'
                        },
                        {
                          'label': '1.6'
                        },
                        {
                          'label': 'Twin Spark'
                        },
                        {
                          'label': '16v'
                        },
                        {
                          'label': '2'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'M5'
                        },
                        {
                          'label': 'Manual'
                        },
                        {
                          'label': '1598'
                        },
                        {
                          'label': 'Petrol'
                        },
                        {
                          'label': '11.1'
                        },
                        {
                          'label': '6.5'
                        },
                        {
                          'label': '8.2'
                        },
                        {
                          'label': '25.4'
                        },
                        {
                          'label': '43.5'
                        },
                        {
                          'label': '34.4'
                        },
                        {
                          'label': '74'
                        },
                        {
                          'label': '195'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': '980'
                        },
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
                        },
                        {
                          'label': '618'
                        },
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
                    },
                    {
                      'line': 3,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv'
                        },
                        {
                          'label': '2000'
                        },
                        {
                          'label': 'Alfa Romeo'
                        },
                        {
                          'label': '145'
                        },
                        {
                          'label': 'Range'
                        },
                        {
                          'label': '1.6'
                        },
                        {
                          'label': 'Twin Spark'
                        },
                        {
                          'label': '16v'
                        },
                        {
                          'label': '2'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'M5'
                        },
                        {
                          'label': 'Manual'
                        },
                        {
                          'label': '1598'
                        },
                        {
                          'label': 'Petrol'
                        },
                        {
                          'label': '11.1'
                        },
                        {
                          'label': '6.5'
                        },
                        {
                          'label': '8.2'
                        },
                        {
                          'label': '25.4'
                        },
                        {
                          'label': '43.5'
                        },
                        {
                          'label': '34.4'
                        },
                        {
                          'label': '74'
                        },
                        {
                          'label': '195'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': '980'
                        },
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
                        },
                        {
                          'label': '618'
                        },
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
                    },
                    {
                      'line': 4,
                      'status': 'row-after-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv'
                        },
                        {
                          'label': '2000'
                        },
                        {
                          'label': 'Alfa Romeo'
                        },
                        {
                          'label': '145'
                        },
                        {
                          'label': 'Range'
                        },
                        {
                          'label': '1.6'
                        },
                        {
                          'label': 'Twin Spark'
                        },
                        {
                          'label': '16v'
                        },
                        {
                          'label': '2'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'M5'
                        },
                        {
                          'label': 'Manual'
                        },
                        {
                          'label': '1598'
                        },
                        {
                          'label': 'Petrol'
                        },
                        {
                          'label': '11.1'
                        },
                        {
                          'label': '6.5'
                        },
                        {
                          'label': '8.2'
                        },
                        {
                          'label': '25.4'
                        },
                        {
                          'label': '43.5'
                        },
                        {
                          'label': '34.4'
                        },
                        {
                          'label': '74'
                        },
                        {
                          'label': '195'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': '980'
                        },
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
                        },
                        {
                          'label': '618'
                        },
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
                    },
                    {
                      'line': 5,
                      'status': 'row-pass',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv'
                        },
                        {
                          'label': '2000'
                        },
                        {
                          'label': 'Alfa Romeo'
                        },
                        {
                          'label': '145'
                        },
                        {
                          'label': 'Range'
                        },
                        {
                          'label': '1.6'
                        },
                        {
                          'label': 'Twin Spark'
                        },
                        {
                          'label': '16v'
                        },
                        {
                          'label': '2'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'M5'
                        },
                        {
                          'label': 'Manual'
                        },
                        {
                          'label': '1598'
                        },
                        {
                          'label': 'Petrol'
                        },
                        {
                          'label': '11.1'
                        },
                        {
                          'label': '6.5'
                        },
                        {
                          'label': '8.2'
                        },
                        {
                          'label': '25.4'
                        },
                        {
                          'label': '43.5'
                        },
                        {
                          'label': '34.4'
                        },
                        {
                          'label': '74'
                        },
                        {
                          'label': '195'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': '980'
                        },
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
                        },
                        {
                          'label': '618'
                        },
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
                    },
                    {
                      'line': 6,
                      'status': 'row-before-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv'
                        },
                        {
                          'label': '2000'
                        },
                        {
                          'label': 'Alfa Romeo'
                        },
                        {
                          'label': '145'
                        },
                        {
                          'label': 'Range'
                        },
                        {
                          'label': '1.6'
                        },
                        {
                          'label': 'Twin Spark'
                        },
                        {
                          'label': '16v'
                        },
                        {
                          'label': '2'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'M5'
                        },
                        {
                          'label': 'Manual'
                        },
                        {
                          'label': '1598'
                        },
                        {
                          'label': 'Petrol'
                        },
                        {
                          'label': '11.1'
                        },
                        {
                          'label': '6.5'
                        },
                        {
                          'label': '8.2'
                        },
                        {
                          'label': '25.4'
                        },
                        {
                          'label': '43.5'
                        },
                        {
                          'label': '34.4'
                        },
                        {
                          'label': '74'
                        },
                        {
                          'label': '195'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': '980'
                        },
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
                        },
                        {
                          'label': '618'
                        },
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
                    },
                    {
                      'line': 7,
                      'status': 'fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv'
                        },
                        {
                          'label': '2000'
                        },
                        {
                          'label': 'Alfa Romeo'
                        },
                        {
                          'label': '145'
                        },
                        {
                          'label': 'Range'
                        },
                        {
                          'label': '1.6'
                        },
                        {
                          'label': 'Twin Spark'
                        },
                        {
                          'label': '16v'
                        },
                        {
                          'label': '2'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'M5'
                        },
                        {
                          'label': 'Manual'
                        },
                        {
                          'label': '1598'
                        },
                        {
                          'label': 'Petrol'
                        },
                        {
                          'label': '11.1'
                        },
                        {
                          'label': '6.5'
                        },
                        {
                          'label': '8.2'
                        },
                        {
                          'label': '25.4'
                        },
                        {
                          'label': '43.5'
                        },
                        {
                          'label': '34.4'
                        },
                        {
                          'label': '74'
                        },
                        {
                          'label': '195'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': '980'
                        },
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
                        },
                        {
                          'label': '618'
                        },
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
                    },
                    {
                      'line': 8,
                      'status': 'row-after-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv'
                        },
                        {
                          'label': '2000'
                        },
                        {
                          'label': 'Alfa Romeo'
                        },
                        {
                          'label': '145'
                        },
                        {
                          'label': 'Range'
                        },
                        {
                          'label': '1.6'
                        },
                        {
                          'label': 'Twin Spark'
                        },
                        {
                          'label': '16v'
                        },
                        {
                          'label': '2'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': 'M5'
                        },
                        {
                          'label': 'Manual'
                        },
                        {
                          'label': '1598'
                        },
                        {
                          'label': 'Petrol'
                        },
                        {
                          'label': '11.1'
                        },
                        {
                          'label': '6.5'
                        },
                        {
                          'label': '8.2'
                        },
                        {
                          'label': '25.4'
                        },
                        {
                          'label': '43.5'
                        },
                        {
                          'label': '34.4'
                        },
                        {
                          'label': '74'
                        },
                        {
                          'label': '195'
                        },
                        {
                          'label': ''
                        },
                        {
                          'label': '980'
                        },
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
                        },
                        {
                          'label': '618'
                        },
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
                'name': 'No missing values'
              }
            ]
          }
        ]
      }
    }
  }
</script>

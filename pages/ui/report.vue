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
            'path': 'https://github.com/amercader/car-fuel-and-emissions/raw/master/',
            'name': 'data.csv',
            'pass': false,
            'errors': [
              {
                'count': 4,
                'name': 'Non-Matching Header',
                'table': {
                  'rows': [
                    {
                      'line': 1,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'file',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'year',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'manufacturer',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'model',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'description',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'euro_standard',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'tax_band',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'transmission',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'transmission_type',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'engine_capacity',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'fuel_type',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'urban_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'extra_urban_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'combined_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'urban_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'extra_urban_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'combined_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'noise_level',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'co2',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'thc_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'co_emission',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'nox_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'thc_nox_emissions',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': 'particulates_emissions',
                          'status': 'fail'
                        },
                        {
                          'label': 'fuel_cost_12000_miles',
                          'status': 'fail'
                        },
                        {
                          'label': 'fuel_cost_6000_miles',
                          'status': 'fail'
                        },
                        {
                          'label': 'standard_12_months',
                          'status': 'fail'
                        },
                        {
                          'label': 'standard_6_months',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': 'first_year_12_months',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'first_year_6_months',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'date_of_change',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    }
                  ]
                }
              },
              {
                'count': 4,
                'name': 'Extra Header',
                'table': {
                  'rows': [
                    {
                      'line': 1,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'file',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'year',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'manufacturer',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'model',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'description',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'euro_standard',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'tax_band',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'transmission',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'transmission_type',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'engine_capacity',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'fuel_type',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'urban_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'extra_urban_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'combined_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'urban_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'extra_urban_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'combined_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'noise_level',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'co2',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'thc_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'co_emission',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'nox_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'thc_nox_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'particulates_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'fuel_cost_12000_miles',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'fuel_cost_6000_miles',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'standard_12_months',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': 'standard_6_months',
                          'status': 'fail'
                        },
                        {
                          'label': 'first_year_12_months',
                          'status': 'fail'
                        },
                        {
                          'label': 'first_year_6_months',
                          'status': 'fail'
                        },
                        {
                          'label': 'date_of_change',
                          'status': 'fail'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'after-fail',
                      'cells': [
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-fail'
                        },
                        {
                          'label': '',
                          'status': 'col-fail'
                        }
                      ]
                    }
                  ]
                }
              },
              {
                'count': 992,
                'name': 'Type or Format Error',
                'table': {
                  'rows': [
                    {
                      'line': 1,
                      'status': 'before-fail',
                      'cells': [
                        {
                          'label': 'file',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': 'year',
                          'status': 'col-fail'
                        },
                        {
                          'label': 'manufacturer',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': 'model',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'description',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'euro_standard',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'tax_band',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'transmission',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'transmission_type',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'engine_capacity',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'fuel_type',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'urban_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'extra_urban_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'combined_metric',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'urban_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'extra_urban_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'combined_imperial',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'noise_level',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'co2',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'thc_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'co_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'nox_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'thc_nox_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'particulates_emissions',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'fuel_cost_12000_miles',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'fuel_cost_6000_miles',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'standard_12_months',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'standard_6_months',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'first_year_12_months',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'first_year_6_months',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'date_of_change',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 2,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 3,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 4,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 5,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 6,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 7,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 8,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 9,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 10,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        }
                      ]
                    },
                    {
                      'line': 11,
                      'status': 'has-fail',
                      'cells': [
                        {
                          'label': 'DatapartC_july2000.csv',
                          'status': 'col-before-fail'
                        },
                        {
                          'label': '2000',
                          'status': 'fail'
                        },
                        {
                          'label': 'Alfa Romeo',
                          'status': 'col-after-fail'
                        },
                        {
                          'label': '145',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Range',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1.6',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Twin Spark',
                          'status': 'col-pass'
                        },
                        {
                          'label': '16v',
                          'status': 'col-pass'
                        },
                        {
                          'label': '2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'M5',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Manual',
                          'status': 'col-pass'
                        },
                        {
                          'label': '1598',
                          'status': 'col-pass'
                        },
                        {
                          'label': 'Petrol',
                          'status': 'col-pass'
                        },
                        {
                          'label': '11.1',
                          'status': 'col-pass'
                        },
                        {
                          'label': '6.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '8.2',
                          'status': 'col-pass'
                        },
                        {
                          'label': '25.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '43.5',
                          'status': 'col-pass'
                        },
                        {
                          'label': '34.4',
                          'status': 'col-pass'
                        },
                        {
                          'label': '74',
                          'status': 'col-pass'
                        },
                        {
                          'label': '195',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '980',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '618',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
                        },
                        {
                          'label': '',
                          'status': 'col-pass'
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

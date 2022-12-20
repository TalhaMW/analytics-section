import BarChart from '../../../../components/charts/Bar';
const variabledata = [
  {
    id: 1,
    variableHeading: 'Longitude',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 844 },
      { dataHeading: 'Distinct(%)', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
  {
    id: 2,
    variableHeading: 'Latitude',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 844 },
      { dataHeading: 'Distinct(%)', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
  {
    id: 3,
    variableHeading: 'housing_mediam_age',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 844 },
      { dataHeading: 'Distinct(%)', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
  {
    id: 4,
    variableHeading: 'total_rooms',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 844 },
      { dataHeading: 'Distinct(%)', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
  {
    id: 5,
    variableHeading: 'total_bedrooms',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 844 },
      { dataHeading: 'Distinct(%)', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
  {
    id: 6,
    variableHeading: 'Population',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 844 },
      { dataHeading: 'Distinct(%)', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
  {
    id: 7,
    variableHeading: 'households',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 844 },
      { dataHeading: 'Distinct(%)', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
  {
    id: 8,
    variableHeading: 'median_income',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 12928 },
      { dataHeading: 'Distinct(%)', value: '62.6%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: 3.5697 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
  {
    id: 9,
    variableHeading: 'median_house_value',
    variableScondaryHeading: 'Real number (R) ',
    intialTableData: [
      { dataHeading: 'Distinct', value: 3842 },
      { dataHeading: 'Distinct(%)', value: '18.6%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Infinite', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: 206855.82 },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 14999 },
      { dataHeading: 'Maximum', value: 500001 },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: '161.4KiB' },
    ],
  },
  {
    id: 10,
    variableHeading: 'ocean_proximity',
    variableScondaryHeading: 'Categorical',
    intialTableData: [
      { dataHeading: 'Distinct', value: 5 },
      { dataHeading: 'Distinct(%)', value: '<0.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Memorysize', value: '161.4 KiB' },
    ],
    secondaryTableData: [
      { dataHeading: 'Minimum', value: 844 },
      { dataHeading: 'Maximum', value: '4.1%' },
      { dataHeading: 'Missing', value: 0 },
      { dataHeading: 'Missing(%)', value: '0.0%' },
      { dataHeading: 'Zeros', value: 0 },
      { dataHeading: 'Infinite(%)', value: '0.0%' },
      { dataHeading: 'Mean', value: -119.5697 },
    ],
  },
];

export default variabledata;

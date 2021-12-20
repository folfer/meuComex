function convertArrayOfObjectsToCSV(array: any) {
  let result: any;

  const columnDelimiter = ',';
  const lineDelimiter = '\n';
  const keys = Object.keys(array[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item: any) => {
    let ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr += 1;
    });
    result += lineDelimiter;
  });

  return result;
}

export function downloadCSV(array: any, columns: any, name: string) {
  const link = document.createElement('a');
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = `${name}_data.csv`;

  if (!csv.match(/^data:text\/csv/i)) {
    // // eslint-disable-next-line
    // columns = { columns };
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', filename);
  link.click();
}
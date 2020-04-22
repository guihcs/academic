

export function courseViewFilter(data, query) {

  let serializedFields = [];

  serializedFields.push(data.name);
  serializedFields.push(data.area);
  serializedFields.push(data.coordinator?.name);

  return serializedFields.join().toLowerCase().indexOf(query) >= 0;
}

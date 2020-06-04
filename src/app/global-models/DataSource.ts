

export interface DataSource {
  getAll(params?);
  queryOne(params);
  insert(data, args?);
  delete(data);
  update(data);
  page(min, max);
}

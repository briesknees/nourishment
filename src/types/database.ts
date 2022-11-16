export interface SelectQuery {
  table: string;
  attributes?: string[];
  conditions?: {
    where?: string;
    //...
  };
}
export interface InsertQuery {
  table: string;
  attributes: {
    value: string;
    type: string;
  }[];
  values: string[];
}

export interface CreateTableQuery {
  name: string;
  attributes: [string, string][];
}

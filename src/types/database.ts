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
  attributes: string[];
  values: string[];
}

export interface CreateTableQuery {
  name: string;
  attributes: [string, string][];
}

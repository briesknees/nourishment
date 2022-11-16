export interface SelectQuery {
  table: string;
  columns: string[];
  conditions?: {
    where?: string;
    //...
  };
}
export interface InsertQuery {
  table: string;
  columns: string[];
  values: string[];
};


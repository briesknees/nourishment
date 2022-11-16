const config = {
  host: process.env.AZURE_PSQL_FQDN,
  user: process.env.AZURE_PSQL_USERNAME,
  password: process.env.AZURE_PSQL_PASSWORD,
  database: process.env.AZURE_PSQL_NAME,
  port: 5432,
  ssl: true,
};

export default config;

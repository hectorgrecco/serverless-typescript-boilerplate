import knex from 'knex';

export const rdsConnector = () => knex({
    client: 'pg',
    connection: {
        host : process.env.RDS_HOST,
        port : parseInt(process.env.RDS_PORT, 10),
        user : process.env.RDS_USER,
        password : process.env.RDS_PASSWORD,
        database : process.env.RDS_DB_NAME
    }
});
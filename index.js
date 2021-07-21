/*
 SQL
 create database test;
 use test;
 CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
*/

const { getClient } = require('@mysql/xdevapi');

class Database {

    #client;
    name = 'Persons'

    constructor() {
        this.#client = getClient({
            user: 'username',
            password: 'password',
            port: 33060,
            host: '127.0.0.1', // default value
            schema: 'test' // default value
        }, { pooling: { enabled: false, maxIdleTime: 0, maxSize: 10, queueTimeout: 0 } });
    }

    async getSession() {
        const s = await this.#client.getSession();
        return s;
    }


    async count() {
        return this.getSession().then((session) => {
            console.log(session.getConnection_().getServerId())
            return session.sql(`select COUNT(*) from ${this.name}`).execute().then((data) => {
                const count = data.fetchOne()?.[0] ?? 0;
                return count;
            }).finally(() => {
                console.log('close')
                session.close();
            });
        });
    }


}

const database = new Database();

setInterval(() => {
    Promise.all([
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
        database.count(),
    ]).then((r) => console.log(r)).catch(e => console.log(e));

}, 1000);    


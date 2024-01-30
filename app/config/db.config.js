module.exports = {
    // HOST: "postgres://owkwcgor:2OvB4G-Kt8fnnvTxgFgnBS0TpV2rkt4a@rosie.db.elephantsql.com/owkwcgor",
    HOST: "rosie.db.elephantsql.com",
    USER: "owkwcgor",
    PASSWORD: "2OvB4G-Kt8fnnvTxgFgnBS0TpV2rkt4a",
    DB: "owkwcgor",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
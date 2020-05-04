module.exports = {
    port: 3000,
    secret: "secret",
    mysql: {
        host: process.env.CHALLENGE_MYSQL_HOST || "127.0.0.1",
        user: process.env.CHALLENGE_MYSQL_USER || "root",
        password: process.env.CHALLENGE_MYSQL_PASS || "38828881",
        database: process.env.CHALLENGE_MYSQL_DB || "pizza_system",
        connectionLimit: process.env.CHALLENGE_MYSQL_CONNLIMIT || 10
    },
};


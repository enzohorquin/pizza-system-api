module.exports = {
    port: 3000,
    secret: "secret",
    mysql: {
        host: process.env.CHALLENGE_MYSQL_HOST || "host",
        user: process.env.CHALLENGE_MYSQL_USER || "user",
        password: process.env.CHALLENGE_MYSQL_PASS || "asdasd",
        database: process.env.CHALLENGE_MYSQL_DB || "pizza_system",
        connectionLimit: process.env.CHALLENGE_MYSQL_CONNLIMIT || 10
    },
};

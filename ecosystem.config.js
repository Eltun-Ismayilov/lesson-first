module.exports = {
  apps: [
    {
      name: "Lesson First NestJS",
      script: "./dist/main",
      env: {
        NODE_ENV: 'development',
        APP_NAME: 'Lesson NestJS',
        DB_HOST: 'localhost',
        DB_UN: 'root',
        DB_PASS: null,
        PORT: 5432,
        DB_DIALECT:'postgres',
        DB_NAME:'lesson-nest'
      },
    }
  ]
}

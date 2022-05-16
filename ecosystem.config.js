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
        DB_PASS: "eltun123",
        PORT: 5432,
        DB_DIALECT:'postgres',
        DB_NAME:'Nest-js',
        GOOGLE_RECAPTCHA_SECRET_KEY:'6LeUu-MfAAAAAM32s149E_pYW3uIjxg3-CrqnYEb'
      },
    }
  ]
}

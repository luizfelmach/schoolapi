export const databaseHost = process.env.DB_HOST ?? "localhost";
export const databasePort = process.env.DB_PORT ?? 5432;
export const databaseUser = process.env.DB_USER ?? "postgres";
export const databasePass = process.env.DB_PASS ?? "postgres";
export const databaseName = process.env.DB_NAME ?? "api";
export const serverPort = process.env.SERVER_PORT! ?? 3001;

import dotenv from "dotenv";

dotenv.config({
  path: `.env.local`,
});

const env = {
  node_env: process.env.NODE_ENV,
  host: process.env.HOST,
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
  },
  oauth2: {
    google: {
      client_id: process.env.OAUTH2_GOOGLE_CLIENT_ID,
      client_secret: process.env.OAUTH2_GOOGLE_CLIENT_SECRET,
    },
    github: {
      client_id: process.env.OAUTH2_GITHUB_CLIENT_ID,
      client_secret: process.env.OAUTH2_GITHUB_CLIENT_SECRET,
    },
  },
  google: {
    application_credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    firestore: {
      project_id: process.env.GOOGLE_FIRESTORE_PROJECT_ID,
      client_email: process.env.GOOGLE_FIRESTORE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_FIRESTORE_PRIVATE_KEY,
    },
    cloud_sql: {
      connection_name: process.env.GOOGLE_CLOUD_SQL_CONNECTION_NAME,
      database: process.env.GOOGLE_CLOUD_SQL_DATABASE,
      user: process.env.GOOGLE_CLOUD_SQL_USER,
      password: process.env.GOOGLE_CLOUD_SQL_PASSWORD,
    },
  },
  whatsapp: {
    url: process.env.WHATSAPP_URL,
    token: process.env.WHATSAPP_TOKEN,
  },
  midtrans: {
    client_key: process.env.MIDTRANS_CLIENT_KEY,
    server_key: process.env.MIDTRANS_SERVER_KEY,
    base_url: process.env.MIDTRANS_BASE_URL,
    is_production: process.env.MIDTRANS_IS_PRODUCTION,
    sandbox: {
      client_key: process.env.MIDTRANS_SANDBOX_CLIENT_KEY,
      server_key: process.env.MIDTRANS_SANDBOX_SERVER_KEY,
    },
    notification_url: process.env.MIDTRANS_NOTIFICATION_URL,
    redirect_url: process.env.MIDTRANS_REDIRECT_URL,
    error_url: process.env.MIDTRANS_ERROR_URL,
    customer_details: process.env.MIDTRANS_CUSTOMER_DETAILS,
  },
};

export default env;

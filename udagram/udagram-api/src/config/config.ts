import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME || "postgres"}`,
  password: process.env.POSTGRES_PASSWORD || "admin123",
  database: process.env.POSTGRES_DB || "postgres",
  host: process.env.POSTGRES_HOST || "postgres.ckh3a6srpkrs.us-east-1.rds.amazonaws.com",
  dbPort: process.env.DB_PORT || 5432,
  aws_region: process.env.AWS_REGION || "us-east-1",
  aws_profile: process.env.AWS_PROFILE || "default",
  aws_media_bucket: process.env.AWS_BUCKET || "arn:aws:s3:::my-udagram-api",
  url: process.env.URL || "http://localhost",
  jwt: {
    secret: process.env.JWT_SECRET || 'mysecretstring',
  },
};

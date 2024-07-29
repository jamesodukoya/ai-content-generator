/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.tsx",
    // out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://ludwigdb_owner:Fukoyv7x6jdY@ep-floral-cell-a2wqsxcv.eu-central-1.aws.neon.tech/ludwigdb?sslmode=require',
  }
};

// Courtesy: https://dev.to/unframework/getting-typeorm-to-work-with-next-js-and-typescript-1len

import { Connection, createConnection, getConnection } from "typeorm";
import { Address, Invoice, ProjectItem } from "../entities/entities";

let connectionReadyPromise: Promise<Connection> | null = null;

export function prepareConnection() {
  if (!connectionReadyPromise) {
    connectionReadyPromise = (async () => {
      // clean up old connection that references outdated hot-reload classes
      try {
        const staleConnection = getConnection();
        await staleConnection.close();
      } catch (error) {
        // no stale connection to clean up
      }

      // wait for new default connection
      return await createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
        entities: [Address, Invoice, ProjectItem],
        synchronize: process.env.NODE_ENV === "development",
        logging: process.env.NODE_ENV === "development",
      });
    })();
  }

  return connectionReadyPromise;
}

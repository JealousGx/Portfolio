import { awsServerlessDevelopment } from "./aws-serverless-development";
import { databaseDevelopment } from "./database-development";
import { fullStackDeveloper } from "./full-stack-developer";
import { golangDevelopment } from "./golang-development";
import { javascriptDevelopment } from "./javascript-development";
import { mernStackDevelopment } from "./mern-stack-development";
import { mvpDevelopment } from "./mvp-development";
import { nestjsDevelopment } from "./nestjs-development";
import { nextjsDevelopment } from "./nextjs-development";
import { nodejsDevelopment } from "./nodejs-development";
import { reactDevelopment } from "./react-development";
import { saasDevelopment } from "./saas-development";
import { typescriptDevelopment } from "./typescript-development";
import type { ServicePageData } from "./types";
import { vueDevelopment } from "./vue-development";

export const servicePages: ServicePageData[] = [
    nextjsDevelopment,
    typescriptDevelopment,
    javascriptDevelopment,
    nodejsDevelopment,
    awsServerlessDevelopment,
    reactDevelopment,
    databaseDevelopment,
    fullStackDeveloper,
    mernStackDevelopment,
    mvpDevelopment,
    saasDevelopment,
    nestjsDevelopment,
    vueDevelopment,
    golangDevelopment,
];

export const servicePagesBySlug: Record<string, ServicePageData> = Object.fromEntries(
    servicePages.map((page) => [page.slug, page])
);

export type { ServicePageData } from "./types";

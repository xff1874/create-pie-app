#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";

import { logger } from "@/utils/logger.js";
import { renderTitle } from "@/utils/renderTitle.js";
import { runCli } from "@/cli/index.js";
import { parseNameAndPath } from "@/utils/parseNameAndPath.js";
import { createProject } from "@/helpers/createProject.js";
import { installDependencies } from "@/helpers/installDependencies.js";
import { logNextSteps } from "@/helpers/logNextSteps.js";

import { execa } from 'execa';






const main = async () => {
    renderTitle()

    const {
        appName,
    } = await runCli();

    const [scopedAppName, appDir] = parseNameAndPath(appName);
    const projectDir = await createProject({
        projectName: appDir,
    });

    // Write name to package.json
    const pkgJson = fs.readJSONSync(
        path.join(projectDir, "package.json")
    )
    pkgJson.name = scopedAppName;
    fs.writeJSONSync(path.join(projectDir, "package.json"), pkgJson, {
        spaces: 2,
    });

    // await initializeGit(projectDir);
    logger.info("Initializing Git...");
    await execa("git", ["init"], { cwd: projectDir });

    await installDependencies({ projectDir });

    logNextSteps({ projectName: appDir })

    process.exit(0);

}

main().catch((err) => {
    logger.error("Aborting installation...");
    if (err instanceof Error) {
        logger.error(err);
    } else {
        logger.error(
            "An unknown error has occurred. Please open an issue on github with the below:"
        );
        console.log(err);
    }
    process.exit(1);
});

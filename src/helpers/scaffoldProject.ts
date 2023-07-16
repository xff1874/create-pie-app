
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

import { PKG_ROOT } from "@/consts.js";
import { InstallerOptions } from "@/installers/index.js";


export const scaffoldProject = async ({
    projectName,
    projectDir,
}: InstallerOptions) => {

    const tpl = path.join(PKG_ROOT, "template");

    const spinner = ora(`Scaffolding in: ${projectDir}...\n`).start();

    if (fs.existsSync(projectDir)) {
        spinner.fail(`Aborting installation... ${projectDir} already exists`);
        process.exit(1);
    }


    spinner.start();
    fs.copySync(tpl, projectDir);

    fs.renameSync(
        path.join(projectDir, "_gitignore"),
        path.join(projectDir, ".gitignore")
    );

    const scaffoldedName = chalk.cyan.bold(projectName);


    spinner.succeed(
        `${scaffoldedName} ${chalk.green("scaffolded successfully!")}\n`
    );
}
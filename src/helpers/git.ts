
import ora from "ora";
import { execa } from 'execa';
import chalk from "chalk";



import { logger } from "@/utils/logger.js";


// const getDefaultBranch = async () => {
//     const stdout = await execa("git config --global init.defaultBranch || echo main")
//         .toString()
//         .trim();

//     return stdout;
// };

export const initializeGit = async (projectDir: string) => {
    logger.info("Initializing Git...");

    const spinner = ora("Creating a new git repo...\n").start();

    try {
        // const branchName = await getDefaultBranch();
        await execa("git", ["init", '--initial-branch=main'], { cwd: projectDir, });
        await execa("git", ["add", "."], { cwd: projectDir });

        // await $`git commit -m "feat: initial commit"`;
        spinner.succeed(
            `${chalk.green("Successfully initialized and staged")} ${chalk.green.bold(
                "git"
            )}\n`
        );

    } catch (error) {
        spinner.fail(
            `${chalk.bold.red(
                "Failed:"
            )} could not initialize git. Update git to the latest version!\n`
        );
    }

}
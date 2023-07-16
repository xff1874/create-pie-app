
import chalk from "chalk";
import ora from "ora";
import { execa } from "execa";

type Options = {
    projectDir: string;
};

const runInstallCommand = async (projectDir: string): Promise<undefined> => {
    await execa("npm", ["install"], {
        cwd: projectDir,
        stderr: "inherit",
    });

    return;
}
export const installDependencies = async ({ projectDir }: Options) => {
    console.log(chalk.cyan("Installing dependencies..."));


    await runInstallCommand(projectDir);


    ora().succeed(
        chalk.green("Successfully installed dependencies!\n")
    );
};
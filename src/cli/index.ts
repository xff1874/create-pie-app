import { Command } from "commander";
import chalk from "chalk";



import { CREATE_PIE_APP, DEFAULT_APP_NAME } from "@/consts.js";
import { type AvailablePackages } from "@/installers/index.js";
import { getVersion } from "@/utils/getSupplierVersion.js";


interface CliFlags {
    noGit: boolean;
    noInstall: boolean;
    default: boolean;
    importAlias: string;

}

interface CliResults {
    appName: string;
    packages?: AvailablePackages[];
}

const defaultOptions: CliResults = {
    appName: DEFAULT_APP_NAME,
};

export const runCli = async () => {
    const cliResults = defaultOptions;
    const program = new Command().name(CREATE_PIE_APP);

    program
        .description("This is a CLI for creating modern web applications simply")
        .argument("[dir]", "the name and directory")
        .version(getVersion(), "-v --version", "Display the version number")
        .addHelpText("afterAll", `\n The stack was inspired by ${chalk.blueBright("DDZ")}`)
        .parse(process.argv);

    const cliProvidedName = program.args[0];
    if (cliProvidedName) {
        cliResults.appName = cliProvidedName;
    }


    return cliResults;



}
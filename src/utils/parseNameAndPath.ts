import { DEFAULT_APP_NAME } from "@/consts.js";
import pathModule from "path";


const removeTrailingSlash = (input: string) => {
    if (input.length > 1 && input.endsWith("/")) {
        input = input.slice(0, -1);
    }

    return input;
}

export const parseNameAndPath = (rawInput: string) => {
    const input = removeTrailingSlash(rawInput);

    const paths = input.split("/");

    let appName = paths[paths.length - 1];

    // If the user ran `npx create-vanillajs-app .` or similar, the appName should be the DEFAULT_APP_NAME directory
    if (appName === ".") {
        appName = DEFAULT_APP_NAME
    }

    // handle scope package
    const indexOfDelimiter = paths.findIndex((p) => p.startsWith("@"));
    if (paths.findIndex((p) => p.startsWith("@")) !== -1) {
        appName = paths.slice(indexOfDelimiter).join("/");
    }

    const path = paths.filter((p) => !p.startsWith("@")).join("/");

    return [appName, path] as const;
};

export interface InstallerOptions {
    projectDir: string;
    projectName?: string;
}

export const availablePackages = [
    "envVariables",
] as const;
export type AvailablePackages = (typeof availablePackages); //todo: why [number]
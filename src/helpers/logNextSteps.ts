import { DEFAULT_APP_NAME } from "@/consts.js";
import { logger } from "@/utils/logger.js";

export const logNextSteps = ({
    projectName = DEFAULT_APP_NAME
}) => {
    logger.info("Next:");
    projectName !== "." && logger.info(`  cd ${projectName}`);

    logger.info(`  npm run dev`);
}
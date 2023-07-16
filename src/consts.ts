import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const PKG_ROOT = path.join(__dirname, "../");

export const TITLE_TEXT = `
                                                                                    
####  #####  ######   ##   ##### ######    #####  # ######      ##   #####  #####  
#    # #    # #       #  #    #   #         #    # # #          #  #  #    # #    # 
#      #    # #####  #    #   #   #####     #    # # #####     #    # #    # #    # 
#      #####  #      ######   #   #         #####  # #         ###### #####  #####  
#    # #   #  #      #    #   #   #         #      # #         #    # #      #      
 ####  #    # ###### #    #   #   ######    #      # ######    #    # #      #      
                                                                                    

`
export const DEFAULT_APP_NAME = "my-pie-app";
export const CREATE_PIE_APP = "create-pie-app";

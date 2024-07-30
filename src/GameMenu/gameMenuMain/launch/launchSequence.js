import { launchSettings } from "./launchSettings";
export function launchSequence(mainWindow) {
  console.log("Prepare game.");

  const hasEnvironment = getEnvironment();

  function getEnvironment() {
    console.log("Checking the environment...");
    if (!!process?.env) {
      console.log("Has environment: ", !!process.env);
      return true;
    } else {
      console.error("No process environment was found.");
      return false;
    }
  }

  const hasLaunchConfiguration = getLaunchConfiguration();

  function getLaunchConfiguration() {
    console.log("Checking configuration...");
    if (!!launchSettings) {
      console.log("Has launch configuration: ", !!launchSettings);
      return launchSettings;
    } else {
      console.log("An error occured while checking the configuration.");
      return {};
    }
  }

  if (hasEnvironment && !!hasLaunchConfiguration) {
    console.log("Has environment and launch settings.");
    console.log("Applying settings...");
    // TODO
  }
}

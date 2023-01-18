import simpleTheme from "./simple-theme";

const simpleThemeInverted = { ...simpleTheme };
simpleThemeInverted.colors = { ...simpleTheme.colors };
simpleThemeInverted.colors.fgPrimary = simpleTheme.colors.fgSecondary;
simpleThemeInverted.colors.fgSecondary = simpleTheme.colors.fgPrimary;
simpleThemeInverted.colors.bgPrimary = simpleTheme.colors.bgSecondary;
simpleThemeInverted.colors.bgSecondary = simpleTheme.colors.bgPrimary;

export default simpleThemeInverted;
export type ThemeTypes = {
  name: string
  dark: boolean
  variables?: object
  colors: {
    primary?: string
    secondary?: string
    info?: string
    success?: string
    warning?: string
    error?: string
    lightprimary?: string
    lightsecondary?: string
    lightsuccess?: string
    lighterror?: string
    lightinfo?: string
    lightwarning?: string
    textPrimary?: string
    textSecondary?: string
    borderColor?: string
    hoverColor?: string
    containerBg?: string
    background?: string
    surface?: string
    grey100?: string
    grey200?: string
    light?: string
    muted?: string
  }
}

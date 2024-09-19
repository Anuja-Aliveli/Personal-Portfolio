import { createTheme, ThemeOptions, alpha } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { DARK_THEME } from './components/constants';
export const darkColors = {
  background: {
    primary: '#1e1e25',
    secondary: '#2b2b33',
    white: '#ffffff', // Add white explicitly
  },
  text: {
    primary: '#ffffff',
    secondary: '#63676c',
    teritiary: '#63676c',
    colorText: '#9042c7',
  },
  border: {
    primary: '#2b2b33',
  },
  hover: {
    primary: '#2b2b33',
  },
};

export const lightColors = {
  background: {
    primary: '#e0e6e8',
    secondary: '#ffffff',
    white: '#ffffff',
  },
  text: {
    primary: '#212531',
    secondary: '#656b70',
    teritiary: '#c6c8ca',
    colorText: '#9042c7',
  },
  border: {
    primary: '#e1e3e4',
  },
  hover: {
    primary: '#e1e3e4',
  },
};

// Define typography settings
const typography = {
  fontFamily: ['"Inter", "sans-serif"'].join(','),
  h1: {
    fontSize: 35,
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.2,
  },
  h2: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: 16,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: 14,
    fontWeight: 600,
  },
  h6: {
    fontSize: 12,
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: 16,
  },
  subtitle2: {
    fontSize: 15,
  },
  body1: {
    fontWeight: 400,
    fontSize: 15,
  },
  body2: {
    fontWeight: 400,
    fontSize: 14,
  },
  caption: {
    fontWeight: 400,
    fontSize: 12,
  },
  p: {
    fontSize: 16,
    lineHeight: 1.8,
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  span: {
    fontSize: 16,
  },
  a: {
    fontSize: 16,
    textDecoration: 'none',
  },
};

// Generate design tokens based on theme mode
const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    background: {
      default:
        mode === DARK_THEME
          ? darkColors.background.primary
          : lightColors.background.primary,
      paper:
        mode === DARK_THEME
          ? darkColors.background.secondary
          : lightColors.background.secondary,
    },
    text: {
      primary:
        mode === DARK_THEME
          ? darkColors.text.primary
          : lightColors.text.primary,
      secondary:
        mode === DARK_THEME
          ? darkColors.text.secondary
          : lightColors.text.secondary,
    },
    divider: alpha(
      mode === DARK_THEME
        ? darkColors.border.primary
        : lightColors.border.primary,
      0.12,
    ),
  },
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          boxShadow: 'none',
          borderRadius: '4px',
          textTransform: 'none',
          border: 'none',
          fontSize: '14px',
          '&:active': {
            transform: 'scale(0.98)',
          },
          height: '32px',
          color: '#ffffff',
          background: darkColors.text.colorText,
          '&:hover': {
            backgroundColor:
              mode === DARK_THEME
                ? darkColors.text.colorText
                : lightColors.text.colorText,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: '1rem',
          width: '1rem',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          height: '32px',
          background:
            theme.palette.mode === DARK_THEME
              ? darkColors.background.secondary
              : lightColors.background.secondary,
          color:
            theme.palette.mode === DARK_THEME
              ? darkColors.text.primary
              : darkColors.text.secondary,
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '35px',
        },
        indicator: {
          height: '1.5px',
          backgroundColor: darkColors.text.colorText,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: '35px',
          fontSize: '14px',
          padding: '0px 12px',
          textTransform: 'none',
          display: 'flex',
          flexDirection: 'row',
          color:
            theme.palette.mode === DARK_THEME
              ? darkColors.text.primary
              : lightColors.text.primary,
          '&:hover': {
            backgroundColor: darkColors.text.colorText,
          },
          '&.Mui-selected': {
            fontWeight: 'bold',
            color: darkColors.text.colorText,
          },
          '&.Mui-selected:hover': {
            backgroundColor:
              mode === DARK_THEME
                ? darkColors.hover.primary
                : lightColors.hover.primary,
          },
          '&.MuiTabs-indicator': {
            color: darkColors.text.colorText,
          },
        }),
        iconWrapper: {
          paddingRight: '3px',
          fontSize: 'medium',
        },
      },
    },
  },
});

export default function theme(mode: PaletteMode): ThemeOptions {
  return createTheme(getDesignTokens(mode));
}

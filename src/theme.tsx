import { createTheme, ThemeOptions, alpha } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { DARK_THEME } from './components/constants';

const darkColors = {
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

const lightColors = {
  background: {
    primary: '#e0e6e8',
    secondary: '#ffffff',
    white: '#ffffff', // Add white explicitly
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
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 78 / 70,
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
    lineHeight: 1.5,
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
          textTransform: 'none',
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
  },
});

export default function theme(mode: PaletteMode): ThemeOptions {
  return createTheme(getDesignTokens(mode));
}

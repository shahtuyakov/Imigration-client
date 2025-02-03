import { useColorScheme } from 'react-native';
import { colors } from '../colors';
import { spacing } from '../spacing';
import { typography } from '../typography';

export function useTheme() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    colors: {
      primary: colors.primary[isDark ? 'dark' : 'light'],
      secondary: colors.secondary[isDark ? 'dark' : 'light'],
      background: colors.background[isDark ? 'dark' : 'light'],
      surface: colors.surface[isDark ? 'dark' : 'light'],
      error: colors.error[isDark ? 'dark' : 'light'],
      text: {
        primary: colors.text.primary[isDark ? 'dark' : 'light'],
        secondary: colors.text.secondary[isDark ? 'dark' : 'light'],
      },
    },
    spacing,
    typography,
  };
}
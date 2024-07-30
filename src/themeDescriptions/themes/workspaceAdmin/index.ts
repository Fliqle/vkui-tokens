import { ThemeWorkspaceAdminDescription } from '@/interfaces/themes/workspaceAdmin';
import { ThemeWorkspaceAdminDarkDescription } from '@/interfaces/themes/workspaceAdminDark';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/paradigm';
import { fontFamilyAccent } from '@/themeDescriptions/common/fontSizes';

const fontWeightAccent2 = 500;

export const workspaceAdminTheme: ThemeWorkspaceAdminDescription = {
	...lightTheme,
	themeName: 'workspaceAdmin',
	themeNameBase: 'workspaceAdmin',
	colors: {
		...lightTheme.colors,

		colorBackground: '#F6F7F8',
		colorBackgroundNegativeTint: {
			normal: '#FAEBEB',
			hover: '#FDE2E7',
			active: '#FCD8DF',
		},
		colorBackgroundPositiveTintAlpha: {
			normal: 'rgba(13, 194, 104, 0.12)',
			hover: 'rgba(13, 194, 104, 0.14)',
			active: 'rgba(13, 194, 104, 0.18)',
		},
		colorBackgroundWarningTintAlpha: {
			normal: 'rgba(255, 241, 173, 0.64)',
			hover: 'rgba(255, 241, 173, 0.72)',
			active: 'rgba(255, 241, 173, 0.76)',
		},
		colorBackgroundNegativeTintAlpha: {
			normal: 'rgba(237, 10, 52, 0.10)',
			hover: 'rgba(237, 10, 52, 0.14)',
			active: 'rgba(237, 10, 52, 0.18)',
		},
		colorBackgroundAccentTintAlpha: {
			normal: 'rgba(0, 95, 249, 0.06)',
			hover: 'rgba(0, 95, 249, 0.1)',
			active: 'rgba(0, 95, 249, 0.14)',
		},

		colorIconNegativeSnackbar: '#FF5C5C',
		colorTextSecondary: '#797A80',
	},

	fontHeadline3: {
		fontSize: 13,
		lineHeight: 18,
		fontFamily: fontFamilyAccent,
		fontWeight: fontWeightAccent2,
	},
};

export const workspaceAdminDarkTheme: ThemeWorkspaceAdminDarkDescription = {
	...workspaceAdminTheme,
	...darkTheme,
	themeName: 'workspaceAdminDark',
	themeNameBase: 'workspaceAdminDark',

	colors: {
		...darkTheme.colors,

		colorBackgroundPositiveTintAlpha: {
			normal: 'rgba(13, 194, 104, 0.16)',
			hover: 'rgba(13, 194, 104, 0.18)',
			active: 'rgba(13, 194, 104, 0.2)',
		},
		colorBackgroundWarningTintAlpha: {
			normal: 'rgba(255, 158, 0, 0.2)',
			hover: 'rgba(255, 158, 0, 0.24)',
			active: 'rgba(255, 158, 0, 0.28)',
		},
		colorBackgroundNegativeTintAlpha: {
			normal: 'rgba(255, 58, 58, 0.24)',
			hover: 'rgba(255, 58, 58, 0.28)',
			active: 'rgba(255, 58, 58, 0.32)',
		},
		colorBackgroundAccentTintAlpha: {
			normal: 'rgba(39, 117, 252, 0.12)',
			hover: 'rgba(39, 117, 252, 0.16)',
			active: 'rgba(39, 117, 252, 0.2)',
		},

		colorIconNegativeSnackbar: '#FF5C5C',
		colorTextSecondary: '#BFC1C5',
	},
};

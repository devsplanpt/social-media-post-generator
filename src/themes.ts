import { Theme, ThemeConfig } from './types';

const dark: ThemeConfig = {
	bg: '#22374F',
	color: '#DFDCD4',
};

const light: ThemeConfig = {
	bg: '#DFDCD4',
	color: '#22374F',
};

export const themes: Record<Theme, ThemeConfig> = {
	[Theme.Dark]: dark,
	[Theme.Light]: light,
};

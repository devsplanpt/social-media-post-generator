export type ImageConfig =
	| {
			author: 'pedro' | 'petinga' | 'lota';
			title: string;
			imageUrl?: undefined;
			caption?: undefined;
	  }
	| {
			caption?: string;
			imageUrl?: string;
			author?: undefined;
			title: string;
	  };

export enum Theme {
	Dark = 'dark',
	Light = 'light',
}

export type ImageRequest = {
	images: ImageConfig[];
	theme: Theme;
};

export type ThemeConfig = {
	bg: string;
	color: string;
};

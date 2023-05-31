import { generateImage } from './resources/template';
import { themes } from './themes';
import { ImageConfig, ImageRequest } from './types';

export const generateImages = (request: ImageRequest) => {
	const themeConfig = themes[request.theme];

	return request.images.map((image) => generateImage(themeConfig, image));
};

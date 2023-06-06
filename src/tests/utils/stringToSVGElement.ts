import { JSDOM } from 'jsdom';

export const stringToSVGElement = (svg: string): SVGSVGElement => {
	const window = new JSDOM().window;
	const parser = new window.DOMParser();
	const svgElement = parser
		.parseFromString(svg, 'image/svg+xml')
		.querySelector('svg');

	if (svgElement == null) {
		throw new Error('svg element not found');
	}

	return svgElement;
};

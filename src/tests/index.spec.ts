import { generateImage } from '../resources/template';
import { ImageConfig, ThemeConfig } from '../types';
import { JSDOM } from 'jsdom';
import { stringToSVGElement } from './utils/stringToSVGElement';

describe('social media post generator service', () => {
	describe('theme configuration', () => {
		it.each<{
			theme: ThemeConfig;
		}>([
			{
				theme: {
					bg: '#22374F',
					color: '#DFDCD4',
				},
			},
			{
				theme: {
					bg: '#2237434',
					color: '#34',
				},
			},
		])(
			'should return the correct theme when given $theme theme',
			({ theme }) => {
				// Act
				const actual = generateImageAsHTML(
					{
						title: '',
					},
					theme
				);

				// Assert
				assertSVGThemeIsCorrect(actual, theme);
			}
		);
	});

	test('returns correct title', () => {
		// Arrange
		const expected = 'my custom title';
		const image: ImageConfig = {
			title: expected,
			caption: '',
			imageUrl: '',
		};

		// Act
		const actual = generateImageAsHTML(image);
		const element = getElementByTestIdOrFail(actual, 'title');

		// Assert
		assertElementContent(element, expected);
	});

	describe('caption', () => {
		test('has correct content', () => {
			// Arrange
			const expected = 'my caption';
			const image: ImageConfig = {
				title: '',
				caption: expected,
				imageUrl: '',
			};

			// Act
			const actual = generateImageAsHTML(image);
			const element = getElementByTestIdOrFail(actual, 'caption');

			// Assert
			assertElementContent(element, expected);
		});

		test('should return author name when given author and caption', () => {
			// Arrange
			const caption = 'otherCaption';
			const author = 'pedro';

			// Act
			const actual = generateImage(
				{
					bg: '#22374F',
					color: '#DFDCD4',
				},
				{
					title: '',
					caption,
					author,
					imageUrl: '',
				} as any
			);

			// Assert
			expect(actual).toContain(author);
		});

		test('should be empty if not provided', () => {
			// Arrange
			const expected = '';

			// Act
			const image = generateImageAsHTML({
				title: '',
				imageUrl: '',
			});

			// Assert
			const caption = getElementByTestIdOrFail(image, 'caption');
			assertElementContent(caption, expected);
		});

		describe('image element', () => {
			test('should return author source when author is passed', () => {
				// Arrange
				const author: ImageConfig['author'] = 'pedro';

				// Act
				const svg = generateImageAsHTML({
					title: '',
					author,
				});

				// Assert
				const image = getElementByTestIdOrFail<HTMLImageElement>(svg, 'image');
				expect(image.getAttribute('src')).toContain(author);
			});

			test('should return image source when imageUrl is passed but author is not', () => {
				//Arrange
				const imageUrl = 'https://source.unsplash.com/random';
			});

			test.todo(
				'should return author source when author and imageUrl are passed'
			);
			test.todo(
				'should not return an image when neither author nor imageUrl are passed'
			);
			test.todo('should be 400x400 when author is passed');
			test.todo('should be 120x120 when imageUrl is passed');
		});

		test.todo('schemas');
	});
});

const assertSVGThemeIsCorrect = (el: SVGSVGElement, theme: ThemeConfig) => {
	expect(el.dataset.color).toStrictEqual(theme.color);
	expect(el.dataset.bg).toStrictEqual(theme.bg);
};

const assertElementContent = (el: Element, expected: string) => {
	expect(el.textContent).toEqual(expected);
};

const getElementByTestIdOrFail = <T = Element>(
	el: SVGSVGElement,
	id: string
): T => {
	const node = el.querySelector(`[data-testid="${id}"]`);

	if (!node) {
		throw new Error('Element not found');
	}

	return node as T;
};

const generateImageAsHTML = (
	image: ImageConfig,
	theme: ThemeConfig = {
		bg: '#22374F',
		color: '#DFDCD4',
	}
) => {
	return stringToSVGElement(generateImage(theme, image));
};

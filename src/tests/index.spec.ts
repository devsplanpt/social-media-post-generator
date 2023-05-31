import { generateImages } from '..';
import { generateImage } from '../resources/template';
import { ImageConfig, ImageRequest, Theme, ThemeConfig } from '../types';
import { generateTestImage } from './utils/generateTestImage';

const getTitlePattern = (title: string = '') =>
	new RegExp(`class="title">${title}</text>`);

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
				// Arrange
				const expected = generateTestImage(undefined, theme);
				// Act
				const actual = generateImage(theme, {
					title: '',
				});

				// Assert
				expect(actual).toEqual(expected);
			}
		);
	});

	test('returns correct title', () => {
		// Arrange
		const title = 'my custom title';
		const image: ImageConfig = {
			title,
			caption: '',
			imageUrl: '',
		};
		const request: ImageRequest = {
			images: [image],
			theme: Theme.Dark,
		};

		// Act
		const actual = generateImages(request);

		// Assert
		expect(actual[0]).toMatch(getTitlePattern(title));
	});

	describe('returns correct caption', () => {
		test('returns correct caption', () => {
			// Arrange
			const caption = 'my caption';

			// Act
			const actual = generateImage(
				{
					bg: '#22374F',
					color: '#DFDCD4',
				},
				{
					title: '',
					caption,
				}
			);

			// Assert
			expect(actual).toContain(caption);
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

		test('should return no caption when its not provided', () => {
			// Arrange
			const expected = /class="caption">\<\/text>/;

			// Act
			const actual = generateImage(
				{
					bg: '#22374F',
					color: '#DFDCD4',
				},
				{
					title: '',
					imageUrl: '',
				}
			);

			// Assert
			expect(actual).toMatch(expected);
		});

		describe('image', () => {
			test.todo('should return author source when author is passed');
			test.todo('should return image source when imageUrl is passed');
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

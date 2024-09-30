import { classNames } from './classNames'

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass')
	})
	test('with mods', () => {
		const expected = 'someClass class1 class2'
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
	})
	test('with mods but 1 false', () => {
		const expected = 'someClass hovered class1 class2'
		expect(
			classNames('someClass', { hovered: true, scrollable: false }, [
				'class1',
				'class2'
			])
		).toBe(expected)
	})
})

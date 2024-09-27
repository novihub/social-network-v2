type Mods = Record<string, boolean | string> // Record means key

// export function classNames(
// 	cls: string,
// 	mods: Mods,
// 	additional: string[]
// ): string {
// 	return [
// 		cls,
// 		...additional,
// 		...Object.entries(mods)
// 			.filter(([key, value]) => Boolean(value))
// 			.map(([className]) => className)
// 	].join(' ')
// }

export function classNames(
	cls: string,
	mods: Mods = {},
	additional: string[] = []
) {
	return [
		cls,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
		...additional.filter(Boolean)
	].join(' ')
}

export const jsonl = {
	parse(text: string): unknown {
		return (
			text
				.split('\n')
				.filter((line) => line.trim() !== '')
				// JSON.parse automatically trims the lines
				.map((jsonString) => JSON.parse(jsonString))
		)
	},
	stringify(data: any): string {
		const array: unknown[] = Array.isArray(data) ? data : [data]

		return array.map((val) => JSON.stringify(val)).join('\n')
	},
}

export declare class JsonlStringified<T> extends String {
	private readonly __entryType: T extends Array<infer Inner> ? Inner : T;
}

export type JsonlInfer<T> = T extends JsonlStringified<infer R> ? R : unknown;

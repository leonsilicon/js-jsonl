export declare class JsonlStringified<T> extends String {
	private readonly __entryType: T extends Array<infer Inner> ? Inner : T;
}

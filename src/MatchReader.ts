import { MatchData, MatchResult } from "./types";
import { Reader } from "./Reader";
import { stringToDate } from "./utils";

export class MatchReader {
	private _matches: MatchData[];

	constructor(private _reader: Reader) {
		this._matches = [];
	}

	public load() {
		this._matches = this._reader.data.map((row: string[]): MatchData => {
			return [
				stringToDate(row[0]),
				row[1],
				row[2],
				parseInt(row[3]),
				parseInt(row[4]),
				row[5] as MatchResult,
				row[6],
			];
		});
	}

	get matches(): MatchData[] {
		return this._matches;
	}
}

import fs from "fs";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { stringToDate } from "./utils";

export class CsvFileReader {
	public data: MatchData[];
	constructor(public fileName: string) {
		this.data = [];
	}

	read(): void {
		this.data = fs
			.readFileSync(this.fileName, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((row: string) => {
				return row.split(",");
			})
			.map((row: string[]): MatchData => {
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
}

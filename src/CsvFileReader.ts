import fs from "fs";
import { Reader } from "./Reader";

export class CsvFileReader implements Reader {
	public data: string[][];

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
			});
	}
}

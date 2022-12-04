import fs from "fs";

export abstract class CsvFileReader<T> {
	public data: T[];
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
			.map(this.readLine);
	}

	abstract readLine(row: string[]): T;
}

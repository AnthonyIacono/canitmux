import { allLaptops } from '../src/LaptopDatabase';
import * as fs from 'fs';
import { LaptopInformation } from '../src/LaptopInformation';

interface Database {
  laptops: LaptopInformation[]
  version: string
}

const db: Database = {
  laptops: allLaptops(),
  version: process.argv.length > 2 ? process.argv[2] : 'local'
};

const outputDirectory = 'dist';
const outputPath = `${outputDirectory}/db.json`;

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(db));

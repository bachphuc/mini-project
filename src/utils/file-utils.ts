import fs from 'fs';

export function fileExists(filePath: string): boolean {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    console.error(`Error checking if file exists at ${filePath}:`, error);
    return false;
  }
}


export function jsonFromFile<T>(filePath: string): T | null {
  if(!fileExists(filePath)){
    console.warn(`File not found: ${filePath}`);
    return null;
  }
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Error parsing JSON from ${filePath}:`, error);
    return null;
  }
}

export function jsonToFile<T>(filePath: string, data: T): void {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf8');
  } catch (error) {
    console.error(`Error writing JSON to ${filePath}:`, error);
  }
}
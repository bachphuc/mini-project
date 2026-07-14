import { DataStore } from "../models/data-models";
import { jsonFromFile, jsonToFile } from "../utils/file-utils";

const DATA_FILE_PATH = './data/data.json';

var _data: DataStore = {
  incrementalID: 1,
  users: [],
  tasks: [],
  epics: [],
  projects: []
};

export function generateID(): number {
  return _data.incrementalID++;
}

export function initData() {
  const savedData = jsonFromFile<DataStore>(DATA_FILE_PATH);
  if (savedData) {
    _data = savedData;
  }
}

export function commitDataStore(){
  jsonToFile(DATA_FILE_PATH, _data);
}

export function getDataStore(): DataStore {
  return _data;
}
// Saved in json file
export interface HexGameData {
  rootWordId: number;
  centerLetter: string;
  date: string;
  gameId: number;
}

// Data type for localstorage
export interface HexGameState extends Omit<HexGameData, 'date'> {
  prevRootWordId: number;
  prevCenterLetter: string;
  scores: Record<
    string,
    {
      score: number;
      maxScore: number;
    }
  >;
  score: number;
  gameStartDate: string;
  guessedWords: { word: string; isPangram: boolean }[];
  version: string;
  uuid: string;
}

export interface HexGameWordListItem {
  word: string;
  score: number;
  isPangram: boolean;
}

export interface HexGameWordList {
  list: HexGameWordListItem[];
  centerLetter: string;
  maxScore: number;
}
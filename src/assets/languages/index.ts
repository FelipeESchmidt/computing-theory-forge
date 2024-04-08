import { BR } from "./BR";
import { CN } from "./CN";
import { DE } from "./DE";
import { ES } from "./ES";
import { FR } from "./FR";
import { IT } from "./IT";
import { JP } from "./JP";
import { KR } from "./KR";
import { NO } from "./NO";
import { RU } from "./RU";
import { UA } from "./UA";
import { US } from "./US";

export type LanguageType = typeof BR;

export const languages = {
  BR,
  US,
  ES,
  FR,
  DE,
  IT,
  NO,
  RU,
  UA,
  CN,
  JP,
  KR,
};

export type LanguageOptions = keyof typeof languages;

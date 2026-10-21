/**
 * API pública del motor numerológico.
 *
 * El módulo es puro y sin dependencias: corre igual en el navegador, en un
 * route handler, en Convex o en un script de generación de contenido. Esa
 * portabilidad es intencional, porque el mismo cálculo alimenta la interfaz,
 * las notificaciones programadas y la verificación de cobertura de contenido.
 */

export {
  type ExplainStep,
  explainMision,
  explainReduction,
  type MisionExplanation,
} from "./explain";

export {
  breakdownName,
  computeNameNumbers,
  type LetterBreakdown,
  letterValue,
  type NameNumbers,
  normalizeName,
  type YPolicy,
} from "./letters";
export {
  allPairKeys,
  type PairKey,
  type ParsedPairKey,
  pairKey,
  parsePairKey,
  RELATIONSHIP_TYPES,
  type RelationshipType,
  TOTAL_PAIR_KEYS,
} from "./pairs";
export {
  type CalendarDate,
  type Challenges,
  type ChallengeValue,
  computeChallenges,
  computeMision,
  computePersonalCycles,
  computePinnacles,
  computeProfile,
  isValidDate,
  missionMaster,
  type NumerologyProfile,
  type PersonalCycles,
  type Pinnacles,
  type ProfileInput,
} from "./profile";
export {
  ALL_VALUES,
  type Digit,
  digitalRoot,
  digitSum,
  isMasterNumber,
  MASTER_NUMBERS,
  type MasterNumber,
  type NumerologyValue,
  reduce,
  reduceToDigit,
} from "./reduce";

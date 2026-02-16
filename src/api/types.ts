/**
 * TypeScript types for Gjensidige insurance claims data
 */

export interface Skade {
  forsikringsnr: string;
  lopenr: string;
  skadedato: string; // Format: YYYY-MM-DD
  meldtDato: string; // Format: YYYY-MM-DD
  skadeType: string | null;
  skadeStatus: string;
  risikoNummer: string;
  risikoBeskrivelse: string;
  grunnrisikoNummer: string;
  produktrisikoNummer: string;
  produktrisikoBeskrivelse: string;
  ulykkeskode: string | null;
  ulykkeskodeTekst: string | null;
  kladd: boolean;
  grunndekningsnummer: string;
  originalKanal: string | null;
  reopenable: boolean;
  diagnose: string | null;
}

export type SkadeStatus = 'A' | 'L' | 'U'; // Active, Lukket, Under behandling
export type SkadeType = 'T' | 'Y' | null; // Tyveri, Yrkesskade, etc.

/**
 * Helper type for filtered claims
 */
export interface SkaderResponse {
  skader: Skade[];
  totaltAntall: number;
}


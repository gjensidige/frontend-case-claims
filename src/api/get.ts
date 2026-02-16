import exampleData from './example-response.json';
import type { Skade } from './types';

/**
 * Get all skader (claims) from the example data
 * In a real app, this would be an API call
 */
export function getSkader(): Skade[] {
  return exampleData as Skade[];
}

/**
 * Helper to simulate async data fetching (optional)
 */
export async function fetchSkader(): Promise<Skade[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return getSkader();
}


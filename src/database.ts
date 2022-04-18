export enum MatchRoles {
  TANK = 'TANK',
  DAMAGE = 'DAMAGE',
  SUPPORT = 'SUPPORT',
}
export enum MatchResult {
  INIT = 'INIT',
  WIN = 'WIN',
  LOSS = 'LOSS',
  DRAW = 'DRAW',
}

export interface Match {
  sr: number;
  difference: number;
  timestamp: number;
  matchResult: MatchResult;
}


export function getRoleMatches(role: MatchRoles): Match[] {
  const matches = localStorage[role];
  return matches ? JSON.parse(matches) : [];
}

export function lastSR(role: MatchRoles) {
  const matches = getRoleMatches(role);
  if (!matches[0]) return null;
  return matches[0].sr;
}

export function addMatch(sr: number, role: MatchRoles) {
  const matches = getRoleMatches(role);
  matches.unshift({sr, timestamp: Date.now(), matchResult: predictMatchResult(sr, role), difference: matchSrDifference(sr, role)});
  localStorage[role] = JSON.stringify(matches);
}

export function deleteMatch(role: MatchRoles, index: number) {
  const matches = getRoleMatches(role);
  matches.splice(index, 1);
  localStorage[role] = JSON.stringify(matches);
}

function matchSrDifference(newSR: number, role: MatchRoles) {
  const matches = getRoleMatches(role);
  const matchSr = newSR;
  const lastMatchSr = matches?.[0]?.sr;

  const difference = matchSr - lastMatchSr;

  return difference;
}

function predictMatchResult(newSR: number, role: MatchRoles) {
  const matches = getRoleMatches(role);
  if (!matches.length) return MatchResult.INIT;
  const matchSr = newSR;
  const lastMatchSr = matches?.[0]?.sr;
  if (lastMatchSr !== undefined) {
    if (lastMatchSr > matchSr) {
      return MatchResult.LOSS;
    } else if (lastMatchSr < matchSr) {
      return MatchResult.WIN;
    } else {
      return MatchResult.DRAW;
    }
  }
  return MatchResult.WIN;
}


// write a function that converts date to human readable format.
// return minutes ago, hours ago, days ago, months ago, years ago
export function timeAgo(timestamp: number) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
}
// Interface for MajorCredits
interface MajorCredits {
  credits: number;
  __brand: 'major';
}

// Interface for MinorCredits
interface MinorCredits {
  credits: number;
  __brand: 'minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',
  };
}

// Example usage:
const math: MajorCredits = { credits: 3, __brand: 'major' };
const physics: MajorCredits = { credits: 4, __brand: 'major' };
const totalMajor = sumMajorCredits(math, physics);
console.log('Total Major Credits:', totalMajor);

const art: MinorCredits = { credits: 1, __brand: 'minor' };
const music: MinorCredits = { credits: 2, __brand: 'minor' };
const totalMinor = sumMinorCredits(art, music);
console.log('Total Minor Credits:', totalMinor);

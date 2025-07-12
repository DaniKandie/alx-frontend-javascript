// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'major',
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'minor',
    };
}
// Example usage:
var math = { credits: 3, __brand: 'major' };
var physics = { credits: 4, __brand: 'major' };
var totalMajor = sumMajorCredits(math, physics);
console.log('Total Major Credits:', totalMajor);
var art = { credits: 1, __brand: 'minor' };
var music = { credits: 2, __brand: 'minor' };
var totalMinor = sumMinorCredits(art, music);
console.log('Total Minor Credits:', totalMinor);
//# sourceMappingURL=main.js.map
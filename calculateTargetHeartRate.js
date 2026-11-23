function calculateTargetHeartRate(age, restingHR, intensity = 0.7) {
  const maxHR = 220 - age;
  const heartRateReserve = maxHR - restingHR;
  return Math.round(heartRateReserve * intensity + restingHR);
}
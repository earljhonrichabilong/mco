function calculateAlveolarVentilation(tidalVolumeMl, deadSpaceMl, breathsPerMin) {
    const effectiveVolume = Math.max(0, tidalVolumeMl - deadSpaceMl);
    return effectiveVolume * breathsPerMin; // mL/min
}
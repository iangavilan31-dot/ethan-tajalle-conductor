export default function TextureOverlay() {
  return (
    <>
      {/* Film grain */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23noiseFilter)\' opacity=\'0.8\'/%3E%3C/svg%3E")',
      }} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.3) 100%)',
      }} />
    </>
  );
}

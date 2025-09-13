'use client';

export const HomepageSEO = () => {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/images/hero-bg.webp" as="image" type="image/webp" />
      <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" />
    </>
  );
};

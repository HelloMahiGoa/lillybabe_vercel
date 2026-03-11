import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact-us' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
];

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <span className="text-2xl font-black tracking-tight text-white">LILLY</span>
              <span className="text-2xl font-black tracking-tight text-amber-400">BABE</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 ml-1 mb-1 align-middle" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Chennai&apos;s verified escort agency. Genuine profiles, honest pricing, complete privacy. In business since 2010.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+918121426651"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                +91 81214 26651
              </a>
              <a
                href="https://wa.me/918121426651"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-5">
              Service Areas
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Anna Nagar</li>
              <li>T. Nagar</li>
              <li>Velachery</li>
              <li>OMR / IT Corridor</li>
              <li>Adyar &amp; Besant Nagar</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} LillyBabe. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link, i) => (
              <span key={link.name} className="flex items-center gap-6">
                {i > 0 && <span className="w-px h-3 bg-white/10" />}
                <Link
                  href={link.href}
                  className="text-xs text-gray-500 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

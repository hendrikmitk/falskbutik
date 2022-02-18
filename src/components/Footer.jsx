import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-light flex h-12 shrink-0 items-center justify-center">
      <div className="text-orange flex items-center space-x-2 font-mono text-xs">
        <p>Made with ❤️ in Hamburg</p>
        <span className="-translate-y-[2px] text-xl">|</span>
        <p>
          Source available on{' '}
          <a href="https://github.com/hendrikmitk/falskbutik/">GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

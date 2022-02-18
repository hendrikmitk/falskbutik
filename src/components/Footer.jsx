import React from 'react';

const Footer = () => {
  return (
    <footer className="flex h-12 items-center justify-center bg-blue-light">
      <div className="flex items-center space-x-2 font-mono text-xs text-orange">
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

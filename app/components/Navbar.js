"use client"; 

export default function Navbar() {
  const navStyles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 5%',
      backgroundColor: 'var(--secondary-color)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
      position: 'fixed',   // stays on top
      top: 0,
      width: '100%',
      zIndex: 1000,
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: 'var(--accent-color)',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      fontSize: '1rem',
      fontWeight: '500',
      color: 'var(--text-color)',
      transition: 'color 0.3s',
      cursor: 'pointer',
      textDecoration: 'none',
    }
  };

  const handleLinkHover = (e, isHovering) => {
    e.target.style.color = isHovering ? 'white' : 'var(--text-color)';
  };

  return (
    <header style={navStyles.header}>
      <div style={navStyles.logo}>
        <a href="#hero" style={{...navStyles.link, color: navStyles.link.color}}>
          {'Rithwiik Reddy'}
        </a>
      </div>
      <nav style={navStyles.navLinks}>
        {['About', 'Projects', 'Education', 'Experience', 'Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}   // 🔥 real anchor scroll
            style={navStyles.link}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}


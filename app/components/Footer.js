// app/components/Footer.js
"use client"; 
export default function Footer() {
  const footerStyles = {
    footer: {
      textAlign: 'center',
      padding: '2rem 0',
      borderTop: '1px solid #333',
      marginTop: '3rem',
      fontSize: '0.85rem',
      color: '#888',
    }
  };

  return (
    <footer style={footerStyles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Rithwiik Reddy. All rights reserved. | Built with Next.js and Vercel.  | Ph: +91 9959819813 | Email: rithwikreddy004@gmail.com
      </p>
    </footer>
  );
}
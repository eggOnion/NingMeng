import logo_footer from "../assets/logo_footer.png"

function Footer() {
    return (
        <footer>
        <div>
          <img src={logo_footer} alt="footer" />
        </div>
        <div>
          <p>Copyright Little Lemon</p>
        </div>
      </footer>
    );
}

export default Footer;
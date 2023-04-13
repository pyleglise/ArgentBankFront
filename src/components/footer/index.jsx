import '../../utils/style/_footer.scss'

/**
 * Component that displays the Footer \
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <Footer />
 * }
 * @returns {JSX.Element}   A JSX element containing the Footer
 */
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  )
}

export default Footer

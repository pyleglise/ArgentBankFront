import '../../utils/style/_footer.scss'

/**
 * Component that displays the header (logo and main top navbar menu)\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <Header />
 * }
 * @returns {JSX.Element}   A JSX element containing the Header (logo and main top navbar menu)
 */
function Footer() {
  return (
    <footer class="footer">
      <p class="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  )
}

export default Footer

import "./Footer.css"; 

export default function Footer(){
  return (
    <footer>
      <span>&copy; {new Date().getFullYear()} Linxonix Website. All rights reserved.</span>
    </footer>
  )
}
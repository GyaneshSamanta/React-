const Header = () => {
  return (
    <header>
        <h1 style={colourscheme}>Admin Panel</h1><br></br>
        <button style={buttonstyle}>Sign Up</button> <br></br>
        <button style={buttonstyle}>Log In</button>

    </header>
  )
}
const buttonstyle = {
  backgroundcolor: 'white',

}
const colourscheme = {
    color: 'white',
    backgroundColor: 'blue'

}

export default Header

const React = require("react")
const myStyle = {
       color: 'black',
       backgroundColor: 'lightcoral',
       minheight: '100vh',
       maxwidth: '400px',
       margin: 0,

}
class Show extends React.Component {
       render() {
              const { pokemon } = this.props;

              return (
                     <body style={myStyle} >
                            <h1 >'Gotta Catch 'Em All'</h1>
                            <h2>{pokemon.name.charAt(0).toUpperCase(0) + pokemon.name.slice(1)}</h2>
                            <img src={`${pokemon.img}.jpg`}></img>
                            <br></br>
                            <a href='/pokemon'>Back</a>
                     </body>

              )
       }
}
module.exports = Show
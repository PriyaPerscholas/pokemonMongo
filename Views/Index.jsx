const React = require('react')
// const DefaultLayout = require('./layouts/default');
const myStyle = {
       color: 'black',
       backgroundColor: 'lightcoral',
       minheight: '100vh',
       maxwidth: '400px',
       margin: 0,

}
class Index extends React.Component {
       render() {
              const { pokemon } = this.props;
              return (
                     <div style={myStyle}>
                            <h1>'See All The Pokemon!'</h1>
                            <ul >
                                   {pokemon.map((poke, i) => {
                                          return (
                                                 <li key={poke._id}>
                                                        <a href={`/pokemon/${poke.id}`}>
                                                               <h2>{poke.name.charAt(0).toUpperCase(0) + poke.name.slice(1)}</h2>
                                                               <br></br>
                                                        </a>
                                                 </li>
                                          );
                                   })}
                            </ul>
                            <nav>
                                   <a href='/pokemon/new'>Create a new pokemon</a>
                            </nav>
                     </div>
              )

       }
}
module.exports = Index







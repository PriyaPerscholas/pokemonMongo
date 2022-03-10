const React = require('react')
const DefaultLayout = require('./layout/default');

class Index extends React.Component {
       render() {
              const { pokemon } = this.props;
              return (
                     <div>
                            <link rel="stylesheet" href="/css/app.css" />
                            <h1>'See All The Pokemon!'</h1>
                            <ul >
                                   {pokemon.map((poke, i) => {
                                          return (
                                                 <li key={poke._id}>
                                                        <a href={`/pokemon/${poke.id}`}>
                                                               <h2>{poke.name.charAt(0).toUpperCase(0) + poke.name.slice(1)}</h2>
                                                               <br></br>
                                                        </a>
                                                        <form action={`/pokemon/${poke._id}?_method=DELETE`} method="POST">
                                                               <input type="submit" value="DELETE" />
                                                        </form>
                                                        <br></br>
                                                        <a href={`/pokemon/${poke._id}/edit`}>Edit This Pokemon</a>
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







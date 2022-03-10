const React = require('react');
// As you can see we are using the app layout
// const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component {
       render() {
              return (
                     <div>
                            <link rel="stylesheet" href="/css/app.css" />
                            <h1>Edit Pokemon Page</h1>
                            <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
                                   Pokemon Name: <input type="text" name="name" defaultValue={this.props.pokemon.name} />
                                   <br></br>
                                   <br></br>
                                   Pokemon Image: <input type="text" name="img" defaultValue={this.props.pokemon.img} />
                                   <br></br>
                                   <br></br>
                                   <input type="submit" value="Submit Changes" />
                                   <br></br>
                            </form>
                     </div>
              )
       }
}
module.exports = Edit;
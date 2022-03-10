const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component {
       render() {
              return (
                     <DefaultLayout title="Edit Page">
                            {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                            {/* form is not complet we will do that below*/}
                            <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
                                   Pokemon Name: <input type="text" name="name" defaultValue={this.props.pokemon.name} /><br />
                                   Pokemon Image: <input type="text" name="img" defaultValue={this.props.pokemon.img} /><br />

                                   <input type="submit" value="Submit Changes" />
                            </form>
                     </DefaultLayout>
              )
       }
}
module.exports = Edit;
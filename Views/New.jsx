const React = require('react')

class New extends React.Component {
       render() {
              return (
                     <div>
                            <h1>New Pokemon Page</h1>
                            <form action="/pokemon" method="POST">
                                   Pokemon Name: <input type="text" name="name" />
                                   <br ></br>
                                   <br></br>
                                   Pokemon Image: <input type="text" name="img" />
                                   <br ></br>
                                   <br></br>
                                   <input type="submit" name="" value="Create Pokemon" />
                                   <br></br>
                                   <br></br>
                            </form>
                     </div>
              )
       }
}
module.exports = New
const React = require('react')
const myStyle = {
       color: 'black',
       backgroundColor: 'lightcoral',


}
class New extends React.Component {
       render() {
              return (
                     <div style={myStyle}>
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
import React, { Component } from 'react'
import {createPost} from '../actions/postAction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

 class Postform extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

     this.props.createPost(post)

       /*  fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
          .then(data => console.log(data)) */
          // now in case you want to pass this data to app.js, i would recomment to pass the input values (post) to app.js
          // and make the fetch call there. another option is to use redux.
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
  render() {
    return (
      <div>
        <h2>add Post</h2>

        <form onSubmit={this.onSubmit}>
            <div>
                <lable>Title:</lable><br />
                <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
            </div>
         
            <div>
                <lable>Body:</lable> <br />
                <textarea name="body" cols="21" rows="10" value={this.state.body} onChange={this.onChange}></textarea>
            </div>
            <button style={{'width': '169px'}} type="submit">Add</button>
        </form>

      </div>
    )
  }
}

Postform.propTypes = {
createPost: PropTypes.func.isRequired
}

export default connect(null,{createPost})(Postform)
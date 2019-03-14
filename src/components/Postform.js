import React, { Component } from 'react'

export default class Postform extends Component {
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

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
          .then(data => console.log(data))
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

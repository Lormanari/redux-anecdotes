import React from 'react'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const NewAnecdote = (props) => {
	// const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		console.log('vote', event)
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		props.createAnecdote(content)
	}
	return (
		<div>
		  <h2>create new</h2>
		  <form onSubmit={addAnecdote}>
			<div><input name="anecdote" /></div>
			<button type="submit">create</button>
		  </form>
		</div>
	  )
}

export default connect(
	null,
	{ createAnecdote }
)(NewAnecdote)
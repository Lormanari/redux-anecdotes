import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
	const vote = (id) => {
		const votedAnecdote = props.anecdotes.find(a => a.id === id)
		const changedAnecdote = {
			...votedAnecdote,
			votes: votedAnecdote.votes + 1
		}
		props.addVote(id, changedAnecdote)
		props.notificationChange(`you voted '${votedAnecdote.content}'`, 5000)
	}

	return (
		<div>
			{props.anecdotes.map(anecdote =>
			<div key={anecdote.id}>
				<div>
				{anecdote.content}
				</div>
				<div>
				has {anecdote.votes}
				<button onClick={() => vote(anecdote.id)}>vote</button>
				</div>
			</div>
			)}
		</div>
	)
}

const mapStateToProps = (state) => {
	const initialAnecdotes = state.filter.length <= 1
		? state.anecdotes
		: state.anecdotes.filter(a => a.content.toLowerCase().indexOf(state.filter.toLowerCase())>-1 )
	const anecdotes = initialAnecdotes.sort((a, b) => b.votes - a.votes)

	return {
		anecdotes
	}
}

const mapDispatchToProps = {
	addVote,
	notificationChange,
}

const ConnectedAnecdoteList = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList
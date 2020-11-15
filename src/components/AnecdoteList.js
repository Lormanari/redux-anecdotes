import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const dispatch = useDispatch()
	const anecdotes = useSelector(({anecdotes, filter}) => {
		return filter.length <= 1 ?
		anecdotes :
		anecdotes.filter(a => a.content.toLowerCase().indexOf(filter.toLowerCase())>-1 )
	})


  	anecdotes.sort((a, b) => b.votes - a.votes)

	const vote = (id) => {
		dispatch(addVote(id))
		const votedAnecdote = anecdotes.find(a => a.id === id)
		dispatch(notificationChange(`you voted '${votedAnecdote.content}'`))
		setTimeout(() => {
			dispatch(notificationChange(''))
		}, 5000)
	}

	return (
		<div>
			{anecdotes.map(anecdote =>
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

export default AnecdoteList
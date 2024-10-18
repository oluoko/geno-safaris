'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const answer = await askQuestion(value)
    setResponse(answer)

    setValue('')
    setLoading(false)
  }

  return (
    <div className="w-full mb-4">
      <form
        action=""
        className="w-full flex items-center gap-2 md:gap-4"
        onSubmit={handleSubmit}
      >
        <input
          disabled={loading}
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask a question..."
          className="border border-black/20 px-4 py-3 rounded-lg text-sm md:text-xl w-3/4"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-3 rounded-lg text-sm md:text-xl w-1/4 h-full"
        >
          Ask
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {response && <div>{response}</div>}
    </div>
  )
}

export default Question
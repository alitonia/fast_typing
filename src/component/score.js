import React from 'react'

export const Score = (props) => {
    const {currentTotal = 0, currentErrors = 0} = props

    const currentRate = (currentTotal === 0)
        ? 100
        : ((1 - (currentErrors / currentTotal)) * 100).toFixed(4)

    return (
        <div>
            <h2 style={{
                color: 'red'
            }}>{`Error: ${currentErrors}`}</h2>
            <h2>{`Correctness: ${currentRate}%`}</h2>
            <h2>{`Total: ${currentTotal}`}</h2>
        </div>
    )

}
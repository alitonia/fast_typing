import React from 'react'

export const Slider = (props) => {
    const {
        data = [],
        historyTrack
    } = props

    return (
        <div style={{
            borderWidth: '1px',
            borderColor: 'red'
        }}>
            <h3 style={{
                paddingLeft: '200px',
                color: 'red',
                fontSize: '24px'
            }}>
                {historyTrack}
            </h3>

            <h3 style={{
                paddingLeft: '200px',
                color: 'yellow',
                fontSize: '24px'
            }}>
                {data}
            </h3>
        </div>
    )
}
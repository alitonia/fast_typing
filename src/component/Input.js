import React from 'react'

export const Input = (props) => {
    const {
        handlePress = () => {
        },
        inputValue = 'a'
    } = props

    return (
        <div style={{
            paddingTop: '20px'
        }}>
            <input style={{
                borderWidth: '1px',
                borderColor: 'black',
                width: '300px',
                height: '50px',
                paddingLeft: '10px',
                paddingRight: '10px'
            }}
                   value={inputValue}
                   onChange={(x) => {
handlePress(x.nativeEvent.data)
                   }}
            />
        </div>
    )

}
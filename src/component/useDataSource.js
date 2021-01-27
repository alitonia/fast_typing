import React, {useState} from 'react'

const level = [
    'asdfjkl',
    'asdfjklgh',
    'qweruiop',
    'zxcvnm',
    'qwertyuiopasdfghjklzxcvbnm'
]

const totalLevel = level.length

const generateData = (levelNumber = 0) => {
    const choices = level[levelNumber]
    return choices.charAt(
        Math.floor(Math.random() * choices.length))
        .repeat(3)
}

const limit = 40

export const useDataSource = (props) => {
    const [currentLevel, setCurrentLevel] = useState(0)

    const [
        currentData,
        setCurrentData
    ] = useState(
        [...Array(10).keys()]
            .map(x => generateData(currentLevel))
            .join('_')
    )

    const [inputData, setInputData] = useState('')

    const [numberOfErrors, setNumberOfErrors] = useState(0)
    const [historyTrack, setHistoryTrack] = useState('')

    const handlePress = (value) => {
        if (value === '') {
            return
        }

        if (
            (value === currentData[0] && value !== '_')
            || (value === " " && currentData[0] === '_')
        ) {
            setCurrentData(prev => prev.slice(1,))
            if (currentData.length % 3 === 0 && currentData.length < limit) {
                setCurrentData(prev => prev + '_' + generateData(currentLevel))
            }
            setInputData(prev => prev + value)
            setHistoryTrack('')
        } else {
            setInputData(prev => prev + value)
            setNumberOfErrors(prev => prev + 1)
            setHistoryTrack(prev => prev + value)
        }
    }

    const reset = () => {
        setInputData('')
        setHistoryTrack('')
        setNumberOfErrors(0)
        setCurrentData([...Array(10).keys()]
            .map(x => generateData(currentLevel))
            .join('_'))
    }

    const handleChangeLevel = (newLevel) => {
        reset()
        setCurrentLevel(newLevel)
    }

    return {
        data: currentData,
        handlePress: handlePress,
        inputValue: inputData,
        currentErrors: numberOfErrors,
        total: inputData.length,
        historyTrack: historyTrack,
        levelCount: totalLevel,
        handleChangeLevel: handleChangeLevel,
        currentLevel:currentLevel
    }
}
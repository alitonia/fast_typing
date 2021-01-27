import {Input} from './component/Input'
import {useDataSource} from './component/useDataSource'
import {Slider} from './component/slider'
import {Score} from './component/score'
import './App.css';

function App() {

    const {
        data,
        handlePress,
        inputValue,
        currentErrors,
        total,
        historyTrack,
        levelCount: totalLevel,
        handleChangeLevel,
        currentLevel
    } = useDataSource()
    return (
        <div className="App">
            <h1 style={{color: 'green'}}>{currentLevel}</h1>

            <Score currentErrors={currentErrors}
                   currentTotal={total}
            />
            <Slider data={data} historyTrack={historyTrack}/>

            <Input handlePress={handlePress}
                   inputValue={inputValue}
            />
            <div style={{height: '30px'}}/>

            {[...Array(totalLevel).keys()].map(x=>{
                return(
                    <button onClick={()=>handleChangeLevel(x)}>{`Level ${x}`}</button>
                )
            })}
        </div>
    );
};

export default App;

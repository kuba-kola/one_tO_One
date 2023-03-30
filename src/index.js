
import React from 'react'; 
import ReactDOM from 'react-dom'
import Counter from './counter';


ReactDOM.render(
    <div> 
        <Counter
            min={0}
            max={13}
        />
    </div>
    , document.getElementById('root')
);

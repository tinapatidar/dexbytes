import React from 'react'

function MemoComp({name}) {
    console.log('memo Component render')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)

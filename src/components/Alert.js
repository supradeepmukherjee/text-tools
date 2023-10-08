import React from 'react'

const Alert = (p) => {
    const capitalise = (word) => {
        if (word === 'danger') word = 'sorry'
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{ height: '60px' }}> {/* The height is set to avoid Cumulative Layout Shift(CLS) */}
            {p.alert &&
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <b>{capitalise(p.alert.type)}</b>{p.alert.msg}
                </div>}
        </div>
    )
}

export default Alert
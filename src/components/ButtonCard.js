import React from 'react'

export default function ButtonCard({ title, styleBtn }) {
    const mainStyle = "btn btn-primary"
    return (
        <div className={styleBtn ? styleBtn : mainStyle}>{title ? title : "btn"}</div>
    )
}
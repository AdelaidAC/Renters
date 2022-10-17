import React from 'react'

export default function Badge({text}) {
    return (
        <h3 className="text-center my-5 d-print-none">Page <span class="badge bg-badge">{text}</span></h3>
    )
}
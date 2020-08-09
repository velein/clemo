import React from 'react'

export default function PageLayout({ children }) {
    return (
        <section style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children}
        </section>
    )
}

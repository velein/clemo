import React from 'react'

const PageLayout: React.FC = ({ children }) => {
    return (
        <section style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children}
        </section>
    )
}

export default PageLayout

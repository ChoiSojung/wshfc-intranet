import * as React from 'react'


export default function ContentBlock({headerClassName, headerText, contentClassName, children}) {

    return (
        <div>
            <ContentBlockHeader className={headerClassName} text={headerText} />
            <div className={contentClassName}>
                {children}
            </div>
        </div>
    )
}

export function ContentBlockHeader({className, text}) {
    return (
        <header className={className}>
            {text}
        </header>
    );
}
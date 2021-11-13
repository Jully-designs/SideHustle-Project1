import React from "react";

const PageLayout = ({children,propChild}) => {
    return(
        <div>
            <h1>HOC</h1>
            {propChild}
            {children}
        </div>
    )
}

export default PageLayout;
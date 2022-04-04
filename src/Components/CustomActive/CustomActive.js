import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
const CustomActive = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={{ backgroundColor: match ? "#8fbc8f" : "#008B8B" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomActive;
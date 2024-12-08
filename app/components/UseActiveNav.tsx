import { useState } from 'react'

const UseActiveNav = (initialActive: any) => {
    const [activeLink, setActiveLink] = useState(initialActive)
    const handleActiveChange = (link: any) => {
        setActiveLink(link);
    };

    return { activeLink, handleActiveChange };
};

export default UseActiveNav
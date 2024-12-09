import { useState } from 'react'

const UseActiveNav = (initialActive: string) => {
    const [activeLink, setActiveLink] = useState(initialActive)
    const handleActiveChange = (link: string) => {
        setActiveLink(link);
    };

    return { activeLink, handleActiveChange };
};

export default UseActiveNav
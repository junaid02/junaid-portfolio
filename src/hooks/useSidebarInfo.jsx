"use client"
import { useState } from 'react';

const useSidebarInfo = () => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const openInfoBar = () => {
        setIsInfoOpen(true);
        document.querySelector('.side').classList.add('on');
    };

    const closeInfoBar = () => {
        setIsInfoOpen(false);
        document.querySelector('.side').classList.remove('on');
    };

    return { isInfoOpen, openInfoBar, closeInfoBar };
};

export default useSidebarInfo
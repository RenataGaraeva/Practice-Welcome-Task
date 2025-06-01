'use client'

import {useEffect, useState} from "react";

export default function Theme_light_dark () {

    const [isLight, setIsLight] = useState(true)

    useEffect(() => {
        if (!isLight) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-bs-theme');
        }
    }, [isLight]);


    return (
        <div className="d-flex justify-content-end mt-2 me-2">
            {
                isLight ?
                    <button className="btn btn-outline-primary" onClick={() => setIsLight(false)}>Темная тема</button> :
                    <button className="btn btn-outline-primary" onClick={() => setIsLight(true)}>Светлая тема</button>
            }
        </div>
    )
}
import React, { useState, useEffect } from 'react'

type Props = {
    Component: React.FC,
    ComponentMobile?: React.FC,
}
type Screen = {
    width: number,
    height: number
}


export default function ResponsiveItem({Component, ComponentMobile}: Props) {
    const [screen, setScreen] = useState<Screen>({
        width: window.innerWidth,
        height: window.innerHeight
    })
    // console.log(screen.width);
    useEffect(() => {
        // khi người dùng resize
        let resizeFunction = () => {
            //Lấy ra kích thước mới của window
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.onresize = resizeFunction;
        return()=>{
            window.removeEventListener('resize', resizeFunction)
        }
    }, [])

    let ComponentRender = Component;
    if(screen.width < 768 && ComponentMobile) {
        ComponentRender = ComponentMobile;
    }
    return <>
        <ComponentRender />
    </>
    
}


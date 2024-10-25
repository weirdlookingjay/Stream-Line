import React from 'react'
import LandingPageNavBar from './_components/navbar'

type Props = {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <div className='flex flex-col py-10 px-10 xl:px-0 container dark:text-white'>
            <LandingPageNavBar />
            {children}
        </div>
    )
}

export default layout
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Header() {
    return (
        <>

            <div className="mx-auto  max-w-screen-2xl ">
                <div className="flex">

                    
                    <div className="w-full h-20 bg-blue-900">
                        <div className="flex justify-end items-center ">
                            <ExitToAppIcon className="text-white mr-5 my-5"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

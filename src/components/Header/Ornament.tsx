import React, { useState } from "react";

/**
 * Decoration at the top of the Header.
 *
 * @author Gregory Albert <gregoryalbert1209@gmail.com>
 * @since 2024-02-23
 *
 * @returns {JSX.Element} A React component.
 */
export default function Ornament(): JSX.Element {
    return (
        <>
            <div className="flex right-0 top-0 absolute flex-col m-0">
                <span className="bg-white w-lvw h-1 " />
                <div className="flex z-10 w-full">
                    <span className="bg-gray-800 w-full h-4 border-r-2 rounded-r-lg border-r-gray-800" />
                    <span className="bg-gray-800 w-full h-4 border-l-2 rounded-l-lg border-l-gray-800" />
                </div>
            </div>
            <div className=" right-0 top-1 absolute bg-white w-full h-2"/>
        </>

    );
    
}

import React from 'react';
import Button from "./Button";

export default function AddCounter({ addcounter, resetcountrt }) {
    return (
        <div className="h-auto flex flex-col items-end justify-end space-y-5">
            <div className="flex space-x-3">
                <Button className="bg-indigo-400 text-white" handler={() => addcounter()}>+ Add Counter</Button>
                <Button className="bg-red-400 text-white" handler={() => resetcountrt()}>Reset</Button>
            </div>
        </div>
    );
}

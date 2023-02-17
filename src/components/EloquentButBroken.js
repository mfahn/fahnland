import Dropdown from 'react-bootstrap/esm/Dropdown';
import React, { useState } from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { BrowserRouter, Router, Route, Switch, Routes } from 'react-router-dom';

function EloquentButBroken() {
    const [display, setDisplay]= useState(false);
    const hoverOn = () => { 
        if(!setDisplay){
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }
    return (
        <div class="ring-lowTeal">
        <Dropdown class="relative ring-dark hover:{'ring-lowTeal','text-lowTeal'}">
            <DropdownToggle class=" hover:text-lowTeal ml-1 mr-1">
                <div class="relative z-10 block rounded-sm text-xl p-2 ml-1 mr-1 space-x-2 float-left">Essays</div>

                <svg class="h-5 w-5 mt-3 float-right relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd" clip-rule="evenodd"/>
                    </svg>
            </DropdownToggle>

            <DropdownMenu class="">
                <BrowserRouter>
                    <Routes>
                        <DropdownItem>
                            <div class="text-xl ring ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'text-xl', 'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal', 'p-2', 'ml-1', 'mr-1'}" to="./porn's-effect-on-relationships"><Route>Porn</Route></div>
                        </DropdownItem>
                    </Routes>
                </BrowserRouter>
            </DropdownMenu>
        </Dropdown>
        </div>
    );
}

export default EloquentButBroken;
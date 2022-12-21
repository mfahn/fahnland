import { Dropdown } from 'bootstrap';
import React from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { BrowserRouter, Router, Route, Switch, Routes } from 'react-router-dom';


function TopEssays() {
    return (
        <Dropdown class="relative">
            <DropdownToggle class="ring ring-dark hover:ring-lowTeal hover:text-lowTeal ml-1 mr-1">
                <div class="relative z-10 block rounded-sm bg-white hover:ring-lowTeal focus:outline-none text-xl hover:text-lowTeal p-2 ml-1 mr-1 space-x-2 float-left">Essays
                    <svg class="h-5 w-5 float-right relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd" clip-rule="evenodd"/>
                    </svg>
                </div>
            </DropdownToggle>

            <DropdownMenu>
                <BrowserRouter>
                    <Routes>
                        <DropdownItem>
                            <Route class="text-xl ring ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'text-xl', 'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal', 'p-2', 'ml-1', 'mr-1'}" to="/porn's-effect-on-relationships">Porn</Route>
                        </DropdownItem>
                    </Routes>
                </BrowserRouter>
            </DropdownMenu>
        </Dropdown>
    );
}

export default TopEssays;
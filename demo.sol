// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract demo {
    uint public x=10;

    function set(uint _x) public {
        x=_x;
    }
}
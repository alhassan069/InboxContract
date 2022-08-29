// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here

contract Inbox {
    string public message;

    // function Inbox(string initialMessage) public {
    //     message = initialMessage;
    // }

    constructor(string memory initialMessage){
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public{
        message = newMessage;
    }

    // function getMessage() public view returns (string){
    //     return message;
    // }
}
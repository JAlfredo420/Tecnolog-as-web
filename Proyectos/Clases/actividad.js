"use strict";
(() => {
    //Jose Alfredo Herrera Ramirez
    class Manager {
        constructor(name, id, phoneNo, location) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
            this.name = name;
            this.phoneNo = phoneNo;
            this.location = location;
        }
        purchaseInventory() { }
        recordComplaints() { }
        manageStaff() { }
    }
    //2
    class Chef {
        constructor(name, id, location) {
            this.name = name;
            this.id = id;
            this.location = location;
            this.name = name;
            this.id = id;
            this.location = location;
        }
        takeOrders() { }
    }
    //3
    class Housekeeping {
        constructor(name, id, location) {
            this.name = name;
            this.id = id;
            this.location = location;
            this.name = name;
            this.id = id;
            this.location = location;
        }
        cleanRoom() { }
    }
    //4
    class Guest {
        constructor(name, id, phoneNo, address, roomNo) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.address = address;
            this.roomNo = roomNo;
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.address = address;
            this.roomNo = roomNo;
        }
        checkIn() { }
        checkOut() { }
        payBill() { }
        orderFood() { }
        submitFeedback() { }
    }
    //5 
    class Receptionist {
        constructor(name, id, phoneNo, location) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
        }
        checkRoomAvailability() { }
        bookRoom() { }
        generateBill() { }
        acceptCustomerFeedback() { }
    }
    //6.
    class Inventory {
        constructor(type, status) {
            this.type = type;
            this.status = status;
            this.type = type;
            this.status = status;
        }
    }
    //7
    class Room {
        constructor(roomNo, location) {
            this.roomNo = roomNo;
            this.location = location;
            this.roomNo = roomNo;
            this.location = location;
        }
    }
    //8
    class Bill {
        constructor(billNo, guestName) {
            this.billNo = billNo;
            this.guestName = guestName;
            this.billNo = billNo;
        }
    }
    //9
    class FoodItems {
        constructor(id, name) {
            this.id = id;
            this.name = name;
            this.id = id;
            this.name = name;
        }
    }
    //10
})();

(()=>{

    //Jose Alfredo Herrera Ramirez
    class Manager {
    constructor(
        public name: string, public id: number,
        public phoneNo: number,public location: string
    ) {
        this.name=name;this.phoneNo=phoneNo;
        this.location=location;

    }
    purchaseInventory(): void {}
    recordComplaints(): void {}
    manageStaff(): void {}
    }

    //2

    class Chef {
    constructor(
        public name: string,public id: number,
        public location: string
    ) {
        this.name=name; this.id=id;
        this.location=location;
    }
    takeOrders(): void {}
    }
    //3
    class Housekeeping {
    constructor(
        public name: string,
        public id: number,
        public location: string
    ) {
        this.name=name;
        this.id=id;
        this.location=location;
    }

    cleanRoom(): void {}
    }

    //4
    class Guest {
    constructor(
        public name: string,public id: number,
        public phoneNo: number, public address: string,
        public roomNo: number
    ) {
        this.name=name; this.id=id; this.phoneNo=phoneNo;
        this.address=address; this.roomNo=roomNo;
    }

    checkIn(): void {}
    checkOut(): void {}
    payBill(): void {}
    orderFood(): void {}
    submitFeedback(): void {}
}


//5 
    class Receptionist {
    constructor(
        public name: string,
        public id: number,
        public phoneNo: number,
        public location: string
    ) {
        this.name=name; this.id=id; this.phoneNo=phoneNo;
        this.location=location;
    }

    checkRoomAvailability(): void {}
    bookRoom(): void {}
    generateBill(): void {}
    acceptCustomerFeedback(): void {}
}

    //6.
    class Inventory {
    constructor(
        public type: string,
        public status: string
    ) {
        this.type=type; this.status=status;
    }
}

    //7
    class Room {
    constructor(
        public roomNo: number,
        public location: string
    ) {
        this.roomNo=roomNo; this.location=location;
    }
}
 //8
    class Bill {
    constructor(
        public billNo: number,
        public guestName: string
    ) {
        this.billNo=billNo;
    }
}

    //9
    class FoodItems {
    constructor(
        public id: number,
        public name: string
    ) {this.id=id;
        this.name=name;
    }
}
})()

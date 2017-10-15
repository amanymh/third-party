import { Injectable } from '@angular/core';

export class Task {
    ID: number;
    Subject: string;
    StartDate: string;
    DueDate: string;
    Status: string;
    Priority: string;
    Completion: number;
}

export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
     Phone: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
    StateID: number;
     Email: string;
     CityID: number;
      OrderDate: string;
      OrderNumber: number;
        SaleAmount: number;
        nameAr: string;
    nameEn: string;
     capitalAr: string;
    capitalEn: string;
     Tasks: Task[];
}

export class State {
    ID: number;
    Name: string;
}

export class City {
    ID: number;
    Name: string;
    StateID: number;
}
export class Population {
    country: string;
    y014: number;
    y1564: number;
    y65: number;
}

export class Data {
    day: string;
    oranges: number;
    
}
export class PopulationByRegion {
    region: string;
    val: number;
}
export class Product {
    id: string;
    name: string;
    iconSrc?: string;
    price?: number;
    disabled?: boolean;
    items?: Product[];
}
var products: Product[] = [{
    id: "1",
    name: "Video Players",
    items: [{
        id: "1_1",
        name: "HD Video Player",
        price: 220
       
    }, {
        id: "1_2",
        name: "SuperHD Video Player",
      
        price: 270
    }]
}, {
    id: "2",
    name: "Televisions",
    items: [{
        id: "2_1",
        name: "SuperLCD 42",
      
        price: 1200
    }, {
        id: "2_2",
        name: "SuperLED 42",
     
        price: 1450
    }, {
        id: "2_3",
        name: "SuperLED 50",
        
        price: 1600
    }, {
        id: "2_4",
        name: "SuperLCD 55 (Not available)",
     
        price: 1350,
        disabled: true
    }, {
        id: "2_5",
        name: "SuperLCD 70",
    
        price: 4000
    }]
},{
    id: "3",
    name: "Monitors",
    items: [{
        id: "3_1",
        name: "19\"",
        items: [{
            id: "3_1_1",
            name: "DesktopLCD 19",
         
            price: 160
        }]
    }, {
        id: "3_2",
        name: "21\"",
        items: [{
            id: "3_2_1",
            name: "DesktopLCD 21",
            
            price: 170
        }, {
            id: "3_2_2",
            name: "DesktopLED 21",
            
            price: 175
        }]
    }]


   
}];


let populationByRegions: PopulationByRegion[] = [{
    region: "Asia",
    val: 4119626293
}, {
    region: "Africa",
    val: 1012956064
}, {
    region: "Northern America",
    val: 344124520
}, {
    region: "Latin America and the Caribbean",
    val: 590946440
}, {
    region: "Europe",
    val: 727082222
}, {
    region: "Oceania",
    val: 35104756
}];


let data: Data[] = [{
    day: "Monday",
    oranges: 3
}, {
    day: "Tuesday",
    oranges: 2
}, {
    day: "Wednesday",
    oranges: 3
}, {
    day: "Thursday",
    oranges: 4
}, {
    day: "Friday",
    oranges: 6
}, {
    day: "Saturday",
    oranges: 11
}, {
    day: "Sunday",
    oranges: 4
}];

let populationData: Population[] = [{
    country: "China",
    y014: 320866959,
    y1564: 853191410,
    y65: 87774113
}, {
    country: "India",
    y014: 340419115,
    y1564: 626520945,
    y65: 47063757
}, {
    country: "United States",
    y014: 58554755,
    y1564: 182172625,
    y65: 34835293
}, {
    country: "Indonesia",
    y014: 68715705,
    y1564: 146014815,
    y65: 10053690
}, {
    country: "Brazil",
    y014: 50278034,
    y1564: 113391494,
    y65: 9190842
}, {
    country: "Russia",
    y014: 26465156,
    y1564: 101123777,
    y65: 18412243
}];


let employees: Employee[] = [{
    "ID": 1,
    nameAr: "النمسا",
    nameEn: "Austria",
     capitalAr: "فيينا",
    capitalEn: "Vienna",
    "FirstName": "John",
    "LastName": "Heart",
     "OrderNumber": 35703,
    "Prefix": "Mr.",
     "OrderDate": "2014/04/10",
    "Position": "CEO",
    "BirthDate": "1964/03/16",
    "HireDate": "1995/01/15",
      "Email": "jhesghjart@dx-email.com",
    "Notes": "John has been in the Audio/Video indub hg bnh nbn  stry since 1990.",
    "Address": "351 S Hill St.",
    "StateID": 5,
    "CityID": 1,
     "SaleAmount": 16050,
      "Phone": "(213) 555-9392",
       "Tasks": [{
        "ID": 5,
        "Subject": "Choose between PPO and HMO Health Plan",
        "StartDate": "2013/02/15",
        "DueDate": "2013/04/15",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 75
    }, {
        "ID": 22,
        "Subject": "Update NDA Agreement",
        "StartDate": "2013/03/14",
        "DueDate": "2013/03/16",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 52,
        "Subject": "Review Product Recall Report by Engineering Team",
        "StartDate": "2013/05/17",
        "DueDate": "2013/05/20",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }]
}, {
    "ID": 2,
    nameAr: "بلغاريا",
    nameEn: "Bulgaria",
      capitalAr: "صوفيا",
    capitalEn: "Sofia",
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Prefix": "Mrs.",
    "OrderNumber": 35711,
    "OrderDate": "2014/01/12",
     "Phone": "(310) 555-2728",
    "Position": "Sales Assistant",
    "BirthDate": "1981/06/03",
      "Email": "jananrt@dx-email.com",
    "HireDate": "2012/05/14",
    "Notes": "Olivia loves to sell. She has been sehb nlling DevAV products since 2012.",
    "Address": "807 W Paseo Del Mar",
    "StateID": 5,
     "SaleAmount": 3725,
     "CityID": 2,
     "Tasks": [{
        "ID": 3,
        "Subject": "Update Personnel Files",
        "StartDate": "2013/02/03",
        "DueDate": "2013/02/28",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 50,
        "Subject": "Give Final Approval for Refunds",
        "StartDate": "2013/05/05",
        "DueDate": "2013/05/15",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }]
}, {
    "ID": 3,
     nameAr: "قبرص",
    nameEn: "Cyprus",
     capitalAr: "زغرب",
    capitalEn: "Zagreb",
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Prefix": "Mr.",
     "OrderNumber": 35714,
     "OrderDate": "2014/01/22",
      "Email": "jhearkjhgt@dx-email.com",
     "Phone": "(818) 555-2387",
    "Position": "CMO",
    "BirthDate": "1974/09/07",
    "HireDate": "2002/11/08",
      "SaleAmount": 14200,
    "Notes": "Robert was recently voted the CMO of hbhg ygvg hgvthe year by CMO Magazine. ",
    "Address": "4 Westmoreland Pl.",
    "StateID": 4,
     "CityID": 3,
      "Tasks": [{
        "ID": 16,
        "Subject": "Deliver R&D Plans for 2013",
        "StartDate": "2013/03/01",
        "DueDate": "2013/03/10",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    },  {
        "ID": 117,
        "Subject": "Approval on Converting to New HDMI Specification",
        "StartDate": "2014/01/11",
        "DueDate": "2014/01/31",
        "Status": "Deferred",
        "Priority": "Normal",
        "Completion": 75
    }]
}, {
    "ID": 4,
     nameAr: "الجمهورية التشيكية",
    nameEn: "Czech Republic",
    "FirstName": "Greta",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
     "OrderNumber": 35983,
    "LastName": "Sims",
    "Prefix": "Ms.",
      "OrderDate": "2014/02/07",
      "Email": "hgfhgart@dx-email.com",
     "Phone": "(818) 555-6546",
    "Position": "HR Manager",
    "BirthDate": "1977/11/22",
    "HireDate": "1998/04/23",
     "CityID": 4,
       "SaleAmount": 7800,
    "Notes": "Greta has been DevAV's HR Managjgujf bhjgv b hg hg nhbvggh nger since 2003.",
    "Address": "1700 S Grandview Dr.",
    "StateID": 11,
     "Tasks": [{
        "ID": 16,
        "Subject": "Deliver R&D Plans for 2013",
        "StartDate": "2013/03/01",
        "DueDate": "2013/03/10",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 117,
        "Subject": "Approval on Converting to New HDMI Specification",
        "StartDate": "2014/01/11",
        "DueDate": "2014/01/31",
        "Status": "Deferred",
        "Priority": "Normal",
        "Completion": 75
    }]
}, {
    "ID": 5,
    nameAr: "استونيا",
    nameEn: "Estonia",
     "OrderNumber": 38466,
    "FirstName": "Brett",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
    "LastName": "Wade",
    "Prefix": "Mr.",
     "SaleAmount": 9050,
      "OrderDate": "2014/05/07",
     "Phone": "(818) 559-6546",
    "Position": "IT Manager",
      "Email": "jhaaaat@dx-email.com",
    "BirthDate": "1968/12/01",
    "HireDate": "2009/03/06",
     "CityID": 5,
    "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.",
    "Address": "1120 Old Mill Rd.",
    "StateID": 13,
     "Tasks": [{
        "ID": 16,
        "Subject": "Deliver R&D Plans for 2013",
        "StartDate": "2013/03/01",
        "DueDate": "2013/03/10",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100,
        
    },  {
        "ID": 117,
        "Subject": "Approval on Converting to New HDMI Specification",
        "StartDate": "2014/01/11",
        "DueDate": "2014/01/31",
        "Status": "Deferred",
        "Priority": "Normal",
        "Completion": 75
    }]


}];

let states: State[] = [{
    "ID": 1,
    "Name": "Alabama"
}, {
    "ID": 2,
    "Name": "Alaska"
}, {
    "ID": 3,
    "Name": "Arizona"
}, {
    "ID": 4,
    "Name": "Arkansas"
}, {
    "ID": 5,
    "Name": "California"
}, {
    "ID": 6,
    "Name": "Colorado"
}, {
    "ID": 7,
    "Name": "Connectictu"
}, {
    "ID": 8,
    "Name": "Delaware"
}, {
    "ID": 9,
    "Name": "District of Columbia"
}, {
    "ID": 10,
    "Name": "Florida"
}, {
    "ID": 11,
    "Name": "Georgia"
}, {
    "ID": 12,
    "Name": "Hawaii"
}, {
    "ID": 13,
    "Name": "Idaho"
}, {
    "ID": 14,
    "Name": "Illinois"
}, {
    "ID": 15,
    "Name": "Indiana"
}, {
    "ID": 16,
    "Name": "Iowa"
}, {
    "ID": 17,
    "Name": "Kansas"
}, {
    "ID": 18,
    "Name": "Kentucky"
}, {
    "ID": 19,
    "Name": "Louisiana"
}, {
    "ID": 20,
    "Name": "Maine"
}, {
    "ID": 21,
    "Name": "Maryland"
}, {
    "ID": 22,
    "Name": "Massachusetts"
}, {
    "ID": 23,
    "Name": "Michigan"
}, {
    "ID": 24,
    "Name": "Minnesota"
}, {
    "ID": 25,
    "Name": "Mississippi"
}, {
    "ID": 26,
    "Name": "Missouri"
}, {
    "ID": 27,
    "Name": "Montana"
}, {
    "ID": 28,
    "Name": "Nebraska"
}, {
    "ID": 29,
    "Name": "Nevada"
}, {
    "ID": 30,
    "Name": "New Hampshire"
}, {
    "ID": 31,
    "Name": "New Jersey"
}, {
    "ID": 32,
    "Name": "New Mexico"
}, {
    "ID": 33,
    "Name": "New York"
}, {
    "ID": 34,
    "Name": "North Carolina"
}, {
    "ID": 35,
    "Name": "Ohio"
}, {
    "ID": 36,
    "Name": "Oklahoma"
}, {
    "ID": 37,
    "Name": "Oregon"
}, {
    "ID": 38,
    "Name": "Pennsylvania"
}, {
    "ID": 39,
    "Name": "Rhode Island"
}, {
    "ID": 40,
    "Name": "South Carolina"
}, {
    "ID": 41,
    "Name": "South Dakota"
}, {
    "ID": 42,
    "Name": "Tennessee"
}, {
    "ID": 43,
    "Name": "Texas"
}, {
    "ID": 44,
    "Name": "Utah"
}, {
    "ID": 45,
    "Name": "Vermont"
}, {
    "ID": 46,
    "Name": "Virginia"
}, {
    "ID": 47,
    "Name": "Washington"
}, {
    "ID": 48,
    "Name": "West Virginia"
}, {
    "ID": 49,
    "Name": "Wisconsin"
}, {
    "ID": 50,
    "Name": "Wyoming"
}, {
    "ID": 51,
    "Name": "North Dakota"
}];

let cities: City[] = [{
    "ID": 1,
    "Name": "Tuscaloosa",
    "StateID": 1
}, {
    "ID": 2,
    "Name": "Hoover",
    "StateID": 1
}, {
    "ID": 3,
    "Name": "Dothan",
    "StateID": 1
}, {
    "ID": 4,
    "Name": "Decatur",
    "StateID": 1
}, {
    "ID": 5,
    "Name": "Anchorage",
    "StateID": 2
}, {
    "ID": 6,
    "Name": "Fairbanks",
    "StateID": 2
}, {
    "ID": 7,
    "Name": "Juneau",
    "StateID": 2
}, {
    "ID": 8,
    "Name": "Avondale",
    "StateID": 3
}, {
    "ID": 9,
    "Name": "Buckeye",
    "StateID": 3
}, {
    "ID": 10,
    "Name": "Carefree",
    "StateID": 3
}, {
    "ID": 11,
    "Name": "Springdale",
    "StateID": 4
}, {
    "ID": 12,
    "Name": "Rogers",
    "StateID": 4
}, {
    "ID": 13,
    "Name": "Sherwood",
    "StateID": 4
}, {
    "ID": 14,
    "Name": "Jacksonville",
    "StateID": 4
}, {
    "ID": 15,
    "Name": "Cabot",
    "StateID": 4
}, {
    "ID": 16,
    "Name": "Adelanto",
    "StateID": 5
}, {
    "ID": 17,
    "Name": "Glendale",
    "StateID": 5
}, {
    "ID": 18,
    "Name": "Moorpark",
    "StateID": 5
}, {
    "ID": 19,
    "Name": "Needles",
    "StateID": 5
}, {
    "ID": 20,
    "Name": "Ontario",
    "StateID": 5
}];

@Injectable()
export class Service {
    getEmployees() {
        return employees;
    }
    getStates() {
        return states;
    }
     getCities() {
        return cities;
    }
    getPopulationData(): Population[] {
        return populationData;
    }
      getData(): Data[] {
        return data;
    }
     getPopulationByRegions(): PopulationByRegion[] {
        return populationByRegions;
    }
     getProducts(): Product[] {
        return products;
    }
}









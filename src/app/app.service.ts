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
    "ID": 6,
    nameAr: "استونيا",
    nameEn: "Estonia",
    "FirstName": "Sandra",
    "LastName": "Johnson",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
    "Prefix": "Mrs.",
    "OrderNumber": 39420,
    "OrderDate": "2014/03/11",
      "Email": "jhbbhht@dx-email.com",
     "Phone": "(818) 585-6546",
    "Position": "Controller",
    "BirthDate": "1974/11/15",
     "CityID": 6,
      "SaleAmount": 20400,
    "HireDate": "2005/05/11",
    "Notes": "Sandra is a CPA and has been our conghghtroller since 2008. She loves to",
    "Address": "4600 N Virginia Rd.",
    "StateID": 44,
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
    "ID": 7,
    nameAr: "استونيا",
    nameEn: "Estonia",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "OrderNumber": 39874,
    "OrderDate": "2014/03/01",
      "Email": "jheart@dx-email.com",
     "Phone": "(818) 955-6546",
    "Position": "Shipping Manager",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
     "CityID": 7,
      "SaleAmount": 6050,
    "Notes": "Kevin is our hard-working shipping manager and has been helping that .",
    "Address": "424 N Main St.",
    "StateID": 5,
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
    "ID": 8,
    nameAr: "استونيا",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
    nameEn: "Estonia",
    "FirstName": "Cynthia",
    "LastName": "Stanwick",
    "Prefix": "Ms.",
     "OrderNumber": 42847,
    "OrderDate": "2014/09/01",
    "Email": "aevinc@dx-email.com",
     "Phone": "(878) 555-6546",
    "Position": "HR Assistant",
    "BirthDate": "1985/06/05",
    "HireDate": "2008/03/24",
     "CityID": 8,
       "SaleAmount": 15850,
    "Notes": "Cindy joined us in 2008 and has been in the HR department for 2 years. !",
    "Address": "2211 Bonita Dr.",
    "StateID": 4,
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
    "ID": 9,
    nameAr: "استونيا",
    nameEn: "Estonia",
    "FirstName": "Kent",
    "LastName": "Samuelson",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
     "OrderNumber": 56272,
    "Prefix": "Dr.",
    "OrderDate": "2013/03/01",
    "Email": "kevinc@dx-email.com",
     "Phone": "(818) 555-7546",
    "Position": "Ombudsman",
    "BirthDate": "1972/09/11",
     "CityID": 9,
      "SaleAmount": 11050,
    "HireDate": "2009/04/22",
    "Notes": "As our ombudsman, Kent is on the fronthhhhhh-lines solving customerhestra.",
    "Address": "12100 Mora Dr",
    "StateID": 26,
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
    "ID": 10,
    nameAr: "استونيا",
    nameEn: "Estonia",
    "FirstName": "Taylor",
    "LastName": "Riley",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
    "Prefix": "Mr.",
      "OrderNumber": 58292,
    "OrderDate": "2014/03/06",
     "Email": "brettw@dx-email.com",
     "Phone": "(818) 551-6546",
    "Position": "Network Admin",
    "BirthDate": "1982/08/14",
    "HireDate": "2012/04/14",
     "CityID": 10,
       "SaleAmount": 13500,
    "Notes": "If you are like the rest of us at DevAV, hhhhhthen you've probablt.",
    "Address": "7776 Torreyson Dr",
    "StateID": 5,
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
    "ID": 11,
    nameAr: "استونيا",
    nameEn: "Estonia",
    "FirstName": "Sam",
    "LastName": "Hill",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
    "Prefix": "Mr.",
     "OrderNumber": 65977,
    "OrderDate": "2014/02/15",
     "Phone": "(818) 955-6546",
    "Position": "Sales Assistant",
    "BirthDate": "1984/02/17",
    "Email": "gretas@dx-email.com",
    "HireDate": "2012/02/01",
     "CityID": 11,
       "SaleAmount": 3500,
    "Notes": "Sammy is proud to be a member of the DevAV team. He joined the weekend.",
    "Address": "645 Prospect Crescent",
    "StateID": 11,
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
    "ID": 12,
    nameAr: "استونيا",
    nameEn: "Estonia",
    "FirstName": "Kelly",
    "LastName": "Rodriguez",
    "Prefix": "Ms.",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
     "OrderNumber": 68428,
     "OrderDate": "2014/02/15",
     "Phone": "(818) 552-6546",
     "Email": "robertr@dx-email.com",
    "Position": "Support Assistant",
    "BirthDate": "1988/05/11",
     "CityID": 12,
      "SaleAmount": 14200,
    "HireDate": "2012/10/13",
    "Notes": "Kelly loves people and that's why she joined DevAV's suppor Factory.",
    "Address": "1601 W Mountain St.",
    "StateID": 5,
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
    "ID": 13,
    nameAr: "استونيا",
    nameEn: "Estonia",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
    "FirstName": "Natalie",
    "LastName": "Maguirre",
    "Prefix": "Mrs.",
     "OrderNumber": 72947,
     "OrderDate": "2014/07/15",
     "Phone": "(818) 554-6546",
      "CityID": 13,
    "Position": "Trainer",
    "BirthDate": "1977/10/07",
     "Email": "aliviap@dx-email.com",
    "HireDate": "2008/06/19",
      "SaleAmount": 13350,
    "Notes": "Natalie travels the US and teaches our partners t the elementary school.",
    "Address": "6400 E Bixby Hill Rd",
    "StateID": 29,
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
    "ID": 14,
    nameAr: "استونيا",
    nameEn: "Estonia",
    "FirstName": "Walter",
    "LastName": "Hobbs",
    "Prefix": "Mr.",
     capitalAr: "نيقوسيا",
    capitalEn: "Nicosia",
     "CityID": 14,
      "OrderNumber": 73947,
      "OrderDate": "2016/02/15",
     "Phone": "(818) 575-6546",
    "Position": "Programmer",
     "SaleAmount": 14200,
     "Email": "oliviap@dx-email.com",
    "BirthDate": "1984/12/24",
    "HireDate": "2011/02/17",
    "Notes": "Walter has been developing apps and webs - writing code and fixing bugs.",
    "Address": "10385 Shadow Oak Dr",
    "StateID": 13,
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
}









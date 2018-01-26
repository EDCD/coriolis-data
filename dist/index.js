module.exports = {
  Ships: {
    adder: {
      edID: 128049267,
      eddbID: 1,
      properties: {
        name: "Adder",
        manufacturer: "Zorgon Peterson",
        class: 1,
        hullCost: 4e4,
        speed: 220,
        boost: 320,
        boostEnergy: 9,
        baseShieldStrength: 60,
        baseArmour: 90,
        hardness: 35,
        hullMass: 35,
        masslock: 7,
        pipSpeed: .13625,
        pitch: 38,
        roll: 100,
        yaw: 14,
        crew: 2
      },
      retailCost: 87810,
      bulkheads: [ {
        id: "BC",
        edID: 128049268,
        eddbID: 753,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BD",
        edID: 128049269,
        eddbID: 754,
        grp: "bh",
        cost: 35120,
        mass: 3,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BE",
        edID: 128049270,
        eddbID: 755,
        grp: "bh",
        cost: 79030,
        mass: 5,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BF",
        edID: 128049271,
        eddbID: 756,
        grp: "bh",
        cost: 186770,
        mass: 5,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BG",
        edID: 128049272,
        eddbID: 757,
        grp: "bh",
        cost: 206960,
        mass: 5,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 3, 3, 3, 1, 2, 3, 3 ],
        hardpoints: [ 2, 1, 1, 0, 0 ],
        internal: [ 3, 3, 2, 2, 1 ]
      },
      defaults: {
        standard: [ "3E", "3E", "3E", "1E", "2E", "3E", "3C" ],
        hardpoints: [ 0, 17, 17, 0, 0 ],
        internal: [ "01", "44", "00", 0, "2h" ]
      }
    },
    anaconda: {
      edID: 128049363,
      eddbID: 2,
      properties: {
        name: "Anaconda",
        manufacturer: "Faulcon DeLacy",
        class: 3,
        hullCost: 141889930,
        speed: 180,
        boost: 240,
        boostEnergy: 27,
        baseShieldStrength: 350,
        baseArmour: 525,
        hardness: 65,
        hullMass: 400,
        masslock: 23,
        pipSpeed: .13875,
        fighterHangars: true,
        pitch: 25,
        roll: 60,
        yaw: 10,
        crew: 3
      },
      retailCost: 146969450,
      bulkheads: [ {
        id: "bT",
        edID: 128049364,
        eddbID: 818,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bU",
        edID: 128049365,
        eddbID: 819,
        grp: "bh",
        cost: 58787780,
        mass: 30,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bV",
        edID: 128049366,
        eddbID: 820,
        grp: "bh",
        cost: 132272510,
        mass: 60,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bW",
        edID: 128049367,
        eddbID: 821,
        grp: "bh",
        cost: 312604020,
        mass: 60,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bX",
        edID: 128049368,
        eddbID: 822,
        grp: "bh",
        cost: 346407e3,
        mass: 60,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 8, 7, 6, 5, 8, 8, 5 ],
        hardpoints: [ 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 7, 6, 6, 6, 5, 5, 5, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 4, 4, 4, 2 ]
      },
      defaults: {
        standard: [ "8E", "7E", "6E", "5E", "8E", "8E", "5C" ],
        hardpoints: [ 0, 0, 0, 0, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "05", "04", "4j", 0, "03", 0, 0, 0, 0, 0, "2h", "00" ]
      }
    },
    asp: {
      edID: 128049303,
      eddbID: 3,
      properties: {
        name: "Asp Explorer",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 6135660,
        speed: 250,
        boost: 340,
        boostEnergy: 13,
        baseShieldStrength: 140,
        baseArmour: 210,
        hardness: 52,
        hullMass: 280,
        masslock: 11,
        pipSpeed: .13,
        pitch: 38,
        roll: 100,
        yaw: 10,
        crew: 2
      },
      retailCost: 6661150,
      bulkheads: [ {
        id: "BH",
        edID: 128049304,
        eddbID: 778,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BI",
        edID: 128049305,
        eddbID: 779,
        grp: "bh",
        cost: 2664460,
        mass: 21,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BJ",
        edID: 128049306,
        eddbID: 780,
        grp: "bh",
        cost: 5995040,
        mass: 42,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BK",
        edID: 128049307,
        eddbID: 781,
        grp: "bh",
        cost: 14168270,
        mass: 42,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BL",
        edID: 128049308,
        eddbID: 782,
        grp: "bh",
        cost: 15700340,
        mass: 42,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 5, 5, 5, 4, 4, 5, 5 ],
        hardpoints: [ 2, 2, 1, 1, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 5, 3, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "5E", "5E", "5E", "4E", "4E", "5E", "5C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "4e", "01", 0, 0, "00", "2h" ]
      }
    },
    asp_scout: {
      edID: 128672276,
      eddbID: 24,
      properties: {
        name: "Asp Scout",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 3818240,
        speed: 220,
        boost: 300,
        boostEnergy: 13,
        baseShieldStrength: 120,
        baseArmour: 180,
        hardness: 52,
        hullMass: 150,
        masslock: 8,
        pipSpeed: .125,
        pitch: 40,
        roll: 110,
        yaw: 15,
        crew: 2
      },
      retailCost: 3961150,
      bulkheads: [ {
        id: "c1",
        edID: 128672278,
        eddbID: 1503,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "c2",
        edID: 128672279,
        eddbID: 1504,
        grp: "bh",
        cost: 1584460,
        mass: 21,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "c3",
        edID: 128672280,
        eddbID: 1505,
        grp: "bh",
        cost: 3565040,
        mass: 42,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "c4",
        edID: 128672281,
        eddbID: 1506,
        grp: "bh",
        cost: 8425380,
        mass: 42,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "c5",
        edID: 128672282,
        eddbID: 1507,
        grp: "bh",
        cost: 9336440,
        mass: 42,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 3, 4, 4, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0 ],
        internal: [ 5, 4, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "3E", "4E", "4E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0 ],
        internal: [ "02", "02", "44", 0, 0, 0 ]
      }
    },
    beluga: {
      edID: 128049345,
      eddbID: 30,
      properties: {
        name: "Beluga Liner",
        manufacturer: "Saud Kruger",
        class: 3,
        hullCost: 79654610,
        speed: 200,
        boost: 280,
        boostEnergy: 19,
        baseShieldStrength: 280,
        baseArmour: 280,
        hardness: 60,
        hullMass: 950,
        masslock: 18,
        pipSpeed: .1125,
        luxuryCabins: true,
        fighterHangars: true,
        pitch: 25,
        roll: 60,
        yaw: 17,
        crew: 3
      },
      retailCost: 84532770,
      requirements: {
        horizons: true
      },
      bulkheads: [ {
        id: "cl",
        edID: 128049346,
        eddbID: 1554,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "cm",
        edID: 128049347,
        eddbID: 1555,
        grp: "bh",
        cost: 33813120,
        mass: 83,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "cn",
        edID: 128049348,
        eddbID: 1556,
        grp: "bh",
        cost: 76079500,
        mass: 165,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "co",
        edID: 128049349,
        eddbID: 1557,
        grp: "bh",
        cost: 179801200,
        mass: 165,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "cp",
        edID: 128049350,
        eddbID: 1558,
        grp: "bh",
        cost: 199243730,
        mass: 165,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 7, 7, 8, 6, 5, 7 ],
        hardpoints: [ 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0 ],
        internal: [ 6, 6, {
          class: 6,
          name: "Passenger",
          eligible: {
            cr: 1,
            hr: 1,
            pce: 1,
            pci: 1,
            pcm: 1,
            pcq: 1
          }
        }, {
          class: 6,
          name: "Passenger",
          eligible: {
            cr: 1,
            hr: 1,
            pce: 1,
            pci: 1,
            pcm: 1,
            pcq: 1
          }
        }, {
          class: 5,
          name: "Passenger",
          eligible: {
            cr: 1,
            hr: 1,
            pce: 1,
            pci: 1,
            pcm: 1,
            pcq: 1
          }
        }, {
          class: 5,
          name: "Passenger",
          eligible: {
            cr: 1,
            hr: 1,
            pce: 1,
            pci: 1,
            pcm: 1,
            pcq: 1
          }
        }, 4, 3, 3, 3, 3 ]
      },
      defaults: {
        standard: [ "6E", "7E", "7E", "8E", "6E", "5E", "7C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "4j", "04", "mi", "mi", "mg", "mg", "02", "01", 0, 0, "2h" ]
      }
    },
    cobra_mk_iii: {
      edID: 128049279,
      eddbID: 4,
      properties: {
        name: "Cobra Mk III",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 205800,
        speed: 280,
        boost: 400,
        boostEnergy: 10,
        baseShieldStrength: 80,
        baseArmour: 120,
        hardness: 35,
        hullMass: 180,
        masslock: 8,
        pipSpeed: .125,
        pitch: 40,
        roll: 100,
        yaw: 10,
        crew: 2
      },
      retailCost: 349720,
      bulkheads: [ {
        id: "bk",
        edID: 128049280,
        eddbID: 763,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bl",
        edID: 128049281,
        eddbID: 764,
        grp: "bh",
        cost: 151890,
        mass: 14,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bm",
        edID: 128049282,
        eddbID: 765,
        grp: "bh",
        cost: 341750,
        mass: 27,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bn",
        edID: 128049283,
        eddbID: 766,
        grp: "bh",
        cost: 797410,
        mass: 27,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bo",
        edID: 128049284,
        eddbID: 767,
        grp: "bh",
        cost: 895e3,
        mass: 27,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 3, 3, 3, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0 ],
        internal: [ 4, 4, 4, 2, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "3E", "3E", "3E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0 ],
        internal: [ "02", "02", "49", "00", 0, "2h" ]
      }
    },
    cobra_mk_iv: {
      edID: 128672262,
      eddbID: 29,
      properties: {
        name: "Cobra Mk IV",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 603740,
        speed: 200,
        boost: 300,
        boostEnergy: 10,
        baseShieldStrength: 120,
        baseArmour: 120,
        hardness: 35,
        hullMass: 210,
        masslock: 8,
        pipSpeed: .125,
        pitch: 30,
        roll: 90,
        yaw: 10,
        crew: 2
      },
      retailCost: 747660,
      requirements: {
        horizonsEarlyAdoption: true
      },
      bulkheads: [ {
        id: "cg",
        edID: 128672264,
        eddbID: 1518,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "ch",
        edID: 128672265,
        eddbID: 1519,
        grp: "bh",
        cost: 305890,
        mass: 14,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "ci",
        edID: 128672266,
        eddbID: 1520,
        grp: "bh",
        cost: 688250,
        mass: 27,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "cj",
        edID: 128672267,
        eddbID: 1521,
        grp: "bh",
        cost: 1605910,
        mass: 27,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "ck",
        edID: 128672268,
        eddbID: 1522,
        grp: "bh",
        cost: 1802440,
        mass: 27,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 3, 3, 3, 4 ],
        hardpoints: [ 2, 2, 1, 1, 1, 0, 0 ],
        internal: [ 4, 4, 4, 4, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "3E", "3E", "3E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0 ],
        internal: [ "02", "02", "49", 0, 0, 0, "00", "2h" ]
      }
    },
    diamondback_explorer: {
      edID: 128671831,
      eddbID: 5,
      properties: {
        name: "Diamondback Explorer",
        manufacturer: "Lakon",
        class: 1,
        hullCost: 1635700,
        speed: 260,
        boost: 340,
        boostEnergy: 13,
        baseShieldStrength: 150,
        baseArmour: 150,
        hardness: 42,
        hullMass: 260,
        masslock: 10,
        pipSpeed: .09625,
        pitch: 35,
        roll: 90,
        yaw: 13,
        crew: 1
      },
      retailCost: 1894760,
      bulkheads: [ {
        id: "ba",
        edID: 128671832,
        eddbID: 1456,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bb",
        edID: 128671833,
        eddbID: 1457,
        grp: "bh",
        cost: 8e5,
        mass: 23,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bc",
        edID: 128671834,
        eddbID: 1458,
        grp: "bh",
        cost: 18e5,
        mass: 47,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bd",
        edID: 128671835,
        eddbID: 1459,
        grp: "bh",
        cost: 42e5,
        mass: 26,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "be",
        edID: 128671836,
        eddbID: 1460,
        grp: "bh",
        cost: 4714e3,
        mass: 47,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 5, 3, 4, 3, 5 ],
        hardpoints: [ 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 4, 4, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "5E", "3E", "4E", "3E", "5C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "49", "02", "01", 0, "2h", 0 ]
      }
    },
    diamondback: {
      edID: 128671217,
      eddbID: 6,
      properties: {
        name: "Diamondback Scout",
        manufacturer: "Lakon",
        class: 1,
        hullCost: 461340,
        speed: 280,
        boost: 380,
        boostEnergy: 10,
        baseShieldStrength: 120,
        baseArmour: 120,
        hardness: 40,
        hullMass: 170,
        masslock: 8,
        pipSpeed: .09875,
        pitch: 42,
        roll: 100,
        yaw: 15,
        crew: 1
      },
      retailCost: 564330,
      bulkheads: [ {
        id: "b5",
        edID: 128671218,
        eddbID: 1384,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "b6",
        edID: 128671219,
        eddbID: 1385,
        grp: "bh",
        cost: 225700,
        mass: 13,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "b7",
        edID: 128671220,
        eddbID: 1386,
        grp: "bh",
        cost: 507900,
        mass: 26,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "b8",
        edID: 128671221,
        eddbID: 1387,
        grp: "bh",
        cost: 1185100,
        mass: 26,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "b9",
        edID: 128671222,
        eddbID: 1388,
        grp: "bh",
        cost: 1330100,
        mass: 26,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 2, 3, 2, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0, 0, 0 ],
        internal: [ 3, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "2E", "3E", "2E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0, 0 ],
        internal: [ "44", 0, 0, "2h" ]
      }
    },
    dolphin: {
      edID: 128049291,
      eddbID: 31,
      properties: {
        name: "Dolphin",
        manufacturer: "Saud Kruger",
        class: 1,
        hullCost: 1115330,
        speed: 250,
        boost: 350,
        boostEnergy: 10,
        baseShieldStrength: 110,
        baseArmour: 110,
        hardness: 35,
        hullMass: 140,
        masslock: 9,
        pipSpeed: .13,
        luxuryCabins: true,
        pitch: 30,
        roll: 100,
        yaw: 20,
        crew: 1
      },
      retailCost: 1337330,
      requirements: {
        horizons: true
      },
      bulkheads: [ {
        id: "cq",
        edID: 128049292,
        eddbID: 1589,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "cr",
        edID: 128049293,
        eddbID: 1590,
        grp: "bh",
        cost: 534940,
        mass: 32,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "cs",
        edID: 128049294,
        eddbID: 1591,
        grp: "bh",
        cost: 1203600,
        mass: 63,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "ct",
        edID: 128049295,
        eddbID: 1592,
        grp: "bh",
        cost: 2808390,
        mass: 63,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "cu",
        edID: 128049296,
        eddbID: 1593,
        grp: "bh",
        cost: 3152080,
        mass: 63,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 5, 4, 4, 3, 3, 4 ],
        hardpoints: [ 1, 1, 0, 0, 0 ],
        internal: [ {
          class: 5,
          name: "Passenger",
          eligible: {
            cr: 1,
            hr: 1,
            pce: 1,
            pci: 1,
            pcm: 1,
            pcq: 1
          }
        }, 4, 4, 3, 2, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "5E", "4E", "4E", "3E", "3E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0 ],
        internal: [ "md", "02", "49", "01", "00", 0, "2h" ]
      }
    },
    eagle: {
      edID: 128049255,
      eddbID: 7,
      properties: {
        name: "Eagle",
        manufacturer: "Core Dynamics",
        class: 1,
        hullCost: 10440,
        speed: 240,
        boost: 350,
        boostEnergy: 8,
        baseShieldStrength: 60,
        baseArmour: 40,
        hardness: 28,
        hullMass: 50,
        masslock: 6,
        pipSpeed: .0625,
        pitch: 50,
        roll: 120,
        yaw: 18,
        crew: 1
      },
      retailCost: 44800,
      bulkheads: [ {
        id: "bY",
        edID: 128049256,
        eddbID: 743,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bZ",
        edID: 128049257,
        eddbID: 744,
        grp: "bh",
        cost: 26880,
        mass: 4,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "B0",
        edID: 128049258,
        eddbID: 745,
        grp: "bh",
        cost: 90050,
        mass: 8,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "B1",
        edID: 128049259,
        eddbID: 746,
        grp: "bh",
        cost: 140090,
        mass: 8,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "B2",
        edID: 128049260,
        eddbID: 747,
        grp: "bh",
        cost: 150390,
        mass: 8,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 2, 3, 3, 1, 2, 2, 2 ],
        hardpoints: [ 1, 1, 1, 0 ],
        internal: [ 3, 2, {
          class: 2,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 1, 1 ]
      },
      defaults: {
        standard: [ "2E", "3E", "3E", "1E", "2E", "2E", "2C" ],
        hardpoints: [ 17, 17, 0, 0 ],
        internal: [ "44", "00", 0, "2h", 0 ]
      }
    },
    federal_assault_ship: {
      edID: 128672145,
      eddbID: 8,
      properties: {
        name: "Federal Assault Ship",
        manufacturer: "Core Dynamics",
        class: 2,
        hullCost: 19072e3,
        speed: 210,
        boost: 350,
        boostEnergy: 19,
        baseShieldStrength: 200,
        baseArmour: 300,
        hardness: 60,
        hullMass: 480,
        masslock: 14,
        pipSpeed: .11125,
        pitch: 38,
        roll: 90,
        yaw: 19,
        crew: 2
      },
      retailCost: 19814210,
      requirements: {
        federationRank: 5
      },
      bulkheads: [ {
        id: "bz",
        edID: 128672147,
        eddbID: 1466,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bA",
        edID: 128672148,
        eddbID: 1467,
        grp: "bh",
        cost: 7925680,
        mass: 44,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bB",
        edID: 128672149,
        eddbID: 1468,
        grp: "bh",
        cost: 17832780,
        mass: 87,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bC",
        edID: 128672150,
        eddbID: 1469,
        grp: "bh",
        cost: 42144810,
        mass: 87,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bD",
        edID: 128672151,
        eddbID: 1470,
        grp: "bh",
        cost: 46702080,
        mass: 87,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 4, 4 ],
        hardpoints: [ 3, 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 5, 5, 4, {
          class: 4,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "4E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "4e", "03", "02", 0, 0, "02", 0, 0 ]
      }
    },
    federal_corvette: {
      edID: 128049369,
      eddbID: 25,
      properties: {
        name: "Federal Corvette",
        manufacturer: "Core Dynamics",
        class: 3,
        hullCost: 182589570,
        speed: 200,
        boost: 260,
        boostEnergy: 27,
        baseShieldStrength: 555,
        baseArmour: 370,
        hardness: 70,
        hullMass: 900,
        masslock: 24,
        pipSpeed: .125,
        fighterHangars: true,
        pitch: 28,
        roll: 75,
        yaw: 8,
        crew: 3
      },
      retailCost: 187969450,
      requirements: {
        federationRank: 12
      },
      bulkheads: [ {
        id: "BW",
        edID: 128049370,
        eddbID: 1498,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BX",
        edID: 128049371,
        eddbID: 1499,
        grp: "bh",
        cost: 75187790,
        mass: 30,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BY",
        edID: 128049372,
        eddbID: 1500,
        grp: "bh",
        cost: 169172510,
        mass: 60,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BZ",
        edID: 128049373,
        eddbID: 1501,
        grp: "bh",
        cost: 399811020,
        mass: 60,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "c0",
        edID: 128049374,
        eddbID: 1502,
        grp: "bh",
        cost: 443044e3,
        mass: 60,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 8, 7, 6, 5, 8, 8, 5 ],
        hardpoints: [ 4, 4, 3, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 7, 7, 7, 6, 6, 5, 5, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 4, 4, 3 ]
      },
      defaults: {
        standard: [ "8E", "7E", "6E", "5E", "8E", "8E", "5C" ],
        hardpoints: [ 0, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "4o", "05", 0, 0, 0, 0, 0, 0, 0, "02", "01", "2h" ]
      }
    },
    federal_dropship: {
      edID: 128049321,
      eddbID: 9,
      properties: {
        name: "Federal Dropship",
        manufacturer: "Core Dynamics",
        class: 2,
        hullCost: 13469990,
        speed: 180,
        boost: 300,
        boostEnergy: 19,
        baseShieldStrength: 200,
        baseArmour: 300,
        hardness: 60,
        hullMass: 580,
        masslock: 14,
        pipSpeed: .0725,
        pitch: 30,
        roll: 80,
        yaw: 14,
        crew: 2
      },
      retailCost: 14314210,
      requirements: {
        federationRank: 3
      },
      bulkheads: [ {
        id: "bE",
        edID: 128049322,
        eddbID: 793,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bF",
        edID: 128049323,
        eddbID: 794,
        grp: "bh",
        cost: 5725680,
        mass: 44,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bG",
        edID: 128049324,
        eddbID: 795,
        grp: "bh",
        cost: 12882780,
        mass: 87,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bH",
        edID: 128049325,
        eddbID: 796,
        grp: "bh",
        cost: 30446310,
        mass: 87,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bI",
        edID: 128049326,
        eddbID: 797,
        grp: "bh",
        cost: 33738580,
        mass: 87,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 4, 4 ],
        hardpoints: [ 3, 2, 2, 2, 2, 0, 0, 0, 0 ],
        internal: [ 6, 5, 5, 4, {
          class: 4,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "4E", "4C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "03", "4e", "02", 0, 0, 0, 0, "2h" ]
      }
    },
    federal_gunship: {
      edID: 128672152,
      eddbID: 10,
      properties: {
        name: "Federal Gunship",
        manufacturer: "Core Dynamics",
        class: 2,
        hullCost: 34774790,
        speed: 170,
        boost: 280,
        boostEnergy: 23,
        baseShieldStrength: 250,
        baseArmour: 350,
        hardness: 60,
        hullMass: 580,
        masslock: 14,
        pipSpeed: .1025,
        fighterHangars: true,
        pitch: 25,
        roll: 80,
        yaw: 18,
        crew: 2
      },
      retailCost: 35814210,
      requirements: {
        federationRank: 7
      },
      bulkheads: [ {
        id: "bJ",
        edID: 128672154,
        eddbID: 1471,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bK",
        edID: 128672155,
        eddbID: 1472,
        grp: "bh",
        cost: 14325690,
        mass: 44,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bL",
        edID: 128672156,
        eddbID: 1473,
        grp: "bh",
        cost: 32232790,
        mass: 87,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bM",
        edID: 128672157,
        eddbID: 1474,
        grp: "bh",
        cost: 76176810,
        mass: 87,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bN",
        edID: 128672158,
        eddbID: 1475,
        grp: "bh",
        cost: 84414090,
        mass: 87,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 7, 5, 4 ],
        hardpoints: [ 3, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 6, 5, {
          class: 4,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 2, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "7E", "5E", "4C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 0, "4j", "03", 0, 0, 0, 0, "2h" ]
      }
    },
    fer_de_lance: {
      edID: 128049351,
      eddbID: 11,
      properties: {
        name: "Fer-de-Lance",
        manufacturer: "Zorgon Peterson",
        class: 2,
        hullCost: 51232230,
        speed: 260,
        boost: 350,
        boostEnergy: 19,
        baseShieldStrength: 300,
        baseArmour: 225,
        hardness: 70,
        hullMass: 250,
        masslock: 12,
        pipSpeed: .03875,
        pitch: 38,
        roll: 90,
        yaw: 12,
        crew: 2
      },
      retailCost: 51567040,
      bulkheads: [ {
        id: "Bd",
        edID: 128049352,
        eddbID: 813,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "Be",
        edID: 128049353,
        eddbID: 814,
        grp: "bh",
        cost: 20626820,
        mass: 19,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bf",
        edID: 128049354,
        eddbID: 815,
        grp: "bh",
        cost: 46410340,
        mass: 38,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bg",
        edID: 128049355,
        eddbID: 816,
        grp: "bh",
        cost: 109683090,
        mass: 38,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Bh",
        edID: 128049356,
        eddbID: 817,
        grp: "bh",
        cost: 121543510,
        mass: 38,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 5, 4, 4, 6, 4, 3 ],
        hardpoints: [ 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0 ],
        internal: [ 5, 4, 4, 2, 1 ]
      },
      defaults: {
        standard: [ "5E", "5E", "4E", "4E", "6E", "4E", "3C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "03", "49", "02", 0, "2h" ]
      }
    },
    hauler: {
      edID: 128049261,
      eddbID: 12,
      properties: {
        name: "Hauler",
        manufacturer: "Zorgon Peterson",
        class: 1,
        hullCost: 29790,
        speed: 200,
        boost: 300,
        boostEnergy: 7,
        baseShieldStrength: 50,
        baseArmour: 100,
        hardness: 20,
        hullMass: 14,
        masslock: 6,
        pipSpeed: .1625,
        pitch: 36,
        roll: 100,
        yaw: 14,
        crew: 1
      },
      retailCost: 52720,
      bulkheads: [ {
        id: "Bi",
        edID: 128049262,
        eddbID: 748,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "Bj",
        edID: 128049263,
        eddbID: 749,
        grp: "bh",
        cost: 42180,
        mass: 1,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bk",
        edID: 128049264,
        eddbID: 750,
        grp: "bh",
        cost: 185050,
        mass: 2,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bl",
        edID: 128049265,
        eddbID: 751,
        grp: "bh",
        cost: 270300,
        mass: 2,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Bm",
        edID: 128049266,
        eddbID: 752,
        grp: "bh",
        cost: 282420,
        mass: 2,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 2, 2, 2, 1, 1, 1, 2 ],
        hardpoints: [ 1, 0, 0 ],
        internal: [ 3, 3, 2, 1 ]
      },
      defaults: {
        standard: [ "2E", "2E", "2E", "1E", "1E", "1E", "2C" ],
        hardpoints: [ 17, 0, 0 ],
        internal: [ "01", "01", "3v", "2h" ]
      }
    },
    imperial_clipper: {
      edID: 128049315,
      eddbID: 13,
      properties: {
        name: "Imperial Clipper",
        manufacturer: "Gutamaya",
        class: 3,
        hullCost: 21077780,
        speed: 300,
        boost: 380,
        boostEnergy: 19,
        baseShieldStrength: 180,
        baseArmour: 270,
        hardness: 60,
        hullMass: 400,
        masslock: 12,
        pipSpeed: .1,
        pitch: 40,
        roll: 80,
        yaw: 18,
        crew: 2
      },
      retailCost: 22296860,
      requirements: {
        empireRank: 7
      },
      bulkheads: [ {
        id: "bp",
        edID: 128049316,
        eddbID: 788,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bq",
        edID: 128049317,
        eddbID: 789,
        grp: "bh",
        cost: 8918340,
        mass: 30,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "br",
        edID: 128049318,
        eddbID: 790,
        grp: "bh",
        cost: 20066270,
        mass: 60,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bs",
        edID: 128049319,
        eddbID: 791,
        grp: "bh",
        cost: 47423290,
        mass: 60,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bt",
        edID: 128049320,
        eddbID: 792,
        grp: "bh",
        cost: 52551340,
        mass: 60,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 5, 4 ],
        hardpoints: [ 3, 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 7, 6, 4, 4, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "5E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "05", "4j", "02", 0, 0, 0, "00", "2h" ]
      }
    },
    imperial_courier: {
      edID: 128671223,
      eddbID: 14,
      properties: {
        name: "Imperial Courier",
        manufacturer: "Gutamaya",
        class: 1,
        hullCost: 2481550,
        speed: 280,
        boost: 380,
        boostEnergy: 10,
        baseShieldStrength: 200,
        baseArmour: 80,
        hardness: 30,
        hullMass: 35,
        masslock: 7,
        pipSpeed: .05375,
        pitch: 38,
        roll: 90,
        yaw: 16,
        crew: 1
      },
      retailCost: 2542930,
      requirements: {
        empireRank: 3
      },
      bulkheads: [ {
        id: "bf",
        edID: 128671224,
        eddbID: 1389,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bg",
        edID: 128671225,
        eddbID: 1390,
        grp: "bh",
        cost: 1017200,
        mass: 4,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bh",
        edID: 128671226,
        eddbID: 1391,
        grp: "bh",
        cost: 2288600,
        mass: 8,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bi",
        edID: 128671227,
        eddbID: 1392,
        grp: "bh",
        cost: 5408800,
        mass: 8,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bj",
        edID: 128671228,
        eddbID: 1393,
        grp: "bh",
        cost: 5993700,
        mass: 8,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 3, 3, 1, 3, 2, 3 ],
        hardpoints: [ 2, 2, 2, 0, 0, 0, 0 ],
        internal: [ 3, 3, 2, 2, 2, 1 ]
      },
      defaults: {
        standard: [ "4E", "3E", "3E", "1E", "3E", "2E", "3C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0 ],
        internal: [ "01", "01", "3v", "00", "00", "2h" ]
      }
    },
    imperial_cutter: {
      edID: 128049375,
      eddbID: 26,
      properties: {
        name: "Imperial Cutter",
        manufacturer: "Gutamaya",
        class: 3,
        hullCost: 199926890,
        speed: 200,
        boost: 320,
        boostEnergy: 23,
        baseShieldStrength: 600,
        baseArmour: 400,
        hardness: 70,
        hullMass: 1100,
        masslock: 27,
        pipSpeed: .05,
        fighterHangars: true,
        pitch: 18,
        roll: 45,
        yaw: 8,
        crew: 3
      },
      retailCost: 208969450,
      requirements: {
        empireRank: 12
      },
      bulkheads: [ {
        id: "BR",
        edID: 128049376,
        eddbID: 1493,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BS",
        edID: 128049377,
        eddbID: 1494,
        grp: "bh",
        cost: 83587790,
        mass: 30,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BT",
        edID: 128049378,
        eddbID: 1495,
        grp: "bh",
        cost: 188072510,
        mass: 60,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BU",
        edID: 128049379,
        eddbID: 1496,
        grp: "bh",
        cost: 444478020,
        mass: 60,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BV",
        edID: 128049380,
        eddbID: 1497,
        grp: "bh",
        cost: 492541e3,
        mass: 60,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 8, 8, 7, 7, 7, 7, 6 ],
        hardpoints: [ 4, 3, 3, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 8, 8, 6, 6, 6, 5, 5, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 4, 3 ]
      },
      defaults: {
        standard: [ "8E", "8E", "7E", "7E", "7E", "7E", "6C" ],
        hardpoints: [ 0, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "4t", "06", "04", 0, 0, 0, 0, 0, 0, "01", "2h" ]
      }
    },
    imperial_eagle: {
      edID: 128672138,
      eddbID: 15,
      properties: {
        name: "Imperial Eagle",
        manufacturer: "Core Dynamics",
        class: 1,
        hullCost: 72180,
        speed: 300,
        boost: 400,
        boostEnergy: 8,
        baseShieldStrength: 80,
        baseArmour: 60,
        hardness: 28,
        hullMass: 50,
        masslock: 6,
        pipSpeed: .075,
        pitch: 40,
        roll: 100,
        yaw: 15,
        crew: 1
      },
      retailCost: 110830,
      bulkheads: [ {
        id: "bu",
        edID: 128672140,
        eddbID: 1461,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bv",
        edID: 128672141,
        eddbID: 1462,
        grp: "bh",
        cost: 66500,
        mass: 4,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bw",
        edID: 128672142,
        eddbID: 1463,
        grp: "bh",
        cost: 222760,
        mass: 8,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bx",
        edID: 128672143,
        eddbID: 1464,
        grp: "bh",
        cost: 346550,
        mass: 8,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "by",
        edID: 128672144,
        eddbID: 1465,
        grp: "bh",
        cost: 372040,
        mass: 8,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 3, 3, 3, 1, 2, 2, 2 ],
        hardpoints: [ 2, 1, 1, 0 ],
        internal: [ 3, 2, {
          class: 2,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 1, 1 ]
      },
      defaults: {
        standard: [ "3E", "3E", "3E", "1E", "2E", "2E", "2C" ],
        hardpoints: [ 0, 17, 17, 0 ],
        internal: [ "44", "00", 0, "2h", 0 ]
      }
    },
    keelback: {
      edID: 128672269,
      eddbID: 27,
      properties: {
        name: "Keelback",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 2943870,
        speed: 200,
        boost: 300,
        boostEnergy: 10,
        baseShieldStrength: 135,
        baseArmour: 270,
        hardness: 45,
        hullMass: 180,
        masslock: 8,
        pipSpeed: .1375,
        fighterHangars: true,
        pitch: 27,
        roll: 100,
        yaw: 15,
        crew: 1
      },
      retailCost: 3126150,
      bulkheads: [ {
        id: "cb",
        edID: 128672271,
        eddbID: 1513,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "cc",
        edID: 128672272,
        eddbID: 1514,
        grp: "bh",
        cost: 1250460,
        mass: 12,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "cd",
        edID: 128672273,
        eddbID: 1515,
        grp: "bh",
        cost: 2813540,
        mass: 23,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "ce",
        edID: 128672274,
        eddbID: 1516,
        grp: "bh",
        cost: 6649330,
        mass: 23,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "cf",
        edID: 128672275,
        eddbID: 1517,
        grp: "bh",
        cost: 7368340,
        mass: 23,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 1, 3, 2, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0, 0 ],
        internal: [ 5, 5, 4, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "1E", "3E", "2E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0, 0 ],
        internal: [ "03", "03", "02", "44", "00", "2h" ]
      }
    },
    orca: {
      edID: 128049327,
      eddbID: 16,
      properties: {
        name: "Orca",
        manufacturer: "Saud Kruger",
        class: 3,
        hullCost: 47790590,
        speed: 300,
        boost: 380,
        boostEnergy: 16,
        baseShieldStrength: 220,
        baseArmour: 220,
        hardness: 55,
        hullMass: 290,
        masslock: 16,
        pipSpeed: .08375,
        luxuryCabins: true,
        pitch: 25,
        roll: 55,
        yaw: 18,
        crew: 2
      },
      retailCost: 48539900,
      bulkheads: [ {
        id: "BM",
        edID: 128049328,
        eddbID: 798,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BN",
        edID: 128049329,
        eddbID: 799,
        grp: "bh",
        cost: 19415950,
        mass: 21,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BO",
        edID: 128049330,
        eddbID: 800,
        grp: "bh",
        cost: 43685900,
        mass: 87,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BP",
        edID: 128049331,
        eddbID: 801,
        grp: "bh",
        cost: 103244340,
        mass: 87,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BQ",
        edID: 128049332,
        eddbID: 802,
        grp: "bh",
        cost: 114408510,
        mass: 87,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 5, 6, 5, 6, 5, 4, 5 ],
        hardpoints: [ 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ {
          class: 6,
          name: "Passenger",
          eligible: {
            cr: 1,
            hr: 1,
            pce: 1,
            pci: 1,
            pcm: 1,
            pcq: 1
          }
        }, {
          class: 5,
          name: "Passenger",
          eligible: {
            cr: 1,
            hr: 1,
            pce: 1,
            pci: 1,
            pcm: 1,
            pcq: 1
          }
        }, 5, 5, 4, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "5E", "6E", "5E", "6E", "5E", "4E", "5C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "me", "mc", "03", "4e", "02", 0, 0, "2h" ]
      }
    },
    python: {
      edID: 128049339,
      eddbID: 17,
      properties: {
        name: "Python",
        manufacturer: "Faulcon DeLacy",
        class: 2,
        hullCost: 55171380,
        speed: 230,
        boost: 300,
        boostEnergy: 23,
        baseShieldStrength: 260,
        baseArmour: 260,
        hardness: 65,
        hullMass: 350,
        masslock: 17,
        pipSpeed: .0975,
        pitch: 29,
        roll: 90,
        yaw: 10,
        crew: 2
      },
      retailCost: 56978180,
      bulkheads: [ {
        id: "bO",
        edID: 128049340,
        eddbID: 808,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bP",
        edID: 128049341,
        eddbID: 809,
        grp: "bh",
        cost: 22791270,
        mass: 26,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bQ",
        edID: 128049342,
        eddbID: 810,
        grp: "bh",
        cost: 51280360,
        mass: 53,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bR",
        edID: 128049343,
        eddbID: 811,
        grp: "bh",
        cost: 121192590,
        mass: 53,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bS",
        edID: 128049344,
        eddbID: 812,
        grp: "bh",
        cost: 134297570,
        mass: 53,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 7, 6, 5, 4, 7, 6, 5 ],
        hardpoints: [ 3, 3, 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 6, 6, 6, 5, 5, 4, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "7E", "6E", "5E", "4E", "7E", "6E", "5C" ],
        hardpoints: [ 0, 0, 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "04", "04", "4j", "03", 0, 0, 0, "00", "2h" ]
      }
    },
    sidewinder: {
      edID: 128049249,
      eddbID: 18,
      properties: {
        name: "Sidewinder",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 4070,
        speed: 220,
        boost: 320,
        boostEnergy: 7,
        baseShieldStrength: 40,
        baseArmour: 60,
        hardness: 20,
        hullMass: 25,
        masslock: 6,
        pipSpeed: .1375,
        pitch: 42,
        roll: 110,
        yaw: 16,
        crew: 1
      },
      retailCost: 32e3,
      bulkheads: [ {
        id: "b0",
        edID: 128049250,
        eddbID: 738,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "b1",
        edID: 128049251,
        eddbID: 739,
        grp: "bh",
        cost: 25600,
        mass: 2,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "b2",
        edID: 128049252,
        eddbID: 740,
        grp: "bh",
        cost: 80320,
        mass: 4,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "b3",
        edID: 128049253,
        eddbID: 741,
        grp: "bh",
        cost: 132060,
        mass: 4,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "b4",
        edID: 128049254,
        eddbID: 742,
        grp: "bh",
        cost: 139420,
        mass: 4,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 2, 2, 2, 1, 1, 1, 1 ],
        hardpoints: [ 1, 1, 0, 0 ],
        internal: [ 2, 2, 1, 1 ]
      },
      defaults: {
        standard: [ "2E", "2E", "2E", "1E", "1E", "1E", "1C" ],
        hardpoints: [ 18, 18, 0, 0 ],
        internal: [ "3v", "01", "2h", 0 ]
      }
    },
    type_6_transporter: {
      edID: 128049285,
      eddbID: 19,
      properties: {
        name: "Type-6 Transporter",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 865790,
        speed: 220,
        boost: 350,
        boostEnergy: 10,
        baseShieldStrength: 90,
        baseArmour: 180,
        hardness: 35,
        hullMass: 155,
        masslock: 8,
        pipSpeed: .1475,
        pitch: 30,
        roll: 100,
        yaw: 17,
        crew: 1
      },
      retailCost: 1045950,
      bulkheads: [ {
        id: "Bn",
        edID: 128049286,
        eddbID: 768,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "Bo",
        edID: 128049287,
        eddbID: 769,
        grp: "bh",
        cost: 418380,
        mass: 12,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bp",
        edID: 128049288,
        eddbID: 770,
        grp: "bh",
        cost: 941350,
        mass: 23,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bq",
        edID: 128049289,
        eddbID: 771,
        grp: "bh",
        cost: 2224730,
        mass: 23,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Br",
        edID: 128049290,
        eddbID: 772,
        grp: "bh",
        cost: 2465290,
        mass: 23,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 3, 4, 4, 2, 3, 2, 4 ],
        hardpoints: [ 1, 1, 0, 0, 0 ],
        internal: [ 5, 5, 4, 4, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "3E", "4E", "4E", "2E", "3E", "2E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0 ],
        internal: [ "03", "03", "02", "02", "44", "00", "2h" ]
      }
    },
    type_7_transport: {
      edID: 128049297,
      eddbID: 20,
      properties: {
        name: "Type-7 Transporter",
        manufacturer: "Lakon",
        class: 3,
        hullCost: 16780510,
        speed: 180,
        boost: 300,
        boostEnergy: 10,
        baseShieldStrength: 155,
        baseArmour: 340,
        hardness: 54,
        hullMass: 420,
        masslock: 10,
        pipSpeed: .16625,
        pitch: 22,
        roll: 60,
        yaw: 22,
        crew: 1
      },
      retailCost: 17472260,
      bulkheads: [ {
        id: "Bs",
        edID: 128049298,
        eddbID: 773,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "Bt",
        edID: 128049299,
        eddbID: 774,
        grp: "bh",
        cost: 6988900,
        mass: 32,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bu",
        edID: 128049300,
        eddbID: 775,
        grp: "bh",
        cost: 15725030,
        mass: 63,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bv",
        edID: 128049301,
        eddbID: 776,
        grp: "bh",
        cost: 37163480,
        mass: 63,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Bw",
        edID: 128049302,
        eddbID: 777,
        grp: "bh",
        cost: 41182100,
        mass: 63,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 5, 5, 4, 3, 3, 5 ],
        hardpoints: [ 1, 1, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 6, 6, 5, 5, 5, 3, 3 ]
      },
      defaults: {
        standard: [ "4E", "5E", "5E", "4E", "3E", "3E", "5C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "04", "04", "03", "03", "49", 0, "2h" ]
      }
    },
    type_9_heavy: {
      edID: 128049333,
      eddbID: 21,
      properties: {
        name: "Type-9 Heavy",
        manufacturer: "Lakon",
        class: 3,
        hullCost: 73255150,
        speed: 130,
        boost: 200,
        boostEnergy: 19,
        baseShieldStrength: 240,
        baseArmour: 480,
        hardness: 65,
        hullMass: 1e3,
        masslock: 16,
        pipSpeed: .17375,
        fighterHangars: true,
        pitch: 20,
        roll: 20,
        yaw: 8,
        crew: 3
      },
      retailCost: 76555840,
      bulkheads: [ {
        id: "Bx",
        edID: 128049334,
        eddbID: 803,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "By",
        edID: 128049335,
        eddbID: 804,
        grp: "bh",
        cost: 30622340,
        mass: 75,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bz",
        edID: 128049336,
        eddbID: 805,
        grp: "bh",
        cost: 68900260,
        mass: 150,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BA",
        edID: 128049337,
        eddbID: 806,
        grp: "bh",
        cost: 162834280,
        mass: 150,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BB",
        edID: 128049338,
        eddbID: 807,
        grp: "bh",
        cost: 180442120,
        mass: 150,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 7, 6, 5, 6, 4, 6 ],
        hardpoints: [ 2, 2, 2, 1, 1, 0, 0, 0, 0 ],
        internal: [ 8, 7, 6, 5, 4, 4, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "6E", "7E", "6E", "5E", "6E", "4E", "6C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "06", "05", "4j", "03", "02", 0, "01", 0, "2h" ]
      }
    },
    type_10_defender: {
      edID: 128785619,
      eddbID: 32,
      properties: {
        name: "Type-10 Defender",
        manufacturer: "Lakon",
        class: 3,
        hullCost: 121454173,
        speed: 179,
        boost: 219,
        boostEnergy: 19,
        baseShieldStrength: 320,
        baseArmour: 580,
        hardness: 75,
        hullMass: 1200,
        masslock: 26,
        pipSpeed: .17375,
        fighterHangars: true,
        pitch: 20,
        roll: 20,
        yaw: 8,
        crew: 3
      },
      retailCost: 121454652,
      bulkheads: [ {
        id: "Bx",
        edID: 128049334,
        eddbID: 803,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "By",
        edID: 128049335,
        eddbID: 804,
        grp: "bh",
        cost: 30622340,
        mass: 75,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bz",
        edID: 128049336,
        eddbID: 805,
        grp: "bh",
        cost: 68900260,
        mass: 150,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BA",
        edID: 128049337,
        eddbID: 806,
        grp: "bh",
        cost: 162834280,
        mass: 150,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BB",
        edID: 128049338,
        eddbID: 807,
        grp: "bh",
        cost: 180442120,
        mass: 150,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 8, 7, 7, 5, 6, 4, 6 ],
        hardpoints: [ 3, 3, 3, 3, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 8, 7, 6, 5, 4, 4, 3, 3, 2, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        } ]
      },
      defaults: {
        standard: [ "6E", "7E", "6E", "5E", "6E", "4E", "6C" ],
        hardpoints: [ 0, 0, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "06", "05", "4j", "03", "02", 0, "01", 0, "2h", 0, 0 ]
      }
    },
    viper: {
      edID: 128049273,
      eddbID: 22,
      properties: {
        name: "Viper",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 95900,
        speed: 320,
        boost: 400,
        boostEnergy: 10,
        baseShieldStrength: 105,
        baseArmour: 70,
        hardness: 35,
        hullMass: 50,
        masslock: 7,
        pipSpeed: .09375,
        pitch: 35,
        roll: 90,
        yaw: 15,
        crew: 1
      },
      retailCost: 142930,
      bulkheads: [ {
        id: "B3",
        edID: 128049274,
        eddbID: 758,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "B4",
        edID: 128049275,
        eddbID: 759,
        grp: "bh",
        cost: 57170,
        mass: 5,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "B5",
        edID: 128049276,
        eddbID: 760,
        grp: "bh",
        cost: 128640,
        mass: 9,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "B6",
        edID: 128049277,
        eddbID: 761,
        grp: "bh",
        cost: 304010,
        mass: 9,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "B7",
        edID: 128049278,
        eddbID: 762,
        grp: "bh",
        cost: 336890,
        mass: 9,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 3, 3, 3, 2, 3, 3, 2 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0 ],
        internal: [ 3, 3, {
          class: 3,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 2, 1 ]
      },
      defaults: {
        standard: [ "3E", "3E", "3E", "2E", "3E", "3E", "2C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0 ],
        internal: [ "01", "44", 0, 0, "2h" ]
      }
    },
    viper_mk_iv: {
      edID: 128672255,
      eddbID: 28,
      properties: {
        name: "Viper Mk IV",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 310220,
        speed: 270,
        boost: 340,
        boostEnergy: 10,
        baseShieldStrength: 150,
        baseArmour: 150,
        hardness: 35,
        hullMass: 190,
        masslock: 7,
        pipSpeed: .0875,
        pitch: 30,
        roll: 90,
        yaw: 12,
        crew: 1
      },
      retailCost: 437930,
      bulkheads: [ {
        id: "c6",
        edID: 128672257,
        eddbID: 1508,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "c7",
        edID: 128672258,
        eddbID: 1509,
        grp: "bh",
        cost: 175180,
        mass: 5,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "c8",
        edID: 128672259,
        eddbID: 1510,
        grp: "bh",
        cost: 394140,
        mass: 9,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "c9",
        edID: 128672260,
        eddbID: 1511,
        grp: "bh",
        cost: 931490,
        mass: 9,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "ca",
        edID: 128672261,
        eddbID: 1512,
        grp: "bh",
        cost: 1033210,
        mass: 9,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 2, 3, 3, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0 ],
        internal: [ 4, 4, 3, {
          class: 3,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 2, 2, 1 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "2E", "3E", "3E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0 ],
        internal: [ "02", "02", "44", 0, "00", 0, "2h" ]
      }
    },
    vulture: {
      edID: 128049309,
      eddbID: 23,
      properties: {
        name: "Vulture",
        manufacturer: "Core Dynamics",
        class: 1,
        hullCost: 4689640,
        speed: 210,
        boost: 340,
        boostEnergy: 16,
        baseShieldStrength: 240,
        baseArmour: 160,
        hardness: 55,
        hullMass: 230,
        masslock: 10,
        pipSpeed: .02375,
        pitch: 42,
        roll: 110,
        yaw: 17,
        crew: 2
      },
      retailCost: 4925620,
      bulkheads: [ {
        id: "B8",
        edID: 128049310,
        eddbID: 783,
        grp: "bh",
        cost: 0,
        mass: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "B9",
        edID: 128049311,
        eddbID: 784,
        grp: "bh",
        cost: 1970250,
        mass: 17,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Ba",
        edID: 128049312,
        eddbID: 785,
        grp: "bh",
        cost: 4433050,
        mass: 35,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bb",
        edID: 128049313,
        eddbID: 786,
        grp: "bh",
        cost: 10476780,
        mass: 35,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Bc",
        edID: 128049314,
        eddbID: 787,
        grp: "bh",
        cost: 11609670,
        mass: 35,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 5, 4, 3, 5, 4, 3 ],
        hardpoints: [ 3, 3, 0, 0, 0, 0 ],
        internal: [ 5, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1
          }
        }, 4, 2, 1, 1 ]
      },
      defaults: {
        standard: [ "4E", "5E", "4E", "3E", "5E", "4E", "3C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0 ],
        internal: [ "4e", 0, "02", 0, 0, "2h" ]
      }
    }
  },
  Modules: {
    standard: {
      pp: [ {
        class: 8,
        cost: 2007240,
        edID: 128064063,
        eddbID: 921,
        eff: 1,
        grp: "pp",
        id: "py",
        integrity: 135,
        mass: 160,
        pgen: 24,
        rating: "E"
      }, {
        class: 8,
        cost: 6021720,
        edID: 128064064,
        eddbID: 922,
        eff: .75,
        grp: "pp",
        id: "px",
        integrity: 120,
        mass: 64,
        pgen: 27,
        rating: "D"
      }, {
        class: 8,
        cost: 18065170,
        edID: 128064065,
        eddbID: 923,
        eff: .5,
        grp: "pp",
        id: "pw",
        integrity: 150,
        mass: 80,
        pgen: 30,
        rating: "C"
      }, {
        class: 8,
        cost: 54195500,
        edID: 128064066,
        eddbID: 924,
        eff: .45,
        grp: "pp",
        id: "pv",
        integrity: 180,
        mass: 128,
        pgen: 33,
        rating: "B"
      }, {
        class: 8,
        cost: 162586490,
        edID: 128064067,
        eddbID: 925,
        eff: .4,
        grp: "pp",
        id: "pu",
        integrity: 165,
        mass: 80,
        pgen: 36,
        rating: "A"
      }, {
        class: 7,
        cost: 633200,
        edID: 128064058,
        eddbID: 916,
        eff: 1,
        grp: "pp",
        id: "pt",
        integrity: 118,
        mass: 80,
        pgen: 20,
        rating: "E"
      }, {
        class: 7,
        cost: 1899600,
        edID: 128064059,
        eddbID: 917,
        eff: .75,
        grp: "pp",
        id: "ps",
        integrity: 105,
        mass: 32,
        pgen: 22.5,
        rating: "D"
      }, {
        class: 7,
        cost: 5698790,
        edID: 128064060,
        eddbID: 918,
        eff: .5,
        grp: "pp",
        id: "pr",
        integrity: 131,
        mass: 40,
        pgen: 25,
        rating: "C"
      }, {
        class: 7,
        cost: 17096370,
        edID: 128064061,
        eddbID: 919,
        eff: .45,
        grp: "pp",
        id: "pq",
        integrity: 157,
        mass: 64,
        pgen: 27.5,
        rating: "B"
      }, {
        class: 7,
        cost: 51289110,
        edID: 128064062,
        eddbID: 920,
        eff: .4,
        grp: "pp",
        id: "pp",
        integrity: 144,
        mass: 40,
        pgen: 30,
        rating: "A"
      }, {
        class: 6,
        cost: 199750,
        edID: 128064053,
        eddbID: 911,
        eff: 1,
        grp: "pp",
        id: "po",
        integrity: 102,
        mass: 40,
        pgen: 16.8,
        rating: "E"
      }, {
        class: 6,
        cost: 599240,
        edID: 128064054,
        eddbID: 912,
        eff: .75,
        grp: "pp",
        id: "pn",
        integrity: 90,
        mass: 16,
        pgen: 18.9,
        rating: "D"
      }, {
        class: 6,
        cost: 1797730,
        edID: 128064055,
        eddbID: 913,
        eff: .5,
        grp: "pp",
        id: "pm",
        integrity: 113,
        mass: 20,
        pgen: 21,
        rating: "C"
      }, {
        class: 6,
        cost: 5393180,
        edID: 128064056,
        eddbID: 914,
        eff: .45,
        grp: "pp",
        id: "pl",
        integrity: 136,
        mass: 32,
        pgen: 23.1,
        rating: "B"
      }, {
        class: 6,
        cost: 16179530,
        edID: 128064057,
        eddbID: 915,
        eff: .4,
        grp: "pp",
        id: "pk",
        integrity: 124,
        mass: 20,
        pgen: 25.2,
        rating: "A"
      }, {
        class: 5,
        cost: 63010,
        edID: 128064048,
        eddbID: 906,
        eff: 1,
        grp: "pp",
        id: "pj",
        integrity: 86,
        mass: 20,
        pgen: 13.6,
        rating: "E"
      }, {
        class: 5,
        cost: 189040,
        edID: 128064049,
        eddbID: 907,
        eff: .75,
        grp: "pp",
        id: "pi",
        integrity: 77,
        mass: 8,
        pgen: 15.3,
        rating: "D"
      }, {
        class: 5,
        cost: 567110,
        edID: 128064050,
        eddbID: 908,
        eff: .5,
        grp: "pp",
        id: "ph",
        integrity: 96,
        mass: 10,
        pgen: 17,
        rating: "C"
      }, {
        class: 5,
        cost: 1701320,
        edID: 128064051,
        eddbID: 909,
        eff: .45,
        grp: "pp",
        id: "pg",
        integrity: 114,
        mass: 16,
        pgen: 18.7,
        rating: "B"
      }, {
        class: 5,
        cost: 5103950,
        edID: 128064052,
        eddbID: 910,
        eff: .4,
        grp: "pp",
        id: "pf",
        integrity: 106,
        mass: 10,
        pgen: 20.4,
        rating: "A"
      }, {
        class: 4,
        cost: 19880,
        edID: 128064043,
        eddbID: 901,
        eff: 1,
        grp: "pp",
        id: "pe",
        integrity: 72,
        mass: 10,
        pgen: 10.4,
        rating: "E"
      }, {
        class: 4,
        cost: 59630,
        edID: 128064044,
        eddbID: 902,
        eff: .75,
        grp: "pp",
        id: "pd",
        integrity: 64,
        mass: 4,
        pgen: 11.7,
        rating: "D"
      }, {
        class: 4,
        cost: 178900,
        edID: 128064045,
        eddbID: 903,
        eff: .5,
        grp: "pp",
        id: "pc",
        integrity: 80,
        mass: 5,
        pgen: 13,
        rating: "C"
      }, {
        class: 4,
        cost: 536690,
        edID: 128064046,
        eddbID: 904,
        eff: .45,
        grp: "pp",
        id: "pb",
        integrity: 96,
        mass: 8,
        pgen: 14.3,
        rating: "B"
      }, {
        class: 4,
        cost: 1610080,
        edID: 128064047,
        eddbID: 905,
        eff: .4,
        grp: "pp",
        id: "pa",
        integrity: 88,
        mass: 5,
        pgen: 15.6,
        rating: "A"
      }, {
        class: 3,
        cost: 6270,
        edID: 128064038,
        eddbID: 896,
        eff: 1,
        grp: "pp",
        id: "p9",
        integrity: 58,
        mass: 5,
        pgen: 8,
        rating: "E"
      }, {
        class: 3,
        cost: 18810,
        edID: 128064039,
        eddbID: 897,
        eff: .75,
        grp: "pp",
        id: "p8",
        integrity: 51,
        mass: 2,
        pgen: 9,
        rating: "D"
      }, {
        class: 3,
        cost: 56440,
        edID: 128064040,
        eddbID: 898,
        eff: .5,
        grp: "pp",
        id: "p7",
        integrity: 64,
        mass: 2.5,
        pgen: 10,
        rating: "C"
      }, {
        class: 3,
        cost: 169300,
        edID: 128064041,
        eddbID: 899,
        eff: .45,
        grp: "pp",
        id: "p6",
        integrity: 77,
        mass: 4,
        pgen: 11,
        rating: "B"
      }, {
        class: 3,
        cost: 507910,
        edID: 128064042,
        eddbID: 900,
        eff: .4,
        grp: "pp",
        id: "p5",
        integrity: 70,
        mass: 2.5,
        pgen: 12,
        rating: "A"
      }, {
        class: 2,
        cost: 1980,
        edID: 128064033,
        eddbID: 891,
        eff: 1,
        grp: "pp",
        id: "p4",
        integrity: 46,
        mass: 2.5,
        pgen: 6.4,
        rating: "E"
      }, {
        class: 2,
        cost: 5930,
        edID: 128064034,
        eddbID: 892,
        eff: .75,
        grp: "pp",
        id: "p3",
        integrity: 41,
        mass: 1,
        pgen: 7.2,
        rating: "D"
      }, {
        class: 2,
        cost: 17800,
        edID: 128064035,
        eddbID: 893,
        eff: .5,
        grp: "pp",
        id: "p2",
        integrity: 51,
        mass: 1.3,
        pgen: 8,
        rating: "C"
      }, {
        class: 2,
        cost: 53410,
        edID: 128064036,
        eddbID: 894,
        eff: .45,
        grp: "pp",
        id: "p1",
        integrity: 61,
        mass: 2,
        pgen: 8.8,
        rating: "B"
      }, {
        class: 2,
        cost: 160220,
        edID: 128064037,
        eddbID: 895,
        eff: .4,
        grp: "pp",
        id: "p0",
        integrity: 56,
        mass: 1.3,
        pgen: 9.6,
        rating: "A"
      } ],
      t: [ {
        class: 8,
        cost: 2007240,
        edID: 128064098,
        eddbID: 956,
        grp: "t",
        id: "ty",
        integrity: 135,
        mass: 160,
        maxmass: 3360,
        maxmul: 1.03,
        minmass: 1120,
        minmul: .83,
        optmass: 2240,
        optmul: 1,
        power: 7.2,
        rating: "E"
      }, {
        class: 8,
        cost: 6021720,
        edID: 128064099,
        eddbID: 957,
        grp: "t",
        id: "tx",
        integrity: 120,
        mass: 64,
        maxmass: 3780,
        maxmul: 1.06,
        minmass: 1260,
        minmul: .86,
        optmass: 2520,
        optmul: 1,
        power: 8.1,
        rating: "D"
      }, {
        class: 8,
        cost: 18065170,
        edID: 128064100,
        eddbID: 958,
        grp: "t",
        id: "tw",
        integrity: 150,
        mass: 160,
        maxmass: 4200,
        maxmul: 1.1,
        minmass: 1400,
        minmul: .9,
        optmass: 2800,
        optmul: 1,
        power: 9,
        rating: "C"
      }, {
        class: 8,
        cost: 54195500,
        edID: 128064101,
        eddbID: 959,
        grp: "t",
        id: "tv",
        integrity: 180,
        mass: 256,
        maxmass: 4620,
        maxmul: 1.13,
        minmass: 1540,
        minmul: .93,
        optmass: 3080,
        optmul: 1,
        power: 9.9,
        rating: "B"
      }, {
        class: 8,
        cost: 162586490,
        edID: 128064102,
        eddbID: 960,
        grp: "t",
        id: "tu",
        integrity: 165,
        mass: 160,
        maxmass: 5040,
        maxmul: 1.16,
        minmass: 1680,
        minmul: .96,
        optmass: 3360,
        optmul: 1,
        power: 10.8,
        rating: "A"
      }, {
        class: 7,
        cost: 633200,
        edID: 128064093,
        eddbID: 951,
        grp: "t",
        id: "tt",
        integrity: 118,
        mass: 80,
        maxmass: 2160,
        maxmul: 1.03,
        minmass: 720,
        minmul: .83,
        optmass: 1440,
        optmul: 1,
        power: 6.08,
        rating: "E"
      }, {
        class: 7,
        cost: 1899600,
        edID: 128064094,
        eddbID: 952,
        grp: "t",
        id: "ts",
        integrity: 105,
        mass: 32,
        maxmass: 2430,
        maxmul: 1.06,
        minmass: 810,
        minmul: .86,
        optmass: 1620,
        optmul: 1,
        power: 6.84,
        rating: "D"
      }, {
        class: 7,
        cost: 5698790,
        edID: 128064095,
        eddbID: 953,
        grp: "t",
        id: "tr",
        integrity: 131,
        mass: 80,
        maxmass: 2700,
        maxmul: 1.1,
        minmass: 900,
        minmul: .9,
        optmass: 1800,
        optmul: 1,
        power: 7.6,
        rating: "C"
      }, {
        class: 7,
        cost: 17096370,
        edID: 128064096,
        eddbID: 954,
        grp: "t",
        id: "tq",
        integrity: 157,
        mass: 128,
        maxmass: 2970,
        maxmul: 1.13,
        minmass: 990,
        minmul: .93,
        optmass: 1980,
        optmul: 1,
        power: 8.36,
        rating: "B"
      }, {
        class: 7,
        cost: 51289110,
        edID: 128064097,
        eddbID: 955,
        grp: "t",
        id: "tp",
        integrity: 144,
        mass: 80,
        maxmass: 3240,
        maxmul: 1.16,
        minmass: 1080,
        minmul: .96,
        optmass: 2160,
        optmul: 1,
        power: 9.12,
        rating: "A"
      }, {
        class: 6,
        cost: 199750,
        edID: 128064088,
        eddbID: 946,
        grp: "t",
        id: "to",
        integrity: 102,
        mass: 40,
        maxmass: 1440,
        maxmul: 1.03,
        minmass: 480,
        minmul: .83,
        optmass: 960,
        optmul: 1,
        power: 5.04,
        rating: "E"
      }, {
        class: 6,
        cost: 599240,
        edID: 128064089,
        eddbID: 947,
        grp: "t",
        id: "tn",
        integrity: 90,
        mass: 16,
        maxmass: 1620,
        maxmul: 1.06,
        minmass: 540,
        minmul: .86,
        optmass: 1080,
        optmul: 1,
        power: 5.67,
        rating: "D"
      }, {
        class: 6,
        cost: 1797730,
        edID: 128064090,
        eddbID: 948,
        grp: "t",
        id: "tm",
        integrity: 113,
        mass: 40,
        maxmass: 1800,
        maxmul: 1.1,
        minmass: 600,
        minmul: .9,
        optmass: 1200,
        optmul: 1,
        power: 6.3,
        rating: "C"
      }, {
        class: 6,
        cost: 5393180,
        edID: 128064091,
        eddbID: 949,
        grp: "t",
        id: "tl",
        integrity: 136,
        mass: 64,
        maxmass: 1980,
        maxmul: 1.13,
        minmass: 660,
        minmul: .93,
        optmass: 1320,
        optmul: 1,
        power: 6.93,
        rating: "B"
      }, {
        class: 6,
        cost: 16179530,
        edID: 128064092,
        eddbID: 950,
        grp: "t",
        id: "tk",
        integrity: 124,
        mass: 40,
        maxmass: 2160,
        maxmul: 1.16,
        minmass: 720,
        minmul: .96,
        optmass: 1440,
        optmul: 1,
        power: 7.56,
        rating: "A"
      }, {
        class: 5,
        cost: 63010,
        edID: 128064083,
        eddbID: 941,
        grp: "t",
        id: "tj",
        integrity: 86,
        mass: 20,
        maxmass: 840,
        maxmul: 1.03,
        minmass: 280,
        minmul: .83,
        optmass: 560,
        optmul: 1,
        power: 4.08,
        rating: "E"
      }, {
        class: 5,
        cost: 189040,
        edID: 128064084,
        eddbID: 942,
        grp: "t",
        id: "ti",
        integrity: 77,
        mass: 8,
        maxmass: 945,
        maxmul: 1.06,
        minmass: 315,
        minmul: .86,
        optmass: 630,
        optmul: 1,
        power: 4.59,
        rating: "D"
      }, {
        class: 5,
        cost: 567110,
        edID: 128064085,
        eddbID: 943,
        grp: "t",
        id: "th",
        integrity: 96,
        mass: 20,
        maxmass: 1050,
        maxmul: 1.1,
        minmass: 350,
        minmul: .9,
        optmass: 700,
        optmul: 1,
        power: 5.1,
        rating: "C"
      }, {
        class: 5,
        cost: 1701320,
        edID: 128064086,
        eddbID: 944,
        grp: "t",
        id: "tg",
        integrity: 115,
        mass: 32,
        maxmass: 1155,
        maxmul: 1.13,
        minmass: 385,
        minmul: .93,
        optmass: 770,
        optmul: 1,
        power: 5.61,
        rating: "B"
      }, {
        class: 5,
        cost: 5103950,
        edID: 128064087,
        eddbID: 945,
        grp: "t",
        id: "tf",
        integrity: 106,
        mass: 20,
        maxmass: 1260,
        maxmul: 1.16,
        minmass: 420,
        minmul: .96,
        optmass: 840,
        optmul: 1,
        power: 6.12,
        rating: "A"
      }, {
        class: 4,
        cost: 19880,
        edID: 128064078,
        eddbID: 936,
        grp: "t",
        id: "te",
        integrity: 72,
        mass: 10,
        maxmass: 420,
        maxmul: 1.03,
        minmass: 140,
        minmul: .83,
        optmass: 280,
        optmul: 1,
        power: 3.28,
        rating: "E"
      }, {
        class: 4,
        cost: 59630,
        edID: 128064079,
        eddbID: 937,
        grp: "t",
        id: "td",
        integrity: 64,
        mass: 4,
        maxmass: 472.5,
        maxmul: 1.06,
        minmass: 157.5,
        minmul: .86,
        optmass: 315,
        optmul: 1,
        power: 3.69,
        rating: "D"
      }, {
        class: 4,
        cost: 178900,
        edID: 128064080,
        eddbID: 938,
        grp: "t",
        id: "tc",
        integrity: 80,
        mass: 10,
        maxmass: 525,
        maxmul: 1.1,
        minmass: 175,
        minmul: .9,
        optmass: 350,
        optmul: 1,
        power: 4.1,
        rating: "C"
      }, {
        class: 4,
        cost: 536690,
        edID: 128064081,
        eddbID: 939,
        grp: "t",
        id: "tb",
        integrity: 96,
        mass: 16,
        maxmass: 577.5,
        maxmul: 1.13,
        minmass: 192.5,
        minmul: .93,
        optmass: 385,
        optmul: 1,
        power: 4.51,
        rating: "B"
      }, {
        class: 4,
        cost: 1610080,
        edID: 128064082,
        eddbID: 940,
        grp: "t",
        id: "ta",
        integrity: 88,
        mass: 10,
        maxmass: 630,
        maxmul: 1.16,
        minmass: 210,
        minmul: .96,
        optmass: 420,
        optmul: 1,
        power: 4.92,
        rating: "A"
      }, {
        class: 3,
        cost: 6270,
        edID: 128064073,
        eddbID: 931,
        grp: "t",
        id: "t9",
        integrity: 58,
        mass: 5,
        maxmass: 120,
        maxmul: 1.03,
        minmass: 40,
        minmul: .83,
        optmass: 80,
        optmul: 1,
        power: 2.48,
        rating: "E"
      }, {
        class: 3,
        cost: 18810,
        edID: 128064074,
        eddbID: 932,
        grp: "t",
        id: "t8",
        integrity: 51,
        mass: 2,
        maxmass: 135,
        maxmul: 1.06,
        minmass: 45,
        minmul: .86,
        optmass: 90,
        optmul: 1,
        power: 2.79,
        rating: "D"
      }, {
        class: 3,
        cost: 56440,
        edID: 128064075,
        eddbID: 933,
        grp: "t",
        id: "t7",
        integrity: 64,
        mass: 5,
        maxmass: 150,
        maxmul: 1.1,
        minmass: 50,
        minmul: .9,
        optmass: 100,
        optmul: 1,
        power: 3.1,
        rating: "C"
      }, {
        class: 3,
        cost: 169300,
        edID: 128064076,
        eddbID: 934,
        grp: "t",
        id: "t6",
        integrity: 77,
        mass: 8,
        maxmass: 165,
        maxmul: 1.13,
        minmass: 55,
        minmul: .93,
        optmass: 110,
        optmul: 1,
        power: 3.41,
        rating: "B"
      }, {
        class: 3,
        cost: 507910,
        edID: 128064077,
        eddbID: 935,
        grp: "t",
        id: "t5",
        integrity: 72,
        mass: 5,
        maxmass: 180,
        maxmul: 1.16,
        minmass: 60,
        minmul: .96,
        optmass: 120,
        optmul: 1,
        power: 3.72,
        rating: "A"
      }, {
        class: 2,
        cost: 1980,
        edID: 128064068,
        eddbID: 926,
        grp: "t",
        id: "t4",
        integrity: 46,
        mass: 2.5,
        maxmass: 72,
        maxmul: 1.03,
        minmass: 24,
        minmul: .83,
        optmass: 48,
        optmul: 1,
        power: 2,
        rating: "E"
      }, {
        class: 2,
        cost: 5930,
        edID: 128064069,
        eddbID: 927,
        grp: "t",
        id: "t3",
        integrity: 41,
        mass: 1,
        maxmass: 81,
        maxmul: 1.06,
        minmass: 27,
        minmul: .86,
        optmass: 54,
        optmul: 1,
        power: 2.25,
        rating: "D"
      }, {
        class: 2,
        cost: 17800,
        edID: 128064070,
        eddbID: 928,
        grp: "t",
        id: "t2",
        integrity: 51,
        mass: 2.5,
        maxmass: 90,
        maxmul: 1.1,
        minmass: 30,
        minmul: .9,
        optmass: 60,
        optmul: 1,
        power: 2.5,
        rating: "C"
      }, {
        class: 2,
        cost: 53410,
        edID: 128064071,
        eddbID: 929,
        grp: "t",
        id: "t1",
        integrity: 61,
        mass: 4,
        maxmass: 99,
        maxmul: 1.13,
        minmass: 33,
        minmul: .93,
        optmass: 66,
        optmul: 1,
        power: 2.75,
        rating: "B"
      }, {
        class: 2,
        cost: 160220,
        edID: 128064072,
        eddbID: 930,
        grp: "t",
        id: "t0",
        integrity: 56,
        mass: 2.5,
        maxmass: 108,
        maxmul: 1.16,
        minmass: 36,
        minmul: .96,
        optmass: 72,
        optmul: 1,
        power: 3,
        rating: "A"
      }, {
        class: 3,
        cost: 5103950,
        edID: 128682013,
        eddbID: 1548,
        grp: "t",
        id: "tz",
        integrity: 55,
        mass: 5,
        maxmass: 200,
        maxmul: 1.367,
        maxmulacceleration: 1.2,
        maxmulrotation: 1.3,
        maxmulspeed: 1.6,
        minmass: 70,
        minmul: .9,
        minmulacceleration: .9,
        minmulrotation: .9,
        minmulspeed: .9,
        name: "Enhanced Performance",
        optmass: 90,
        optmul: 1.15,
        optmulacceleration: 1.1,
        optmulrotation: 1.1,
        optmulspeed: 1.25,
        power: 5,
        rating: "A"
      }, {
        class: 2,
        cost: 1610080,
        edID: 128682014,
        eddbID: 1547,
        grp: "t",
        id: "u0",
        integrity: 40,
        mass: 2.5,
        maxmass: 120,
        maxmul: 1.367,
        maxmulacceleration: 1.2,
        maxmulrotation: 1.3,
        maxmulspeed: 1.6,
        minmass: 50,
        minmul: .9,
        minmulacceleration: .9,
        minmulrotation: .9,
        minmulspeed: .9,
        name: "Enhanced Performance",
        optmass: 60,
        optmul: 1.15,
        optmulacceleration: 1.1,
        optmulrotation: 1.1,
        optmulspeed: 1.25,
        power: 4,
        rating: "A"
      } ],
      fsd: [ {
        class: 8,
        cost: 0,
        edID: 128064133,
        eddbID: 991,
        fuelmul: .011,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fy",
        integrity: 93,
        mass: 160,
        maxfuel: 0,
        optmass: 0,
        power: 0,
        rating: "E"
      }, {
        class: 8,
        cost: 0,
        edID: 128064134,
        eddbID: 992,
        fuelmul: .01,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fx",
        integrity: 37,
        mass: 64,
        maxfuel: 0,
        optmass: 0,
        power: 0,
        rating: "D"
      }, {
        class: 8,
        cost: 0,
        edID: 128064135,
        eddbID: 993,
        fuelmul: .008,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fw",
        integrity: 46,
        mass: 160,
        maxfuel: 0,
        optmass: 0,
        power: 0,
        rating: "C"
      }, {
        class: 8,
        cost: 0,
        edID: 128064136,
        eddbID: 994,
        fuelmul: .01,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fv",
        integrity: 74,
        mass: 256,
        maxfuel: 0,
        optmass: 0,
        power: 0,
        rating: "B"
      }, {
        class: 8,
        cost: 0,
        edID: 128064137,
        eddbID: 995,
        fuelmul: .012,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fu",
        integrity: 46,
        mass: 160,
        maxfuel: 0,
        optmass: 0,
        power: 0,
        rating: "A"
      }, {
        class: 7,
        cost: 633200,
        edID: 128064128,
        eddbID: 986,
        fuelmul: .011,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Ft",
        integrity: 118,
        mass: 80,
        maxfuel: 8.5,
        optmass: 1440,
        power: .48,
        rating: "E"
      }, {
        class: 7,
        cost: 1899600,
        edID: 128064129,
        eddbID: 987,
        fuelmul: .01,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Fs",
        integrity: 105,
        mass: 32,
        maxfuel: 8.5,
        optmass: 1620,
        power: .54,
        rating: "D"
      }, {
        class: 7,
        cost: 5698790,
        edID: 128064130,
        eddbID: 988,
        fuelmul: .008,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Fr",
        integrity: 131,
        mass: 80,
        maxfuel: 8.5,
        optmass: 1800,
        power: .6,
        rating: "C"
      }, {
        class: 7,
        cost: 17096370,
        edID: 128064131,
        eddbID: 989,
        fuelmul: .01,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Fq",
        integrity: 157,
        mass: 128,
        maxfuel: 10.6,
        optmass: 2250,
        power: .75,
        rating: "B"
      }, {
        class: 7,
        cost: 51289110,
        edID: 128064132,
        eddbID: 990,
        fuelmul: .012,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Fp",
        integrity: 144,
        mass: 80,
        maxfuel: 12.8,
        optmass: 2700,
        power: .9,
        rating: "A"
      }, {
        class: 6,
        cost: 199750,
        edID: 128064123,
        eddbID: 981,
        fuelmul: .011,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fo",
        integrity: 102,
        mass: 40,
        maxfuel: 5.3,
        optmass: 960,
        power: .4,
        rating: "E"
      }, {
        class: 6,
        cost: 599240,
        edID: 128064124,
        eddbID: 982,
        fuelmul: .01,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fn",
        integrity: 90,
        mass: 16,
        maxfuel: 5.3,
        optmass: 1080,
        power: .45,
        rating: "D"
      }, {
        class: 6,
        cost: 1797730,
        edID: 128064125,
        eddbID: 983,
        fuelmul: .008,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fm",
        integrity: 113,
        mass: 40,
        maxfuel: 5.3,
        optmass: 1200,
        power: .5,
        rating: "C"
      }, {
        class: 6,
        cost: 5393180,
        edID: 128064126,
        eddbID: 984,
        fuelmul: .01,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fl",
        integrity: 136,
        mass: 64,
        maxfuel: 6.6,
        optmass: 1500,
        power: .63,
        rating: "B"
      }, {
        class: 6,
        cost: 16179530,
        edID: 128064127,
        eddbID: 985,
        fuelmul: .012,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fk",
        integrity: 124,
        mass: 40,
        maxfuel: 8,
        optmass: 1800,
        power: .75,
        rating: "A"
      }, {
        class: 5,
        cost: 63010,
        edID: 128064118,
        eddbID: 976,
        fuelmul: .011,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Fj",
        integrity: 86,
        mass: 20,
        maxfuel: 3.3,
        optmass: 560,
        power: .32,
        rating: "E"
      }, {
        class: 5,
        cost: 189040,
        edID: 128064119,
        eddbID: 977,
        fuelmul: .01,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Fi",
        integrity: 77,
        mass: 8,
        maxfuel: 3.3,
        optmass: 630,
        power: .36,
        rating: "D"
      }, {
        class: 5,
        cost: 567110,
        edID: 128064120,
        eddbID: 978,
        fuelmul: .008,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Fh",
        integrity: 96,
        mass: 20,
        maxfuel: 3.3,
        optmass: 700,
        power: .4,
        rating: "C"
      }, {
        class: 5,
        cost: 1701320,
        edID: 128064121,
        eddbID: 979,
        fuelmul: .01,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Fg",
        integrity: 115,
        mass: 32,
        maxfuel: 4.1,
        optmass: 875,
        power: .5,
        rating: "B"
      }, {
        class: 5,
        cost: 5103950,
        edID: 128064122,
        eddbID: 980,
        fuelmul: .012,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Ff",
        integrity: 120,
        mass: 20,
        maxfuel: 5,
        optmass: 1050,
        power: .6,
        rating: "A"
      }, {
        class: 4,
        cost: 19880,
        edID: 128064113,
        eddbID: 971,
        fuelmul: .011,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fe",
        integrity: 72,
        mass: 10,
        maxfuel: 2,
        optmass: 280,
        power: .24,
        rating: "E"
      }, {
        class: 4,
        cost: 59630,
        edID: 128064114,
        eddbID: 972,
        fuelmul: .01,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fd",
        integrity: 64,
        mass: 4,
        maxfuel: 2,
        optmass: 315,
        power: .27,
        rating: "D"
      }, {
        class: 4,
        cost: 178900,
        edID: 128064115,
        eddbID: 973,
        fuelmul: .008,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fc",
        integrity: 80,
        mass: 10,
        maxfuel: 2,
        optmass: 350,
        power: .3,
        rating: "C"
      }, {
        class: 4,
        cost: 536690,
        edID: 128064116,
        eddbID: 974,
        fuelmul: .01,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fb",
        integrity: 96,
        mass: 16,
        maxfuel: 2.5,
        optmass: 437.5,
        power: .38,
        rating: "B"
      }, {
        class: 4,
        cost: 1610080,
        edID: 128064117,
        eddbID: 975,
        fuelmul: .012,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fa",
        integrity: 88,
        mass: 10,
        maxfuel: 3,
        optmass: 525,
        power: .45,
        rating: "A"
      }, {
        class: 3,
        cost: 6270,
        edID: 128064108,
        eddbID: 966,
        fuelmul: .011,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F9",
        integrity: 58,
        mass: 5,
        maxfuel: 1.2,
        optmass: 80,
        power: .24,
        rating: "E"
      }, {
        class: 3,
        cost: 18810,
        edID: 128064109,
        eddbID: 967,
        fuelmul: .01,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F8",
        integrity: 51,
        mass: 2,
        maxfuel: 1.2,
        optmass: 90,
        power: .27,
        rating: "D"
      }, {
        class: 3,
        cost: 56440,
        edID: 128064110,
        eddbID: 968,
        fuelmul: .008,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F7",
        integrity: 64,
        mass: 5,
        maxfuel: 1.2,
        optmass: 100,
        power: .3,
        rating: "C"
      }, {
        class: 3,
        cost: 169300,
        edID: 128064111,
        eddbID: 969,
        fuelmul: .01,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F6",
        integrity: 77,
        mass: 8,
        maxfuel: 1.5,
        optmass: 125,
        power: .38,
        rating: "B"
      }, {
        class: 3,
        cost: 507910,
        edID: 128064112,
        eddbID: 970,
        fuelmul: .012,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F5",
        integrity: 70,
        mass: 5,
        maxfuel: 1.8,
        optmass: 150,
        power: .45,
        rating: "A"
      }, {
        class: 2,
        cost: 1980,
        edID: 128064103,
        eddbID: 961,
        fuelmul: .011,
        fuelpower: 2,
        grp: "fsd",
        id: "F4",
        integrity: 46,
        mass: 2.5,
        maxfuel: .6,
        optmass: 48,
        power: .16,
        rating: "E"
      }, {
        class: 2,
        cost: 5930,
        edID: 128064104,
        eddbID: 962,
        fuelmul: .01,
        fuelpower: 2,
        grp: "fsd",
        id: "F3",
        integrity: 41,
        mass: 1,
        maxfuel: .6,
        optmass: 54,
        power: .18,
        rating: "D"
      }, {
        class: 2,
        cost: 17800,
        edID: 128064105,
        eddbID: 963,
        fuelmul: .008,
        fuelpower: 2,
        grp: "fsd",
        id: "F2",
        integrity: 51,
        mass: 2.5,
        maxfuel: .6,
        optmass: 60,
        power: .2,
        rating: "C"
      }, {
        class: 2,
        cost: 53410,
        edID: 128064106,
        eddbID: 964,
        fuelmul: .01,
        fuelpower: 2,
        grp: "fsd",
        id: "F1",
        integrity: 61,
        mass: 4,
        maxfuel: .8,
        optmass: 75,
        power: .25,
        rating: "B"
      }, {
        class: 2,
        cost: 160220,
        edID: 128064107,
        eddbID: 965,
        fuelmul: .012,
        fuelpower: 2,
        grp: "fsd",
        id: "F0",
        integrity: 56,
        mass: 2.5,
        maxfuel: .9,
        optmass: 90,
        power: .3,
        rating: "A"
      } ],
      ls: [ {
        boot: 1,
        class: 8,
        cost: 697590,
        edID: 128064173,
        eddbID: 1031,
        grp: "ls",
        id: "lD",
        integrity: 120,
        mass: 160,
        power: .8,
        rating: "E",
        time: 300
      }, {
        boot: 1,
        class: 8,
        cost: 1743970,
        edID: 128064174,
        eddbID: 1032,
        grp: "ls",
        id: "lC",
        integrity: 135,
        mass: 64,
        power: .9,
        rating: "D",
        time: 450
      }, {
        boot: 1,
        class: 8,
        cost: 4359900,
        edID: 128064175,
        eddbID: 1033,
        grp: "ls",
        id: "lB",
        integrity: 150,
        mass: 160,
        power: 1,
        rating: "C",
        time: 600
      }, {
        boot: 1,
        class: 8,
        cost: 10899770,
        edID: 128064176,
        eddbID: 1034,
        grp: "ls",
        id: "lA",
        integrity: 165,
        mass: 256,
        power: 1.1,
        rating: "B",
        time: 900
      }, {
        boot: 1,
        class: 8,
        cost: 27249400,
        edID: 128064177,
        eddbID: 1035,
        grp: "ls",
        id: "lz",
        integrity: 180,
        mass: 160,
        power: 1.2,
        rating: "A",
        time: 1500
      }, {
        boot: 1,
        class: 7,
        cost: 249140,
        edID: 128064168,
        eddbID: 1026,
        grp: "ls",
        id: "ly",
        integrity: 105,
        mass: 80,
        power: .72,
        rating: "E",
        time: 300
      }, {
        boot: 1,
        class: 7,
        cost: 622840,
        edID: 128064169,
        eddbID: 1027,
        grp: "ls",
        id: "lx",
        integrity: 118,
        mass: 32,
        power: .81,
        rating: "D",
        time: 450
      }, {
        boot: 1,
        class: 7,
        cost: 1557110,
        edID: 128064170,
        eddbID: 1028,
        grp: "ls",
        id: "lw",
        integrity: 131,
        mass: 80,
        power: .9,
        rating: "C",
        time: 600
      }, {
        boot: 1,
        class: 7,
        cost: 3892770,
        edID: 128064171,
        eddbID: 1029,
        grp: "ls",
        id: "lv",
        integrity: 144,
        mass: 128,
        power: .99,
        rating: "B",
        time: 900
      }, {
        boot: 1,
        class: 7,
        cost: 9731930,
        edID: 128064172,
        eddbID: 1030,
        grp: "ls",
        id: "lu",
        integrity: 157,
        mass: 80,
        power: 1.08,
        rating: "A",
        time: 1500
      }, {
        boot: 1,
        class: 6,
        cost: 88980,
        edID: 128064163,
        eddbID: 1021,
        grp: "ls",
        id: "lt",
        integrity: 90,
        mass: 40,
        power: .64,
        rating: "E",
        time: 300
      }, {
        boot: 1,
        class: 6,
        cost: 222440,
        edID: 128064164,
        eddbID: 1022,
        grp: "ls",
        id: "ls",
        integrity: 102,
        mass: 16,
        power: .72,
        rating: "D",
        time: 450
      }, {
        boot: 1,
        class: 6,
        cost: 556110,
        edID: 128064165,
        eddbID: 1023,
        grp: "ls",
        id: "lr",
        integrity: 113,
        mass: 40,
        power: .8,
        rating: "C",
        time: 600
      }, {
        boot: 1,
        class: 6,
        cost: 1390280,
        edID: 128064166,
        eddbID: 1024,
        grp: "ls",
        id: "lq",
        integrity: 124,
        mass: 64,
        power: .88,
        rating: "B",
        time: 900
      }, {
        boot: 1,
        class: 6,
        cost: 3475690,
        edID: 128064167,
        eddbID: 1025,
        grp: "ls",
        id: "lp",
        integrity: 136,
        mass: 40,
        power: .96,
        rating: "A",
        time: 1500
      }, {
        boot: 1,
        class: 5,
        cost: 31780,
        edID: 128064158,
        eddbID: 1016,
        grp: "ls",
        id: "lo",
        integrity: 77,
        mass: 20,
        power: .57,
        rating: "E",
        time: 300
      }, {
        boot: 1,
        class: 5,
        cost: 79440,
        edID: 128064159,
        eddbID: 1017,
        grp: "ls",
        id: "ln",
        integrity: 86,
        mass: 8,
        power: .64,
        rating: "D",
        time: 450
      }, {
        boot: 1,
        class: 5,
        cost: 198610,
        edID: 128064160,
        eddbID: 1018,
        grp: "ls",
        id: "lm",
        integrity: 96,
        mass: 20,
        power: .71,
        rating: "C",
        time: 600
      }, {
        boot: 1,
        class: 5,
        cost: 496530,
        edID: 128064161,
        eddbID: 1019,
        grp: "ls",
        id: "ll",
        integrity: 106,
        mass: 32,
        power: .78,
        rating: "B",
        time: 900
      }, {
        boot: 1,
        class: 5,
        cost: 1241320,
        edID: 128064162,
        eddbID: 1020,
        grp: "ls",
        id: "lk",
        integrity: 115,
        mass: 20,
        power: .85,
        rating: "A",
        time: 1500
      }, {
        boot: 1,
        class: 4,
        cost: 11350,
        edID: 128064153,
        eddbID: 1011,
        grp: "ls",
        id: "lj",
        integrity: 64,
        mass: 10,
        power: .5,
        rating: "E",
        time: 300
      }, {
        boot: 1,
        class: 4,
        cost: 28370,
        edID: 128064154,
        eddbID: 1012,
        grp: "ls",
        id: "li",
        integrity: 72,
        mass: 4,
        power: .56,
        rating: "D",
        time: 450
      }, {
        boot: 1,
        class: 4,
        cost: 70930,
        edID: 128064155,
        eddbID: 1013,
        grp: "ls",
        id: "lh",
        integrity: 80,
        mass: 10,
        power: .62,
        rating: "C",
        time: 600
      }, {
        boot: 1,
        class: 4,
        cost: 177330,
        edID: 128064156,
        eddbID: 1014,
        grp: "ls",
        id: "lg",
        integrity: 88,
        mass: 16,
        power: .68,
        rating: "B",
        time: 900
      }, {
        boot: 1,
        class: 4,
        cost: 443330,
        edID: 128064157,
        eddbID: 1015,
        grp: "ls",
        id: "lf",
        integrity: 96,
        mass: 10,
        power: .74,
        rating: "A",
        time: 1500
      }, {
        boot: 1,
        class: 3,
        cost: 4050,
        edID: 128064148,
        eddbID: 1006,
        grp: "ls",
        id: "le",
        integrity: 51,
        mass: 5,
        power: .42,
        rating: "E",
        time: 300
      }, {
        boot: 1,
        class: 3,
        cost: 10130,
        edID: 128064149,
        eddbID: 1007,
        grp: "ls",
        id: "ld",
        integrity: 58,
        mass: 2,
        power: .48,
        rating: "D",
        time: 450
      }, {
        boot: 1,
        class: 3,
        cost: 25330,
        edID: 128064150,
        eddbID: 1008,
        grp: "ls",
        id: "lc",
        integrity: 64,
        mass: 5,
        power: .53,
        rating: "C",
        time: 600
      }, {
        boot: 1,
        class: 3,
        cost: 63330,
        edID: 128064151,
        eddbID: 1009,
        grp: "ls",
        id: "lb",
        integrity: 70,
        mass: 8,
        power: .58,
        rating: "B",
        time: 900
      }, {
        boot: 1,
        class: 3,
        cost: 158330,
        edID: 128064152,
        eddbID: 1010,
        grp: "ls",
        id: "la",
        integrity: 77,
        mass: 5,
        power: .64,
        rating: "A",
        time: 1500
      }, {
        boot: 1,
        class: 2,
        cost: 1450,
        edID: 128064143,
        eddbID: 1001,
        grp: "ls",
        id: "l9",
        integrity: 41,
        mass: 2.5,
        power: .37,
        rating: "E",
        time: 300
      }, {
        boot: 1,
        class: 2,
        cost: 3620,
        edID: 128064144,
        eddbID: 1002,
        grp: "ls",
        id: "l8",
        integrity: 46,
        mass: 1,
        power: .41,
        rating: "D",
        time: 450
      }, {
        boot: 1,
        class: 2,
        cost: 9050,
        edID: 128064145,
        eddbID: 1003,
        grp: "ls",
        id: "l7",
        integrity: 51,
        mass: 2.5,
        power: .46,
        rating: "C",
        time: 600
      }, {
        boot: 1,
        class: 2,
        cost: 22620,
        edID: 128064146,
        eddbID: 1004,
        grp: "ls",
        id: "l6",
        integrity: 56,
        mass: 4,
        power: .51,
        rating: "B",
        time: 900
      }, {
        boot: 1,
        class: 2,
        cost: 56550,
        edID: 128064147,
        eddbID: 1005,
        grp: "ls",
        id: "l5",
        integrity: 61,
        mass: 2.5,
        power: .55,
        rating: "A",
        time: 1500
      }, {
        boot: 1,
        class: 1,
        cost: 520,
        edID: 128064138,
        eddbID: 996,
        grp: "ls",
        id: "l4",
        integrity: 32,
        mass: 1.3,
        power: .32,
        rating: "E",
        time: 300
      }, {
        boot: 1,
        class: 1,
        cost: 1290,
        edID: 128064139,
        eddbID: 997,
        grp: "ls",
        id: "l3",
        integrity: 36,
        mass: .5,
        power: .36,
        rating: "D",
        time: 450
      }, {
        boot: 1,
        class: 1,
        cost: 3230,
        edID: 128064140,
        eddbID: 998,
        grp: "ls",
        id: "l2",
        integrity: 40,
        mass: 1.3,
        power: .4,
        rating: "C",
        time: 600
      }, {
        boot: 1,
        class: 1,
        cost: 8080,
        edID: 128064141,
        eddbID: 999,
        grp: "ls",
        id: "l1",
        integrity: 44,
        mass: 2,
        power: .44,
        rating: "B",
        time: 900
      }, {
        boot: 1,
        class: 1,
        cost: 20200,
        edID: 128064142,
        eddbID: 1e3,
        grp: "ls",
        id: "l0",
        integrity: 48,
        mass: 1.3,
        power: .48,
        rating: "A",
        time: 1500
      } ],
      pd: [ {
        class: 8,
        cost: 697580,
        edID: 128064213,
        eddbID: 1071,
        engcap: 32,
        engrate: 3.2,
        grp: "pd",
        id: "dD",
        integrity: 135,
        mass: 160,
        power: .64,
        rating: "E",
        syscap: 32,
        sysrate: 3.2,
        wepcap: 48,
        weprate: 4.8
      }, {
        class: 8,
        cost: 1743960,
        edID: 128064214,
        eddbID: 1072,
        engcap: 36,
        engrate: 3.6,
        grp: "pd",
        id: "dC",
        integrity: 120,
        mass: 64,
        power: .72,
        rating: "D",
        syscap: 36,
        sysrate: 3.6,
        wepcap: 54,
        weprate: 5.4
      }, {
        class: 8,
        cost: 4359900,
        edID: 128064215,
        eddbID: 1073,
        engcap: 40,
        engrate: 4,
        grp: "pd",
        id: "dB",
        integrity: 150,
        mass: 160,
        power: .8,
        rating: "C",
        syscap: 40,
        sysrate: 4,
        wepcap: 60,
        weprate: 6
      }, {
        class: 8,
        cost: 10899760,
        edID: 128064216,
        eddbID: 1074,
        engcap: 44,
        engrate: 4.4,
        grp: "pd",
        id: "dA",
        integrity: 180,
        mass: 256,
        power: .88,
        rating: "B",
        syscap: 44,
        sysrate: 4.4,
        wepcap: 66,
        weprate: 6.6
      }, {
        class: 8,
        cost: 27249390,
        edID: 128064217,
        eddbID: 1075,
        engcap: 48,
        engrate: 4.8,
        grp: "pd",
        id: "dz",
        integrity: 165,
        mass: 160,
        power: .96,
        rating: "A",
        syscap: 48,
        sysrate: 4.8,
        wepcap: 72,
        weprate: 7.2
      }, {
        class: 7,
        cost: 249140,
        edID: 128064208,
        eddbID: 1066,
        engcap: 27,
        engrate: 2.6,
        grp: "pd",
        id: "dy",
        integrity: 118,
        mass: 80,
        power: .59,
        rating: "E",
        syscap: 27,
        sysrate: 2.6,
        wepcap: 41,
        weprate: 4.1
      }, {
        class: 7,
        cost: 622840,
        edID: 128064209,
        eddbID: 1067,
        engcap: 31,
        engrate: 3,
        grp: "pd",
        id: "dx",
        integrity: 105,
        mass: 32,
        power: .67,
        rating: "D",
        syscap: 31,
        sysrate: 3,
        wepcap: 46,
        weprate: 4.6
      }, {
        class: 7,
        cost: 1557110,
        edID: 128064210,
        eddbID: 1068,
        engcap: 34,
        engrate: 3.3,
        grp: "pd",
        id: "dw",
        integrity: 131,
        mass: 80,
        power: .74,
        rating: "C",
        syscap: 34,
        sysrate: 3.3,
        wepcap: 51,
        weprate: 5.1
      }, {
        class: 7,
        cost: 3892770,
        edID: 128064211,
        eddbID: 1069,
        engcap: 37,
        engrate: 3.6,
        grp: "pd",
        id: "dv",
        integrity: 157,
        mass: 128,
        power: .81,
        rating: "B",
        syscap: 37,
        sysrate: 3.6,
        wepcap: 56,
        weprate: 5.6
      }, {
        class: 7,
        cost: 9731930,
        edID: 128064212,
        eddbID: 1070,
        engcap: 41,
        engrate: 4,
        grp: "pd",
        id: "du",
        integrity: 144,
        mass: 80,
        power: .89,
        rating: "A",
        syscap: 41,
        sysrate: 4,
        wepcap: 61,
        weprate: 6.1
      }, {
        class: 6,
        cost: 88980,
        edID: 128064203,
        eddbID: 1061,
        engcap: 23,
        engrate: 2.2,
        grp: "pd",
        id: "dt",
        integrity: 102,
        mass: 40,
        power: .54,
        rating: "E",
        syscap: 23,
        sysrate: 2.2,
        wepcap: 34,
        weprate: 3.4
      }, {
        class: 6,
        cost: 222440,
        edID: 128064204,
        eddbID: 1062,
        engcap: 26,
        engrate: 2.4,
        grp: "pd",
        id: "ds",
        integrity: 90,
        mass: 16,
        power: .61,
        rating: "D",
        syscap: 26,
        sysrate: 2.4,
        wepcap: 38,
        weprate: 3.9
      }, {
        class: 6,
        cost: 556110,
        edID: 128064205,
        eddbID: 1063,
        engcap: 29,
        engrate: 2.7,
        grp: "pd",
        id: "dr",
        integrity: 113,
        mass: 40,
        power: .68,
        rating: "C",
        syscap: 29,
        sysrate: 2.7,
        wepcap: 42,
        weprate: 4.3
      }, {
        class: 6,
        cost: 1390280,
        edID: 128064206,
        eddbID: 1064,
        engcap: 32,
        engrate: 3,
        grp: "pd",
        id: "dq",
        integrity: 136,
        mass: 64,
        power: .75,
        rating: "B",
        syscap: 32,
        sysrate: 3,
        wepcap: 46,
        weprate: 4.7
      }, {
        class: 6,
        cost: 3475690,
        edID: 128064207,
        eddbID: 1065,
        engcap: 35,
        engrate: 3.2,
        grp: "pd",
        id: "dp",
        integrity: 124,
        mass: 40,
        power: .82,
        rating: "A",
        syscap: 35,
        sysrate: 3.2,
        wepcap: 50,
        weprate: 5.2
      }, {
        class: 5,
        cost: 31780,
        edID: 128064198,
        eddbID: 1056,
        engcap: 19,
        engrate: 1.7,
        grp: "pd",
        id: "do",
        integrity: 86,
        mass: 20,
        power: .5,
        rating: "E",
        syscap: 19,
        sysrate: 1.7,
        wepcap: 27,
        weprate: 2.9
      }, {
        class: 5,
        cost: 79440,
        edID: 128064199,
        eddbID: 1057,
        engcap: 22,
        engrate: 1.9,
        grp: "pd",
        id: "dn",
        integrity: 77,
        mass: 8,
        power: .56,
        rating: "D",
        syscap: 22,
        sysrate: 1.9,
        wepcap: 31,
        weprate: 3.2
      }, {
        class: 5,
        cost: 198610,
        edID: 128064200,
        eddbID: 1058,
        engcap: 24,
        engrate: 2.1,
        grp: "pd",
        id: "dm",
        integrity: 96,
        mass: 20,
        power: .62,
        rating: "C",
        syscap: 24,
        sysrate: 2.1,
        wepcap: 34,
        weprate: 3.6
      }, {
        class: 5,
        cost: 496530,
        edID: 128064201,
        eddbID: 1059,
        engcap: 26,
        engrate: 2.3,
        grp: "pd",
        id: "dl",
        integrity: 115,
        mass: 32,
        power: .68,
        rating: "B",
        syscap: 26,
        sysrate: 2.3,
        wepcap: 37,
        weprate: 4
      }, {
        class: 5,
        cost: 1241320,
        edID: 128064202,
        eddbID: 1060,
        engcap: 29,
        engrate: 2.5,
        grp: "pd",
        id: "dk",
        integrity: 106,
        mass: 20,
        power: .74,
        rating: "A",
        syscap: 29,
        sysrate: 2.5,
        wepcap: 41,
        weprate: 4.3
      }, {
        class: 4,
        cost: 11350,
        edID: 128064193,
        eddbID: 1051,
        engcap: 15,
        engrate: 1.3,
        grp: "pd",
        id: "dj",
        integrity: 72,
        mass: 10,
        power: .45,
        rating: "E",
        syscap: 15,
        sysrate: 1.3,
        wepcap: 22,
        weprate: 2.3
      }, {
        class: 4,
        cost: 28370,
        edID: 128064194,
        eddbID: 1052,
        engcap: 17,
        engrate: 1.4,
        grp: "pd",
        id: "di",
        integrity: 64,
        mass: 4,
        power: .5,
        rating: "D",
        syscap: 17,
        sysrate: 1.4,
        wepcap: 24,
        weprate: 2.6
      }, {
        class: 4,
        cost: 70930,
        edID: 128064195,
        eddbID: 1053,
        engcap: 19,
        engrate: 1.6,
        grp: "pd",
        id: "dh",
        integrity: 80,
        mass: 10,
        power: .56,
        rating: "C",
        syscap: 19,
        sysrate: 1.6,
        wepcap: 27,
        weprate: 2.9
      }, {
        class: 4,
        cost: 177330,
        edID: 128064196,
        eddbID: 1054,
        engcap: 21,
        engrate: 1.8,
        grp: "pd",
        id: "dg",
        integrity: 96,
        mass: 16,
        power: .62,
        rating: "B",
        syscap: 21,
        sysrate: 1.8,
        wepcap: 30,
        weprate: 3.2
      }, {
        class: 4,
        cost: 443330,
        edID: 128064197,
        eddbID: 1055,
        engcap: 23,
        engrate: 1.9,
        grp: "pd",
        id: "df",
        integrity: 88,
        mass: 10,
        power: .67,
        rating: "A",
        syscap: 23,
        sysrate: 1.9,
        wepcap: 32,
        weprate: 3.5
      }, {
        class: 3,
        cost: 4050,
        edID: 128064188,
        eddbID: 1046,
        engcap: 12,
        engrate: .9,
        grp: "pd",
        id: "de",
        integrity: 58,
        mass: 5,
        power: .4,
        rating: "E",
        syscap: 12,
        sysrate: .9,
        wepcap: 16,
        weprate: 1.8
      }, {
        class: 3,
        cost: 10130,
        edID: 128064189,
        eddbID: 1047,
        engcap: 14,
        engrate: 1,
        grp: "pd",
        id: "dd",
        integrity: 51,
        mass: 2,
        power: .45,
        rating: "D",
        syscap: 14,
        sysrate: 1,
        wepcap: 18,
        weprate: 2.1
      }, {
        class: 3,
        cost: 25330,
        edID: 128064190,
        eddbID: 1048,
        engcap: 15,
        engrate: 1.1,
        grp: "pd",
        id: "dc",
        integrity: 64,
        mass: 5,
        power: .5,
        rating: "C",
        syscap: 15,
        sysrate: 1.1,
        wepcap: 20,
        weprate: 2.3
      }, {
        class: 3,
        cost: 63330,
        edID: 128064191,
        eddbID: 1049,
        engcap: 17,
        engrate: 1.2,
        grp: "pd",
        id: "db",
        integrity: 77,
        mass: 8,
        power: .55,
        rating: "B",
        syscap: 17,
        sysrate: 1.2,
        wepcap: 22,
        weprate: 2.5
      }, {
        class: 3,
        cost: 158330,
        edID: 128064192,
        eddbID: 1050,
        engcap: 18,
        engrate: 1.3,
        grp: "pd",
        id: "da",
        integrity: 70,
        mass: 5,
        power: .6,
        rating: "A",
        syscap: 18,
        sysrate: 1.3,
        wepcap: 24,
        weprate: 2.8
      }, {
        class: 2,
        cost: 1450,
        edID: 128064183,
        eddbID: 1041,
        engcap: 10,
        engrate: .6,
        grp: "pd",
        id: "d9",
        integrity: 46,
        mass: 2.5,
        power: .36,
        rating: "E",
        syscap: 10,
        sysrate: .6,
        wepcap: 12,
        weprate: 1.4
      }, {
        class: 2,
        cost: 3620,
        edID: 128064184,
        eddbID: 1042,
        engcap: 11,
        engrate: .6,
        grp: "pd",
        id: "d8",
        integrity: 41,
        mass: 1,
        power: .41,
        rating: "D",
        syscap: 11,
        sysrate: .6,
        wepcap: 14,
        weprate: 1.6
      }, {
        class: 2,
        cost: 9050,
        edID: 128064185,
        eddbID: 1043,
        engcap: 12,
        engrate: .7,
        grp: "pd",
        id: "d7",
        integrity: 51,
        mass: 2.5,
        power: .45,
        rating: "C",
        syscap: 12,
        sysrate: .7,
        wepcap: 15,
        weprate: 1.8
      }, {
        class: 2,
        cost: 22620,
        edID: 128064186,
        eddbID: 1044,
        engcap: 13,
        engrate: .8,
        grp: "pd",
        id: "d6",
        integrity: 61,
        mass: 4,
        power: .5,
        rating: "B",
        syscap: 13,
        sysrate: .8,
        wepcap: 17,
        weprate: 2
      }, {
        class: 2,
        cost: 56550,
        edID: 128064187,
        eddbID: 1045,
        engcap: 14,
        engrate: .8,
        grp: "pd",
        id: "d5",
        integrity: 56,
        mass: 2.5,
        power: .54,
        rating: "A",
        syscap: 14,
        sysrate: .8,
        wepcap: 18,
        weprate: 2.2
      }, {
        class: 1,
        cost: 520,
        edID: 128064178,
        eddbID: 1036,
        engcap: 8,
        engrate: .4,
        grp: "pd",
        id: "d4",
        integrity: 46,
        mass: 1.3,
        power: .32,
        rating: "E",
        syscap: 8,
        sysrate: .4,
        wepcap: 10,
        weprate: 1.2
      }, {
        class: 1,
        cost: 1290,
        edID: 128064179,
        eddbID: 1037,
        engcap: 9,
        engrate: .5,
        grp: "pd",
        id: "d3",
        integrity: 41,
        mass: .5,
        power: .36,
        rating: "D",
        syscap: 9,
        sysrate: .5,
        wepcap: 11,
        weprate: 1.4
      }, {
        class: 1,
        cost: 3230,
        edID: 128064180,
        eddbID: 1038,
        engcap: 10,
        engrate: .5,
        grp: "pd",
        id: "d2",
        integrity: 51,
        mass: 1.3,
        power: .4,
        rating: "C",
        syscap: 10,
        sysrate: .5,
        wepcap: 12,
        weprate: 1.5
      }, {
        class: 1,
        cost: 8080,
        edID: 128064181,
        eddbID: 1039,
        engcap: 11,
        engrate: .6,
        grp: "pd",
        id: "d1",
        integrity: 61,
        mass: 2,
        power: .44,
        rating: "B",
        syscap: 11,
        sysrate: .6,
        wepcap: 13,
        weprate: 1.7
      }, {
        class: 1,
        cost: 20200,
        edID: 128064182,
        eddbID: 1040,
        engcap: 12,
        engrate: .6,
        grp: "pd",
        id: "d0",
        integrity: 56,
        mass: 1.3,
        power: .48,
        rating: "A",
        syscap: 12,
        sysrate: .6,
        wepcap: 14,
        weprate: 1.8
      } ],
      s: [ {
        angle: 30,
        class: 8,
        cost: 697580,
        edID: 128064253,
        eddbID: 1111,
        grp: "s",
        id: "sy",
        integrity: 135,
        mass: 160,
        power: .55,
        range: 5.12,
        rating: "E"
      }, {
        angle: 30,
        class: 8,
        cost: 1743960,
        edID: 128064254,
        eddbID: 1112,
        grp: "s",
        id: "sx",
        integrity: 120,
        mass: 64,
        power: .62,
        range: 5.76,
        rating: "D"
      }, {
        angle: 30,
        class: 8,
        cost: 4359900,
        edID: 128064255,
        eddbID: 1113,
        grp: "s",
        id: "sw",
        integrity: 150,
        mass: 160,
        power: .69,
        range: 6.4,
        rating: "C"
      }, {
        angle: 30,
        class: 8,
        cost: 10899760,
        edID: 128064256,
        eddbID: 1114,
        grp: "s",
        id: "sv",
        integrity: 180,
        mass: 256,
        power: 1.14,
        range: 7.04,
        rating: "B"
      }, {
        angle: 30,
        class: 8,
        cost: 27249390,
        edID: 128064257,
        eddbID: 1115,
        grp: "s",
        id: "su",
        integrity: 165,
        mass: 160,
        power: 2.07,
        range: 7.68,
        rating: "A"
      }, {
        angle: 30,
        class: 7,
        cost: 249140,
        edID: 128064248,
        eddbID: 1106,
        grp: "s",
        id: "sD",
        integrity: 118,
        mass: 80,
        power: .47,
        range: 4.96,
        rating: "E"
      }, {
        angle: 30,
        class: 7,
        cost: 622840,
        edID: 128064249,
        eddbID: 1107,
        grp: "s",
        id: "sC",
        integrity: 105,
        mass: 32,
        power: .53,
        range: 5.58,
        rating: "D"
      }, {
        angle: 30,
        class: 7,
        cost: 1557110,
        edID: 128064250,
        eddbID: 1108,
        grp: "s",
        id: "sB",
        integrity: 131,
        mass: 80,
        power: .59,
        range: 6.2,
        rating: "C"
      }, {
        angle: 30,
        class: 7,
        cost: 3892770,
        edID: 128064251,
        eddbID: 1109,
        grp: "s",
        id: "sA",
        integrity: 157,
        mass: 128,
        power: .97,
        range: 6.82,
        rating: "B"
      }, {
        angle: 30,
        class: 7,
        cost: 9731930,
        edID: 128064252,
        eddbID: 1110,
        grp: "s",
        id: "sz",
        integrity: 144,
        mass: 80,
        power: 1.77,
        range: 7.44,
        rating: "A"
      }, {
        angle: 30,
        class: 6,
        cost: 88980,
        edID: 128064243,
        eddbID: 1101,
        grp: "s",
        id: "st",
        integrity: 102,
        mass: 40,
        power: .4,
        range: 4.8,
        rating: "E"
      }, {
        angle: 30,
        class: 6,
        cost: 222440,
        edID: 128064244,
        eddbID: 1102,
        grp: "s",
        id: "ss",
        integrity: 90,
        mass: 16,
        power: .45,
        range: 5.4,
        rating: "D"
      }, {
        angle: 30,
        class: 6,
        cost: 556110,
        edID: 128064245,
        eddbID: 1103,
        grp: "s",
        id: "sr",
        integrity: 113,
        mass: 40,
        power: .5,
        range: 6,
        rating: "C"
      }, {
        angle: 30,
        class: 6,
        cost: 1390280,
        edID: 128064246,
        eddbID: 1104,
        grp: "s",
        id: "sq",
        integrity: 136,
        mass: 64,
        power: .83,
        range: 6.6,
        rating: "B"
      }, {
        angle: 30,
        class: 6,
        cost: 3475690,
        edID: 128064247,
        eddbID: 1105,
        grp: "s",
        id: "sp",
        integrity: 124,
        mass: 40,
        power: 1.5,
        range: 7.2,
        rating: "A"
      }, {
        angle: 30,
        class: 5,
        cost: 31780,
        edID: 128064238,
        eddbID: 1096,
        grp: "s",
        id: "so",
        integrity: 86,
        mass: 20,
        power: .33,
        range: 4.64,
        rating: "E"
      }, {
        angle: 30,
        class: 5,
        cost: 79440,
        edID: 128064239,
        eddbID: 1097,
        grp: "s",
        id: "sn",
        integrity: 77,
        mass: 8,
        power: .37,
        range: 5.22,
        rating: "D"
      }, {
        angle: 30,
        class: 5,
        cost: 198610,
        edID: 128064240,
        eddbID: 1098,
        grp: "s",
        id: "sm",
        integrity: 96,
        mass: 20,
        power: .41,
        range: 5.8,
        rating: "C"
      }, {
        angle: 30,
        class: 5,
        cost: 496530,
        edID: 128064241,
        eddbID: 1099,
        grp: "s",
        id: "sl",
        integrity: 115,
        mass: 32,
        power: .68,
        range: 6.38,
        rating: "B"
      }, {
        angle: 30,
        class: 5,
        cost: 1241320,
        edID: 128064242,
        eddbID: 1100,
        grp: "s",
        id: "sk",
        integrity: 106,
        mass: 20,
        power: 1.23,
        range: 6.96,
        rating: "A"
      }, {
        angle: 30,
        class: 4,
        cost: 11350,
        edID: 128064233,
        eddbID: 1091,
        grp: "s",
        id: "sj",
        integrity: 72,
        mass: 10,
        power: .27,
        range: 4.48,
        rating: "E"
      }, {
        angle: 30,
        class: 4,
        cost: 28370,
        edID: 128064234,
        eddbID: 1092,
        grp: "s",
        id: "si",
        integrity: 64,
        mass: 4,
        power: .31,
        range: 5.04,
        rating: "D"
      }, {
        angle: 30,
        class: 4,
        cost: 70930,
        edID: 128064235,
        eddbID: 1093,
        grp: "s",
        id: "sh",
        integrity: 80,
        mass: 10,
        power: .34,
        range: 5.6,
        rating: "C"
      }, {
        angle: 30,
        class: 4,
        cost: 177330,
        edID: 128064236,
        eddbID: 1094,
        grp: "s",
        id: "sg",
        integrity: 96,
        mass: 16,
        power: .56,
        range: 6.16,
        rating: "B"
      }, {
        angle: 30,
        class: 4,
        cost: 443330,
        edID: 128064237,
        eddbID: 1095,
        grp: "s",
        id: "sf",
        integrity: 88,
        mass: 10,
        power: 1.02,
        range: 6.72,
        rating: "A"
      }, {
        angle: 30,
        class: 3,
        cost: 4050,
        edID: 128064228,
        eddbID: 1086,
        grp: "s",
        id: "se",
        integrity: 58,
        mass: 5,
        power: .22,
        range: 4.32,
        rating: "E"
      }, {
        angle: 30,
        class: 3,
        cost: 10130,
        edID: 128064229,
        eddbID: 1087,
        grp: "s",
        id: "sd",
        integrity: 51,
        mass: 2,
        power: .25,
        range: 4.86,
        rating: "D"
      }, {
        angle: 30,
        class: 3,
        cost: 25330,
        edID: 128064230,
        eddbID: 1088,
        grp: "s",
        id: "sc",
        integrity: 64,
        mass: 5,
        power: .28,
        range: 5.4,
        rating: "C"
      }, {
        angle: 30,
        class: 3,
        cost: 63330,
        edID: 128064231,
        eddbID: 1089,
        grp: "s",
        id: "sb",
        integrity: 77,
        mass: 8,
        power: .46,
        range: 5.94,
        rating: "B"
      }, {
        angle: 30,
        class: 3,
        cost: 158330,
        edID: 128064232,
        eddbID: 1090,
        grp: "s",
        id: "sa",
        integrity: 70,
        mass: 5,
        power: .84,
        range: 6.48,
        rating: "A"
      }, {
        angle: 30,
        class: 2,
        cost: 1450,
        edID: 128064223,
        eddbID: 1081,
        grp: "s",
        id: "s9",
        integrity: 46,
        mass: 2.5,
        power: .18,
        range: 4.16,
        rating: "E"
      }, {
        angle: 30,
        class: 2,
        cost: 3620,
        edID: 128064224,
        eddbID: 1082,
        grp: "s",
        id: "s8",
        integrity: 41,
        mass: 1,
        power: .21,
        range: 4.68,
        rating: "D"
      }, {
        angle: 30,
        class: 2,
        cost: 9050,
        edID: 128064225,
        eddbID: 1083,
        grp: "s",
        id: "s7",
        integrity: 51,
        mass: 2.5,
        power: .23,
        range: 5.2,
        rating: "C"
      }, {
        angle: 30,
        class: 2,
        cost: 22620,
        edID: 128064226,
        eddbID: 1084,
        grp: "s",
        id: "s6",
        integrity: 61,
        mass: 4,
        power: .38,
        range: 5.72,
        rating: "B"
      }, {
        angle: 30,
        class: 2,
        cost: 56550,
        edID: 128064227,
        eddbID: 1085,
        grp: "s",
        id: "s5",
        integrity: 56,
        mass: 2.5,
        power: .69,
        range: 6.24,
        rating: "A"
      }, {
        angle: 30,
        class: 1,
        cost: 520,
        edID: 128064218,
        eddbID: 1076,
        grp: "s",
        id: "s4",
        integrity: 46,
        mass: 1.3,
        power: .16,
        range: 4,
        rating: "E"
      }, {
        angle: 30,
        class: 1,
        cost: 1290,
        edID: 128064219,
        eddbID: 1077,
        grp: "s",
        id: "s3",
        integrity: 41,
        mass: .5,
        power: .18,
        range: 4.5,
        rating: "D"
      }, {
        angle: 30,
        class: 1,
        cost: 3230,
        edID: 128064220,
        eddbID: 1078,
        grp: "s",
        id: "s2",
        integrity: 51,
        mass: 1.3,
        power: .2,
        range: 5,
        rating: "C"
      }, {
        angle: 30,
        class: 1,
        cost: 8080,
        edID: 128064221,
        eddbID: 1079,
        grp: "s",
        id: "s1",
        integrity: 61,
        mass: 2,
        power: .33,
        range: 5.5,
        rating: "B"
      }, {
        angle: 30,
        class: 1,
        cost: 20200,
        edID: 128064222,
        eddbID: 1080,
        grp: "s",
        id: "s0",
        integrity: 56,
        mass: 1.3,
        power: .6,
        range: 6,
        rating: "A"
      } ],
      ft: [ {
        class: 1,
        cost: 1e3,
        edID: 128064346,
        eddbID: 1199,
        fuel: 2,
        grp: "ft",
        id: "f1",
        rating: "C"
      }, {
        class: 2,
        cost: 3750,
        edID: 128064347,
        eddbID: 1200,
        fuel: 4,
        grp: "ft",
        id: "f2",
        rating: "C"
      }, {
        class: 3,
        cost: 7060,
        edID: 128064348,
        eddbID: 1201,
        fuel: 8,
        grp: "ft",
        id: "f3",
        rating: "C"
      }, {
        class: 4,
        cost: 24730,
        edID: 128064349,
        eddbID: 1202,
        fuel: 16,
        grp: "ft",
        id: "f4",
        rating: "C"
      }, {
        class: 5,
        cost: 97750,
        edID: 128064350,
        eddbID: 1203,
        fuel: 32,
        grp: "ft",
        id: "f5",
        rating: "C"
      }, {
        class: 6,
        cost: 341580,
        edID: 128064351,
        eddbID: 1204,
        fuel: 64,
        grp: "ft",
        id: "f6",
        rating: "C"
      }, {
        class: 7,
        cost: 1780910,
        edID: 128064352,
        eddbID: 1205,
        fuel: 128,
        grp: "ft",
        id: "f7",
        rating: "C"
      }, {
        class: 8,
        cost: 5428400,
        edID: 128064353,
        eddbID: 1206,
        fuel: 256,
        grp: "ft",
        id: "f8",
        rating: "C"
      } ],
      pas: [ {
        class: 1,
        cost: 500,
        edID: 128672317,
        eddbID: 1538,
        grp: "pas",
        id: "PA",
        mass: 0,
        power: 0,
        rating: "I"
      } ]
    },
    hardpoints: {
      pl: [ {
        breachdmg: 1.7,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 2200,
        damage: 2.05,
        damagedist: {
          T: 1
        },
        distdraw: .3,
        edID: 128049381,
        eddbID: 823,
        falloff: 500,
        grp: "pl",
        id: "17",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 20,
        power: .39,
        range: 3e3,
        rating: "F",
        rof: 3.85,
        thermload: .33
      }, {
        breachdmg: 1.3,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 6600,
        damage: 1.56,
        damagedist: {
          T: 1
        },
        distdraw: .31,
        edID: 128049385,
        eddbID: 826,
        falloff: 500,
        grp: "pl",
        id: "18",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 20,
        power: .39,
        range: 3e3,
        rating: "G",
        rof: 4,
        thermload: .31
      }, {
        breachdmg: 1,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 26e3,
        damage: 1.19,
        damagedist: {
          T: 1
        },
        distdraw: .19,
        edID: 128049388,
        eddbID: 829,
        falloff: 500,
        grp: "pl",
        id: "19",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 20,
        power: .38,
        range: 3e3,
        rating: "G",
        rof: 3.33,
        thermload: .19
      }, {
        breachdmg: 3,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 17600,
        damage: 3.5,
        damagedist: {
          T: 1
        },
        distdraw: .5,
        edID: 128049382,
        eddbID: 824,
        falloff: 500,
        grp: "pl",
        id: "1a",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 35,
        power: .6,
        range: 3e3,
        rating: "E",
        rof: 3.45,
        thermload: .56
      }, {
        breachdmg: 2.3,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 35400,
        damage: 2.68,
        damagedist: {
          T: 1
        },
        distdraw: .54,
        edID: 128049386,
        eddbID: 827,
        falloff: 500,
        grp: "pl",
        id: "1b",
        integrity: 51,
        mass: 4,
        mount: "G",
        piercing: 35,
        power: .6,
        range: 3e3,
        rating: "F",
        rof: 3.57,
        thermload: .54
      }, {
        breachdmg: 1.7,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 132800,
        damage: 2.05,
        damagedist: {
          T: 1
        },
        distdraw: .33,
        edID: 128049389,
        eddbID: 830,
        falloff: 500,
        grp: "pl",
        id: "1c",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 35,
        power: .58,
        range: 3e3,
        rating: "F",
        rof: 3.03,
        thermload: .33
      }, {
        breachdmg: 2.4,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 26400,
        damage: 2.8,
        damagedist: {
          T: 1
        },
        distdraw: .9,
        edID: 128671342,
        eddbID: 1483,
        falloff: 500,
        grp: "pl",
        id: "PL",
        integrity: 51,
        mass: 4,
        mount: "F",
        name: "Disruptor",
        piercing: 35,
        power: .7,
        pp: "Felicia Winters",
        rating: "E",
        rof: 1.664,
        thermload: 1
      }, {
        breachdmg: 5.1,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 70400,
        damage: 5.98,
        damagedist: {
          T: 1
        },
        distdraw: .86,
        edID: 128049383,
        eddbID: 825,
        falloff: 500,
        grp: "pl",
        id: "1d",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 52,
        power: .9,
        range: 3e3,
        rating: "D",
        rof: 3.03,
        thermload: .96
      }, {
        breachdmg: 3.9,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 140600,
        damage: 4.58,
        damagedist: {
          T: 1
        },
        distdraw: .92,
        edID: 128049387,
        eddbID: 828,
        falloff: 500,
        grp: "pl",
        id: "1e",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 52,
        power: .92,
        range: 3e3,
        rating: "E",
        rof: 3.23,
        thermload: .92
      }, {
        breachdmg: 3,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 400400,
        damage: 3.5,
        damagedist: {
          T: 1
        },
        distdraw: .56,
        edID: 128049390,
        eddbID: 831,
        falloff: 500,
        grp: "pl",
        id: "1f",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 52,
        power: .89,
        range: 3e3,
        rating: "F",
        rof: 2.7,
        thermload: .56
      }, {
        breachdmg: 8.7,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        cost: 177600,
        damage: 10.24,
        damagedist: {
          T: 1
        },
        distdraw: 1.48,
        edID: 128049384,
        eddbID: 1539,
        falloff: 500,
        grp: "pl",
        id: "7q",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 65,
        power: 1.33,
        range: 3e3,
        rating: "A",
        rof: 2.63,
        thermload: 1.64
      }, {
        breachdmg: 6.6,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        cost: 877600,
        damage: 7.82,
        damagedist: {
          T: 1
        },
        distdraw: 1.56,
        edID: 128681995,
        eddbID: 1545,
        falloff: 500,
        grp: "pl",
        id: "7r",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 65,
        power: 1.37,
        range: 3e3,
        rating: "A",
        rof: 2.78,
        thermload: 1.56
      } ],
      ul: [ {
        breachdmg: 1.5,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 15,
        class: 1,
        cost: 4400,
        damage: 1.72,
        damagedist: {
          T: 1
        },
        distdraw: .25,
        edID: 128049400,
        eddbID: 832,
        falloff: 500,
        grp: "ul",
        id: "11",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 20,
        power: .65,
        range: 3e3,
        rating: "F",
        rof: 2,
        thermload: .38
      }, {
        breachdmg: 1,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 17,
        class: 1,
        cost: 8600,
        damage: 1.22,
        damagedist: {
          T: 1
        },
        distdraw: .24,
        edID: 128049404,
        eddbID: 835,
        falloff: 500,
        grp: "ul",
        id: "12",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 20,
        power: .64,
        range: 3e3,
        rating: "G",
        rof: 2.23,
        thermload: .34
      }, {
        breachdmg: .4,
        breachmax: .8,
        breachmin: .6,
        burst: 3,
        burstrof: 19,
        class: 1,
        cost: 52800,
        damage: .87,
        damagedist: {
          T: 1
        },
        distdraw: .14,
        edID: 128049407,
        eddbID: 838,
        falloff: 500,
        grp: "ul",
        id: "13",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 20,
        power: .6,
        range: 3e3,
        rating: "G",
        rof: 1.92,
        thermload: .19
      }, {
        breachdmg: 3.1,
        breachmax: 0,
        breachmin: 0,
        burst: 8,
        burstrof: 20,
        class: 1,
        cost: 8800,
        damage: 3.6,
        damagedist: {
          T: 1
        },
        distdraw: .31,
        edID: 128671449,
        eddbID: 1477,
        falloff: 600,
        grp: "ul",
        id: "cy",
        integrity: 40,
        jitter: 3.5,
        mass: 2,
        mount: "F",
        name: "Cytoscrambler",
        piercing: 1,
        power: .8,
        pp: "Archon Delaine",
        range: 3e3,
        rating: "F",
        rof: 7.6,
        thermload: .3
      }, {
        breachdmg: 3,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 11,
        class: 2,
        cost: 23e3,
        damage: 3.53,
        damagedist: {
          T: 1
        },
        distdraw: .5,
        edID: 128049401,
        eddbID: 833,
        falloff: 500,
        grp: "ul",
        id: "7h",
        integrity: 40,
        mass: 4,
        mount: "F",
        piercing: 35,
        power: 1.05,
        range: 3e3,
        rating: "E",
        rof: 1.6,
        thermload: .78
      }, {
        breachdmg: 2.1,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 13,
        class: 2,
        cost: 48500,
        damage: 2.45,
        damagedist: {
          T: 1
        },
        distdraw: .49,
        edID: 128049405,
        eddbID: 836,
        falloff: 500,
        grp: "ul",
        id: "7i",
        integrity: 40,
        mass: 4,
        mount: "G",
        piercing: 35,
        power: 1.04,
        range: 3e3,
        rating: "F",
        rof: 1.78,
        thermload: .67
      }, {
        breachdmg: .9,
        breachmax: .8,
        breachmin: .6,
        burst: 3,
        burstrof: 15,
        class: 2,
        cost: 162800,
        damage: 1.72,
        damagedist: {
          T: 1
        },
        distdraw: .28,
        edID: 128049408,
        eddbID: 839,
        falloff: 500,
        grp: "ul",
        id: "7j",
        integrity: 40,
        mass: 4,
        mount: "T",
        piercing: 35,
        power: .98,
        range: 3e3,
        rating: "F",
        rof: 1.57,
        thermload: .38
      }, {
        breachdmg: 3.9,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 7,
        class: 3,
        cost: 140400,
        damage: 7.73,
        damagedist: {
          T: 1
        },
        distdraw: 1.11,
        edID: 128049402,
        eddbID: 834,
        falloff: 500,
        grp: "ul",
        id: "14",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 52,
        power: 1.66,
        range: 3e3,
        rating: "D",
        rof: 1.2,
        thermload: 1.7
      }, {
        breachdmg: 4.4,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 9,
        class: 3,
        cost: 281600,
        damage: 5.16,
        damagedist: {
          T: 1
        },
        distdraw: 1.03,
        edID: 128049406,
        eddbID: 837,
        falloff: 500,
        grp: "ul",
        id: "15",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 52,
        power: 1.65,
        range: 3e3,
        rating: "E",
        rof: 1.4,
        thermload: 1.42
      }, {
        breachdmg: 1.8,
        breachmax: .8,
        breachmin: .6,
        burst: 3,
        burstrof: 11,
        class: 3,
        cost: 800400,
        damage: 3.53,
        damagedist: {
          T: 1
        },
        distdraw: .56,
        edID: 128049409,
        eddbID: 840,
        falloff: 500,
        grp: "ul",
        id: "16",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 52,
        power: 1.57,
        range: 3e3,
        rating: "E",
        rof: 1.272,
        thermload: .78
      }, {
        breachdmg: 17.5,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 3,
        class: 4,
        cost: 281600,
        damage: 20.61,
        damagedist: {
          T: 1
        },
        distdraw: 2.98,
        edID: 128049403,
        eddbID: 1549,
        falloff: 500,
        grp: "ul",
        id: "7s",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 65,
        power: 2.58,
        range: 3e3,
        rating: "E",
        rof: .8,
        thermload: 4.53
      }, {
        breachdmg: 10.3,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 5,
        class: 4,
        cost: 1245600,
        damage: 12.09,
        damagedist: {
          T: 1
        },
        distdraw: 2.41,
        edID: 128727920,
        eddbID: 1550,
        falloff: 500,
        grp: "ul",
        id: "7t",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 65,
        power: 2.59,
        range: 3e3,
        rating: "E",
        rof: 1,
        thermload: 3.33
      } ],
      bl: [ {
        breachdmg: 7.9,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 37430,
        damage: 9.8,
        damagedist: {
          T: 1
        },
        distdraw: 1.94,
        edID: 128049428,
        eddbID: 841,
        falloff: 600,
        grp: "bl",
        id: "10",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 18,
        power: .62,
        range: 3e3,
        rating: "E",
        thermload: 3.5
      }, {
        breachdmg: 6.1,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 74650,
        damage: 7.66,
        damagedist: {
          T: 1
        },
        distdraw: 2.11,
        edID: 128049432,
        eddbID: 844,
        falloff: 600,
        grp: "bl",
        id: "0p",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 18,
        power: .6,
        range: 3e3,
        rating: "E",
        thermload: 3.6
      }, {
        breachdmg: 4.3,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 5e5,
        damage: 5.4,
        damagedist: {
          T: 1
        },
        distdraw: 1.32,
        edID: 128049435,
        eddbID: 847,
        falloff: 600,
        eps: 1.32,
        grp: "bl",
        hps: 2.4,
        id: "0q",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 18,
        power: .57,
        range: 3e3,
        rating: "F",
        thermload: 2.4
      }, {
        breachdmg: 3.9,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 56150,
        damage: 4.9,
        damagedist: {
          T: 1
        },
        distdraw: 2.52,
        edID: 128671346,
        eddbID: 1476,
        falloff: 600,
        grp: "bl",
        id: "b0",
        integrity: 40,
        mass: 2,
        mount: "F",
        name: "Retributor",
        piercing: 18,
        power: .62,
        pp: "Edmund Mahon",
        range: 3e3,
        rating: "E",
        thermload: 2.7
      }, {
        breachdmg: 12.8,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 299520,
        damage: 15.96,
        damagedist: {
          T: 1
        },
        distdraw: 3.16,
        edID: 128049429,
        eddbID: 842,
        falloff: 600,
        grp: "bl",
        id: "0r",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 35,
        power: 1.01,
        range: 3e3,
        rating: "D",
        thermload: 5.1
      }, {
        breachdmg: 10,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 500600,
        damage: 12.52,
        damagedist: {
          T: 1
        },
        distdraw: 3.44,
        edID: 128049433,
        eddbID: 845,
        falloff: 600,
        grp: "bl",
        id: "0s",
        integrity: 51,
        mass: 4,
        mount: "G",
        piercing: 35,
        power: .99,
        range: 3e3,
        rating: "D",
        thermload: 5.3
      }, {
        breachdmg: 7.1,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 2099900,
        damage: 8.82,
        damagedist: {
          T: 1
        },
        distdraw: 2.16,
        edID: 128049436,
        eddbID: 848,
        falloff: 600,
        grp: "bl",
        id: "0t",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 35,
        power: .93,
        range: 3e3,
        rating: "E",
        thermload: 3.5
      }, {
        breachdmg: 20.6,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 1177600,
        damage: 25.78,
        damagedist: {
          T: 1
        },
        distdraw: 5.1,
        edID: 128049430,
        eddbID: 843,
        falloff: 600,
        grp: "bl",
        id: "0u",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 50,
        power: 1.62,
        range: 3e3,
        rating: "C",
        thermload: 7.2
      }, {
        breachdmg: 16.2,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 2396160,
        damage: 20.28,
        damagedist: {
          T: 1
        },
        distdraw: 5.58,
        edID: 128049434,
        eddbID: 846,
        falloff: 600,
        grp: "bl",
        id: "0v",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 50,
        power: 1.6,
        range: 3e3,
        rating: "C",
        thermload: 7.6
      }, {
        breachdmg: 11.5,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 19399600,
        damage: 14.34,
        damagedist: {
          T: 1
        },
        distdraw: 3.51,
        edID: 128049437,
        eddbID: 849,
        falloff: 600,
        grp: "bl",
        id: "0o",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 50,
        power: 1.51,
        range: 3e3,
        rating: "D",
        thermload: 5.1
      }, {
        breachdmg: 33.1,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        cost: 2396160,
        damage: 41.38,
        damagedist: {
          T: 1
        },
        distdraw: 8.19,
        edID: 128049431,
        eddbID: 1540,
        falloff: 600,
        grp: "bl",
        id: "0w",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 60,
        power: 2.61,
        range: 3e3,
        rating: "A",
        thermload: 9.9
      }, {
        breachdmg: 26.1,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        cost: 8746160,
        damage: 32.68,
        damagedist: {
          T: 1
        },
        distdraw: 8.99,
        edID: 128681994,
        eddbID: 1544,
        falloff: 600,
        grp: "bl",
        id: "0x",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 60,
        power: 2.57,
        range: 3e3,
        rating: "A",
        thermload: 10.6
      } ],
      mc: [ {
        ammo: 2100,
        breachdmg: 1,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 100,
        cost: 9500,
        damage: 1.12,
        damagedist: {
          K: 1
        },
        distdraw: .06,
        edID: 128049455,
        eddbID: 867,
        falloff: 1800,
        grp: "mc",
        id: "23",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 22,
        power: .28,
        range: 4e3,
        rating: "F",
        reload: 4,
        rof: 7.69,
        shotspeed: 1600,
        thermload: .09
      }, {
        ammo: 2100,
        breachdmg: .7,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 90,
        cost: 14250,
        damage: .82,
        damagedist: {
          K: 1
        },
        distdraw: .07,
        edID: 128049459,
        eddbID: 869,
        falloff: 1800,
        grp: "mc",
        id: "24",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 22,
        power: .37,
        range: 4e3,
        rating: "G",
        reload: 5,
        rof: 8.33,
        shotspeed: 1600,
        thermload: .1
      }, {
        ammo: 2100,
        breachdmg: .5,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 90,
        cost: 81600,
        damage: .56,
        damagedist: {
          K: 1
        },
        distdraw: .03,
        edID: 128049462,
        eddbID: 871,
        falloff: 1800,
        grp: "mc",
        id: "25",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 22,
        power: .26,
        range: 4e3,
        rating: "G",
        reload: 4,
        rof: 7.14,
        shotspeed: 1600,
        thermload: .04
      }, {
        ammo: 1e3,
        breachdmg: 2.6,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 60,
        cost: 13980,
        damage: 2.9,
        damagedist: {
          K: 1
        },
        distdraw: .12,
        edID: 128671345,
        eddbID: 1481,
        falloff: 1800,
        grp: "mc",
        id: "e0",
        integrity: 40,
        mass: 2,
        mount: "F",
        name: "Enforcer",
        piercing: 30,
        power: .28,
        pp: "Pranav Antal",
        range: 4500,
        rating: "F",
        reload: 4,
        rof: 4.3,
        shotspeed: 1800,
        thermload: .2
      }, {
        ammo: 2100,
        breachdmg: 2,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 100,
        cost: 38e3,
        damage: 2.19,
        damagedist: {
          K: 1
        },
        distdraw: .11,
        edID: 128049456,
        eddbID: 868,
        falloff: 1800,
        grp: "mc",
        id: "26",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 37,
        power: .46,
        range: 4e3,
        rating: "E",
        reload: 4,
        rof: 7.14,
        shotspeed: 1600,
        thermload: .18
      }, {
        ammo: 2100,
        breachdmg: 1.5,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 90,
        cost: 57e3,
        damage: 1.64,
        damagedist: {
          K: 1
        },
        distdraw: .14,
        edID: 128049460,
        eddbID: 870,
        falloff: 1800,
        grp: "mc",
        id: "27",
        integrity: 51,
        mass: 4,
        mount: "G",
        piercing: 37,
        power: .64,
        range: 4e3,
        rating: "F",
        reload: 5,
        rof: 7.69,
        shotspeed: 1600,
        thermload: .2
      }, {
        ammo: 2100,
        breachdmg: 1.1,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 90,
        cost: 1292800,
        damage: 1.17,
        damagedist: {
          K: 1
        },
        distdraw: .06,
        edID: 128049463,
        eddbID: 872,
        falloff: 1800,
        grp: "mc",
        id: "28",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 37,
        power: .5,
        range: 4e3,
        rating: "F",
        reload: 4,
        rof: 6.25,
        shotspeed: 1600,
        thermload: .09
      }, {
        ammo: 2100,
        breachdmg: 3.5,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 100,
        cost: 140400,
        damage: 3.92,
        damagedist: {
          K: 1
        },
        distdraw: .18,
        edID: 128049457,
        eddbID: 1541,
        falloff: 1800,
        grp: "mc",
        id: "7k",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 54,
        power: .64,
        range: 4e3,
        rating: "C",
        reload: 4,
        rof: 5.884,
        shotspeed: 1600,
        thermload: .28
      }, {
        ammo: 2100,
        breachdmg: 2.6,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 90,
        cost: 578436,
        damage: 2.84,
        damagedist: {
          K: 1
        },
        distdraw: .25,
        edID: 128049461,
        eddbID: 1543,
        falloff: 1800,
        grp: "mc",
        id: "7l",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 54,
        power: .97,
        range: 4e3,
        rating: "C",
        reload: 5,
        rof: 6.665,
        shotspeed: 1600,
        thermload: .34
      }, {
        ammo: 2100,
        breachdmg: 4.2,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        clip: 100,
        cost: 1177600,
        damage: 4.625,
        damagedist: {
          K: 1
        },
        distdraw: .24,
        edID: 128049458,
        eddbID: 1542,
        falloff: 1800,
        grp: "mc",
        id: "7n",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 68,
        power: .73,
        range: 4e3,
        rating: "A",
        reload: 4,
        rof: 3.03,
        roundspershot: 2,
        shotspeed: 1600,
        thermload: .39
      }, {
        ammo: 2100,
        breachdmg: 3.1,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        clip: 90,
        cost: 6377600,
        damage: 3.46,
        damagedist: {
          K: 1
        },
        distdraw: .37,
        edID: 128681996,
        eddbID: 1546,
        falloff: 1800,
        grp: "mc",
        id: "7o",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 68,
        power: 1.22,
        range: 4e3,
        rating: "A",
        reload: 5,
        rof: 3.365,
        roundspershot: 2,
        shotspeed: 1600,
        thermload: .51
      } ],
      axmc: [ {
        ammo: 2100,
        breachdmg: 2.8,
        breachmax: .5,
        breachmin: .8,
        class: 2,
        clip: 100,
        cost: 379e3,
        damage: 3.3,
        damagedist: {
          X: 1
        },
        distdraw: .11,
        edID: 128788701,
        eddbID: 1618,
        falloff: 2e3,
        grp: "axmc",
        id: "x0",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 17,
        power: .46,
        range: 4e3,
        rating: "E",
        reload: 4,
        rof: 7.1,
        shotspeed: 1600,
        thermload: .2
      }, {
        ammo: 2100,
        breachdmg: .4,
        breachmax: .5,
        breachmin: .5,
        class: 2,
        clip: 90,
        cost: 1826500,
        damage: 1.7,
        damagedist: {
          X: 1
        },
        distdraw: .06,
        edID: 128793059,
        eddbID: 1619,
        falloff: 2e3,
        grp: "axmc",
        id: "x1",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 17,
        power: .5,
        range: 4e3,
        rating: "F",
        reload: 4,
        rof: 6.2,
        shotspeed: 1600,
        thermload: .1
      }, {
        ammo: 2100,
        breachdmg: 5.2,
        breachmax: .5,
        breachmin: .8,
        class: 3,
        clip: 100,
        cost: 1181500,
        damage: 6.1,
        damagedist: {
          X: 1
        },
        distdraw: .18,
        edID: 128788702,
        eddbID: 1625,
        falloff: 2e3,
        grp: "axmc",
        id: "x2",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 33,
        power: .64,
        range: 4e3,
        rating: "C",
        reload: 4,
        rof: 5.9,
        shotspeed: 1600,
        thermload: .3
      }, {
        ammo: 2100,
        breachdmg: .8,
        breachmax: .5,
        breachmin: .5,
        class: 3,
        clip: 90,
        cost: 3821600,
        damage: 3.3,
        damagedist: {
          X: 1
        },
        distdraw: .06,
        edID: 128793060,
        eddbID: 1626,
        falloff: 2e3,
        grp: "axmc",
        id: "x3",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 33,
        power: .64,
        range: 4e3,
        rating: "E",
        reload: 4,
        rof: 6.2,
        shotspeed: 1600,
        thermload: .1
      } ],
      c: [ {
        ammo: 120,
        breachdmg: 17.1,
        breachmax: .8,
        breachmin: .6,
        class: 1,
        clip: 6,
        cost: 21100,
        damage: 22.5,
        damagedist: {
          K: 1
        },
        distdraw: .46,
        edID: 128049438,
        eddbID: 850,
        falloff: 3e3,
        grp: "c",
        id: "1h",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 35,
        power: .34,
        range: 3e3,
        rating: "D",
        reload: 3,
        rof: .5,
        shotspeed: 1200,
        thermload: 1.4
      }, {
        ammo: 100,
        breachdmg: 13.2,
        breachmax: .9,
        breachmin: .6,
        class: 1,
        clip: 5,
        cost: 42200,
        damage: 16,
        damagedist: {
          K: 1
        },
        distdraw: .48,
        edID: 128049442,
        eddbID: 854,
        falloff: 3e3,
        grp: "c",
        id: "1i",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 35,
        power: .38,
        range: 3e3,
        rating: "E",
        reload: 4,
        rof: .52,
        shotspeed: 1e3,
        thermload: 1.3
      }, {
        ammo: 100,
        breachdmg: 10.6,
        breachmax: .8,
        breachmin: .6,
        class: 1,
        clip: 5,
        cost: 506400,
        damage: 12.75,
        damagedist: {
          K: 1
        },
        distdraw: .22,
        edID: 128049445,
        eddbID: 857,
        falloff: 3e3,
        grp: "c",
        id: "1j",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 35,
        power: .32,
        range: 3e3,
        rating: "F",
        reload: 4,
        rof: .435,
        shotspeed: 1e3,
        thermload: .7
      }, {
        ammo: 120,
        breachdmg: 28,
        breachmax: .8,
        breachmin: .6,
        class: 2,
        clip: 6,
        cost: 168430,
        damage: 36.5,
        damagedist: {
          K: 1
        },
        distdraw: .7,
        edID: 128049439,
        eddbID: 851,
        falloff: 3500,
        grp: "c",
        id: "1k",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 50,
        power: .49,
        range: 3500,
        rating: "D",
        reload: 3,
        rof: .465,
        shotspeed: 1051,
        thermload: 2.1
      }, {
        ammo: 100,
        breachdmg: 20.3,
        breachmax: .8,
        breachmin: .6,
        class: 2,
        clip: 5,
        cost: 337600,
        damage: 24.5,
        damagedist: {
          K: 1
        },
        distdraw: .75,
        edID: 128049443,
        eddbID: 855,
        falloff: 3500,
        grp: "c",
        id: "1l",
        integrity: 51,
        mass: 4,
        mount: "G",
        piercing: 50,
        power: .54,
        range: 3500,
        rating: "D",
        reload: 4,
        rof: .485,
        shotspeed: 875,
        thermload: 1.9
      }, {
        ammo: 100,
        breachdmg: 16.3,
        breachmax: .8,
        breachmin: .6,
        class: 2,
        clip: 5,
        cost: 4051200,
        damage: 19.77,
        damagedist: {
          K: 1
        },
        distdraw: .34,
        edID: 128049446,
        eddbID: 858,
        falloff: 3500,
        grp: "c",
        id: "1m",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 50,
        power: .45,
        range: 3500,
        rating: "E",
        reload: 4,
        rof: .405,
        shotspeed: 875,
        thermload: 1
      }, {
        ammo: 120,
        breachdmg: 42.3,
        breachmax: .8,
        breachmin: .6,
        class: 3,
        clip: 6,
        cost: 675200,
        damage: 54.94,
        damagedist: {
          K: 1
        },
        distdraw: 1.07,
        edID: 128049440,
        eddbID: 852,
        falloff: 4e3,
        grp: "c",
        id: "1n",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 70,
        power: .67,
        range: 4e3,
        rating: "C",
        reload: 3,
        rof: .425,
        shotspeed: 959,
        thermload: 3.2
      }, {
        ammo: 100,
        breachdmg: 30.9,
        breachmax: .8,
        breachmin: .6,
        class: 3,
        clip: 5,
        cost: 1350400,
        damage: 37.39,
        damagedist: {
          K: 1
        },
        distdraw: 1.14,
        edID: 128671120,
        eddbID: 1383,
        falloff: 4e3,
        eps: .456,
        grp: "c",
        hps: 1.16,
        id: "1o",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 70,
        power: .75,
        range: 4e3,
        rating: "C",
        reload: 4,
        rof: .445,
        shotspeed: 800,
        thermload: 2.9
      }, {
        ammo: 100,
        breachdmg: 25.14,
        breachmax: .8,
        breachmin: .6,
        class: 3,
        clip: 5,
        cost: 16204800,
        damage: 30.4,
        damagedist: {
          K: 1
        },
        distdraw: .53,
        edID: 128049447,
        eddbID: 859,
        falloff: 4e3,
        grp: "c",
        id: "1p",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 70,
        power: .64,
        range: 4e3,
        rating: "D",
        reload: 4,
        rof: .37,
        shotspeed: 800,
        thermload: 1.6
      }, {
        ammo: 120,
        breachdmg: 63.2,
        breachmax: .8,
        breachmin: .6,
        class: 4,
        clip: 6,
        cost: 2700800,
        damage: 82.1,
        damagedist: {
          K: 1
        },
        distdraw: 1.61,
        edID: 128049441,
        eddbID: 853,
        falloff: 4500,
        eps: .644,
        grp: "c",
        hps: 1.92,
        id: "1q",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 90,
        power: .92,
        range: 4500,
        rating: "B",
        reload: 3,
        rof: .385,
        shotspeed: 900,
        thermload: 4.8
      }, {
        ammo: 100,
        breachdmg: 46.7,
        breachmax: .8,
        breachmin: .6,
        class: 4,
        clip: 5,
        cost: 5401600,
        damage: 56.58,
        damagedist: {
          K: 1
        },
        distdraw: 1.72,
        edID: 128049444,
        eddbID: 856,
        falloff: 4500,
        eps: .688,
        grp: "c",
        hps: 1.76,
        id: "1r",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 90,
        power: 1.03,
        range: 4500,
        rating: "B",
        reload: 4,
        rof: .4,
        shotspeed: 750,
        thermload: 4.4
      } ],
      fc: [ {
        ammo: 180,
        breachdmg: 1.3,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 3,
        cost: 36e3,
        damage: 1.43,
        damagedist: {
          K: 1
        },
        distdraw: .21,
        edID: 128049448,
        eddbID: 860,
        falloff: 1800,
        grp: "fc",
        id: "20",
        integrity: 40,
        jitter: 5,
        mass: 2,
        mount: "F",
        piercing: 20,
        power: .45,
        range: 2e3,
        rating: "E",
        reload: 5,
        rof: 5.555,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .4
      }, {
        ammo: 180,
        breachdmg: .9,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 3,
        cost: 54720,
        damage: 1.01,
        damagedist: {
          K: 1
        },
        distdraw: .26,
        edID: 128049451,
        eddbID: 863,
        falloff: 1800,
        grp: "fc",
        id: "21",
        integrity: 40,
        jitter: 5,
        mass: 2,
        mount: "G",
        piercing: 20,
        power: .59,
        range: 2e3,
        rating: "E",
        reload: 5,
        rof: 5.88,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .4
      }, {
        ammo: 180,
        breachdmg: .5,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 3,
        cost: 182400,
        damage: .69,
        damagedist: {
          K: 1
        },
        distdraw: .1,
        edID: 128049453,
        eddbID: 865,
        falloff: 1800,
        grp: "fc",
        id: "22",
        integrity: 40,
        jitter: 5,
        mass: 2,
        mount: "T",
        piercing: 20,
        power: .42,
        range: 2e3,
        rating: "E",
        reload: 5,
        rof: 4.76,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .2
      }, {
        ammo: 180,
        breachdmg: 2.3,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 3,
        cost: 291840,
        damage: 3,
        damagedist: {
          K: 1
        },
        distdraw: .37,
        edID: 128049449,
        eddbID: 861,
        falloff: 1800,
        grp: "fc",
        id: "1s",
        integrity: 80,
        jitter: 5,
        mass: 4,
        mount: "F",
        piercing: 30,
        power: .74,
        range: 2e3,
        rating: "A",
        reload: 5,
        rof: 4.975,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .7
      }, {
        ammo: 180,
        breachdmg: 1.8,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 3,
        cost: 437800,
        damage: 2.275,
        damagedist: {
          K: 1
        },
        distdraw: .49,
        edID: 128049452,
        eddbID: 864,
        falloff: 1800,
        grp: "fc",
        id: "7e",
        integrity: 80,
        jitter: 5,
        mass: 4,
        mount: "G",
        piercing: 30,
        power: 1.03,
        range: 2e3,
        rating: "D",
        reload: 5,
        rof: 5.26,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .8
      }, {
        ammo: 180,
        breachdmg: 1.3,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 3,
        cost: 1459200,
        damage: 1.7,
        damagedist: {
          K: 1
        },
        distdraw: .21,
        edID: 128049454,
        eddbID: 866,
        falloff: 1800,
        grp: "fc",
        id: "7f",
        integrity: 80,
        jitter: 5,
        mass: 4,
        mount: "T",
        piercing: 30,
        power: .79,
        range: 2e3,
        rating: "D",
        reload: 5,
        rof: 4.26,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .4
      }, {
        ammo: 180,
        breachdmg: 3.5,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 3,
        cost: 1167360,
        damage: 4.57,
        damagedist: {
          K: 1
        },
        distdraw: .57,
        edID: 128049450,
        eddbID: 862,
        falloff: 1800,
        grp: "fc",
        id: "1t",
        integrity: 80,
        jitter: 5,
        mass: 8,
        mount: "F",
        piercing: 45,
        power: 1.02,
        range: 2e3,
        rating: "C",
        reload: 5,
        rof: 4.545,
        roundspershot: 12,
        shotspeed: 667,
        thermload: 1.1
      }, {
        ammo: 180,
        breachdmg: 2.9,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 3,
        cost: 1751040,
        damage: 3.77,
        damagedist: {
          K: 1
        },
        distdraw: .81,
        edID: 128671321,
        eddbID: 1454,
        falloff: 1800,
        grp: "fc",
        id: "1u",
        integrity: 80,
        jitter: 5,
        mass: 8,
        mount: "G",
        piercing: 45,
        power: 1.55,
        range: 2e3,
        rating: "C",
        reload: 5,
        rof: 4.76,
        roundspershot: 12,
        shotspeed: 667,
        thermload: 1.4
      }, {
        ammo: 180,
        breachdmg: 2.3,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 3,
        cost: 5836800,
        damage: 2.98,
        damagedist: {
          K: 1
        },
        distdraw: .37,
        edID: 128671322,
        eddbID: 1455,
        falloff: 1800,
        grp: "fc",
        id: "1v",
        integrity: 80,
        jitter: 5,
        mass: 8,
        mount: "T",
        piercing: 45,
        power: 1.29,
        range: 2e3,
        rating: "C",
        reload: 5,
        rof: 4,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .7
      }, {
        ammo: 180,
        breachdmg: 3.1,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 3,
        cost: 1400830,
        damage: 3.4,
        damagedist: {
          K: 1
        },
        distdraw: .57,
        edID: 128671343,
        eddbID: 1478,
        falloff: 1800,
        grp: "fc",
        id: "pa",
        integrity: 64,
        jitter: 1.7,
        mass: 8,
        mount: "F",
        name: "Pacifier",
        piercing: 45,
        power: 1.02,
        pp: "Zachary Hudson",
        rating: "C",
        reload: 5,
        rof: 4.5,
        roundspershot: 12,
        shotspeed: 1e3,
        thermload: 1.1
      } ],
      rfl: [ {
        ammo: 32,
        breachdmg: 1.7,
        breachmax: 1,
        breachmin: 1,
        class: 2,
        clip: 1,
        cost: 261800,
        damage: 34,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128785626,
        eddbID: 1620,
        falloff: 1e5,
        grp: "rfl",
        id: "x8",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 2,
        rof: .5,
        shotspeed: 550,
        thermload: 3.6
      }, {
        ammo: 32,
        breachdmg: 1.7,
        breachmax: 1,
        breachmin: 1,
        class: 2,
        clip: 1,
        cost: 1259200,
        damage: 34,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128793058,
        eddbID: 1621,
        falloff: 1e5,
        grp: "rfl",
        id: "x9",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 2,
        rof: .5,
        shotspeed: 550,
        thermload: 3.6
      } ],
      rg: [ {
        ammo: 80,
        breachdmg: 22.2,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 1,
        cost: 51600,
        damage: 23.25,
        damagedist: {
          K: .5,
          T: .5
        },
        distdraw: 2.69,
        edID: 128049488,
        eddbID: 876,
        falloff: 1e3,
        grp: "rg",
        id: "29",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 100,
        power: 1.15,
        range: 3e3,
        rating: "D",
        reload: 1,
        rof: 1.6,
        thermload: 12
      }, {
        ammo: 80,
        breachdmg: 39.5,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 1,
        cost: 412800,
        damage: 41.5,
        damagedist: {
          K: .5,
          T: .5
        },
        distdraw: 5.11,
        edID: 128049489,
        eddbID: 877,
        falloff: 1e3,
        grp: "rg",
        id: "2a",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 100,
        power: 1.63,
        range: 3e3,
        rating: "B",
        reload: 1,
        rof: 1.2,
        thermload: 20
      }, {
        ammo: 240,
        breachdmg: 14.3,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 6,
        class: 2,
        clip: 3,
        cost: 619200,
        damage: 15,
        damagedist: {
          K: .5,
          T: .5
        },
        distdraw: 2,
        edID: 128671341,
        eddbID: 1484,
        falloff: 1e3,
        grp: "rg",
        id: "ih",
        integrity: 51,
        mass: 4,
        mount: "F",
        name: "Imperial Hammer",
        piercing: 100,
        power: 1.63,
        pp: "Arissa Lavigny-Duval",
        range: 3e3,
        rating: "B",
        reload: 1,
        rof: 4.1,
        thermload: 11
      } ],
      pa: [ {
        ammo: 100,
        breachdmg: 44.2,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 5,
        cost: 834200,
        damage: 54.3,
        damagedist: {
          A: .6,
          K: .2,
          T: .2
        },
        distdraw: 8.65,
        edID: 128049465,
        eddbID: 873,
        falloff: 2e3,
        grp: "pa",
        id: "1g",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 100,
        power: 1.43,
        range: 3500,
        rating: "C",
        reload: 6,
        rof: .33,
        shotspeed: 875,
        thermload: 15.6
      }, {
        ammo: 100,
        breachdmg: 68,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 5,
        cost: 3051200,
        damage: 83.4,
        damagedist: {
          A: .6,
          K: .2,
          T: .2
        },
        distdraw: 13.6,
        edID: 128049466,
        eddbID: 874,
        falloff: 2e3,
        grp: "pa",
        id: "2b",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 100,
        power: 1.97,
        range: 3500,
        rating: "B",
        reload: 6,
        rof: .29,
        shotspeed: 875,
        thermload: 21.8
      }, {
        ammo: 300,
        breachdmg: 30.9,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 20,
        cost: 4119120,
        damage: 34.5,
        damagedist: {
          A: .6,
          K: .2,
          T: .2
        },
        distdraw: 5.5,
        edID: 128671339,
        eddbID: 1482,
        falloff: 2e3,
        grp: "pa",
        id: "Ap",
        integrity: 64,
        mass: 8,
        mount: "F",
        name: "Advanced Plasma Accelerator",
        piercing: 100,
        power: 1.97,
        pp: "Denton Patreus",
        range: 3500,
        rating: "B",
        reload: 6,
        rof: .8,
        shotspeed: 875,
        thermload: 11
      }, {
        ammo: 100,
        breachdmg: 102,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        clip: 5,
        cost: 13793600,
        damage: 125.2,
        damagedist: {
          A: .6,
          K: .2,
          T: .2
        },
        distdraw: 21.04,
        edID: 128049467,
        eddbID: 875,
        falloff: 2e3,
        grp: "pa",
        id: "2c",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 100,
        power: 2.63,
        range: 3500,
        rating: "A",
        reload: 6,
        rof: .25,
        shotspeed: 875,
        thermload: 29.5
      } ],
      mr: [ {
        ammo: 16,
        breachdmg: 20,
        breachmax: 0,
        breachmin: 0,
        class: 1,
        clip: 8,
        cost: 32180,
        damage: 50,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128666724,
        eddbID: 1326,
        grp: "mr",
        id: "2d",
        integrity: 40,
        mass: 2,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: .4,
        rating: "B",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 3.6
      }, {
        ammo: 6,
        breachdmg: 16,
        breachmax: 0,
        breachmin: 0,
        class: 1,
        clip: 6,
        cost: 72600,
        damage: 40,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128049492,
        eddbID: 878,
        grp: "mr",
        id: "2e",
        integrity: 40,
        mass: 2,
        missile: "S",
        mount: "F",
        piercing: 60,
        power: .6,
        rating: "B",
        reload: 12,
        rof: .333,
        shotspeed: 625,
        thermload: 3.6
      }, {
        ammo: 48,
        breachdmg: 20,
        breachmax: 0,
        breachmin: 0,
        class: 2,
        clip: 12,
        cost: 240400,
        damage: 50,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128666725,
        eddbID: 1327,
        eps: .12,
        grp: "mr",
        hps: 1.8,
        id: "2f",
        integrity: 51,
        mass: 4,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 3.6
      }, {
        ammo: 18,
        breachdmg: 16,
        breachmax: 0,
        breachmin: 0,
        class: 2,
        clip: 6,
        cost: 512400,
        damage: 40,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128049493,
        eddbID: 879,
        eps: .07,
        grp: "mr",
        hps: 1.08,
        id: "2g",
        integrity: 51,
        mass: 4,
        missile: "S",
        mount: "F",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 12,
        rof: .333,
        shotspeed: 625,
        thermload: 3.6
      }, {
        ammo: 48,
        breachdmg: 16,
        breachmax: 0,
        breachmin: 0,
        class: 2,
        clip: 12,
        cost: 1951040,
        damage: 40,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        eddbID: 1559,
        grp: "mr",
        edID: 128732552,
        id: "1z",
        integrity: 51,
        mass: 4,
        missile: "D",
        mount: "F",
        name: "Rocket Propelled FSD Disruptor",
        piercing: 60,
        power: 1.2,
        pp: "Yuri Grom",
        rating: "B",
        reload: 5,
        rof: .333,
        shotspeed: 750,
        thermload: 3.6
      }, {
        ammo: 120,
        breachdmg: 3,
        breachmax: 0,
        breachmin: 0,
        class: 2,
        clip: 12,
        cost: 768600,
        damage: 7.5,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128671344,
        eddbID: 1480,
        eps: 1.92,
        grp: "mr",
        hps: 28.8,
        id: "Ph",
        integrity: 51,
        mass: 4,
        missile: "S",
        mount: "F",
        name: "Pack-Hound",
        piercing: 60,
        power: 1.2,
        pp: "Li Yong-Rui",
        rating: "B",
        reload: 5,
        rof: 2,
        roundspershot: 4,
        shotspeed: 600,
        thermload: 3.6
      } ],
      axmr: [ {
        ammo: 64,
        breachdmg: .1,
        breachmax: .8,
        breachmin: 1,
        class: 2,
        clip: 8,
        cost: 540900,
        damage: 64,
        damagedist: {
          X: 1
        },
        distdraw: .14,
        edID: 128788699,
        eddbID: 1614,
        falloff: 1e4,
        grp: "axmr",
        id: "x4",
        integrity: 51,
        mass: 4,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 2.4
      }, {
        ammo: 64,
        breachdmg: .1,
        breachmax: .8,
        breachmin: 1,
        class: 2,
        clip: 8,
        cost: 2022700,
        damage: 50,
        damagedist: {
          X: 1
        },
        distdraw: .08,
        edID: 128788704,
        eddbID: 1615,
        falloff: 1e4,
        grp: "axmr",
        id: "x5",
        integrity: 51,
        mass: 4,
        missile: "D",
        mount: "T",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 1.5
      }, {
        ammo: 128,
        breachdmg: .1,
        breachmax: .8,
        breachmin: 1,
        class: 3,
        clip: 12,
        cost: 1352250,
        damage: 64,
        damagedist: {
          X: 1
        },
        distdraw: .24,
        edID: 128788700,
        eddbID: 1623,
        falloff: 1e4,
        grp: "axmr",
        id: "x6",
        integrity: 64,
        mass: 8,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: 1.62,
        rating: "A",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 3.6
      }, {
        ammo: 128,
        breachdmg: .1,
        breachmax: .8,
        breachmin: 1,
        class: 3,
        clip: 12,
        cost: 4056750,
        damage: 64,
        damagedist: {
          X: 1
        },
        distdraw: .14,
        edID: 128788705,
        eddbID: 1624,
        falloff: 1e4,
        grp: "axmr",
        id: "x7",
        integrity: 64,
        mass: 8,
        missile: "D",
        mount: "T",
        piercing: 60,
        power: 1.75,
        rating: "A",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 1.9
      } ],
      tp: [ {
        ammo: 1,
        breachdmg: 60,
        breachmax: .8,
        breachmin: .6,
        class: 1,
        clip: 1,
        cost: 11200,
        damage: 120,
        damagedist: {
          E: 1
        },
        distdraw: 0,
        edID: 128049509,
        eddbID: 882,
        grp: "tp",
        id: "2h",
        integrity: 40,
        mass: 2,
        missile: "S",
        mount: "F",
        piercing: 1e4,
        power: .4,
        rating: "I",
        reload: 5,
        rof: 1,
        shotspeed: 250,
        thermload: 45
      }, {
        ammo: 2,
        breachdmg: 60,
        breachmax: .8,
        breachmin: .6,
        class: 2,
        clip: 1,
        cost: 44800,
        damage: 120,
        damagedist: {
          E: 1
        },
        distdraw: 0,
        edID: 128049510,
        eddbID: 883,
        grp: "tp",
        id: "2i",
        integrity: 51,
        mass: 4,
        missile: "S",
        mount: "F",
        piercing: 1e4,
        power: .4,
        rating: "I",
        reload: 5,
        rof: 1,
        shotspeed: 250,
        thermload: 50
      } ],
      nl: [ {
        ammo: 36,
        breachdmg: 0,
        breachmax: 0,
        breachmin: 0,
        class: 1,
        clip: 1,
        cost: 24260,
        damage: 44,
        damagedist: {
          E: .5,
          T: .5
        },
        distdraw: 0,
        edID: 128049500,
        eddbID: 880,
        grp: "nl",
        id: "2j",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 60,
        power: .4,
        rating: "I",
        reload: 2,
        rof: 1,
        thermload: 5
      }, {
        ammo: 36,
        breachdmg: 0,
        breachmax: 0,
        breachmin: 0,
        class: 1,
        clip: 1,
        cost: 36400,
        damage: 32,
        damagedist: {
          E: .5,
          T: .5
        },
        distdraw: 0,
        edID: 128671448,
        eddbID: 1523,
        grp: "nl",
        id: "kp",
        integrity: 40,
        mass: 2,
        mount: "F",
        name: "Shock Mine Launcher",
        piercing: 60,
        power: .4,
        rating: "I",
        reload: 2,
        rof: 1,
        thermload: 5
      }, {
        ammo: 72,
        breachdmg: 0,
        breachmax: 0,
        breachmin: 0,
        class: 2,
        clip: 3,
        cost: 294080,
        damage: 44,
        damagedist: {
          E: .5,
          T: .5
        },
        distdraw: 0,
        edID: 128049501,
        eddbID: 881,
        grp: "nl",
        id: "2k",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 60,
        power: .4,
        rating: "I",
        reload: 6.6,
        rof: 1,
        thermload: 7.5
      } ],
      ml: [ {
        breachdmg: .3,
        breachmax: .2,
        breachmin: .1,
        class: 1,
        cost: 6800,
        damage: 2,
        damagedist: {
          T: 1
        },
        distdraw: 1.5,
        edID: 128049525,
        eddbID: 888,
        falloff: 300,
        grp: "ml",
        id: "2l",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 18,
        power: .5,
        range: 500,
        rating: "D",
        thermload: 2
      }, {
        breachdmg: .3,
        breachmax: .2,
        breachmin: .1,
        class: 1,
        cost: 9400,
        damage: 2,
        damagedist: {
          T: 1
        },
        distdraw: 1.5,
        edID: 128740819,
        eddbID: 1587,
        falloff: 300,
        grp: "ml",
        id: "w0",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 18,
        power: .5,
        range: 500,
        rating: "D",
        thermload: 2
      }, {
        breachdmg: 1.2,
        breachmax: .2,
        breachmin: .1,
        class: 1,
        cost: 13600,
        damage: 8,
        damagedist: {
          T: 1
        },
        distdraw: 1.75,
        edID: 128671347,
        eddbID: 1479,
        falloff: 400,
        grp: "ml",
        id: "ml",
        integrity: 40,
        mass: 2,
        mount: "F",
        name: "Mining Lance",
        piercing: 18,
        power: .7,
        pp: "Zemina Torval",
        range: 2e3,
        rating: "D",
        thermload: 6
      }, {
        breachdmg: .6,
        breachmax: .2,
        breachmin: .1,
        class: 2,
        cost: 22580,
        damage: 4,
        damagedist: {
          T: 1
        },
        distdraw: 3,
        edID: 128049526,
        eddbID: 889,
        falloff: 300,
        grp: "ml",
        id: "2m",
        integrity: 51,
        mass: 2,
        mount: "F",
        piercing: 18,
        power: .75,
        range: 500,
        rating: "D",
        thermload: 4
      }, {
        breachdmg: .6,
        breachmax: .2,
        breachmin: .1,
        class: 2,
        cost: 32590,
        damage: 4,
        damagedist: {
          T: 1
        },
        distdraw: 3,
        edID: 128740820,
        eddbID: 1588,
        falloff: 300,
        grp: "ml",
        id: "w1",
        integrity: 51,
        mass: 2,
        mount: "T",
        piercing: 18,
        power: .75,
        range: 500,
        rating: "D",
        thermload: 4
      } ],
      cs: [ {
        angle: 15,
        class: 0,
        cost: 13540,
        edID: 128662520,
        eddbID: 1227,
        grp: "cs",
        id: "0d",
        integrity: 32,
        mass: 1.3,
        power: .2,
        range: 2e3,
        rating: "E",
        scantime: 10
      }, {
        angle: 15,
        class: 0,
        cost: 40630,
        edID: 128662521,
        eddbID: 1228,
        grp: "cs",
        id: "0c",
        integrity: 24,
        mass: 1.3,
        power: .4,
        range: 2500,
        rating: "D",
        scantime: 10
      }, {
        angle: 15,
        class: 0,
        cost: 121900,
        edID: 128662522,
        eddbID: 1229,
        grp: "cs",
        id: "0b",
        integrity: 40,
        mass: 1.3,
        power: .8,
        range: 3e3,
        rating: "C",
        scantime: 10
      }, {
        angle: 15,
        class: 0,
        cost: 365700,
        edID: 128662523,
        eddbID: 1230,
        grp: "cs",
        id: "0a",
        integrity: 56,
        mass: 1.3,
        power: 1.6,
        range: 3500,
        rating: "B",
        scantime: 10
      }, {
        angle: 15,
        class: 0,
        cost: 1097100,
        edID: 128662524,
        eddbID: 1231,
        grp: "cs",
        id: "09",
        integrity: 48,
        mass: 1.3,
        power: 3.2,
        range: 4e3,
        rating: "A",
        scantime: 10
      } ],
      ws: [ {
        class: 0,
        cost: 13540,
        edID: 128662525,
        eddbID: 1232,
        grp: "ws",
        id: "0i",
        integrity: 32,
        mass: 1.3,
        power: .2,
        range: 2e3,
        rating: "E",
        scantime: 10
      }, {
        class: 0,
        cost: 40630,
        edID: 128662526,
        eddbID: 1233,
        grp: "ws",
        id: "0h",
        integrity: 24,
        mass: 1.3,
        power: .4,
        range: 2500,
        rating: "D",
        scantime: 10
      }, {
        class: 0,
        cost: 121900,
        edID: 128662527,
        eddbID: 1234,
        grp: "ws",
        id: "0g",
        integrity: 40,
        mass: 1.3,
        power: .8,
        range: 3e3,
        rating: "C",
        scantime: 10
      }, {
        class: 0,
        cost: 365700,
        edID: 128662528,
        eddbID: 1235,
        grp: "ws",
        id: "0f",
        integrity: 56,
        mass: 1.3,
        power: 1.6,
        range: 3500,
        rating: "B",
        scantime: 10
      }, {
        class: 0,
        cost: 1097100,
        edID: 128662529,
        eddbID: 1236,
        grp: "ws",
        id: "0e",
        integrity: 48,
        mass: 1.3,
        power: 3.2,
        range: 4e3,
        rating: "A",
        scantime: 10
      } ],
      kw: [ {
        class: 0,
        cost: 13540,
        edID: 128662530,
        eddbID: 1237,
        grp: "kw",
        id: "0n",
        integrity: 32,
        mass: 1.3,
        power: .2,
        range: 2e3,
        rating: "E",
        scantime: 10
      }, {
        class: 0,
        cost: 40630,
        edID: 128662531,
        eddbID: 1238,
        grp: "kw",
        id: "0m",
        integrity: 24,
        mass: 1.3,
        power: .4,
        range: 2500,
        rating: "D",
        scantime: 10
      }, {
        class: 0,
        cost: 121900,
        edID: 128662532,
        eddbID: 1239,
        grp: "kw",
        id: "0l",
        integrity: 40,
        mass: 1.3,
        power: .8,
        range: 3e3,
        rating: "C",
        scantime: 10
      }, {
        class: 0,
        cost: 365700,
        edID: 128662533,
        eddbID: 1240,
        grp: "kw",
        id: "0k",
        integrity: 56,
        mass: 1.3,
        power: 1.6,
        range: 3500,
        rating: "B",
        scantime: 10
      }, {
        class: 0,
        cost: 1097100,
        edID: 128662534,
        eddbID: 1241,
        grp: "kw",
        id: "0j",
        integrity: 48,
        mass: 1.3,
        power: 3.2,
        range: 4e3,
        rating: "A",
        scantime: 10
      } ],
      sb: [ {
        class: 0,
        cost: 1e4,
        edID: 128668532,
        eddbID: 1368,
        grp: "sb",
        id: "08",
        integrity: 25,
        mass: .5,
        passive: 1,
        power: .2,
        rating: "E",
        shieldboost: .04
      }, {
        class: 0,
        cost: 23e3,
        edID: 128668533,
        eddbID: 1369,
        grp: "sb",
        id: "07",
        integrity: 35,
        mass: 1,
        passive: 1,
        power: .5,
        rating: "D",
        shieldboost: .08
      }, {
        class: 0,
        cost: 53e3,
        edID: 128668534,
        eddbID: 1370,
        grp: "sb",
        id: "06",
        integrity: 40,
        mass: 2,
        passive: 1,
        power: .7,
        rating: "C",
        shieldboost: .12
      }, {
        class: 0,
        cost: 122e3,
        edID: 128668535,
        eddbID: 1371,
        grp: "sb",
        id: "05",
        integrity: 45,
        mass: 3,
        passive: 1,
        power: 1,
        rating: "B",
        shieldboost: .16
      }, {
        class: 0,
        cost: 281e3,
        edID: 128668536,
        eddbID: 1372,
        grp: "sb",
        id: "04",
        integrity: 48,
        mass: 3.5,
        passive: 1,
        power: 1.2,
        rating: "A",
        shieldboost: .2
      } ],
      ch: [ {
        ammo: 10,
        ammocost: 100,
        class: 0,
        clip: 1,
        cost: 8500,
        distdraw: 4,
        duration: 20,
        edID: 128049513,
        eddbID: 884,
        grp: "ch",
        id: "00",
        integrity: 20,
        mass: 1.3,
        name: "Chaff Launcher",
        passive: 1,
        power: .2,
        rating: "I",
        reload: 10,
        rof: 1,
        thermload: 4
      } ],
      ec: [ {
        activepower: 4,
        chargeup: 3,
        class: 0,
        cooldown: 10,
        cost: 12500,
        edID: 128049516,
        eddbID: 885,
        grp: "ec",
        id: "01",
        integrity: 20,
        mass: 1.3,
        name: "Electronic Countermeasure",
        power: .2,
        range: 3e3,
        rating: "F",
        reload: 10,
        thermload: 4
      } ],
      hs: [ {
        ammo: 2,
        ammocost: 25,
        class: 0,
        clip: 1,
        cost: 3500,
        distdraw: 2,
        drain: 100,
        duration: 10,
        edID: 128049519,
        eddbID: 886,
        eps: .4,
        grp: "hs",
        id: "02",
        integrity: 20,
        mass: 1.3,
        name: "Heat Sink Launcher",
        passive: 1,
        power: .2,
        rating: "I",
        reload: 10,
        rof: .2
      } ],
      po: [ {
        ammo: 1e4,
        burst: 4,
        burstrof: 15,
        class: 0,
        clip: 12,
        cost: 18550,
        damage: .2,
        damagedist: {
          K: 1
        },
        edID: 128049522,
        eddbID: 887,
        grp: "po",
        id: "03",
        integrity: 30,
        jitter: .75,
        mass: .5,
        name: "Point Defence",
        passive: 1,
        power: .2,
        range: 2500,
        rating: "I",
        reload: .4,
        rof: 10,
        shotspeed: 1e3,
        thermload: .1
      } ],
      sfn: [ {
        class: 0,
        cost: 63e3,
        edID: 128771884,
        eddbID: 1622,
        grp: "sfn",
        id: "Sn",
        integrity: 35,
        mass: 1.3,
        name: "Shutdown Field Neutraliser",
        passive: 1,
        power: .2,
        activepower: .25,
        rating: "F",
        cooldown: 10,
        duration: 1,
        range: 3e3
      } ],
      xs: [ {
        class: 0,
        cost: 365698,
        edID: 128793115,
        eddbID: 1616,
        grp: "xs",
        id: "xs",
        integrity: 56,
        mass: 1.3,
        name: "Xeno Scanner",
        power: .2,
        range: 500,
        rating: "E",
        boot: 2,
        scantime: 10,
        angle: 23
      } ]
    },
    internal: {
      am: [ {
        ammo: 1e3,
        ammocost: 1,
        class: 1,
        cost: 1e4,
        edID: 128667598,
        eddbID: 1328,
        grp: "am",
        id: "0c",
        power: .54,
        rating: "E",
        repair: 12
      }, {
        ammo: 900,
        ammocost: 1,
        class: 1,
        cost: 3e4,
        edID: 128667606,
        eddbID: 1336,
        grp: "am",
        id: "0b",
        power: .72,
        rating: "D",
        repair: 14.4
      }, {
        ammo: 1e3,
        ammocost: 1,
        class: 1,
        cost: 9e4,
        edID: 128667614,
        eddbID: 1344,
        grp: "am",
        id: "0a",
        power: .9,
        rating: "C",
        repair: 20
      }, {
        ammo: 1200,
        ammocost: 1,
        class: 1,
        cost: 27e4,
        edID: 128667622,
        eddbID: 1352,
        grp: "am",
        id: "09",
        power: 1.04,
        rating: "B",
        repair: 27.6
      }, {
        ammo: 1100,
        ammocost: 1,
        class: 1,
        cost: 81e4,
        edID: 128667630,
        eddbID: 1360,
        grp: "am",
        id: "08",
        power: 1.26,
        rating: "A",
        repair: 30.8
      }, {
        ammo: 2300,
        ammocost: 1,
        class: 2,
        cost: 18e3,
        edID: 128667599,
        eddbID: 1329,
        grp: "am",
        id: "0h",
        power: .68,
        rating: "E",
        repair: 27.6
      }, {
        ammo: 2100,
        ammocost: 1,
        class: 2,
        cost: 54e3,
        edID: 128667607,
        eddbID: 1337,
        grp: "am",
        id: "0g",
        power: .9,
        rating: "D",
        repair: 33.6
      }, {
        ammo: 2300,
        ammocost: 1,
        class: 2,
        cost: 162e3,
        edID: 128667615,
        eddbID: 1345,
        grp: "am",
        id: "0f",
        power: 1.13,
        rating: "C",
        repair: 46
      }, {
        ammo: 2800,
        ammocost: 1,
        class: 2,
        cost: 486e3,
        edID: 128667623,
        eddbID: 1353,
        grp: "am",
        id: "0e",
        power: 1.29,
        rating: "B",
        repair: 64.4
      }, {
        ammo: 2500,
        ammocost: 1,
        class: 2,
        cost: 1458e3,
        edID: 128667631,
        eddbID: 1361,
        grp: "am",
        id: "0d",
        power: 1.58,
        rating: "A",
        repair: 70
      }, {
        ammo: 3600,
        ammocost: 1,
        class: 3,
        cost: 32400,
        edID: 128667600,
        eddbID: 1330,
        grp: "am",
        id: "0m",
        power: .81,
        rating: "E",
        repair: 43.2
      }, {
        ammo: 3200,
        ammocost: 1,
        class: 3,
        cost: 97200,
        edID: 128667608,
        eddbID: 1338,
        grp: "am",
        id: "0l",
        power: 1.08,
        rating: "D",
        repair: 51.2
      }, {
        ammo: 3600,
        ammocost: 1,
        class: 3,
        cost: 291600,
        edID: 128667616,
        eddbID: 1346,
        grp: "am",
        id: "0k",
        power: 1.35,
        rating: "C",
        repair: 72
      }, {
        ammo: 4300,
        ammocost: 1,
        class: 3,
        cost: 874800,
        edID: 128667624,
        eddbID: 1354,
        grp: "am",
        id: "0j",
        power: 1.55,
        rating: "B",
        repair: 98.9
      }, {
        ammo: 4e3,
        ammocost: 1,
        class: 3,
        cost: 2624400,
        edID: 128667632,
        eddbID: 1362,
        grp: "am",
        id: "0i",
        power: 1.89,
        rating: "A",
        repair: 112
      }, {
        ammo: 4900,
        ammocost: 1,
        class: 4,
        cost: 58320,
        edID: 128667601,
        eddbID: 1331,
        grp: "am",
        id: "0r",
        power: .99,
        rating: "E",
        repair: 58.8
      }, {
        ammo: 4400,
        ammocost: 1,
        class: 4,
        cost: 174960,
        edID: 128667609,
        eddbID: 1339,
        grp: "am",
        id: "0q",
        power: 1.32,
        rating: "D",
        repair: 70.4
      }, {
        ammo: 4900,
        ammocost: 1,
        class: 4,
        cost: 524880,
        edID: 128667617,
        eddbID: 1347,
        grp: "am",
        id: "0p",
        power: 1.65,
        rating: "C",
        repair: 98
      }, {
        ammo: 5900,
        ammocost: 1,
        class: 4,
        cost: 1574640,
        edID: 128667625,
        eddbID: 1355,
        grp: "am",
        id: "0o",
        power: 1.9,
        rating: "B",
        repair: 135.7
      }, {
        ammo: 5400,
        ammocost: 1,
        class: 4,
        cost: 4723920,
        edID: 128667633,
        eddbID: 1363,
        grp: "am",
        id: "0n",
        power: 2.31,
        rating: "A",
        repair: 151.2
      }, {
        ammo: 6100,
        ammocost: 1,
        class: 5,
        cost: 104980,
        edID: 128667602,
        eddbID: 1332,
        grp: "am",
        id: "10",
        power: 1.17,
        rating: "E",
        repair: 73.2
      }, {
        ammo: 5500,
        ammocost: 1,
        class: 5,
        cost: 314930,
        edID: 128667610,
        eddbID: 1340,
        grp: "am",
        id: "0v",
        power: 1.56,
        rating: "D",
        repair: 88
      }, {
        ammo: 6100,
        ammocost: 1,
        class: 5,
        cost: 944780,
        edID: 128667618,
        eddbID: 1348,
        grp: "am",
        id: "0u",
        power: 1.95,
        rating: "C",
        repair: 122
      }, {
        ammo: 7300,
        ammocost: 1,
        class: 5,
        cost: 2834350,
        edID: 128667626,
        eddbID: 1356,
        grp: "am",
        id: "0t",
        power: 2.24,
        rating: "B",
        repair: 167.9
      }, {
        ammo: 6700,
        ammocost: 1,
        class: 5,
        cost: 8503060,
        edID: 128667634,
        eddbID: 1364,
        grp: "am",
        id: "0s",
        power: 2.73,
        rating: "A",
        repair: 187.6
      }, {
        ammo: 7400,
        ammocost: 1,
        class: 6,
        cost: 188960,
        edID: 128667603,
        eddbID: 1333,
        grp: "am",
        id: "15",
        power: 1.4,
        rating: "E",
        repair: 88.8
      }, {
        ammo: 6700,
        ammocost: 1,
        class: 6,
        cost: 566870,
        edID: 128667611,
        eddbID: 1341,
        grp: "am",
        id: "14",
        power: 1.86,
        rating: "D",
        repair: 107.2
      }, {
        ammo: 7400,
        ammocost: 1,
        class: 6,
        cost: 1700610,
        edID: 128667619,
        eddbID: 1349,
        grp: "am",
        id: "13",
        power: 2.33,
        rating: "C",
        repair: 148
      }, {
        ammo: 8900,
        ammocost: 1,
        class: 6,
        cost: 5101830,
        edID: 128667627,
        eddbID: 1357,
        grp: "am",
        id: "12",
        power: 2.67,
        rating: "B",
        repair: 204.7
      }, {
        ammo: 8100,
        ammocost: 1,
        class: 6,
        cost: 15305500,
        edID: 128667635,
        eddbID: 1365,
        grp: "am",
        id: "11",
        power: 3.26,
        rating: "A",
        repair: 226.8
      }, {
        ammo: 8700,
        ammocost: 1,
        class: 7,
        cost: 340120,
        edID: 128667604,
        eddbID: 1334,
        grp: "am",
        id: "1a",
        power: 1.58,
        rating: "E",
        repair: 104.4
      }, {
        ammo: 7800,
        ammocost: 1,
        class: 7,
        cost: 1020370,
        edID: 128667612,
        eddbID: 1342,
        grp: "am",
        id: "19",
        power: 2.1,
        rating: "D",
        repair: 124.8
      }, {
        ammo: 8700,
        ammocost: 1,
        class: 7,
        cost: 3061100,
        edID: 128667620,
        eddbID: 1350,
        grp: "am",
        id: "18",
        power: 2.63,
        rating: "C",
        repair: 174
      }, {
        ammo: 10400,
        ammocost: 1,
        class: 7,
        cost: 9183300,
        edID: 128667628,
        eddbID: 1358,
        grp: "am",
        id: "17",
        power: 3.02,
        rating: "B",
        repair: 239.2
      }, {
        ammo: 9600,
        ammocost: 1,
        class: 7,
        cost: 27549900,
        edID: 128667636,
        eddbID: 1366,
        grp: "am",
        id: "16",
        power: 3.68,
        rating: "A",
        repair: 268.8
      }, {
        ammo: 1e4,
        ammocost: 1,
        class: 8,
        cost: 612220,
        edID: 128667605,
        eddbID: 1335,
        grp: "am",
        id: "1f",
        power: 1.8,
        rating: "E",
        repair: 120
      }, {
        ammo: 9e3,
        ammocost: 1,
        class: 8,
        cost: 1836660,
        edID: 128667613,
        eddbID: 1343,
        grp: "am",
        id: "1e",
        power: 2.4,
        rating: "D",
        repair: 144
      }, {
        ammo: 1e4,
        ammocost: 1,
        class: 8,
        cost: 5509980,
        edID: 128667621,
        eddbID: 1351,
        grp: "am",
        id: "1d",
        power: 3,
        rating: "C",
        repair: 200
      }, {
        ammo: 12e3,
        ammocost: 1,
        class: 8,
        cost: 16529940,
        edID: 128667629,
        eddbID: 1359,
        grp: "am",
        id: "1c",
        power: 3.45,
        rating: "B",
        repair: 276
      }, {
        ammo: 11e3,
        ammocost: 1,
        class: 8,
        cost: 49589820,
        edID: 128667637,
        eddbID: 1367,
        grp: "am",
        id: "1b",
        power: 4.2,
        rating: "A",
        repair: 308
      } ],
      bsg: [ {
        brokenregen: 2.4,
        class: 1,
        cost: 7710,
        distdraw: .6,
        edID: 128671331,
        eddbID: 1530,
        explres: .5,
        grp: "bsg",
        id: "B6",
        integrity: 40,
        kinres: .4,
        mass: 1.3,
        maxmass: 63,
        maxmul: 1.4,
        minmass: 13,
        minmul: .4,
        optmass: 25,
        optmul: .9,
        power: 1.2,
        rating: "C",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 2.4,
        class: 2,
        cost: 26710,
        distdraw: .6,
        edID: 128671332,
        eddbID: 1531,
        explres: .5,
        grp: "bsg",
        id: "B5",
        integrity: 51,
        kinres: .4,
        mass: 2.5,
        maxmass: 138,
        maxmul: 1.4,
        minmass: 28,
        minmul: .4,
        optmass: 55,
        optmul: .9,
        power: 1.5,
        rating: "C",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 2.8,
        class: 3,
        cost: 84650,
        distdraw: .6,
        edID: 128671333,
        eddbID: 1532,
        explres: .5,
        grp: "bsg",
        id: "B4",
        integrity: 64,
        kinres: .4,
        mass: 5,
        maxmass: 413,
        maxmul: 1.4,
        minmass: 83,
        minmul: .4,
        optmass: 165,
        optmul: .9,
        power: 1.8,
        rating: "C",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 3.8,
        class: 4,
        cost: 268350,
        distdraw: .6,
        edID: 128671334,
        eddbID: 1533,
        explres: .5,
        grp: "bsg",
        id: "B3",
        integrity: 80,
        kinres: .4,
        mass: 10,
        maxmass: 713,
        maxmul: 1.4,
        minmass: 143,
        minmul: .4,
        optmass: 285,
        optmul: .9,
        power: 2.2,
        rating: "C",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 5.6,
        class: 5,
        cost: 850660,
        distdraw: .6,
        edID: 128671335,
        eddbID: 1534,
        explres: .5,
        grp: "bsg",
        id: "B2",
        integrity: 96,
        kinres: .4,
        mass: 20,
        maxmass: 1013,
        maxmul: 1.4,
        minmass: 203,
        minmul: .4,
        optmass: 405,
        optmul: .9,
        power: 2.6,
        rating: "C",
        regen: 2.2,
        thermres: -.2
      }, {
        brokenregen: 8,
        class: 6,
        cost: 2696600,
        distdraw: .6,
        edID: 128671336,
        eddbID: 1535,
        explres: .5,
        grp: "bsg",
        id: "B1",
        integrity: 113,
        kinres: .4,
        mass: 40,
        maxmass: 1350,
        maxmul: 1.4,
        minmass: 270,
        minmul: .4,
        optmass: 540,
        optmul: .9,
        power: 3.1,
        rating: "C",
        regen: 3.2,
        thermres: -.2
      }, {
        brokenregen: 11,
        class: 7,
        cost: 8548200,
        distdraw: .6,
        edID: 128671337,
        eddbID: 1536,
        explres: .5,
        grp: "bsg",
        id: "B0",
        integrity: 131,
        kinres: .4,
        mass: 80,
        maxmass: 2650,
        maxmul: 1.4,
        minmass: 530,
        minmul: .4,
        optmass: 1060,
        optmul: .9,
        power: 3.5,
        rating: "C",
        regen: 4.4,
        thermres: -.2
      }, {
        brokenregen: 14.4,
        class: 8,
        cost: 27097750,
        distdraw: .6,
        edID: 128671338,
        eddbID: 1537,
        explres: .5,
        grp: "bsg",
        id: "B7",
        integrity: 150,
        kinres: .4,
        mass: 160,
        maxmass: 4500,
        maxmul: 1.4,
        minmass: 900,
        minmul: .4,
        optmass: 1800,
        optmul: .9,
        power: 4,
        rating: "C",
        regen: 5.8,
        thermres: -.2
      } ],
      cr: [ {
        cargo: 2,
        class: 1,
        cost: 1e3,
        edID: 128064338,
        eddbID: 1191,
        grp: "cr",
        id: "00",
        rating: "E"
      }, {
        cargo: 4,
        class: 2,
        cost: 3250,
        edID: 128064339,
        eddbID: 1192,
        grp: "cr",
        id: "01",
        rating: "E"
      }, {
        cargo: 8,
        class: 3,
        cost: 10560,
        edID: 128064340,
        eddbID: 1193,
        grp: "cr",
        id: "02",
        rating: "E"
      }, {
        cargo: 16,
        class: 4,
        cost: 34330,
        edID: 128064341,
        eddbID: 1194,
        grp: "cr",
        id: "03",
        rating: "E"
      }, {
        cargo: 32,
        class: 5,
        cost: 111570,
        edID: 128064342,
        eddbID: 1195,
        grp: "cr",
        id: "04",
        rating: "E"
      }, {
        cargo: 64,
        class: 6,
        cost: 362590,
        edID: 128064343,
        eddbID: 1196,
        grp: "cr",
        id: "05",
        rating: "E"
      }, {
        cargo: 128,
        class: 7,
        cost: 1178420,
        edID: 128064344,
        eddbID: 1197,
        grp: "cr",
        id: "06",
        rating: "E"
      }, {
        cargo: 256,
        class: 8,
        cost: 3829870,
        edID: 128064345,
        eddbID: 1198,
        grp: "cr",
        id: "07",
        rating: "E"
      }, {
        cargo: 1,
        class: 1,
        cost: 6250,
        edID: 128681641,
        eddbID: 1553,
        grp: "cr",
        id: "1w",
        name: "Corrosion Resistant",
        rating: "E"
      }, {
        cargo: 2,
        class: 1,
        cost: 12563,
        edID: 128681992,
        eddbID: 1552,
        grp: "cr",
        id: "1y",
        name: "Corrosion Resistant",
        rating: "F"
      } ],
      cc: [ {
        class: 1,
        cost: 600,
        edID: 128671229,
        eddbID: 1394,
        grp: "cc",
        id: "C1",
        mass: .5,
        maximum: 1,
        power: .14,
        range: .8,
        rating: "E",
        time: 300
      }, {
        class: 1,
        cost: 1200,
        edID: 128671230,
        eddbID: 1395,
        grp: "cc",
        id: "C2",
        mass: .5,
        maximum: 1,
        power: .18,
        range: .6,
        rating: "D",
        time: 600
      }, {
        class: 1,
        cost: 2400,
        edID: 128671231,
        eddbID: 1396,
        grp: "cc",
        id: "C3",
        mass: 1.3,
        maximum: 1,
        power: .23,
        range: 1,
        rating: "C",
        time: 510
      }, {
        class: 1,
        cost: 4800,
        edID: 128671232,
        eddbID: 1397,
        grp: "cc",
        id: "C4",
        mass: 2,
        maximum: 1,
        power: .28,
        range: 1.4,
        rating: "B",
        time: 420
      }, {
        class: 1,
        cost: 9600,
        edID: 128671233,
        eddbID: 1398,
        grp: "cc",
        id: "C5",
        mass: 2,
        maximum: 1,
        power: .32,
        range: 1.2,
        rating: "A",
        time: 720
      }, {
        class: 3,
        cost: 5400,
        edID: 128671234,
        eddbID: 1399,
        grp: "cc",
        id: "C6",
        mass: 2,
        maximum: 2,
        power: .2,
        range: .88,
        rating: "E",
        time: 300
      }, {
        class: 3,
        cost: 10800,
        edID: 128671235,
        eddbID: 1400,
        grp: "cc",
        id: "C7",
        mass: 2,
        maximum: 2,
        power: .27,
        range: .66,
        rating: "D",
        time: 600
      }, {
        class: 3,
        cost: 21600,
        edID: 128671236,
        eddbID: 1401,
        grp: "cc",
        id: "C8",
        mass: 5,
        maximum: 2,
        power: .34,
        range: 1.1,
        rating: "C",
        time: 510
      }, {
        class: 3,
        cost: 43200,
        edID: 128671237,
        eddbID: 1402,
        grp: "cc",
        id: "C9",
        mass: 8,
        maximum: 2,
        power: .41,
        range: 1.54,
        rating: "B",
        time: 420
      }, {
        class: 3,
        cost: 86400,
        edID: 128671238,
        eddbID: 1403,
        grp: "cc",
        id: "C0",
        mass: 8,
        maximum: 2,
        power: .48,
        range: 1.32,
        rating: "A",
        time: 720
      }, {
        class: 5,
        cost: 48600,
        edID: 128671239,
        eddbID: 1404,
        grp: "cc",
        id: "Ca",
        mass: 8,
        maximum: 3,
        power: .3,
        range: 1.04,
        rating: "E",
        time: 300
      }, {
        class: 5,
        cost: 97200,
        edID: 128671240,
        eddbID: 1405,
        grp: "cc",
        id: "Cb",
        mass: 8,
        maximum: 3,
        power: .4,
        range: .78,
        rating: "D",
        time: 600
      }, {
        class: 5,
        cost: 194400,
        edID: 128671241,
        eddbID: 1406,
        grp: "cc",
        id: "Cc",
        mass: 20,
        maximum: 3,
        power: .5,
        range: 1.3,
        rating: "C",
        time: 510
      }, {
        class: 5,
        cost: 388800,
        edID: 128671242,
        eddbID: 1407,
        grp: "cc",
        id: "Cd",
        mass: 32,
        maximum: 3,
        power: .6,
        range: 1.82,
        rating: "B",
        time: 420
      }, {
        class: 5,
        cost: 777600,
        edID: 128671243,
        eddbID: 1408,
        grp: "cc",
        id: "Ce",
        mass: 32,
        maximum: 3,
        power: .7,
        range: 1.56,
        rating: "A",
        time: 720
      }, {
        class: 7,
        cost: 437400,
        edID: 128671244,
        eddbID: 1409,
        grp: "cc",
        id: "Cf",
        mass: 32,
        maximum: 4,
        power: .41,
        range: 1.36,
        rating: "E",
        time: 300
      }, {
        class: 7,
        cost: 874800,
        edID: 128671245,
        eddbID: 1410,
        grp: "cc",
        id: "Cg",
        mass: 32,
        maximum: 4,
        power: .55,
        range: 1.02,
        rating: "D",
        time: 600
      }, {
        class: 7,
        cost: 1749600,
        edID: 128671246,
        eddbID: 1411,
        grp: "cc",
        id: "Ch",
        mass: 80,
        maximum: 4,
        power: .69,
        range: 1.7,
        rating: "C",
        time: 510
      }, {
        class: 7,
        cost: 3499200,
        edID: 128671247,
        eddbID: 1412,
        grp: "cc",
        id: "Ci",
        mass: 128,
        maximum: 4,
        power: .83,
        range: 2.38,
        rating: "B",
        time: 420
      }, {
        class: 7,
        cost: 6998400,
        edID: 128671248,
        eddbID: 1413,
        grp: "cc",
        id: "Cj",
        mass: 128,
        maximum: 4,
        power: .97,
        range: 2.04,
        rating: "A",
        time: 720
      } ],
      dc: [ {
        class: 1,
        cost: 4500,
        edID: 128049549,
        eddbID: 890,
        grp: "dc",
        id: "24",
        integrity: 10,
        name: "Standard Docking Computer",
        power: .39,
        rating: "E"
      } ],
      fh: [ {
        bays: 1,
        class: 5,
        cost: 575660,
        edID: 128727930,
        eddbID: 1562,
        fightercost: 1030,
        grp: "fh",
        id: "fr",
        integrity: 60,
        mass: 20,
        power: .25,
        rating: "D",
        rebuildsperbay: 6
      }, {
        bays: 2,
        class: 6,
        cost: 1869350,
        edID: 128727931,
        eddbID: 1561,
        fightercost: 1030,
        grp: "fh",
        id: "fm",
        integrity: 80,
        mass: 40,
        power: .35,
        rating: "D",
        rebuildsperbay: 8
      }, {
        bays: 2,
        class: 7,
        edID: 128727932,
        cost: 2369330,
        eddbID: 1560,
        fightercost: 1030,
        grp: "fh",
        id: "fh",
        integrity: 120,
        mass: 60,
        power: .35,
        rating: "D",
        rebuildsperbay: 15
      } ],
      fi: [ {
        boot: 15,
        class: 1,
        cost: 12e3,
        edID: 128666704,
        eddbID: 1306,
        facinglimit: 50,
        grp: "fi",
        id: "6a",
        integrity: 32,
        mass: 1.3,
        power: .14,
        ranget: 3,
        rating: "E"
      }, {
        boot: 15,
        class: 1,
        cost: 36e3,
        edID: 128666708,
        eddbID: 1310,
        facinglimit: 50,
        grp: "fi",
        id: "69",
        integrity: 24,
        mass: .5,
        power: .18,
        ranget: 4,
        rating: "D"
      }, {
        boot: 15,
        class: 1,
        cost: 108e3,
        edID: 128666712,
        eddbID: 1314,
        facinglimit: 50,
        grp: "fi",
        id: "68",
        integrity: 40,
        mass: 1.3,
        power: .23,
        ranget: 5,
        rating: "C"
      }, {
        boot: 15,
        class: 1,
        cost: 324e3,
        edID: 128666716,
        eddbID: 1318,
        facinglimit: 50,
        grp: "fi",
        id: "67",
        integrity: 56,
        mass: 2,
        power: .28,
        ranget: 6,
        rating: "B"
      }, {
        boot: 15,
        class: 1,
        cost: 972e3,
        edID: 128666720,
        eddbID: 1322,
        facinglimit: 50,
        grp: "fi",
        id: "66",
        integrity: 48,
        mass: 1.3,
        power: .32,
        ranget: 7,
        rating: "A"
      }, {
        boot: 15,
        class: 2,
        cost: 33600,
        edID: 128666705,
        eddbID: 1307,
        facinglimit: 50,
        grp: "fi",
        id: "6f",
        integrity: 41,
        mass: 2.5,
        power: .17,
        ranget: 6,
        rating: "E"
      }, {
        boot: 15,
        class: 2,
        cost: 100800,
        edID: 128666709,
        eddbID: 1311,
        facinglimit: 50,
        grp: "fi",
        id: "6e",
        integrity: 51,
        mass: 1,
        power: .22,
        ranget: 7,
        rating: "D"
      }, {
        boot: 15,
        class: 2,
        cost: 302400,
        edID: 128666713,
        eddbID: 1315,
        facinglimit: 50,
        grp: "fi",
        id: "6d",
        integrity: 51,
        mass: 2.5,
        power: .28,
        ranget: 8,
        rating: "C"
      }, {
        boot: 15,
        class: 2,
        cost: 907200,
        edID: 128666717,
        eddbID: 1319,
        facinglimit: 50,
        grp: "fi",
        id: "6c",
        integrity: 71,
        mass: 4,
        power: .34,
        ranget: 9,
        rating: "B"
      }, {
        boot: 15,
        class: 2,
        cost: 2721600,
        edID: 128666721,
        eddbID: 1323,
        facinglimit: 50,
        grp: "fi",
        id: "6b",
        integrity: 61,
        mass: 2.5,
        power: .39,
        ranget: 10,
        rating: "A"
      }, {
        boot: 15,
        class: 3,
        cost: 94080,
        edID: 128666706,
        eddbID: 1308,
        facinglimit: 50,
        grp: "fi",
        id: "6k",
        integrity: 51,
        mass: 5,
        power: .2,
        ranget: 9,
        rating: "E"
      }, {
        boot: 15,
        class: 3,
        cost: 282240,
        edID: 128666710,
        eddbID: 1312,
        facinglimit: 50,
        grp: "fi",
        id: "6j",
        integrity: 38,
        mass: 2,
        power: .27,
        ranget: 10,
        rating: "D"
      }, {
        boot: 15,
        class: 3,
        cost: 846720,
        edID: 128666714,
        eddbID: 1316,
        facinglimit: 50,
        grp: "fi",
        id: "6i",
        integrity: 64,
        mass: 5,
        power: .34,
        ranget: 11,
        rating: "C"
      }, {
        boot: 15,
        class: 3,
        cost: 2540160,
        edID: 128666718,
        eddbID: 1320,
        facinglimit: 50,
        grp: "fi",
        id: "6h",
        integrity: 90,
        mass: 8,
        power: .41,
        ranget: 12,
        rating: "B"
      }, {
        boot: 15,
        class: 3,
        cost: 7620480,
        edID: 128666722,
        eddbID: 1324,
        facinglimit: 50,
        grp: "fi",
        id: "6g",
        integrity: 77,
        mass: 5,
        power: .48,
        ranget: 13,
        rating: "A"
      }, {
        boot: 15,
        class: 4,
        cost: 263420,
        edID: 128666707,
        eddbID: 1309,
        facinglimit: 50,
        grp: "fi",
        id: "6p",
        integrity: 64,
        mass: 10,
        power: .25,
        ranget: 12,
        rating: "E"
      }, {
        boot: 15,
        class: 4,
        cost: 790270,
        edID: 128666711,
        eddbID: 1313,
        facinglimit: 50,
        grp: "fi",
        id: "6o",
        integrity: 48,
        mass: 4,
        power: .33,
        ranget: 13,
        rating: "D"
      }, {
        boot: 15,
        class: 4,
        cost: 2370820,
        edID: 128666715,
        eddbID: 1317,
        facinglimit: 50,
        grp: "fi",
        id: "6n",
        integrity: 80,
        mass: 10,
        power: .41,
        ranget: 14,
        rating: "C"
      }, {
        boot: 15,
        class: 4,
        cost: 7112450,
        edID: 128666719,
        eddbID: 1321,
        facinglimit: 50,
        grp: "fi",
        id: "6m",
        integrity: 112,
        mass: 16,
        power: .49,
        ranget: 15,
        rating: "B"
      }, {
        boot: 15,
        class: 4,
        cost: 21337340,
        edID: 128666723,
        eddbID: 1325,
        facinglimit: 50,
        grp: "fi",
        id: "6l",
        integrity: 96,
        mass: 10,
        power: .57,
        ranget: 16,
        rating: "A"
      } ],
      fs: [ {
        class: 1,
        cost: 310,
        edID: 128666644,
        eddbID: 1246,
        grp: "fs",
        id: "2n",
        power: .14,
        rate: 18,
        rating: "E"
      }, {
        class: 1,
        cost: 1290,
        edID: 128666652,
        eddbID: 1254,
        grp: "fs",
        id: "2m",
        power: .18,
        rate: 24,
        rating: "D"
      }, {
        class: 1,
        cost: 5140,
        edID: 128666660,
        eddbID: 1262,
        grp: "fs",
        id: "2l",
        power: .23,
        rate: 30,
        rating: "C"
      }, {
        class: 1,
        cost: 20570,
        edID: 128666668,
        eddbID: 1270,
        grp: "fs",
        id: "2k",
        power: .28,
        rate: 36,
        rating: "B"
      }, {
        class: 1,
        cost: 82270,
        edID: 128666676,
        eddbID: 1278,
        grp: "fs",
        id: "2j",
        power: .32,
        rate: 42,
        rating: "A"
      }, {
        class: 2,
        cost: 1070,
        edID: 128666645,
        eddbID: 1247,
        grp: "fs",
        id: "2s",
        power: .17,
        rate: 32,
        rating: "E"
      }, {
        class: 2,
        cost: 4450,
        edID: 128666653,
        eddbID: 1255,
        grp: "fs",
        id: "2r",
        power: .22,
        rate: 43,
        rating: "D"
      }, {
        class: 2,
        cost: 17800,
        edID: 128666661,
        eddbID: 1263,
        grp: "fs",
        id: "2q",
        power: .28,
        rate: 54,
        rating: "C"
      }, {
        class: 2,
        cost: 71210,
        edID: 128666669,
        eddbID: 1271,
        grp: "fs",
        id: "2p",
        power: .34,
        rate: 65,
        rating: "B"
      }, {
        class: 2,
        cost: 284840,
        edID: 128666677,
        eddbID: 1279,
        grp: "fs",
        id: "2o",
        power: .39,
        rate: 75,
        rating: "A"
      }, {
        class: 3,
        cost: 3390,
        edID: 128666646,
        eddbID: 1248,
        grp: "fs",
        id: "31",
        power: .2,
        rate: 75,
        rating: "E"
      }, {
        class: 3,
        cost: 14110,
        edID: 128666654,
        eddbID: 1256,
        grp: "fs",
        id: "30",
        power: .27,
        rate: 100,
        rating: "D"
      }, {
        class: 3,
        cost: 56440,
        edID: 128666662,
        eddbID: 1264,
        grp: "fs",
        id: "2v",
        power: .34,
        rate: 126,
        rating: "C"
      }, {
        class: 3,
        cost: 225740,
        edID: 128666670,
        eddbID: 1272,
        grp: "fs",
        id: "2u",
        power: .41,
        rate: 151,
        rating: "B"
      }, {
        class: 3,
        cost: 902950,
        edID: 128666678,
        eddbID: 1280,
        grp: "fs",
        id: "2t",
        power: .48,
        rate: 176,
        rating: "A"
      }, {
        class: 4,
        cost: 10730,
        edID: 128666647,
        eddbID: 1249,
        grp: "fs",
        id: "36",
        power: .25,
        rate: 147,
        rating: "E"
      }, {
        class: 4,
        cost: 44720,
        edID: 128666655,
        eddbID: 1257,
        grp: "fs",
        id: "35",
        power: .33,
        rate: 196,
        rating: "D"
      }, {
        class: 4,
        cost: 178900,
        edID: 128666663,
        eddbID: 1265,
        grp: "fs",
        id: "34",
        power: .41,
        rate: 245,
        rating: "C"
      }, {
        class: 4,
        cost: 715590,
        edID: 128666671,
        eddbID: 1273,
        grp: "fs",
        id: "33",
        power: .49,
        rate: 294,
        rating: "B"
      }, {
        class: 4,
        cost: 2862360,
        edID: 128666679,
        eddbID: 1281,
        grp: "fs",
        id: "32",
        power: .57,
        rate: 342,
        rating: "A"
      }, {
        class: 5,
        cost: 34030,
        edID: 128666648,
        eddbID: 1250,
        grp: "fs",
        id: "3b",
        power: .3,
        rate: 247,
        rating: "E"
      }, {
        class: 5,
        cost: 141780,
        edID: 128666656,
        eddbID: 1258,
        grp: "fs",
        id: "3a",
        power: .4,
        rate: 330,
        rating: "D"
      }, {
        class: 5,
        cost: 567110,
        edID: 128666664,
        eddbID: 1266,
        grp: "fs",
        id: "39",
        power: .5,
        rate: 412,
        rating: "C"
      }, {
        class: 5,
        cost: 2268420,
        edID: 128666672,
        eddbID: 1274,
        grp: "fs",
        id: "38",
        power: .6,
        rate: 494,
        rating: "B"
      }, {
        class: 5,
        cost: 9073690,
        edID: 128666680,
        eddbID: 1282,
        grp: "fs",
        id: "37",
        power: .7,
        rate: 577,
        rating: "A"
      }, {
        class: 6,
        cost: 107860,
        edID: 128666649,
        eddbID: 1251,
        grp: "fs",
        id: "3g",
        power: .35,
        rate: 376,
        rating: "E"
      }, {
        class: 6,
        cost: 449430,
        edID: 128666657,
        eddbID: 1259,
        grp: "fs",
        id: "3f",
        power: .47,
        rate: 502,
        rating: "D"
      }, {
        class: 6,
        cost: 1797730,
        edID: 128666665,
        eddbID: 1267,
        grp: "fs",
        id: "3e",
        power: .59,
        rate: 627,
        rating: "C"
      }, {
        class: 6,
        cost: 7190900,
        edID: 128666673,
        eddbID: 1275,
        grp: "fs",
        id: "3d",
        power: .71,
        rate: 752,
        rating: "B"
      }, {
        class: 6,
        cost: 28763610,
        edID: 128666681,
        eddbID: 1283,
        grp: "fs",
        id: "3c",
        power: .83,
        rate: 878,
        rating: "A"
      }, {
        class: 7,
        cost: 341930,
        edID: 128666650,
        eddbID: 1252,
        grp: "fs",
        id: "3l",
        power: .41,
        rate: 534,
        rating: "E"
      }, {
        class: 7,
        cost: 1424700,
        edID: 128666658,
        eddbID: 1260,
        grp: "fs",
        id: "3k",
        power: .55,
        rate: 712,
        rating: "D"
      }, {
        class: 7,
        cost: 5698790,
        edID: 128666666,
        eddbID: 1268,
        grp: "fs",
        id: "3j",
        power: .69,
        rate: 890,
        rating: "C"
      }, {
        class: 7,
        cost: 22795160,
        edID: 128666674,
        eddbID: 1276,
        grp: "fs",
        id: "3i",
        power: .83,
        rate: 1068,
        rating: "B"
      }, {
        class: 7,
        cost: 91180640,
        edID: 128666682,
        eddbID: 1284,
        grp: "fs",
        id: "3h",
        power: .97,
        rate: 1245,
        rating: "A"
      }, {
        class: 8,
        cost: 1083910,
        edID: 128666651,
        eddbID: 1253,
        grp: "fs",
        id: "3q",
        power: .48,
        rate: 720,
        rating: "E"
      }, {
        class: 8,
        cost: 4516290,
        edID: 128666659,
        eddbID: 1261,
        grp: "fs",
        id: "3p",
        power: .64,
        rate: 960,
        rating: "D"
      }, {
        class: 8,
        cost: 18065160,
        edID: 128666667,
        eddbID: 1269,
        grp: "fs",
        id: "3o",
        power: .8,
        rate: 1200,
        rating: "C"
      }, {
        class: 8,
        cost: 72260660,
        edID: 128666675,
        eddbID: 1277,
        grp: "fs",
        id: "3n",
        power: .96,
        rate: 1440,
        rating: "B"
      }, {
        class: 8,
        cost: 289042540,
        edID: 128666683,
        eddbID: 1285,
        grp: "fs",
        id: "3m",
        power: 1.12,
        rate: 1680,
        rating: "A"
      } ],
      ft: [ {
        class: 1,
        cost: 1e3,
        edID: 128064346,
        eddbID: 1199,
        fuel: 2,
        grp: "ft",
        id: "f1",
        rating: "C"
      }, {
        class: 2,
        cost: 3750,
        edID: 128064347,
        eddbID: 1200,
        fuel: 4,
        grp: "ft",
        id: "f2",
        rating: "C"
      }, {
        class: 3,
        cost: 7060,
        edID: 128064348,
        eddbID: 1201,
        fuel: 8,
        grp: "ft",
        id: "f3",
        rating: "C"
      }, {
        class: 4,
        cost: 24730,
        edID: 128064349,
        eddbID: 1202,
        fuel: 16,
        grp: "ft",
        id: "f4",
        rating: "C"
      }, {
        class: 5,
        cost: 97750,
        edID: 128064350,
        eddbID: 1203,
        fuel: 32,
        grp: "ft",
        id: "f5",
        rating: "C"
      }, {
        class: 6,
        cost: 341580,
        edID: 128064351,
        eddbID: 1204,
        fuel: 64,
        grp: "ft",
        id: "f6",
        rating: "C"
      }, {
        class: 7,
        cost: 1780910,
        edID: 128064352,
        eddbID: 1205,
        fuel: 128,
        grp: "ft",
        id: "f7",
        rating: "C"
      }, {
        class: 8,
        cost: 5428400,
        edID: 128064353,
        eddbID: 1206,
        fuel: 256,
        grp: "ft",
        id: "f8",
        rating: "C"
      } ],
      fx: [ {
        class: 1,
        cost: 600,
        edID: 128671249,
        eddbID: 1414,
        grp: "fx",
        id: "F0",
        mass: 1.3,
        maximum: 1,
        power: .18,
        range: .6,
        rating: "E"
      }, {
        class: 1,
        cost: 1200,
        edID: 128671250,
        eddbID: 1415,
        grp: "fx",
        id: "F1",
        mass: .5,
        maximum: 1,
        power: .14,
        range: .8,
        rating: "D"
      }, {
        class: 1,
        cost: 2400,
        edID: 128671251,
        eddbID: 1416,
        grp: "fx",
        id: "F2",
        mass: 1.3,
        maximum: 1,
        power: .23,
        range: 1,
        rating: "C"
      }, {
        class: 1,
        cost: 4800,
        edID: 128671252,
        eddbID: 1417,
        grp: "fx",
        id: "F3",
        mass: 2,
        maximum: 1,
        power: .32,
        range: 1.2,
        rating: "B"
      }, {
        class: 1,
        cost: 9600,
        edID: 128671253,
        eddbID: 1418,
        grp: "fx",
        id: "F4",
        mass: 1.3,
        maximum: 1,
        power: .28,
        range: 1.4,
        rating: "A"
      }, {
        class: 3,
        cost: 5400,
        edID: 128671254,
        eddbID: 1419,
        grp: "fx",
        id: "F5",
        mass: 5,
        maximum: 2,
        power: .27,
        range: .66,
        rating: "E"
      }, {
        class: 3,
        cost: 10800,
        edID: 128671255,
        eddbID: 1420,
        grp: "fx",
        id: "F6",
        mass: 2,
        maximum: 2,
        power: .2,
        range: .88,
        rating: "D"
      }, {
        class: 3,
        cost: 21600,
        edID: 128671256,
        eddbID: 1421,
        grp: "fx",
        id: "F7",
        mass: 5,
        maximum: 2,
        power: .34,
        range: 1.1,
        rating: "C"
      }, {
        class: 3,
        cost: 43200,
        edID: 128671257,
        eddbID: 1422,
        grp: "fx",
        id: "F8",
        mass: 8,
        maximum: 2,
        power: .48,
        range: 1.32,
        rating: "B"
      }, {
        class: 3,
        cost: 86400,
        edID: 128671258,
        eddbID: 1423,
        grp: "fx",
        id: "F9",
        mass: 5,
        maximum: 2,
        power: .41,
        range: 1.54,
        rating: "A"
      }, {
        class: 5,
        cost: 48600,
        edID: 128671259,
        eddbID: 1424,
        grp: "fx",
        id: "Fa",
        mass: 20,
        maximum: 4,
        power: .4,
        range: .78,
        rating: "E"
      }, {
        class: 5,
        cost: 97200,
        edID: 128671260,
        eddbID: 1425,
        grp: "fx",
        id: "Fb",
        mass: 8,
        maximum: 4,
        power: .3,
        range: 1.04,
        rating: "D"
      }, {
        class: 5,
        cost: 194400,
        edID: 128671261,
        eddbID: 1426,
        grp: "fx",
        id: "Fc",
        mass: 20,
        maximum: 4,
        power: .5,
        range: 1.3,
        rating: "C"
      }, {
        class: 5,
        cost: 388800,
        edID: 128671262,
        eddbID: 1427,
        grp: "fx",
        id: "Fd",
        mass: 32,
        maximum: 4,
        power: .97,
        range: 1.56,
        rating: "B"
      }, {
        class: 5,
        cost: 777600,
        edID: 128671263,
        eddbID: 1428,
        grp: "fx",
        id: "Fe",
        mass: 20,
        maximum: 4,
        power: .6,
        range: 1.82,
        rating: "A"
      }, {
        class: 7,
        cost: 437400,
        edID: 128671264,
        eddbID: 1429,
        grp: "fx",
        id: "Ff",
        mass: 80,
        maximum: 8,
        power: .55,
        range: 1.02,
        rating: "E"
      }, {
        class: 7,
        cost: 874800,
        edID: 128671265,
        eddbID: 1430,
        grp: "fx",
        id: "Fg",
        mass: 32,
        maximum: 8,
        power: .41,
        range: 1.36,
        rating: "D"
      }, {
        class: 7,
        cost: 1749600,
        edID: 128671266,
        eddbID: 1431,
        grp: "fx",
        id: "Fh",
        mass: 80,
        maximum: 8,
        power: .69,
        range: 1.7,
        rating: "C"
      }, {
        class: 7,
        cost: 3499200,
        edID: 128671267,
        eddbID: 1432,
        grp: "fx",
        id: "Fi",
        mass: 128,
        maximum: 8,
        power: .97,
        range: 2.04,
        rating: "B"
      }, {
        class: 7,
        cost: 6998400,
        edID: 128671268,
        eddbID: 1433,
        grp: "fx",
        id: "Fj",
        mass: 80,
        maximum: 8,
        power: .83,
        range: 2.38,
        rating: "A"
      } ],
      hb: [ {
        class: 1,
        cost: 600,
        edID: 128066532,
        eddbID: 1207,
        grp: "hb",
        id: "6u",
        mass: 1.3,
        maximum: 2,
        power: .12,
        range: 1.5,
        rating: "E",
        time: 42
      }, {
        class: 1,
        cost: 1200,
        edID: 128066533,
        eddbID: 1208,
        grp: "hb",
        id: "6t",
        mass: .5,
        maximum: 1,
        power: .16,
        range: 2,
        rating: "D",
        time: 36
      }, {
        class: 1,
        cost: 2400,
        edID: 128066534,
        eddbID: 1209,
        grp: "hb",
        id: "6s",
        mass: 1.3,
        maximum: 1,
        power: .2,
        range: 2.5,
        rating: "C",
        time: 30
      }, {
        class: 1,
        cost: 4800,
        edID: 128066535,
        eddbID: 1210,
        grp: "hb",
        id: "6r",
        mass: 2,
        maximum: 2,
        power: .24,
        range: 3,
        rating: "B",
        time: 24
      }, {
        class: 1,
        cost: 9600,
        edID: 128066536,
        eddbID: 1211,
        grp: "hb",
        id: "6q",
        mass: 1.3,
        maximum: 1,
        power: .28,
        range: 3.5,
        rating: "A",
        time: 18
      }, {
        class: 3,
        cost: 5400,
        edID: 128066537,
        eddbID: 1212,
        grp: "hb",
        id: "73",
        mass: 5,
        maximum: 4,
        power: .18,
        range: 1.62,
        rating: "E",
        time: 36
      }, {
        class: 3,
        cost: 10800,
        edID: 128066538,
        eddbID: 1213,
        grp: "hb",
        id: "72",
        mass: 2,
        maximum: 3,
        power: .24,
        range: 2.16,
        rating: "D",
        time: 31
      }, {
        class: 3,
        cost: 21600,
        edID: 128066539,
        eddbID: 1214,
        grp: "hb",
        id: "71",
        mass: 5,
        maximum: 3,
        power: .3,
        range: 2.7,
        rating: "C",
        time: 26
      }, {
        class: 3,
        cost: 43200,
        edID: 128066540,
        eddbID: 1215,
        grp: "hb",
        id: "70",
        mass: 8,
        maximum: 4,
        power: .36,
        range: 3.24,
        rating: "B",
        time: 21
      }, {
        class: 3,
        cost: 86400,
        edID: 128066541,
        eddbID: 1216,
        grp: "hb",
        id: "6v",
        mass: 5,
        maximum: 3,
        power: .42,
        range: 3.78,
        rating: "A",
        time: 16
      }, {
        class: 5,
        cost: 48600,
        edID: 128066542,
        eddbID: 1217,
        grp: "hb",
        id: "78",
        mass: 20,
        maximum: 9,
        power: .3,
        range: 1.98,
        rating: "E",
        time: 31
      }, {
        class: 5,
        cost: 97200,
        edID: 128066543,
        eddbID: 1218,
        grp: "hb",
        id: "77",
        mass: 8,
        maximum: 6,
        power: .4,
        range: 2.64,
        rating: "D",
        time: 26
      }, {
        class: 5,
        cost: 194400,
        edID: 128066544,
        eddbID: 1219,
        grp: "hb",
        id: "76",
        mass: 20,
        maximum: 7,
        power: .5,
        range: 3.3,
        rating: "C",
        time: 22
      }, {
        class: 5,
        cost: 388800,
        edID: 128066545,
        eddbID: 1220,
        grp: "hb",
        id: "75",
        mass: 32,
        maximum: 9,
        power: .6,
        range: 3.96,
        rating: "B",
        time: 18
      }, {
        class: 5,
        cost: 777600,
        edID: 128066546,
        eddbID: 1221,
        grp: "hb",
        id: "74",
        mass: 20,
        maximum: 6,
        power: .7,
        range: 4.62,
        rating: "A",
        time: 13
      }, {
        class: 7,
        cost: 437400,
        edID: 128066547,
        eddbID: 1222,
        grp: "hb",
        id: "7d",
        mass: 80,
        maximum: 18,
        power: .42,
        range: 2.58,
        rating: "E",
        time: 25
      }, {
        class: 7,
        cost: 874800,
        edID: 128066548,
        eddbID: 1223,
        grp: "hb",
        id: "7c",
        mass: 32,
        maximum: 12,
        power: .56,
        range: 3.44,
        rating: "D",
        time: 22
      }, {
        class: 7,
        cost: 1749600,
        edID: 128066549,
        eddbID: 1224,
        grp: "hb",
        id: "7b",
        mass: 80,
        maximum: 15,
        power: .7,
        range: 4.3,
        rating: "C",
        time: 18
      }, {
        class: 7,
        cost: 3499200,
        edID: 128066550,
        eddbID: 1225,
        grp: "hb",
        id: "7a",
        mass: 128,
        maximum: 18,
        power: .84,
        range: 5.16,
        rating: "B",
        time: 14
      }, {
        class: 7,
        cost: 6998400,
        edID: 128066551,
        eddbID: 1226,
        grp: "hb",
        id: "79",
        mass: 90,
        maximum: 12,
        power: .98,
        range: 6.02,
        rating: "A",
        time: 11
      } ],
      hr: [ {
        hullreinforcement: 80,
        class: 1,
        cost: 5e3,
        edID: 128668537,
        eddbID: 1373,
        explres: .005,
        grp: "hr",
        id: "26",
        kinres: .005,
        mass: 2,
        rating: "E",
        thermres: .005
      }, {
        hullreinforcement: 110,
        class: 1,
        cost: 15e3,
        edID: 128668538,
        eddbID: 1374,
        explres: .005,
        grp: "hr",
        id: "25",
        kinres: .005,
        mass: 1,
        rating: "D",
        thermres: .005
      }, {
        hullreinforcement: 150,
        class: 2,
        cost: 12e3,
        edID: 128668539,
        eddbID: 1375,
        explres: .01,
        grp: "hr",
        id: "28",
        kinres: .01,
        mass: 4,
        rating: "E",
        thermres: .01
      }, {
        hullreinforcement: 190,
        class: 2,
        cost: 36e3,
        edID: 128668540,
        eddbID: 1376,
        explres: .01,
        grp: "hr",
        id: "27",
        kinres: .01,
        mass: 2,
        rating: "D",
        thermres: .01
      }, {
        hullreinforcement: 230,
        class: 3,
        cost: 28e3,
        edID: 128668541,
        eddbID: 1377,
        explres: .015,
        grp: "hr",
        id: "2a",
        kinres: .015,
        mass: 8,
        rating: "E",
        thermres: .015
      }, {
        hullreinforcement: 260,
        class: 3,
        cost: 84e3,
        edID: 128668542,
        eddbID: 1378,
        explres: .015,
        grp: "hr",
        id: "29",
        kinres: .015,
        mass: 4,
        rating: "D",
        thermres: .015
      }, {
        hullreinforcement: 300,
        class: 4,
        cost: 65e3,
        edID: 128668543,
        eddbID: 1379,
        explres: .02,
        grp: "hr",
        id: "2c",
        kinres: .02,
        mass: 16,
        rating: "E",
        thermres: .02
      }, {
        hullreinforcement: 330,
        class: 4,
        cost: 195e3,
        edID: 128668544,
        eddbID: 1380,
        explres: .02,
        grp: "hr",
        id: "2b",
        kinres: .02,
        mass: 8,
        rating: "D",
        thermres: .02
      }, {
        hullreinforcement: 360,
        class: 5,
        cost: 15e4,
        edID: 128668545,
        eddbID: 1381,
        explres: .025,
        grp: "hr",
        id: "2e",
        kinres: .025,
        mass: 32,
        rating: "E",
        thermres: .025
      }, {
        hullreinforcement: 390,
        class: 5,
        cost: 45e4,
        edID: 128668546,
        eddbID: 1382,
        explres: .025,
        grp: "hr",
        id: "2d",
        kinres: .025,
        mass: 16,
        rating: "D",
        thermres: .025
      } ],
      mrp: [ {
        class: 1,
        cost: 5e3,
        eddbID: 1577,
        edID: 128737270,
        grp: "mrp",
        id: "m0",
        integrity: 77,
        mass: 2,
        protection: .3,
        rating: "E"
      }, {
        class: 1,
        cost: 15e3,
        eddbID: 1578,
        edID: 128737271,
        grp: "mrp",
        id: "m1",
        integrity: 70,
        mass: 1,
        protection: .6,
        rating: "D"
      }, {
        class: 2,
        cost: 12e3,
        eddbID: 1579,
        edID: 128737272,
        grp: "mrp",
        id: "m2",
        integrity: 115,
        mass: 4,
        protection: .3,
        rating: "E"
      }, {
        class: 2,
        cost: 36e3,
        eddbID: 1580,
        edID: 128737273,
        grp: "mrp",
        id: "m3",
        integrity: 105,
        mass: 2,
        protection: .6,
        rating: "D"
      }, {
        class: 3,
        cost: 28e3,
        eddbID: 1581,
        edID: 128737274,
        grp: "mrp",
        id: "m4",
        integrity: 170,
        mass: 8,
        protection: .3,
        rating: "E"
      }, {
        class: 3,
        cost: 84e3,
        eddbID: 1582,
        edID: 128737275,
        grp: "mrp",
        id: "m5",
        integrity: 155,
        mass: 4,
        protection: .6,
        rating: "D"
      }, {
        class: 4,
        cost: 65e3,
        eddbID: 1583,
        edID: 128737276,
        grp: "mrp",
        id: "m6",
        integrity: 260,
        mass: 16,
        protection: .3,
        rating: "E"
      }, {
        class: 4,
        cost: 195e3,
        eddbID: 1584,
        edID: 128737277,
        grp: "mrp",
        id: "m7",
        integrity: 235,
        mass: 8,
        protection: .6,
        rating: "D"
      }, {
        class: 5,
        cost: 15e4,
        eddbID: 1585,
        edID: 128737278,
        grp: "mrp",
        id: "m8",
        integrity: 385,
        mass: 32,
        protection: .3,
        rating: "E"
      }, {
        class: 5,
        cost: 45e4,
        eddbID: 1586,
        edID: 128737279,
        grp: "mrp",
        id: "m9",
        integrity: 350,
        mass: 16,
        protection: .6,
        rating: "D"
      } ],
      pv: [ {
        bays: 1,
        class: 2,
        cost: 18e3,
        edID: 128672288,
        eddbID: 1528,
        grp: "pv",
        id: "v5",
        integrity: 30,
        mass: 12,
        power: .25,
        rating: "H"
      }, {
        bays: 1,
        class: 2,
        cost: 21600,
        edID: 128672289,
        eddbID: 1529,
        grp: "pv",
        id: "v6",
        integrity: 30,
        mass: 6,
        power: .75,
        rating: "G"
      }, {
        bays: 2,
        class: 4,
        cost: 72e3,
        edID: 128672290,
        eddbID: 1526,
        grp: "pv",
        id: "v3",
        integrity: 30,
        mass: 20,
        power: .4,
        rating: "H"
      }, {
        bays: 2,
        class: 4,
        cost: 86400,
        edID: 128672291,
        eddbID: 1527,
        grp: "pv",
        id: "v4",
        integrity: 30,
        mass: 10,
        power: 1.2,
        rating: "G"
      }, {
        bays: 4,
        class: 6,
        cost: 576e3,
        edID: 128672292,
        eddbID: 1524,
        grp: "pv",
        id: "v1",
        integrity: 30,
        mass: 34,
        power: .6,
        rating: "H"
      }, {
        bays: 4,
        class: 6,
        cost: 691200,
        edID: 128672293,
        eddbID: 1525,
        grp: "pv",
        id: "v2",
        integrity: 30,
        mass: 17,
        power: 1.8,
        rating: "G"
      } ],
      psg: [ {
        brokenregen: 1.2,
        class: 1,
        cost: 132200,
        distdraw: .6,
        edID: 128671323,
        eddbID: 1485,
        explres: .5,
        grp: "psg",
        id: "p6",
        integrity: 48,
        kinres: .4,
        mass: 2.5,
        maxmass: 63,
        maxmul: 2,
        minmass: 13,
        minmul: 1,
        optmass: 25,
        optmul: 1.5,
        power: 2.52,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.2,
        class: 2,
        cost: 240340,
        distdraw: .6,
        edID: 128671324,
        eddbID: 1486,
        explres: .5,
        grp: "psg",
        id: "p5",
        integrity: 61,
        kinres: .4,
        mass: 5,
        maxmass: 138,
        maxmul: 2,
        minmass: 23,
        minmul: 1,
        optmass: 55,
        optmul: 1.5,
        power: 3.15,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.3,
        class: 3,
        cost: 761870,
        distdraw: .6,
        edID: 128671325,
        eddbID: 1487,
        explres: .5,
        grp: "psg",
        id: "p4",
        integrity: 77,
        kinres: .4,
        mass: 10,
        maxmass: 413,
        maxmul: 2,
        minmass: 83,
        minmul: 1,
        optmass: 165,
        optmul: 1.5,
        power: 3.78,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.7,
        class: 4,
        cost: 2415120,
        distdraw: .6,
        edID: 128671326,
        eddbID: 1488,
        explres: .5,
        grp: "psg",
        id: "p3",
        integrity: 96,
        kinres: .4,
        mass: 20,
        maxmass: 713,
        maxmul: 2,
        minmass: 143,
        minmul: 1,
        optmass: 285,
        optmul: 1.5,
        power: 4.62,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 2.3,
        class: 5,
        cost: 7655930,
        distdraw: .6,
        edID: 128671327,
        eddbID: 1489,
        explres: .5,
        grp: "psg",
        id: "p2",
        integrity: 115,
        kinres: .4,
        mass: 40,
        maxmass: 1013,
        maxmul: 2,
        minmass: 203,
        minmul: 1,
        optmass: 405,
        optmul: 1.5,
        power: 5.46,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 3.2,
        class: 6,
        cost: 24269300,
        distdraw: .6,
        edID: 128671328,
        eddbID: 1490,
        explres: .5,
        grp: "psg",
        id: "p1",
        integrity: 136,
        kinres: .4,
        mass: 80,
        maxmass: 1350,
        maxmul: 2,
        minmass: 270,
        minmul: 1,
        optmass: 540,
        optmul: 1.5,
        power: 6.51,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 4.2,
        class: 7,
        cost: 76933670,
        distdraw: .6,
        edID: 128671329,
        eddbID: 1491,
        explres: .5,
        grp: "psg",
        id: "p0",
        integrity: 157,
        kinres: .4,
        mass: 160,
        maxmass: 2650,
        maxmul: 2,
        minmass: 530,
        minmul: 1,
        optmass: 1060,
        optmul: 1.5,
        power: 7.35,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1.1,
        thermres: -.2
      }, {
        brokenregen: 5.4,
        class: 8,
        cost: 243879730,
        distdraw: .6,
        edID: 128671330,
        eddbID: 1492,
        explres: .5,
        grp: "psg",
        id: "p7",
        integrity: 180,
        kinres: .4,
        mass: 320,
        maxmass: 4500,
        maxmul: 2,
        minmass: 900,
        minmul: 1,
        optmass: 1800,
        optmul: 1.5,
        power: 8.4,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1.4,
        thermres: -.2
      } ],
      pc: [ {
        class: 1,
        cost: 600,
        edID: 128671269,
        eddbID: 1434,
        grp: "pc",
        id: "P0",
        mass: 1.3,
        maximum: 1,
        power: .18,
        range: 3,
        rating: "E"
      }, {
        class: 1,
        cost: 1200,
        edID: 128671270,
        eddbID: 1435,
        grp: "pc",
        id: "P1",
        mass: .5,
        maximum: 1,
        power: .14,
        range: 4,
        rating: "D"
      }, {
        class: 1,
        cost: 2400,
        edID: 128671271,
        eddbID: 1436,
        grp: "pc",
        id: "P2",
        mass: 1.3,
        maximum: 1,
        power: .23,
        range: 5,
        rating: "C"
      }, {
        class: 1,
        cost: 4800,
        edID: 128671272,
        eddbID: 1437,
        grp: "pc",
        id: "P3",
        mass: 2,
        maximum: 1,
        power: .32,
        range: 6,
        rating: "B"
      }, {
        class: 1,
        cost: 9600,
        edID: 128671273,
        eddbID: 1438,
        grp: "pc",
        id: "P4",
        mass: 1.3,
        maximum: 1,
        power: .28,
        range: 7,
        rating: "A"
      }, {
        class: 3,
        cost: 5400,
        edID: 128671274,
        eddbID: 1439,
        grp: "pc",
        id: "P5",
        mass: 5,
        maximum: 2,
        power: .27,
        range: 3.3,
        rating: "E"
      }, {
        class: 3,
        cost: 10800,
        edID: 128671275,
        eddbID: 1440,
        grp: "pc",
        id: "P6",
        mass: 2,
        maximum: 2,
        power: .2,
        range: 4.4,
        rating: "D"
      }, {
        class: 3,
        cost: 21600,
        edID: 128671276,
        eddbID: 1441,
        grp: "pc",
        id: "P7",
        mass: 5,
        maximum: 2,
        power: .34,
        range: 5.5,
        rating: "C"
      }, {
        class: 3,
        cost: 43200,
        edID: 128671277,
        eddbID: 1442,
        grp: "pc",
        id: "P8",
        mass: 8,
        maximum: 2,
        power: .48,
        range: 6.6,
        rating: "B"
      }, {
        class: 3,
        cost: 86400,
        edID: 128671278,
        eddbID: 1443,
        grp: "pc",
        id: "P9",
        mass: 5,
        maximum: 2,
        power: .41,
        range: 7.7,
        rating: "A"
      }, {
        class: 5,
        cost: 48600,
        edID: 128671279,
        eddbID: 1444,
        grp: "pc",
        id: "Pa",
        mass: 20,
        maximum: 4,
        power: .4,
        range: 3.9,
        rating: "E"
      }, {
        class: 5,
        cost: 97200,
        edID: 128671280,
        eddbID: 1445,
        grp: "pc",
        id: "Pb",
        mass: 8,
        maximum: 4,
        power: .3,
        range: 5.2,
        rating: "D"
      }, {
        class: 5,
        cost: 194400,
        edID: 128671281,
        eddbID: 1446,
        grp: "pc",
        id: "Pc",
        mass: 20,
        maximum: 4,
        power: .5,
        range: 6.5,
        rating: "C"
      }, {
        class: 5,
        cost: 388800,
        edID: 128671282,
        eddbID: 1447,
        grp: "pc",
        id: "Pd",
        mass: 32,
        maximum: 4,
        power: .97,
        range: 7.8,
        rating: "B"
      }, {
        class: 5,
        cost: 777600,
        edID: 128671283,
        eddbID: 1448,
        grp: "pc",
        id: "Pe",
        mass: 20,
        maximum: 4,
        power: .6,
        range: 9.1,
        rating: "A"
      }, {
        class: 7,
        cost: 437400,
        edID: 128671284,
        eddbID: 1449,
        grp: "pc",
        id: "Pf",
        mass: 80,
        maximum: 8,
        power: .55,
        range: 5.1,
        rating: "E"
      }, {
        class: 7,
        cost: 874800,
        edID: 128671285,
        eddbID: 1450,
        grp: "pc",
        id: "Pg",
        mass: 32,
        maximum: 8,
        power: .41,
        range: 6.8,
        rating: "D"
      }, {
        class: 7,
        cost: 1749600,
        edID: 128671286,
        eddbID: 1451,
        grp: "pc",
        id: "Ph",
        mass: 80,
        maximum: 8,
        power: .69,
        range: 8.5,
        rating: "C"
      }, {
        class: 7,
        cost: 3499200,
        edID: 128671287,
        eddbID: 1452,
        grp: "pc",
        id: "Pi",
        mass: 128,
        maximum: 8,
        power: .97,
        range: 10.2,
        rating: "B"
      }, {
        class: 7,
        cost: 6998400,
        edID: 128671288,
        eddbID: 1453,
        grp: "pc",
        id: "Pj",
        mass: 80,
        maximum: 8,
        power: .83,
        range: 11.9,
        rating: "A"
      } ],
      pce: [ {
        class: 2,
        cost: 4320,
        edID: 128734690,
        eddbID: 1563,
        grp: "pce",
        id: "ma",
        mass: 2.5,
        passengers: 2,
        rating: "E"
      }, {
        class: 3,
        cost: 8670,
        edID: 128734691,
        eddbID: 1564,
        grp: "pce",
        id: "mb",
        mass: 5,
        passengers: 4,
        rating: "E"
      }, {
        class: 4,
        cost: 18960,
        edID: 128727922,
        eddbID: 1565,
        grp: "pce",
        id: "mc",
        mass: 10,
        passengers: 8,
        rating: "E"
      }, {
        class: 5,
        cost: 34960,
        edID: 128734693,
        eddbID: 1566,
        grp: "pce",
        id: "md",
        mass: 20,
        passengers: 16,
        rating: "E"
      }, {
        class: 6,
        cost: 61420,
        edID: 128727926,
        eddbID: 1567,
        grp: "pce",
        id: "me",
        mass: 40,
        passengers: 32,
        rating: "E"
      } ],
      pci: [ {
        class: 3,
        cost: 26720,
        edID: 128734692,
        eddbID: 1568,
        grp: "pci",
        id: "mf",
        mass: 5,
        passengers: 3,
        rating: "D"
      }, {
        class: 4,
        cost: 56870,
        edID: 128727923,
        eddbID: 1569,
        grp: "pci",
        id: "mg",
        mass: 10,
        passengers: 6,
        rating: "D"
      }, {
        class: 5,
        cost: 92370,
        edID: 128734694,
        eddbID: 1570,
        grp: "pci",
        id: "mh",
        mass: 20,
        passengers: 10,
        rating: "D"
      }, {
        class: 6,
        cost: 184240,
        edID: 128727927,
        eddbID: 1571,
        grp: "pci",
        id: "mi",
        mass: 40,
        passengers: 16,
        rating: "D"
      } ],
      pcm: [ {
        class: 4,
        cost: 170600,
        edID: 128727924,
        eddbID: 1572,
        grp: "pcm",
        id: "mj",
        mass: 10,
        passengers: 3,
        rating: "C"
      }, {
        class: 5,
        cost: 340540,
        edID: 128734695,
        eddbID: 1573,
        grp: "pcm",
        id: "mk",
        mass: 20,
        passengers: 6,
        rating: "C"
      }, {
        class: 6,
        cost: 552700,
        edID: 128727928,
        eddbID: 1574,
        grp: "pcm",
        id: "ml",
        mass: 40,
        passengers: 12,
        rating: "C"
      } ],
      pcq: [ {
        class: 5,
        cost: 1658100,
        edID: 128727925,
        eddbID: 1575,
        grp: "pcq",
        id: "mm",
        mass: 20,
        passengers: 4,
        rating: "B"
      }, {
        class: 6,
        cost: 4974300,
        edID: 128727929,
        eddbID: 1576,
        grp: "pcq",
        id: "mn",
        mass: 40,
        passengers: 8,
        rating: "B"
      } ],
      rf: [ {
        bins: 1,
        class: 1,
        cost: 6e3,
        edID: 128666684,
        eddbID: 1286,
        grp: "rf",
        id: "1k",
        power: .14,
        rating: "E"
      }, {
        bins: 1,
        class: 1,
        cost: 18e3,
        edID: 128666688,
        eddbID: 1290,
        grp: "rf",
        id: "1j",
        power: .18,
        rating: "D"
      }, {
        bins: 2,
        class: 1,
        cost: 54e3,
        edID: 128666692,
        eddbID: 1294,
        grp: "rf",
        id: "1i",
        power: .23,
        rating: "C"
      }, {
        bins: 3,
        class: 1,
        cost: 162e3,
        edID: 128666696,
        eddbID: 1298,
        grp: "rf",
        id: "1h",
        power: .28,
        rating: "B"
      }, {
        bins: 4,
        class: 1,
        cost: 486e3,
        edID: 128666700,
        eddbID: 1302,
        grp: "rf",
        id: "1g",
        power: .32,
        rating: "A"
      }, {
        bins: 2,
        class: 2,
        cost: 12600,
        edID: 128666685,
        eddbID: 1287,
        grp: "rf",
        id: "1p",
        power: .17,
        rating: "E"
      }, {
        bins: 3,
        class: 2,
        cost: 37800,
        edID: 128666689,
        eddbID: 1291,
        grp: "rf",
        id: "1o",
        power: .22,
        rating: "D"
      }, {
        bins: 4,
        class: 2,
        cost: 113400,
        edID: 128666693,
        eddbID: 1295,
        grp: "rf",
        id: "1n",
        power: .28,
        rating: "C"
      }, {
        bins: 5,
        class: 2,
        cost: 340200,
        edID: 128666697,
        eddbID: 1299,
        grp: "rf",
        id: "1m",
        power: .34,
        rating: "B"
      }, {
        bins: 6,
        class: 2,
        cost: 1020600,
        edID: 128666701,
        eddbID: 1303,
        grp: "rf",
        id: "1l",
        power: .39,
        rating: "A"
      }, {
        bins: 3,
        class: 3,
        cost: 26460,
        edID: 128666686,
        eddbID: 1288,
        grp: "rf",
        id: "1u",
        power: .2,
        rating: "E"
      }, {
        bins: 4,
        class: 3,
        cost: 79380,
        edID: 128666690,
        eddbID: 1292,
        grp: "rf",
        id: "1t",
        power: .27,
        rating: "D"
      }, {
        bins: 6,
        class: 3,
        cost: 238140,
        edID: 128666694,
        eddbID: 1296,
        grp: "rf",
        id: "1s",
        power: .34,
        rating: "C"
      }, {
        bins: 7,
        class: 3,
        cost: 714420,
        edID: 128666698,
        eddbID: 1300,
        grp: "rf",
        id: "1r",
        power: .41,
        rating: "B"
      }, {
        bins: 8,
        class: 3,
        cost: 2143260,
        edID: 128666702,
        eddbID: 1304,
        grp: "rf",
        id: "1q",
        power: .48,
        rating: "A"
      }, {
        bins: 4,
        class: 4,
        cost: 55570,
        edID: 128666687,
        eddbID: 1289,
        grp: "rf",
        id: "23",
        power: .25,
        rating: "E"
      }, {
        bins: 5,
        class: 4,
        cost: 166700,
        edID: 128666691,
        eddbID: 1293,
        grp: "rf",
        id: "22",
        power: .33,
        rating: "D"
      }, {
        bins: 7,
        class: 4,
        cost: 500090,
        edID: 128666695,
        eddbID: 1297,
        grp: "rf",
        id: "21",
        power: .41,
        rating: "C"
      }, {
        bins: 9,
        class: 4,
        cost: 1500280,
        edID: 128666699,
        eddbID: 1301,
        grp: "rf",
        id: "20",
        power: .49,
        rating: "B"
      }, {
        bins: 10,
        class: 4,
        cost: 4500850,
        edID: 128666703,
        eddbID: 1305,
        grp: "rf",
        id: "1v",
        power: .57,
        rating: "A"
      } ],
      sc: [ {
        class: 1,
        cost: 1545e3,
        edID: 128663561,
        eddbID: 1244,
        grp: "sc",
        id: "2f",
        integrity: 40,
        mass: 2,
        name: "Advanced Discovery Scanner",
        power: 0,
        rangeLS: null,
        rating: "C"
      }, {
        class: 1,
        cost: 505e3,
        edID: 128663560,
        eddbID: 1243,
        grp: "sc",
        id: "2g",
        integrity: 40,
        mass: 2,
        name: "Intermediate Discovery Scanner",
        power: 0,
        rangeLS: 1e3,
        rating: "D"
      }, {
        class: 1,
        cost: 1e3,
        edID: 128662535,
        eddbID: 1242,
        grp: "sc",
        id: "2h",
        integrity: 40,
        mass: 2,
        name: "Basic Discovery Scanner",
        power: 0,
        rangeLS: 500,
        rating: "E"
      } ],
      scb: [ {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 517,
        duration: 1,
        edID: 128064298,
        eddbID: 1151,
        grp: "scb",
        id: "52",
        integrity: 32,
        mass: 1.3,
        power: .41,
        rating: "E",
        shieldreinforcement: 12,
        rechargerating: "E",
        spinup: 5,
        thermload: 170
      }, {
        ammo: 0,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 1293,
        duration: 1,
        edID: 128064299,
        eddbID: 1152,
        grp: "scb",
        id: "51",
        integrity: 24,
        mass: .5,
        power: .55,
        rating: "D",
        shieldreinforcement: 12.5,
        rechargerating: "D",
        spinup: 5,
        thermload: 170
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 3231,
        duration: 1,
        edID: 128064300,
        eddbID: 1153,
        grp: "scb",
        id: "50",
        integrity: 40,
        mass: 1.3,
        power: .69,
        rating: "C",
        shieldreinforcement: 20,
        rechargerating: "C",
        spinup: 5,
        thermload: 170
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 8078,
        duration: 1,
        edID: 128064301,
        eddbID: 1154,
        grp: "scb",
        id: "4v",
        integrity: 56,
        mass: 2,
        power: .83,
        rating: "B",
        shieldreinforcement: 24,
        rechargerating: "B",
        spinup: 5,
        thermload: 170
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 20195,
        duration: 1,
        edID: 128064302,
        eddbID: 1155,
        grp: "scb",
        id: "4u",
        integrity: 48,
        mass: 1.3,
        power: .97,
        rating: "A",
        shieldreinforcement: 28,
        rechargerating: "A",
        spinup: 5,
        thermload: 170
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 1448,
        duration: 2,
        edID: 128064303,
        eddbID: 1156,
        grp: "scb",
        id: "57",
        integrity: 41,
        mass: 2.5,
        power: .5,
        rating: "E",
        shieldreinforcement: 14,
        rechargerating: "E",
        spinup: 5,
        thermload: 240
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 3619,
        duration: 2,
        edID: 128064304,
        eddbID: 1157,
        grp: "scb",
        id: "56",
        integrity: 31,
        mass: 1,
        power: .67,
        rating: "D",
        shieldreinforcement: 18,
        rechargerating: "D",
        spinup: 5,
        thermload: 240
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 9048,
        duration: 2,
        edID: 128064305,
        eddbID: 1158,
        grp: "scb",
        id: "55",
        integrity: 51,
        mass: 2.5,
        power: .84,
        rating: "C",
        shieldreinforcement: 23,
        rechargerating: "C",
        spinup: 5,
        thermload: 240
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 22619,
        duration: 2,
        edID: 128064306,
        eddbID: 1159,
        grp: "scb",
        id: "54",
        integrity: 71,
        mass: 4,
        power: 1.01,
        rating: "B",
        shieldreinforcement: 28,
        rechargerating: "B",
        spinup: 5,
        thermload: 240
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 56547,
        duration: 2,
        edID: 128064307,
        eddbID: 1160,
        grp: "scb",
        id: "53",
        integrity: 61,
        mass: 2.5,
        power: 1.18,
        rating: "A",
        shieldreinforcement: 32,
        rechargerating: "A",
        spinup: 5,
        thermload: 240
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 4053,
        duration: 2,
        edID: 128064308,
        eddbID: 1161,
        grp: "scb",
        id: "5c",
        integrity: 51,
        mass: 5,
        power: .61,
        rating: "E",
        shieldreinforcement: 17,
        rechargerating: "E",
        spinup: 5,
        thermload: 340
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 10133,
        duration: 2,
        edID: 128064309,
        eddbID: 1162,
        grp: "scb",
        id: "5b",
        integrity: 38,
        mass: 2,
        power: .82,
        rating: "D",
        shieldreinforcement: 23,
        rechargerating: "D",
        spinup: 5,
        thermload: 340
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 25333,
        duration: 2,
        edID: 128064310,
        eddbID: 1163,
        grp: "scb",
        id: "5a",
        integrity: 64,
        mass: 5,
        power: 1.02,
        rating: "C",
        shieldreinforcement: 29,
        rechargerating: "C",
        spinup: 5,
        thermload: 340
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 61909,
        duration: 2,
        edID: 128064311,
        eddbID: 1164,
        grp: "scb",
        id: "59",
        integrity: 90,
        mass: 8,
        power: 1.22,
        rating: "B",
        shieldreinforcement: 35,
        rechargerating: "B",
        spinup: 5,
        thermload: 340
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 158331,
        duration: 2,
        edID: 128064312,
        eddbID: 1165,
        grp: "scb",
        id: "58",
        integrity: 77,
        mass: 5,
        power: 1.43,
        rating: "A",
        shieldreinforcement: 41,
        rechargerating: "A",
        spinup: 5,
        thermload: 340
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 11349,
        duration: 3,
        edID: 128064313,
        eddbID: 1166,
        grp: "scb",
        id: "5h",
        integrity: 64,
        mass: 10,
        power: .74,
        rating: "E",
        shieldreinforcement: 20,
        rechargerating: "E",
        spinup: 5,
        thermload: 410
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 28373,
        duration: 3,
        edID: 128064314,
        eddbID: 1167,
        grp: "scb",
        id: "5g",
        integrity: 48,
        mass: 4,
        power: .98,
        rating: "D",
        shieldreinforcement: 26,
        rechargerating: "D",
        spinup: 5,
        thermload: 410
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 70932,
        duration: 3,
        edID: 128064315,
        eddbID: 1168,
        grp: "scb",
        id: "5f",
        integrity: 80,
        mass: 10,
        power: 1.23,
        rating: "C",
        shieldreinforcement: 33,
        rechargerating: "C",
        spinup: 5,
        thermload: 410
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 177331,
        duration: 3,
        edID: 128064316,
        eddbID: 1169,
        grp: "scb",
        id: "5e",
        integrity: 112,
        mass: 16,
        power: 1.48,
        rating: "B",
        shieldreinforcement: 39,
        rechargerating: "B",
        spinup: 5,
        thermload: 410
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 443328,
        duration: 3,
        edID: 128064317,
        eddbID: 1170,
        grp: "scb",
        id: "5d",
        integrity: 96,
        mass: 10,
        power: 1.72,
        rating: "A",
        shieldreinforcement: 46,
        rechargerating: "A",
        spinup: 5,
        thermload: 410
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 31778,
        duration: 5,
        edID: 128064318,
        eddbID: 1171,
        grp: "scb",
        id: "5m",
        integrity: 77,
        mass: 20,
        power: .9,
        rating: "E",
        shieldreinforcement: 21,
        rechargerating: "E",
        spinup: 5,
        thermload: 540
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 79444,
        duration: 5,
        edID: 128064319,
        eddbID: 1172,
        grp: "scb",
        id: "5l",
        integrity: 58,
        mass: 8,
        power: 1.2,
        rating: "D",
        shieldreinforcement: 28,
        rechargerating: "D",
        spinup: 5,
        thermload: 540
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 194143,
        duration: 5,
        edID: 128064320,
        eddbID: 1173,
        grp: "scb",
        id: "5k",
        integrity: 96,
        mass: 20,
        power: 1.5,
        rating: "C",
        shieldreinforcement: 35,
        rechargerating: "C",
        spinup: 5,
        thermload: 540
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 496527,
        duration: 5,
        edID: 128064321,
        eddbID: 1174,
        grp: "scb",
        id: "5j",
        integrity: 134,
        mass: 32,
        power: 1.8,
        rating: "B",
        shieldreinforcement: 41,
        rechargerating: "B",
        spinup: 5,
        thermload: 540
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 1210285,
        duration: 5,
        edID: 128064322,
        eddbID: 1175,
        grp: "scb",
        id: "5i",
        integrity: 115,
        mass: 20,
        power: 2.1,
        rating: "A",
        shieldreinforcement: 48,
        rechargerating: "A",
        spinup: 5,
        thermload: 540
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 88987,
        duration: 8,
        edID: 128064323,
        eddbID: 1176,
        grp: "scb",
        id: "5r",
        integrity: 90,
        mass: 40,
        power: 1.06,
        rating: "E",
        shieldreinforcement: 20,
        rechargerating: "E",
        spinup: 5,
        thermload: 640
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 222444,
        duration: 8,
        edID: 128064324,
        eddbID: 1177,
        grp: "scb",
        id: "5q",
        integrity: 68,
        mass: 16,
        power: 1.42,
        rating: "D",
        shieldreinforcement: 26,
        rechargerating: "D",
        spinup: 5,
        thermload: 640
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 556110,
        duration: 8,
        edID: 128064325,
        eddbID: 1178,
        grp: "scb",
        id: "5p",
        integrity: 113,
        mass: 40,
        power: 1.77,
        rating: "C",
        shieldreinforcement: 33,
        rechargerating: "C",
        spinup: 5,
        thermload: 640
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 1390275,
        duration: 8,
        edID: 128064326,
        eddbID: 1179,
        grp: "scb",
        id: "5o",
        integrity: 158,
        mass: 64,
        power: 2.12,
        rating: "B",
        shieldreinforcement: 39,
        rechargerating: "B",
        spinup: 5,
        thermload: 640
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 3475688,
        duration: 8,
        edID: 128064327,
        eddbID: 1180,
        grp: "scb",
        id: "5n",
        integrity: 136,
        mass: 40,
        power: 2.48,
        rating: "A",
        shieldreinforcement: 46,
        rechargerating: "A",
        spinup: 5,
        thermload: 640
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 249137,
        duration: 11,
        edID: 128064328,
        eddbID: 1181,
        grp: "scb",
        id: "60",
        integrity: 105,
        mass: 80,
        power: 1.24,
        rating: "E",
        shieldreinforcement: 24,
        rechargerating: "E",
        spinup: 5,
        thermload: 720
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 622843,
        duration: 11,
        edID: 128064329,
        eddbID: 1182,
        grp: "scb",
        id: "5v",
        integrity: 79,
        mass: 32,
        power: 1.66,
        rating: "D",
        shieldreinforcement: 32,
        rechargerating: "D",
        spinup: 5,
        thermload: 720
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 1557108,
        duration: 11,
        edID: 128064330,
        eddbID: 1183,
        grp: "scb",
        id: "5u",
        integrity: 131,
        mass: 80,
        power: 2.07,
        rating: "C",
        shieldreinforcement: 41,
        rechargerating: "C",
        spinup: 5,
        thermload: 720
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 3892770,
        duration: 11,
        edID: 128064331,
        eddbID: 1184,
        grp: "scb",
        id: "5t",
        integrity: 183,
        mass: 128,
        power: 2.48,
        rating: "B",
        shieldreinforcement: 49,
        rechargerating: "B",
        spinup: 5,
        thermload: 720
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 9731925,
        duration: 11,
        edID: 128064332,
        eddbID: 1185,
        grp: "scb",
        id: "5s",
        integrity: 157,
        mass: 80,
        power: 2.9,
        rating: "A",
        shieldreinforcement: 57,
        rechargerating: "A",
        spinup: 5,
        thermload: 720
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 697584,
        duration: 17,
        edID: 128064333,
        eddbID: 1186,
        grp: "scb",
        id: "65",
        integrity: 120,
        mass: 160,
        power: 1.44,
        rating: "E",
        shieldreinforcement: 28,
        rechargerating: "C",
        spinup: 5,
        thermload: 800
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 1743961,
        duration: 17,
        edID: 128064334,
        eddbID: 1187,
        grp: "scb",
        id: "64",
        integrity: 90,
        mass: 64,
        power: 1.92,
        rating: "D",
        shieldreinforcement: 37,
        rechargerating: "D",
        spinup: 5,
        thermload: 800
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 4359903,
        duration: 17,
        edID: 128064335,
        eddbID: 1188,
        grp: "scb",
        id: "63",
        integrity: 150,
        mass: 160,
        power: 2.4,
        rating: "C",
        shieldreinforcement: 47,
        rechargerating: "C",
        spinup: 5,
        thermload: 800
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 10899756,
        duration: 17,
        edID: 128064336,
        eddbID: 1189,
        grp: "scb",
        id: "62",
        integrity: 210,
        mass: 256,
        power: 2.88,
        rating: "B",
        shieldreinforcement: 56,
        rechargerating: "B",
        spinup: 5,
        thermload: 800
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 27249391,
        duration: 17,
        edID: 128064337,
        eddbID: 1190,
        grp: "scb",
        id: "61",
        integrity: 180,
        mass: 160,
        power: 3.36,
        rating: "A",
        shieldreinforcement: 65,
        rechargerating: "A",
        spinup: 5,
        thermload: 800
      } ],
      sg: [ {
        brokenregen: 1.6,
        class: 1,
        cost: 88075,
        distdraw: .6,
        edID: 128064262,
        eddbID: 1551,
        explres: .5,
        grp: "sg",
        id: "1x",
        integrity: 48,
        kinres: .4,
        mass: 1.3,
        maxmass: 63,
        maxmul: 1.7,
        minmass: 13,
        minmul: .7,
        optmass: 25,
        optmul: 1.2,
        power: 1.68,
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 1980,
        distdraw: .6,
        edID: 128064263,
        eddbID: 1116,
        explres: .5,
        grp: "sg",
        id: "3v",
        integrity: 41,
        kinres: .4,
        mass: 2.5,
        maxmass: 138,
        maxmul: 1.3,
        minmass: 28,
        minmul: .3,
        optmass: 55,
        optmul: .8,
        power: .9,
        rating: "E",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 5930,
        distdraw: .6,
        edID: 128064264,
        eddbID: 1117,
        explres: .5,
        grp: "sg",
        id: "3u",
        integrity: 31,
        kinres: .4,
        mass: 1,
        maxmass: 138,
        maxmul: 1.4,
        minmass: 28,
        minmul: .4,
        optmass: 55,
        optmul: .9,
        power: 1.2,
        rating: "D",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 17800,
        distdraw: .6,
        edID: 128064265,
        eddbID: 1118,
        explres: .5,
        grp: "sg",
        id: "3t",
        integrity: 51,
        kinres: .4,
        mass: 2.5,
        maxmass: 138,
        maxmul: 1.5,
        minmass: 28,
        minmul: .5,
        optmass: 55,
        optmul: 1,
        power: 1.5,
        rating: "C",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 53410,
        distdraw: .6,
        edID: 128064266,
        eddbID: 1119,
        explres: .5,
        grp: "sg",
        id: "3s",
        integrity: 71,
        kinres: .4,
        mass: 4,
        maxmass: 138,
        maxmul: 1.6,
        minmass: 28,
        minmul: .6,
        optmass: 55,
        optmul: 1.1,
        power: 1.8,
        rating: "B",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 160220,
        distdraw: .6,
        edID: 128064267,
        eddbID: 1120,
        explres: .5,
        grp: "sg",
        id: "3r",
        integrity: 61,
        kinres: .4,
        mass: 2.5,
        maxmass: 138,
        maxmul: 1.7,
        minmass: 28,
        minmul: .7,
        optmass: 55,
        optmul: 1.2,
        power: 2.1,
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 6270,
        distdraw: .6,
        edID: 128064268,
        eddbID: 1121,
        explres: .5,
        grp: "sg",
        id: "44",
        integrity: 51,
        kinres: .4,
        mass: 5,
        maxmass: 413,
        maxmul: 1.3,
        minmass: 83,
        minmul: .3,
        optmass: 165,
        optmul: .8,
        power: 1.08,
        rating: "E",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 18810,
        distdraw: .6,
        edID: 128064269,
        eddbID: 1122,
        explres: .5,
        grp: "sg",
        id: "43",
        integrity: 38,
        kinres: .4,
        mass: 2,
        maxmass: 413,
        maxmul: 1.4,
        minmass: 83,
        minmul: .4,
        optmass: 165,
        optmul: .9,
        power: 1.44,
        rating: "D",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 56440,
        distdraw: .6,
        edID: 128064270,
        eddbID: 1123,
        explres: .5,
        grp: "sg",
        id: "42",
        integrity: 64,
        kinres: .4,
        mass: 5,
        maxmass: 413,
        maxmul: 1.5,
        minmass: 83,
        minmul: .5,
        optmass: 165,
        optmul: 1,
        power: 1.8,
        rating: "C",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 169300,
        distdraw: .6,
        edID: 128064271,
        eddbID: 1124,
        explres: .5,
        grp: "sg",
        id: "41",
        integrity: 90,
        kinres: .4,
        mass: 8,
        maxmass: 413,
        maxmul: 1.6,
        minmass: 83,
        minmul: .6,
        optmass: 165,
        optmul: 1.1,
        power: 2.16,
        rating: "B",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 507910,
        distdraw: .6,
        edID: 128064272,
        eddbID: 1125,
        explres: .5,
        grp: "sg",
        id: "40",
        integrity: 77,
        kinres: .4,
        mass: 5,
        maxmass: 413,
        maxmul: 1.7,
        minmass: 83,
        minmul: .7,
        optmass: 165,
        optmul: 1.2,
        power: 2.52,
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 19880,
        distdraw: .6,
        edID: 128064273,
        eddbID: 1126,
        explres: .5,
        grp: "sg",
        id: "49",
        integrity: 64,
        kinres: .4,
        mass: 10,
        maxmass: 713,
        maxmul: 1.3,
        minmass: 143,
        minmul: .3,
        optmass: 285,
        optmul: .8,
        power: 1.32,
        rating: "E",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 59630,
        distdraw: .6,
        edID: 128064274,
        eddbID: 1127,
        explres: .5,
        grp: "sg",
        id: "48",
        integrity: 48,
        kinres: .4,
        mass: 4,
        maxmass: 713,
        maxmul: 1.4,
        minmass: 143,
        minmul: .4,
        optmass: 285,
        optmul: .9,
        power: 1.76,
        rating: "D",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 178900,
        distdraw: .6,
        edID: 128064275,
        eddbID: 1128,
        explres: .5,
        grp: "sg",
        id: "47",
        integrity: 80,
        kinres: .4,
        mass: 10,
        maxmass: 713,
        maxmul: 1.5,
        minmass: 143,
        minmul: .5,
        optmass: 285,
        optmul: 1,
        power: 2.2,
        rating: "C",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 536690,
        distdraw: .6,
        edID: 128064276,
        eddbID: 1129,
        explres: .5,
        grp: "sg",
        id: "46",
        integrity: 112,
        kinres: .4,
        mass: 16,
        maxmass: 713,
        maxmul: 1.6,
        minmass: 143,
        minmul: .6,
        optmass: 285,
        optmul: 1.1,
        power: 2.64,
        rating: "B",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 1610080,
        distdraw: .6,
        edID: 128064277,
        eddbID: 1130,
        explres: .5,
        grp: "sg",
        id: "45",
        integrity: 96,
        kinres: .4,
        mass: 10,
        maxmass: 713,
        maxmul: 1.7,
        minmass: 143,
        minmul: .7,
        optmass: 285,
        optmul: 1.2,
        power: 3.08,
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 63010,
        distdraw: .6,
        edID: 128064278,
        eddbID: 1131,
        explres: .5,
        grp: "sg",
        id: "4e",
        integrity: 77,
        kinres: .4,
        mass: 20,
        maxmass: 1013,
        maxmul: 1.3,
        minmass: 203,
        minmul: .3,
        optmass: 405,
        optmul: .8,
        power: 1.56,
        rating: "E",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 189040,
        distdraw: .6,
        edID: 128064279,
        eddbID: 1132,
        explres: .5,
        grp: "sg",
        id: "4d",
        integrity: 58,
        kinres: .4,
        mass: 8,
        maxmass: 1013,
        maxmul: 1.4,
        minmass: 203,
        minmul: .4,
        optmass: 405,
        optmul: .9,
        power: 2.08,
        rating: "D",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 567110,
        distdraw: .6,
        edID: 128064280,
        eddbID: 1133,
        explres: .5,
        grp: "sg",
        id: "4c",
        integrity: 96,
        kinres: .4,
        mass: 20,
        maxmass: 1013,
        maxmul: 1.5,
        minmass: 203,
        minmul: .5,
        optmass: 405,
        optmul: 1,
        power: 2.6,
        rating: "C",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 1701320,
        distdraw: .6,
        edID: 128064281,
        eddbID: 1134,
        explres: .5,
        grp: "sg",
        id: "4b",
        integrity: 134,
        kinres: .4,
        mass: 32,
        maxmass: 1013,
        maxmul: 1.6,
        minmass: 203,
        minmul: .6,
        optmass: 405,
        optmul: 1.1,
        power: 3.12,
        rating: "B",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 5103950,
        distdraw: .6,
        edID: 128064282,
        eddbID: 1135,
        explres: .5,
        grp: "sg",
        id: "4a",
        integrity: 115,
        kinres: .4,
        mass: 20,
        maxmass: 1013,
        maxmul: 1.7,
        minmass: 203,
        minmul: .7,
        optmass: 405,
        optmul: 1.2,
        power: 3.64,
        rating: "A",
        regen: 1,
        thermres: -.2
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 199750,
        distdraw: .6,
        edID: 128064283,
        eddbID: 1136,
        explres: .5,
        grp: "sg",
        id: "4j",
        integrity: 90,
        kinres: .4,
        mass: 40,
        maxmass: 1350,
        maxmul: 1.3,
        minmass: 270,
        minmul: .3,
        optmass: 540,
        optmul: .8,
        power: 1.86,
        rating: "E",
        regen: 1.3,
        thermres: -.2
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 599240,
        distdraw: .6,
        edID: 128064284,
        eddbID: 1137,
        explres: .5,
        grp: "sg",
        id: "4i",
        integrity: 68,
        kinres: .4,
        mass: 16,
        maxmass: 1350,
        maxmul: 1.4,
        minmass: 270,
        minmul: .4,
        optmass: 540,
        optmul: .9,
        power: 2.48,
        rating: "D",
        regen: 1.3,
        thermres: -.2
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 1797730,
        distdraw: .6,
        edID: 128064285,
        eddbID: 1138,
        explres: .5,
        grp: "sg",
        id: "4h",
        integrity: 113,
        kinres: .4,
        mass: 40,
        maxmass: 1350,
        maxmul: 1.5,
        minmass: 270,
        minmul: .5,
        optmass: 540,
        optmul: 1,
        power: 3.1,
        rating: "C",
        regen: 1.3,
        thermres: -.2
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 5393180,
        distdraw: .6,
        edID: 128064286,
        eddbID: 1139,
        explres: .5,
        grp: "sg",
        id: "4g",
        integrity: 158,
        kinres: .4,
        mass: 64,
        maxmass: 1350,
        maxmul: 1.6,
        minmass: 270,
        minmul: .6,
        optmass: 540,
        optmul: 1.1,
        power: 3.72,
        rating: "B",
        regen: 1.3,
        thermres: -.2
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 16179530,
        distdraw: .6,
        edID: 128064287,
        eddbID: 1140,
        explres: .5,
        grp: "sg",
        id: "4f",
        integrity: 136,
        kinres: .4,
        mass: 40,
        maxmass: 1350,
        maxmul: 1.7,
        minmass: 270,
        minmul: .7,
        optmass: 540,
        optmul: 1.2,
        power: 4.34,
        rating: "A",
        regen: 1.3,
        thermres: -.2
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 633200,
        distdraw: .6,
        edID: 128064288,
        eddbID: 1141,
        explres: .5,
        grp: "sg",
        id: "4o",
        integrity: 105,
        kinres: .4,
        mass: 80,
        maxmass: 2650,
        maxmul: 1.3,
        minmass: 530,
        minmul: .3,
        optmass: 1060,
        optmul: .8,
        power: 2.1,
        rating: "E",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 1899600,
        distdraw: .6,
        edID: 128064289,
        eddbID: 1142,
        explres: .5,
        grp: "sg",
        id: "4n",
        integrity: 79,
        kinres: .4,
        mass: 32,
        maxmass: 2650,
        maxmul: 1.4,
        minmass: 530,
        minmul: .4,
        optmass: 1060,
        optmul: .9,
        power: 2.8,
        rating: "D",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 5698790,
        distdraw: .6,
        edID: 128064290,
        eddbID: 1143,
        explres: .5,
        grp: "sg",
        id: "4m",
        integrity: 131,
        kinres: .4,
        mass: 80,
        maxmass: 2650,
        maxmul: 1.5,
        minmass: 530,
        minmul: .5,
        optmass: 1060,
        optmul: 1,
        power: 3.5,
        rating: "C",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 17096370,
        distdraw: .6,
        edID: 128064291,
        eddbID: 1144,
        explres: .5,
        grp: "sg",
        id: "4l",
        integrity: 183,
        kinres: .4,
        mass: 128,
        maxmass: 2650,
        maxmul: 1.6,
        minmass: 530,
        minmul: .6,
        optmass: 1060,
        optmul: 1.1,
        power: 4.2,
        rating: "B",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 51289110,
        distdraw: .6,
        edID: 128064292,
        eddbID: 1145,
        explres: .5,
        grp: "sg",
        id: "4k",
        integrity: 157,
        kinres: .4,
        mass: 80,
        maxmass: 2650,
        maxmul: 1.7,
        minmass: 530,
        minmul: .7,
        optmass: 1060,
        optmul: 1.2,
        power: 4.9,
        rating: "A",
        regen: 1.8,
        thermres: -.2
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 2007240,
        distdraw: .6,
        edID: 128064293,
        eddbID: 1146,
        explres: .5,
        grp: "sg",
        id: "4t",
        integrity: 120,
        kinres: .4,
        mass: 160,
        maxmass: 4500,
        maxmul: 1.3,
        minmass: 900,
        minmul: .3,
        optmass: 1800,
        optmul: .8,
        power: 2.4,
        rating: "E",
        regen: 2.4,
        thermres: -.2
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 6021720,
        distdraw: .6,
        edID: 128064294,
        eddbID: 1147,
        explres: .5,
        grp: "sg",
        id: "4s",
        integrity: 90,
        kinres: .4,
        mass: 64,
        maxmass: 4500,
        maxmul: 1.4,
        minmass: 900,
        minmul: .4,
        optmass: 1800,
        optmul: .9,
        power: 3.2,
        rating: "D",
        regen: 2.4,
        thermres: -.2
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 18065170,
        distdraw: .6,
        edID: 128064295,
        eddbID: 1148,
        explres: .5,
        grp: "sg",
        id: "4r",
        integrity: 150,
        kinres: .4,
        mass: 160,
        maxmass: 4500,
        maxmul: 1.5,
        minmass: 900,
        minmul: .5,
        optmass: 1800,
        optmul: 1,
        power: 4,
        rating: "C",
        regen: 2.4,
        thermres: -.2
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 54195500,
        distdraw: .6,
        edID: 128064296,
        eddbID: 1149,
        explres: .5,
        grp: "sg",
        id: "4q",
        integrity: 210,
        kinres: .4,
        mass: 256,
        maxmass: 4500,
        maxmul: 1.6,
        minmass: 900,
        minmul: .6,
        optmass: 1800,
        optmul: 1.1,
        power: 4.8,
        rating: "B",
        regen: 2.4,
        thermres: -.2
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 162586490,
        distdraw: .6,
        edID: 128064297,
        eddbID: 1150,
        explres: .5,
        grp: "sg",
        id: "4p",
        integrity: 180,
        kinres: .4,
        mass: 160,
        maxmass: 4500,
        maxmul: 1.7,
        minmass: 900,
        minmul: .7,
        optmass: 1800,
        optmul: 1.2,
        power: 5.6,
        rating: "A",
        regen: 2.4,
        thermres: -.2
      } ],
      ss: [ {
        class: 1,
        cost: 25e4,
        edID: 128666634,
        eddbID: 1245,
        grp: "ss",
        id: "2i",
        mass: 1.3,
        name: "Detailed Surface Scanner",
        power: 0,
        rating: "C"
      } ],
      rpl: [ {
        class: 1,
        cost: 600,
        edID: 128777327,
        eddbID: 1594,
        grp: "rpl",
        id: "9z",
        mass: 1.3,
        maximum: 1,
        power: .18,
        range: .6,
        rating: "E"
      }, {
        class: 1,
        cost: 1200,
        edID: 128777328,
        eddbID: 1595,
        grp: "rpl",
        id: "9q",
        mass: .5,
        maximum: 1,
        power: .14,
        range: .8,
        rating: "D"
      }, {
        class: 1,
        cost: 2400,
        edID: 128777329,
        eddbID: 1596,
        grp: "rpl",
        id: "9a",
        mass: 1.3,
        maximum: 1,
        power: .23,
        range: 1,
        rating: "C"
      }, {
        class: 1,
        cost: 4800,
        edID: 128777330,
        eddbID: 1597,
        grp: "rpl",
        id: "9w",
        mass: 2,
        maximum: 1,
        power: .32,
        range: 1.2,
        rating: "B"
      }, {
        class: 1,
        cost: 9600,
        edID: 128777331,
        eddbID: 1598,
        grp: "rpl",
        id: "9s",
        mass: 1.3,
        maximum: 1,
        power: .28,
        range: 1.4,
        rating: "A"
      }, {
        class: 3,
        cost: 5400,
        edID: 128777332,
        eddbID: 1599,
        grp: "rpl",
        id: "9x",
        mass: 5,
        maximum: 2,
        power: .27,
        range: .66,
        rating: "E"
      }, {
        class: 3,
        cost: 10800,
        edID: 128777333,
        eddbID: 1600,
        grp: "rpl",
        id: "9e",
        mass: 2,
        maximum: 2,
        power: .2,
        range: .88,
        rating: "D"
      }, {
        class: 3,
        cost: 21600,
        edID: 128777334,
        eddbID: 1601,
        grp: "rpl",
        id: "9d",
        mass: 5,
        maximum: 2,
        power: .34,
        range: 1.1,
        rating: "C"
      }, {
        class: 3,
        cost: 43200,
        edID: 128777335,
        eddbID: 1602,
        grp: "rpl",
        id: "9c",
        mass: 8,
        maximum: 2,
        power: .48,
        range: 1.32,
        rating: "B"
      }, {
        class: 3,
        cost: 86400,
        edID: 128777336,
        eddbID: 1603,
        grp: "rpl",
        id: "9r",
        mass: 5,
        maximum: 2,
        power: .41,
        range: 1.54,
        rating: "A"
      }, {
        class: 5,
        cost: 48600,
        edID: 128777337,
        eddbID: 1604,
        grp: "rpl",
        id: "9f",
        mass: 20,
        maximum: 3,
        power: .4,
        range: .78,
        rating: "E"
      }, {
        class: 5,
        cost: 97200,
        edID: 128777338,
        eddbID: 1605,
        grp: "rpl",
        id: "9v",
        mass: 8,
        maximum: 3,
        power: .3,
        range: 1.04,
        rating: "D"
      }, {
        class: 5,
        cost: 194400,
        edID: 128777339,
        eddbID: 1606,
        grp: "rpl",
        id: "9t",
        mass: 20,
        maximum: 3,
        power: .5,
        range: 1.3,
        rating: "C"
      }, {
        class: 5,
        cost: 388800,
        edID: 128777340,
        eddbID: 1607,
        grp: "rpl",
        id: "9g",
        mass: 32,
        maximum: 3,
        power: .97,
        range: 1.56,
        rating: "B"
      }, {
        class: 5,
        cost: 777600,
        edID: 128777341,
        eddbID: 1608,
        grp: "rpl",
        id: "9b",
        mass: 20,
        maximum: 3,
        power: .6,
        range: 1.82,
        rating: "A"
      }, {
        class: 7,
        cost: 437400,
        edID: 128777342,
        eddbID: 1609,
        grp: "rpl",
        id: "9y",
        mass: 80,
        maximum: 4,
        power: .55,
        range: 1.02,
        rating: "E"
      }, {
        class: 7,
        cost: 874800,
        edID: 128777343,
        eddbID: 1610,
        grp: "rpl",
        id: "9h",
        mass: 32,
        maximum: 4,
        power: .41,
        range: 1.36,
        rating: "D"
      }, {
        class: 7,
        cost: 1749600,
        edID: 128777344,
        eddbID: 1611,
        grp: "rpl",
        id: "9n",
        mass: 80,
        maximum: 4,
        power: .69,
        range: 1.7,
        rating: "C"
      }, {
        class: 7,
        cost: 3499200,
        edID: 128777345,
        eddbID: 1612,
        grp: "rpl",
        id: "9u",
        mass: 128,
        maximum: 4,
        power: .97,
        range: 2.04,
        rating: "B"
      }, {
        class: 7,
        cost: 6998400,
        edID: 128777346,
        eddbID: 1613,
        grp: "rpl",
        id: "9j",
        mass: 80,
        maximum: 4,
        power: .83,
        range: 2.38,
        rating: "A"
      } ]
    }
  },
  Modifications: {
    blueprints: {
      AFM_Shielded: {
        fdname: "AFM_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          }
        },
        id: 3,
        modulename: [ "Auto field mainentance unit", "AFMU" ],
        name: "Shielded"
      },
      Armour_Advanced: {
        fdname: "Armour_Advanced",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              explres: [ 0, .02 ],
              hullboost: [ -.01, 0 ],
              kinres: [ 0, .02 ],
              mass: [ -.04, -.15 ],
              thermres: [ 0, .02 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Iron: 1
            },
            features: {
              explres: [ .01, .04 ],
              hullboost: [ -.02, -.01 ],
              kinres: [ .01, .04 ],
              mass: [ -.08, -.25 ],
              thermres: [ .01, .04 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "High Density Composites": 1,
              Iron: 1
            },
            features: {
              explres: [ .02, .06 ],
              hullboost: [ -.03, -.02 ],
              kinres: [ .02, .06 ],
              mass: [ -.12, -.35 ],
              thermres: [ .02, .06 ]
            }
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              Germanium: 1,
              "Proprietary Composites": 1
            },
            features: {
              explres: [ .03, .08 ],
              hullboost: [ -.04, -.03 ],
              kinres: [ .03, .08 ],
              mass: [ -.16, -.45 ],
              thermres: [ .03, .08 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Military Grade Alloys": 1,
              Tin: 1
            },
            features: {
              explres: [ .04, .1 ],
              hullboost: [ -.05, -.04 ],
              kinres: [ .04, .1 ],
              mass: [ -.2, -.55 ],
              thermres: [ .04, .1 ]
            }
          }
        },
        id: 6,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Lightweight"
      },
      Armour_Explosive: {
        fdname: "Armour_Explosive",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              explres: [ .05, .08 ],
              kinres: [ -.04, -.02 ],
              thermres: [ -.04, -.02 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              Zinc: 1
            },
            features: {
              explres: [ .1, .16 ],
              kinres: [ -.08, -.04 ],
              thermres: [ -.08, -.04 ]
            }
          },
          "3": {
            components: {
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ .15, .24 ],
              kinres: [ -.12, -.06 ],
              thermres: [ -.12, -.06 ]
            }
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              Mercury: 1,
              Tungsten: 1
            },
            features: {
              explres: [ .2, .32 ],
              kinres: [ -.16, -.08 ],
              thermres: [ -.16, -.08 ]
            }
          },
          "5": {
            components: {
              Molybdenum: 1,
              "Phase Alloys": 1,
              Ruthenium: 1
            },
            features: {
              explres: [ .25, .4 ],
              kinres: [ -.2, -.1 ],
              thermres: [ -.2, -.1 ]
            }
          }
        },
        id: 5,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Blast resistant"
      },
      Armour_HeavyDuty: {
        fdname: "Armour_HeavyDuty",
        grades: {
          "1": {
            components: {
              Carbon: 1
            },
            features: {
              explres: [ 0, .01 ],
              hullboost: [ .04, .1 ],
              kinres: [ 0, .01 ],
              mass: [ .08, 0 ],
              thermres: [ 0, .01 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              explres: [ .01, .02 ],
              hullboost: [ .08, .15 ],
              kinres: [ .01, .02 ],
              mass: [ .16, .05 ],
              thermres: [ .01, .02 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              explres: [ .02, .03 ],
              hullboost: [ .12, .2 ],
              kinres: [ .02, .03 ],
              mass: [ .24, .1 ],
              thermres: [ .02, .03 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              explres: [ .03, .04 ],
              hullboost: [ .16, .25 ],
              kinres: [ .03, .04 ],
              mass: [ .32, .15 ],
              thermres: [ .03, .04 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              explres: [ .04, .05 ],
              hullboost: [ .2, .3 ],
              kinres: [ .04, .05 ],
              mass: [ .4, .2 ],
              thermres: [ .04, .05 ]
            }
          }
        },
        id: 7,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Heavy duty"
      },
      Armour_Kinetic: {
        fdname: "Armour_Kinetic",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              explres: [ -.04, -.02 ],
              kinres: [ .05, .08 ],
              thermres: [ -.04, -.02 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.08, -.04 ],
              kinres: [ .1, .16 ],
              thermres: [ -.08, -.04 ]
            }
          },
          "3": {
            components: {
              "High Density Composites": 1,
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.12, -.06 ],
              kinres: [ .15, .24 ],
              thermres: [ -.12, -.06 ]
            }
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Proprietary Composites": 1,
              Tungsten: 1
            },
            features: {
              explres: [ -.16, -.08 ],
              kinres: [ .2, .32 ],
              thermres: [ -.16, -.08 ]
            }
          },
          "5": {
            components: {
              "Core Dynamics Composites": 1,
              Molybdenum: 1,
              "Phase Alloys": 1
            },
            features: {
              explres: [ -.2, -.1 ],
              kinres: [ .25, .4 ],
              thermres: [ -.2, -.1 ]
            }
          }
        },
        id: 4,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Kinetic resistant"
      },
      Armour_Thermic: {
        fdname: "Armour_Thermic",
        grades: {
          "1": {
            components: {
              "Heat Conduction Wiring": 1
            },
            features: {
              explres: [ -.04, -.02 ],
              kinres: [ -.04, -.02 ],
              thermres: [ .05, .08 ]
            }
          },
          "2": {
            components: {
              "Heat Dispersion Plate": 1,
              Nickel: 1
            },
            features: {
              explres: [ -.08, -.04 ],
              kinres: [ -.08, -.04 ],
              thermres: [ .1, .16 ]
            }
          },
          "3": {
            components: {
              "Heat Exchangers": 1,
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.12, -.06 ],
              kinres: [ -.12, -.06 ],
              thermres: [ .15, .24 ]
            }
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Heat Vanes": 1,
              Tungsten: 1
            },
            features: {
              explres: [ -.16, -.08 ],
              kinres: [ -.16, -.08 ],
              thermres: [ .2, .32 ]
            }
          },
          "5": {
            components: {
              Molybdenum: 1,
              "Phase Alloys": 1,
              "Proto Heat Radiators": 1
            },
            features: {
              explres: [ -.2, -.12 ],
              kinres: [ -.2, -.12 ],
              thermres: [ .25, .4 ]
            }
          }
        },
        id: 8,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Thermal resistant"
      },
      CargoScanner_LightWeight: {
        fdname: "CargoScanner_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 9,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Lightweight"
      },
      CargoScanner_Reinforced: {
        fdname: "CargoScanner_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 10,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Reinforced"
      },
      CargoScanner_Shielded: {
        fdname: "CargoScanner_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 11,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Shielded"
      },
      ChaffLauncher_ChaffCapacity: {
        fdname: "ChaffLauncher_ChaffCapacity",
        grades: {
          "3": {
            components: {
              "Mechanical Scrap": 1,
              Niobium: 1,
              Vanadium: 1
            },
            features: {
              ammo: [ .2, .5 ],
              mass: [ 2, 1 ],
              reload: [ .3, .1 ]
            }
          }
        },
        id: 12,
        modulename: [ "Chaff launcher" ],
        name: "Ammo capacity"
      },
      ChaffLauncher_LightWeight: {
        fdname: "ChaffLauncher_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 13,
        modulename: [ "Chaff launcher" ],
        name: "Lightweight"
      },
      ChaffLauncher_Reinforced: {
        fdname: "ChaffLauncher_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 14,
        modulename: [ "Chaff launcher" ],
        name: "Reinforced"
      },
      ChaffLauncher_Shielded: {
        fdname: "ChaffLauncher_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 15,
        modulename: [ "Chaff launcher" ],
        name: "Shielded"
      },
      CollectionLimpet_LightWeight: {
        fdname: "CollectionLimpet_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 16,
        modulename: [ "Collector limpet controller" ],
        name: "Lightweight"
      },
      CollectionLimpet_Reinforced: {
        fdname: "CollectionLimpet_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 17,
        modulename: [ "Collector limpet controller" ],
        name: "Reinforced"
      },
      CollectionLimpet_Shielded: {
        fdname: "CollectionLimpet_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 18,
        modulename: [ "Collector limpet controller" ],
        name: "Shielded"
      },
      ECM_LightWeight: {
        fdname: "ECM_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 19,
        modulename: [ "Electronic counter measures", "ECM" ],
        name: "Lightweight"
      },
      ECM_Reinforced: {
        fdname: "ECM_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 20,
        modulename: [ "Electronic counter measures", "ECM" ],
        name: "Reinforced"
      },
      ECM_Shielded: {
        fdname: "ECM_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 21,
        modulename: [ "Electronic counter measures", "ECM" ],
        name: "Shielded"
      },
      Engine_Dirty: {
        fdname: "Engine_Dirty",
        grades: {
          "1": {
            components: {
              "Specialised Legacy Firmware": 1
            },
            features: {
              integrity: [ -.06, 0 ],
              optmass: [ -.04, 0 ],
              optmul: [ .04, .1 ],
              power: [ .04, 0 ],
              thermload: [ .2, 0 ]
            }
          },
          "2": {
            components: {
              "Mechanical Equipment": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              integrity: [ -.12, .01 ],
              optmass: [ -.06, -.01 ],
              optmul: [ .1, .14 ],
              power: [ .08, .02 ],
              thermload: [ .4, .1 ]
            }
          },
          "3": {
            components: {
              Chromium: 1,
              "Mechanical Components": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              integrity: [ -.18, .04 ],
              optmass: [ -.1, -.02 ],
              optmul: [ .14, .2 ],
              power: [ .11, .03 ],
              thermload: [ .6, .2 ]
            }
          },
          "4": {
            components: {
              "Configurable Components": 1,
              "Modified Consumer Firmware": 1,
              Selenium: 1
            },
            features: {
              integrity: [ -.24, .05 ],
              optmass: [ -.12, -.04 ],
              optmul: [ .2, .25 ],
              power: [ .15, .05 ],
              thermload: [ .8, .3 ]
            }
          },
          "5": {
            components: {
              Cadmium: 1,
              "Cracked Industrial Firmware": 1,
              "Pharmaceutical Isolators": 1
            },
            features: {
              integrity: [ -.3, .08 ],
              optmass: [ -.16, -.05 ],
              optmul: [ .25, .3 ],
              power: [ .2, .08 ],
              thermload: [ 1, .4 ]
            }
          }
        },
        id: 22,
        modulename: [ "Thrusters", "Engines" ],
        name: "Dirty"
      },
      Engine_Reinforced: {
        fdname: "Engine_Reinforced",
        grades: {
          "1": {
            components: {
              Carbon: 1
            },
            features: {
              integrity: [ .14, .3 ],
              mass: [ .1, 0 ],
              optmul: [ -.03, 0 ],
              thermload: [ 0, -.1 ]
            }
          },
          "2": {
            components: {
              "Heat Conduction Wiring": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .3, .5 ],
              mass: [ .2, .05 ],
              optmul: [ -.05, -.02 ],
              thermload: [ -.06, -.2 ]
            }
          },
          "3": {
            components: {
              "Heat Conduction Wiring": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .45, .7 ],
              mass: [ .3, .1 ],
              optmul: [ -.06, -.03 ],
              thermload: [ -.1, -.3 ]
            }
          },
          "4": {
            components: {
              "Compound Shielding": 1,
              "Heat Dispersion Plate": 1,
              "High Density Composites": 1
            },
            features: {
              integrity: [ .6, .9 ],
              mass: [ .4, .14 ],
              optmul: [ -.09, -.04 ],
              thermload: [ -.15, -.4 ]
            }
          },
          "5": {
            components: {
              "Heat Exchangers": 1,
              "Imperial Shielding": 1,
              "Proprietary Composites": 1
            },
            features: {
              integrity: [ .75, 1.1 ],
              mass: [ .5, .2 ],
              optmul: [ -.1, -.05 ],
              thermload: [ -.2, -.5 ]
            }
          }
        },
        id: 23,
        modulename: [ "Thrusters", "Engines" ],
        name: "Reinforced"
      },
      Engine_Tuned: {
        fdname: "Engine_Tuned",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              integrity: [ -.05, 0 ],
              optmass: [ -.02, 0 ],
              optmul: [ .01, .05 ],
              power: [ .05, 0 ],
              thermload: [ -.06, -.2 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              integrity: [ -.1, -.04 ],
              optmass: [ -.05, -.01 ],
              optmul: [ .03, .09 ],
              power: [ .1, .03 ],
              thermload: [ -.1, -.3 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Specialised Legacy Firmware": 1,
              "Unexpected Emission Data": 1
            },
            features: {
              integrity: [ -.15, -.08 ],
              optmass: [ -.06, -.02 ],
              optmul: [ .05, .12 ],
              power: [ .14, .08 ],
              thermload: [ -.15, -.4 ]
            }
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              "Decoded Emission Data": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              integrity: [ -.2, -.12 ],
              optmass: [ -.08, -.04 ],
              optmul: [ .08, .14 ],
              power: [ .2, .1 ],
              thermload: [ -.2, -.5 ]
            }
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              "Conductive Ceramics": 1,
              Tin: 1
            },
            features: {
              integrity: [ -.25, -.16 ],
              optmass: [ -.1, -.05 ],
              optmul: [ .1, .18 ],
              power: [ .25, .16 ],
              thermload: [ -.25, -.6 ]
            }
          }
        },
        id: 24,
        modulename: [ "Thrusters", "Engines" ],
        name: "Clean"
      },
      FSD_FastBoot: {
        fdname: "FSD_FastBoot",
        grades: {
          "1": {
            components: {
              "Grid Resistors": 1
            },
            features: {
              boot: [ -.1, -.2 ],
              integrity: [ -.05, 0 ],
              power: [ .04, 0 ],
              thermload: [ .05, 0 ]
            }
          },
          "2": {
            components: {
              Chromium: 1,
              "Grid Resistors": 1
            },
            features: {
              boot: [ -.2, -.35 ],
              integrity: [ -.1, -.03 ],
              power: [ .1, .02 ],
              thermload: [ .1, .05 ]
            }
          },
          "3": {
            components: {
              "Grid Resistors": 1,
              "Heat Dispersion Plate": 1,
              Selenium: 1
            },
            features: {
              boot: [ -.3, -.5 ],
              integrity: [ -.15, -.06 ],
              power: [ .14, .05 ],
              thermload: [ .15, .1 ]
            }
          },
          "4": {
            components: {
              Cadmium: 1,
              "Heat Exchangers": 1,
              "Hybrid Capacitors": 1
            },
            features: {
              boot: [ -.4, -.65 ],
              integrity: [ -.2, -.09 ],
              power: [ .2, .09 ],
              thermload: [ .2, .15 ]
            }
          },
          "5": {
            components: {
              "Electrochemical Arrays": 1,
              "Heat Vanes": 1,
              Tellurium: 1
            },
            features: {
              boot: [ -.5, -.8 ],
              integrity: [ -.25, -.12 ],
              power: [ .25, .1 ],
              thermload: [ .25, .2 ]
            }
          }
        },
        id: 25,
        modulename: [ "Frame shift drive", "FSD" ],
        name: "Faster boot sequence"
      },
      FSD_LongRange: {
        fdname: "FSD_LongRange",
        grades: {
          "1": {
            components: {
              "Atypical Disrupted Wake Echoes": 1
            },
            features: {
              integrity: [ -.05, 0 ],
              mass: [ .05, 0 ],
              optmass: [ .04, .1 ],
              power: [ .04, 0 ]
            }
          },
          "2": {
            components: {
              "Atypical Disrupted Wake Echoes": 1,
              "Chemical Processors": 1
            },
            features: {
              integrity: [ -.1, -.03 ],
              mass: [ .14, .05 ],
              optmass: [ .08, .2 ],
              power: [ .1, .02 ]
            }
          },
          "3": {
            components: {
              "Chemical Processors": 1,
              Phosphorus: 1,
              "Strange Wake Solutions": 1
            },
            features: {
              integrity: [ -.15, -.06 ],
              mass: [ .25, .1 ],
              optmass: [ .12, .3 ],
              power: [ .14, .05 ]
            }
          },
          "4": {
            components: {
              "Chemical Distillery": 1,
              "Eccentric Hyperspace Trajectories": 1,
              Manganese: 1
            },
            features: {
              integrity: [ -.2, -.09 ],
              mass: [ .35, .14 ],
              optmass: [ .16, .4 ],
              power: [ .2, .09 ]
            }
          },
          "5": {
            components: {
              Arsenic: 1,
              "Chemical Manipulators": 1,
              "Datamined Wake Exceptions": 1
            },
            features: {
              integrity: [ -.25, -.12 ],
              mass: [ .45, .2 ],
              optmass: [ .2, .5 ],
              power: [ .25, .1 ]
            }
          }
        },
        id: 26,
        modulename: [ "Frame shift drive", "FSD" ],
        name: "Increased range"
      },
      FSD_Shielded: {
        fdname: "FSD_Shielded",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .25 ],
              mass: [ .3, .25 ],
              optmass: [ -.03, 0 ],
              thermload: [ 0, -.05 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .3, .5 ],
              mass: [ .35, .2 ],
              optmass: [ -.06, -.02 ],
              thermload: [ -.05, -.1 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "Shielding Sensors": 1,
              Zinc: 1
            },
            features: {
              integrity: [ .4, .75 ],
              mass: [ .4, .15 ],
              optmass: [ -.09, -.04 ],
              thermload: [ -.1, -.15 ]
            }
          },
          "4": {
            components: {
              "Compound Shielding": 1,
              "High Density Composites": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .5, 1 ],
              mass: [ .45, .1 ],
              optmass: [ -.12, -.06 ],
              thermload: [ -.15, -.2 ]
            }
          },
          "5": {
            components: {
              "Imperial Shielding": 1,
              "Proprietary Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.25 ],
              mass: [ .5, .05 ],
              optmass: [ -.15, -.08 ],
              thermload: [ -.2, -.25 ]
            }
          }
        },
        id: 27,
        modulename: [ "Frame shift drive", "FSD" ],
        name: "Shielded"
      },
      FSDinterdictor_Expanded: {
        fdname: "FSDinterdictor_Expanded",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              facinglimit: [ .1, .4 ],
              power: [ .15, 0 ],
              ranget: [ -.1, 0 ]
            }
          },
          "2": {
            components: {
              "Mechanical Equipment": 1,
              "Unusual Encrypted Files": 1
            },
            features: {
              facinglimit: [ .2, .6 ],
              power: [ .3, .1 ],
              ranget: [ -.2, -.05 ]
            }
          },
          "3": {
            components: {
              "Grid Resistors": 1,
              "Mechanical Components": 1,
              "Tagged Encryption Codes": 1
            },
            features: {
              facinglimit: [ .3, .8 ],
              power: [ .45, .2 ],
              ranget: [ -.3, -.1 ]
            }
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              "Strange Wake Solutions": 1
            },
            features: {
              facinglimit: [ .4, 1 ],
              power: [ .6, .3 ],
              ranget: [ -.4, -.15 ]
            }
          }
        },
        id: 28,
        modulename: [ "Frame shift drive interdictor", "FSDI" ],
        name: "Expanded capture arc"
      },
      FSDinterdictor_LongRange: {
        fdname: "FSDinterdictor_LongRange",
        grades: {
          "1": {
            components: {
              "Unusual Encrypted Files": 1
            },
            features: {
              facinglimit: [ -.1, 0 ],
              mass: [ .1, 0 ],
              power: [ .15, 0 ],
              ranget: [ .05, .2 ]
            }
          },
          "2": {
            components: {
              "Atypical Disrupted Wake Echoes": 1,
              "Tagged Encryption Codes": 1
            },
            features: {
              facinglimit: [ -.2, -.05 ],
              mass: [ .2, .05 ],
              power: [ .3, .1 ],
              ranget: [ .1, .3 ]
            }
          },
          "3": {
            components: {
              "Anomalous Bulk Scan Data": 1,
              "Anomalous FSD Telemetry": 1,
              "Open Symmetric Keys": 1
            },
            features: {
              facinglimit: [ -.3, -.1 ],
              mass: [ .3, .1 ],
              power: [ .45, .2 ],
              ranget: [ .15, .4 ]
            }
          }
        },
        id: 29,
        modulename: [ "Frame shift drive interdictor", "FSDI" ],
        name: "Long range"
      },
      FuelScoop_Shielded: {
        fdname: "FuelScoop_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          }
        },
        id: 30,
        modulename: [ "Fuel scoop" ],
        name: "Shielded"
      },
      FuelTransferLimpet_LightWeight: {
        fdname: "FuelTransferLimpet_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 31,
        modulename: [ "Fuel transfer limpet controller" ],
        name: "Lightweight"
      },
      FuelTransferLimpet_Reinforced: {
        fdname: "FuelTransferLimpet_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 32,
        modulename: [ "Fuel transfer limpet controller" ],
        name: "Reinforced"
      },
      FuelTransferLimpet_Shielded: {
        fdname: "FuelTransferLimpet_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 33,
        modulename: [ "Fuel transfer limpet controller" ],
        name: "Shielded"
      },
      HatchBreakerLimpet_LightWeight: {
        fdname: "HatchBreakerLimpet_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 34,
        modulename: [ "Hatch breaker limpet controller" ],
        name: "Lightweight"
      },
      HatchBreakerLimpet_Reinforced: {
        fdname: "HatchBreakerLimpet_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 35,
        modulename: [ "Hatch breaker limpet controller" ],
        name: "Reinforced"
      },
      HatchBreakerLimpet_Shielded: {
        fdname: "HatchBreakerLimpet_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 36,
        modulename: [ "Hatch breaker limpet controller" ],
        name: "Shielded"
      },
      HeatSinkLauncher_HeatSinkCapacity: {
        fdname: "HeatSinkLauncher_HeatSinkCapacity",
        grades: {
          "3": {
            components: {
              "Mechanical Scrap": 1,
              Niobium: 1,
              Vanadium: 1
            },
            features: {
              ammo: [ .5, .5 ],
              mass: [ 2, 1 ],
              reload: [ 1, .5 ]
            }
          }
        },
        id: 37,
        modulename: [ "Heat sink launcher" ],
        name: "Ammo capacity"
      },
      HeatSinkLauncher_LightWeight: {
        fdname: "HeatSinkLauncher_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 38,
        modulename: [ "Heat sink launcher" ],
        name: "Lightweight"
      },
      HeatSinkLauncher_Reinforced: {
        fdname: "HeatSinkLauncher_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 39,
        modulename: [ "Heat sink launcher" ],
        name: "Reinforced"
      },
      HeatSinkLauncher_Shielded: {
        fdname: "HeatSinkLauncher_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 40,
        modulename: [ "Heat sink launcher" ],
        name: "Shielded"
      },
      HullReinforcement_Advanced: {
        fdname: "HullReinforcement_Advanced",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              hullboost: [ .02, .06 ],
              hullreinforcement: [ -.05, 0 ],
              mass: [ 0, -.03 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Iron: 1
            },
            features: {
              hullboost: [ .04, .09 ],
              hullreinforcement: [ -.1, -.05 ],
              mass: [ 0, -.06 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "High Density Composites": 1,
              Iron: 1
            },
            features: {
              hullboost: [ .06, .12 ],
              hullreinforcement: [ -.15, -.1 ],
              mass: [ 0, -.09 ]
            }
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              Germanium: 1,
              "Proprietary Composites": 1
            },
            features: {
              hullboost: [ .08, .15 ],
              hullreinforcement: [ -.2, -.15 ],
              mass: [ 0, -.12 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Military Grade Alloys": 1,
              Tin: 1
            },
            features: {
              hullboost: [ .1, .18 ],
              hullreinforcement: [ -.25, -.2 ],
              mass: [ 0, -.15 ]
            }
          }
        },
        id: 41,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Lightweight"
      },
      HullReinforcement_Explosive: {
        fdname: "HullReinforcement_Explosive",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              explres: [ .05, .08 ],
              kinres: [ -.03, -.02 ],
              thermres: [ -.03, -.02 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              Zinc: 1
            },
            features: {
              explres: [ .1, .16 ],
              kinres: [ -.06, -.04 ],
              thermres: [ -.06, -.04 ]
            }
          },
          "3": {
            components: {
              "Salvaged Alloys": 1,
              Vanadium: 1,
              Zirconium: 1
            },
            features: {
              explres: [ .15, .24 ],
              kinres: [ -.09, -.06 ],
              thermres: [ -.09, -.06 ]
            }
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              Mercury: 1,
              Tungsten: 1
            },
            features: {
              explres: [ .2, .32 ],
              kinres: [ -.12, -.08 ],
              thermres: [ -.12, -.08 ]
            }
          },
          "5": {
            components: {
              Molybdenum: 1,
              "Phase Alloys": 1,
              Ruthenium: 1
            },
            features: {
              explres: [ .24, .4 ],
              kinres: [ -.15, -.1 ],
              thermres: [ -.15, -.1 ]
            }
          }
        },
        id: 43,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Blast resistant"
      },
      HullReinforcement_HeavyDuty: {
        fdname: "HullReinforcement_HeavyDuty",
        grades: {
          "1": {
            components: {
              Carbon: 1
            },
            features: {
              explres: [ 0, .03 ],
              hullreinforcement: [ .05, .2 ],
              kinres: [ 0, .03 ],
              mass: [ .08, 0 ],
              thermres: [ 0, .03 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              explres: [ .01, .06 ],
              hullreinforcement: [ .1, .3 ],
              kinres: [ .01, .06 ],
              mass: [ .16, .05 ],
              thermres: [ .01, .06 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              explres: [ .02, .09 ],
              hullreinforcement: [ .15, .4 ],
              kinres: [ .02, .09 ],
              mass: [ .24, .1 ],
              thermres: [ .02, .09 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              explres: [ .03, .12 ],
              hullreinforcement: [ .2, .5 ],
              kinres: [ .03, .12 ],
              mass: [ .32, .15 ],
              thermres: [ .03, .12 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              explres: [ .04, .15 ],
              hullreinforcement: [ .25, .6 ],
              kinres: [ .04, .15 ],
              mass: [ .4, .2 ],
              thermres: [ .04, .15 ]
            }
          }
        },
        id: 42,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Heavy duty"
      },
      HullReinforcement_Kinetic: {
        fdname: "HullReinforcement_Kinetic",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              explres: [ -.03, -.02 ],
              kinres: [ .05, .08 ],
              thermres: [ -.03, -.02 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.06, -.04 ],
              kinres: [ .1, .16 ],
              thermres: [ -.06, -.04 ]
            }
          },
          "3": {
            components: {
              "High Density Composites": 1,
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.09, -.06 ],
              kinres: [ .15, .24 ],
              thermres: [ -.09, -.06 ]
            }
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Proprietary Composites": 1,
              Tungsten: 1
            },
            features: {
              explres: [ -.12, -.08 ],
              kinres: [ .2, .32 ],
              thermres: [ -.12, -.08 ]
            }
          },
          "5": {
            components: {
              "Core Dynamics Composites": 1,
              Molybdenum: 1,
              "Phase Alloys": 1
            },
            features: {
              explres: [ -.15, -.1 ],
              kinres: [ .25, .4 ],
              thermres: [ -.15, -.1 ]
            }
          }
        },
        id: 44,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Kinetic resistant"
      },
      HullReinforcement_Thermic: {
        fdname: "HullReinforcement_Thermic",
        grades: {
          "1": {
            components: {
              "Heat Conduction Wiring": 1
            },
            features: {
              explres: [ -.03, -.02 ],
              kinres: [ -.03, -.02 ],
              thermres: [ .05, .08 ]
            }
          },
          "2": {
            components: {
              "Heat Dispersion Plate": 1,
              Nickel: 1
            },
            features: {
              explres: [ -.06, -.04 ],
              kinres: [ -.06, -.04 ],
              thermres: [ .1, .16 ]
            }
          },
          "3": {
            components: {
              "Heat Exchangers": 1,
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.09, -.06 ],
              kinres: [ -.09, -.06 ],
              thermres: [ .15, .24 ]
            }
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Heat Vanes": 1,
              Tungsten: 1
            },
            features: {
              explres: [ -.12, -.08 ],
              kinres: [ -.12, -.08 ],
              thermres: [ .2, .32 ]
            }
          },
          "5": {
            components: {
              Molybdenum: 1,
              "Phase Alloys": 1,
              "Proto Heat Radiators": 1
            },
            features: {
              explres: [ -.15, -.1 ],
              kinres: [ -.15, -.1 ],
              thermres: [ .25, .4 ]
            }
          }
        },
        id: 45,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Thermal resistant"
      },
      KillWarrantScanner_LightWeight: {
        fdname: "KillWarrantScanner_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 46,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Lightweight"
      },
      KillWarrantScanner_LongRange: {
        fdname: "KillWarrantScanner_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              power: [ .2, .1 ],
              angle: [ -.2, -.1 ],
              range: [ .1, .2 ]
            }
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              power: [ .4, .2 ],
              angle: [ -.3, -.15 ],
              range: [ .2, .4 ]
            }
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              power: [ .6, .3 ],
              angle: [ -.4, -.2 ],
              range: [ .3, .6 ]
            }
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              power: [ .8, .4 ],
              angle: [ -.5, -.25 ],
              range: [ .4, .8 ]
            }
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              power: [ 1, .5 ],
              angle: [ -.6, -.3 ],
              range: [ .5, 1 ]
            }
          }
        },
        id: 99,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Long range"
      },
      KillWarrantScanner_Reinforced: {
        fdname: "KillWarrantScanner_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 47,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Reinforced"
      },
      KillWarrantScanner_Shielded: {
        fdname: "KillWarrantScanner_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 48,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Shielded"
      },
      LifeSupport_LightWeight: {
        fdname: "LifeSupport_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          }
        },
        id: 49,
        modulename: [ "Life support" ],
        name: "Lightweight"
      },
      LifeSupport_Reinforced: {
        fdname: "LifeSupport_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          }
        },
        id: 50,
        modulename: [ "Life support" ],
        name: "Reinforced"
      },
      LifeSupport_Shielded: {
        fdname: "LifeSupport_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          }
        },
        id: 51,
        modulename: [ "Life support" ],
        name: "Shielded"
      },
      PointDefence_LightWeight: {
        fdname: "PointDefence_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 52,
        modulename: [ "Point defence" ],
        name: "Lightweight"
      },
      PointDefence_PointDefenseCapacity: {
        fdname: "PointDefence_PointDefenseCapacity",
        grades: {
          "3": {
            components: {
              "Mechanical Scrap": 1,
              Niobium: 1,
              Vanadium: 1
            },
            features: {
              ammo: [ .2, .5 ],
              mass: [ 2, 1 ],
              reload: [ .3, .1 ]
            }
          }
        },
        id: 55,
        modulename: [ "Point defence" ],
        name: "Ammo capacity"
      },
      PointDefence_Reinforced: {
        fdname: "PointDefence_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 53,
        modulename: [ "Point defence" ],
        name: "Reinforced"
      },
      PointDefence_Shielded: {
        fdname: "PointDefence_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 54,
        modulename: [ "Point defence" ],
        name: "Shielded"
      },
      PowerDistributor_HighCapacity: {
        fdname: "PowerDistributor_HighCapacity",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              engcap: [ .04, .1 ],
              engrate: [ -.05, 0 ],
              syscap: [ .04, .1 ],
              sysrate: [ -.05, 0 ],
              wepcap: [ .04, .1 ],
              weprate: [ -.05, 0 ]
            }
          },
          "2": {
            components: {
              Chromium: 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              engcap: [ .08, .15 ],
              engrate: [ -.1, -.04 ],
              syscap: [ .08, .1 ],
              sysrate: [ -.1, 0 ],
              wepcap: [ .08, .1 ],
              weprate: [ -.1, 0 ]
            }
          },
          "3": {
            components: {
              Chromium: 1,
              "High Density Composites": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              engcap: [ .12, .2 ],
              engrate: [ -.15, -.08 ],
              syscap: [ .12, .1 ],
              sysrate: [ -.15, -.08 ],
              wepcap: [ .12, .1 ],
              weprate: [ -.15, -.08 ]
            }
          },
          "4": {
            components: {
              "Modified Consumer Firmware": 1,
              "Proprietary Composites": 1,
              Selenium: 1
            },
            features: {
              engcap: [ .16, .25 ],
              engrate: [ -.2, -.12 ],
              syscap: [ .16, .1 ],
              sysrate: [ -.2, -.12 ],
              wepcap: [ .16, .1 ],
              weprate: [ -.2, -.12 ]
            }
          },
          "5": {
            components: {
              "Cracked Industrial Firmware": 1,
              "Military Supercapacitors": 1,
              "Proprietary Composites": 1
            },
            features: {
              engcap: [ .2, .3 ],
              engrate: [ -.25, -.16 ],
              syscap: [ .2, .1 ],
              sysrate: [ -.25, -.16 ],
              wepcap: [ .2, .1 ],
              weprate: [ -.25, -.16 ]
            }
          }
        },
        id: 56,
        modulename: [ "Power distributor", "Distributor" ],
        name: "High charge capacity"
      },
      PowerDistributor_HighFrequency: {
        fdname: "PowerDistributor_HighFrequency",
        grades: {
          "1": {
            components: {
              "Specialised Legacy Firmware": 1
            },
            features: {
              engcap: [ -.03, 0 ],
              engrate: [ .04, .12 ],
              syscap: [ -.03, 0 ],
              sysrate: [ .04, .12 ],
              wepcap: [ -.03, 0 ],
              weprate: [ .04, .12 ]
            }
          },
          "2": {
            components: {
              "Chemical Processors": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              engcap: [ -.06, -.01 ],
              engrate: [ .08, .18 ],
              syscap: [ -.06, -.01 ],
              sysrate: [ .08, .18 ],
              wepcap: [ -.06, -.01 ],
              weprate: [ .08, .18 ]
            }
          },
          "3": {
            components: {
              "Chemical Distillery": 1,
              "Grid Resistors": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              engcap: [ -.09, -.02 ],
              engrate: [ .12, .24 ],
              syscap: [ -.09, -.02 ],
              sysrate: [ .12, .24 ],
              wepcap: [ -.09, -.02 ],
              weprate: [ .12, .24 ]
            }
          },
          "4": {
            components: {
              "Chemical Manipulators": 1,
              "Cracked Industrial Firmware": 1,
              "Hybrid Capacitors": 1
            },
            features: {
              engcap: [ -.12, -.03 ],
              engrate: [ .16, .3 ],
              syscap: [ -.12, -.03 ],
              sysrate: [ .16, .3 ],
              wepcap: [ -.12, -.03 ],
              weprate: [ .16, .3 ]
            }
          },
          "5": {
            components: {
              "Chemical Manipulators": 1,
              "Cracked Industrial Firmware": 1,
              "Exquisite Focus Crystals": 1
            },
            features: {
              engcap: [ -.15, -.04 ],
              engrate: [ .2, .36 ],
              syscap: [ -.15, -.04 ],
              sysrate: [ .2, .36 ],
              wepcap: [ -.15, -.04 ],
              weprate: [ .2, .36 ]
            }
          }
        },
        id: 57,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Charge enhanced"
      },
      PowerDistributor_PriorityEngines: {
        fdname: "PowerDistributor_PriorityEngines",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              engcap: [ .05, .2 ],
              engrate: [ .02, .1 ],
              syscap: [ -.05, 0 ],
              sysrate: [ -.02, 0 ],
              wepcap: [ -.05, 0 ],
              weprate: [ -.02, 0 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Sulphur: 1
            },
            features: {
              engcap: [ .1, .3 ],
              engrate: [ .04, .15 ],
              syscap: [ -.1, -.02 ],
              sysrate: [ -.04, -.01 ],
              wepcap: [ -.1, -.02 ],
              weprate: [ -.04, -.01 ]
            }
          },
          "3": {
            components: {
              "Anomalous Bulk Scan Data": 1,
              Chromium: 1,
              "Electrochemical Arrays": 1
            },
            features: {
              engcap: [ .15, .4 ],
              engrate: [ .06, .2 ],
              syscap: [ -.15, -.04 ],
              sysrate: [ -.06, -.02 ],
              wepcap: [ -.15, -.04 ],
              weprate: [ -.06, -.02 ]
            }
          }
        },
        id: 58,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Engine focused"
      },
      PowerDistributor_PrioritySystems: {
        fdname: "PowerDistributor_PrioritySystems",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              engcap: [ -.05, 0 ],
              engrate: [ -.02, 0 ],
              syscap: [ .05, .2 ],
              sysrate: [ .02, .1 ],
              wepcap: [ -.05, 0 ],
              weprate: [ -.02, 0 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Sulphur: 1
            },
            features: {
              engcap: [ -.1, -.02 ],
              engrate: [ -.04, -.01 ],
              syscap: [ .1, .3 ],
              sysrate: [ -.04, .15 ],
              wepcap: [ -.1, -.02 ],
              weprate: [ -.04, -.01 ]
            }
          },
          "3": {
            components: {
              "Anomalous Bulk Scan Data": 1,
              Chromium: 1,
              "Electrochemical Arrays": 1
            },
            features: {
              engcap: [ -.15, -.04 ],
              engrate: [ -.06, -.02 ],
              syscap: [ .15, .4 ],
              sysrate: [ .06, .2 ],
              wepcap: [ -.15, -.04 ],
              weprate: [ -.06, -.02 ]
            }
          }
        },
        id: 59,
        modulename: [ "Power distributor", "Distributor" ],
        name: "System focused"
      },
      PowerDistributor_PriorityWeapons: {
        fdname: "PowerDistributor_PriorityWeapons",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              engcap: [ -.05, 0 ],
              engrate: [ -.02, 0 ],
              syscap: [ -.05, 0 ],
              sysrate: [ -.02, 0 ],
              wepcap: [ .05, .2 ],
              weprate: [ .02, .1 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Sulphur: 1
            },
            features: {
              engcap: [ -.1, -.02 ],
              engrate: [ -.04, -.01 ],
              syscap: [ -.1, -.02 ],
              sysrate: [ -.04, -.01 ],
              wepcap: [ .1, .3 ],
              weprate: [ .04, .15 ]
            }
          },
          "3": {
            components: {
              "Anomalous Bulk Scan Data": 1,
              "Hybrid Capacitors": 1,
              Selenium: 1
            },
            features: {
              engcap: [ -.15, -.04 ],
              engrate: [ -.06, -.02 ],
              syscap: [ -.15, -.04 ],
              sysrate: [ -.06, -.02 ],
              wepcap: [ .15, .4 ],
              weprate: [ .06, .2 ]
            }
          }
        },
        id: 60,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Weapon focused"
      },
      PowerDistributor_Shielded: {
        fdname: "PowerDistributor_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 61,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Shielded"
      },
      PowerPlant_Armoured: {
        fdname: "PowerPlant_Armoured",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              eff: [ .05, -.05 ],
              integrity: [ .2, .4 ],
              mass: [ .08, 0 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              eff: [ .06, -.06 ],
              integrity: [ .3, .6 ],
              mass: [ .16, .04 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              eff: [ .07, -.07 ],
              integrity: [ .4, .8 ],
              mass: [ .24, .08 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              eff: [ .08, -.08 ],
              integrity: [ .5, 1 ],
              mass: [ .32, .12 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              eff: [ .09, -.09 ],
              integrity: [ .6, 1.2 ],
              mass: [ .4, .16 ]
            }
          }
        },
        id: 62,
        modulename: [ "Power plant" ],
        name: "Armoured"
      },
      PowerPlant_Boosted: {
        fdname: "PowerPlant_Boosted",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              eff: [ .1, 0 ],
              integrity: [ -.1, 0 ],
              pgen: [ .02, .12 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              "Heat Conduction Wiring": 1
            },
            features: {
              eff: [ .2, .05 ],
              integrity: [ -.2, -.05 ],
              pgen: [ .04, .18 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Heat Conduction Wiring": 1,
              Selenium: 1
            },
            features: {
              eff: [ .3, .1 ],
              integrity: [ -.3, -.1 ],
              pgen: [ .06, .24 ]
            }
          },
          "4": {
            components: {
              Cadmium: 1,
              "Conductive Ceramics": 1,
              "Heat Dispersion Plate": 1
            },
            features: {
              eff: [ .4, .15 ],
              integrity: [ -.4, -.15 ],
              pgen: [ .08, .3 ]
            }
          },
          "5": {
            components: {
              "Chemical Manipulators": 1,
              "Conductive Ceramics": 1,
              Tellurium: 1
            },
            features: {
              eff: [ .5, .2 ],
              integrity: [ -.5, -.2 ],
              pgen: [ .1, .36 ]
            }
          }
        },
        id: 63,
        modulename: [ "Power plant" ],
        name: "Overcharged"
      },
      PowerPlant_Stealth: {
        fdname: "PowerPlant_Stealth",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              eff: [ -.05, -.2 ],
              mass: [ .05, 0 ],
              pgen: [ -.06, 0 ]
            }
          },
          "2": {
            components: {
              Iron: 1,
              "Irregular Emission Data": 1
            },
            features: {
              eff: [ -.1, -.3 ],
              mass: [ .1, .05 ],
              pgen: [ -.12, -.03 ]
            }
          },
          "3": {
            components: {
              "Heat Exchangers": 1,
              Iron: 1,
              "Irregular Emission Data": 1
            },
            features: {
              eff: [ -.15, -.4 ],
              mass: [ .15, .1 ],
              pgen: [ -.18, -.06 ]
            }
          }
        },
        id: 64,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Low emissions"
      },
      ProspectingLimpet_LightWeight: {
        fdname: "ProspectingLimpet_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 65,
        modulename: [ "Prospector limpet controller" ],
        name: "Lightweight"
      },
      ProspectingLimpet_Reinforced: {
        fdname: "ProspectingLimpet_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 66,
        modulename: [ "Prospector limpet controller" ],
        name: "Reinforced"
      },
      ProspectingLimpet_Shielded: {
        fdname: "ProspectingLimpet_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 67,
        modulename: [ "Prospector limpet controller" ],
        name: "Shielded"
      },
      Refineries_Shielded: {
        fdname: "Refineries_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          }
        },
        id: 92,
        modulename: [ "Refinery" ],
        name: "Shielded"
      },
      Sensor_CargoScanner_FastScan: {
        fdname: "Sensor_CargoScanner_FastScan",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.4, -.1 ],
              range: [ -.1, -.05 ],
              scantime: [ -.1, -.4 ]
            }
          },
          "2": {
            components: {
              "Flawed Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.5, -.2 ],
              range: [ -.2, -.1 ],
              scantime: [ -.2, -.5 ]
            }
          },
          "3": {
            components: {
              "Flawed Focus Crystals": 1,
              "Open Symmetric Keys": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.6, -.3 ],
              range: [ -.3, -.15 ],
              scantime: [ -.3, -.6 ]
            }
          },
          "4": {
            components: {
              "Atypical Encryption Archives": 1,
              "Focus Crystals": 1,
              Manganese: 1
            },
            features: {
              integrity: [ -.7, -.4 ],
              range: [ -.4, -.2 ],
              scantime: [ -.4, -.7 ]
            }
          },
          "5": {
            components: {
              "Adaptive Encryptors Capture": 1,
              Arsenic: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              integrity: [ -.8, -.5 ],
              range: [ -.5, -.2 ],
              scantime: [ -.5, -.8 ]
            }
          }
        },
        id: 102,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Fast scan"
      },
      Sensor_CargoScanner_LongRange: {
        fdname: "Sensor_CargoScanner_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              power: [ .2, .1 ],
              angle: [ -.2, -.1 ],
              range: [ .1, .2 ]
            }
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              power: [ .4, .2 ],
              angle: [ -.3, -.15 ],
              range: [ .2, .4 ]
            }
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              power: [ .6, .3 ],
              angle: [ -.4, -.2 ],
              range: [ .3, .6 ]
            }
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              power: [ .8, .4 ],
              angle: [ -.5, -.25 ],
              range: [ .4, .8 ]
            }
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              power: [ 1, .5 ],
              angle: [ -.6, -.3 ],
              range: [ .5, 1 ]
            }
          }
        },
        id: 104,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Long range"
      },
      Sensor_CargoScanner_WideAngle: {
        fdname: "Sensor_CargoScanner_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .4, .2 ],
              angle: [ .2, .4 ],
              scantime: [ .2, .1 ]
            }
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .8, .4 ],
              angle: [ .4, .8 ],
              scantime: [ .4, .2 ]
            }
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ 1.2, .6 ],
              angle: [ .6, 1.2 ],
              scantime: [ .6, .3 ]
            }
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              mass: [ 1.2, .6 ],
              angle: [ .8, 1.6 ],
              scantime: [ .8, .4 ]
            }
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              mass: [ 2, 1 ],
              angle: [ 1, 2 ],
              scantime: [ 1, .5 ]
            }
          }
        },
        id: 105,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Wide angle"
      },
      Sensor_KillWarrantScanner_FastScan: {
        fdname: "Sensor_KillWarrantScanner_FastScan",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.4, -.1 ],
              range: [ -.1, -.05 ],
              scantime: [ -.1, -.4 ]
            }
          },
          "2": {
            components: {
              "Flawed Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.5, -.2 ],
              range: [ -.2, -.1 ],
              scantime: [ -.2, -.5 ]
            }
          },
          "3": {
            components: {
              "Flawed Focus Crystals": 1,
              "Open Symmetric Keys": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.6, -.3 ],
              range: [ -.3, -.15 ],
              scantime: [ -.3, -.6 ]
            }
          },
          "4": {
            components: {
              "Atypical Encryption Archives": 1,
              "Focus Crystals": 1,
              Manganese: 1
            },
            features: {
              integrity: [ -.7, -.4 ],
              range: [ -.4, -.2 ],
              scantime: [ -.4, -.7 ]
            }
          },
          "5": {
            components: {
              "Adaptive Encryptors Capture": 1,
              Arsenic: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              integrity: [ -.8, -.5 ],
              range: [ -.5, -.2 ],
              scantime: [ -.5, -.8 ]
            }
          }
        },
        id: 101,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Fast scan"
      },
      Sensor_KillWarrantScanner_WideAngle: {
        fdname: "Sensor_KillWarrantScanner_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .4, .2 ],
              angle: [ .2, .4 ],
              scantime: [ .2, .1 ]
            }
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .8, .4 ],
              angle: [ .4, .8 ],
              scantime: [ .4, .2 ]
            }
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ 1.2, .6 ],
              angle: [ .6, 1.2 ],
              scantime: [ .6, .3 ]
            }
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              mass: [ 1.2, .6 ],
              angle: [ .8, 1.6 ],
              scantime: [ .8, .4 ]
            }
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              mass: [ 2, 1 ],
              angle: [ 1, 2 ],
              scantime: [ 1, .5 ]
            }
          }
        },
        id: 107,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Wide angle"
      },
      Sensor_Sensor_LightWeight: {
        fdname: "Sensor_Sensor_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.15, -.1 ],
              mass: [ -.2, -.4 ],
              angle: [ -.1, -.05 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.3, -.5 ],
              angle: [ -.15, -.1 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.45, -.3 ],
              mass: [ -.4, -.6 ],
              angle: [ -.2, -.15 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.6, -.4 ],
              mass: [ -.5, -.7 ],
              angle: [ -.25, -.2 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.75, -.5 ],
              mass: [ -.6, -.8 ],
              angle: [ -.3, -.25 ]
            }
          }
        },
        id: 96,
        modulename: [ "Sensors" ],
        name: "Lightweight"
      },
      Sensor_Sensor_LongRange: {
        fdname: "Sensor_Sensor_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              mass: [ .4, .2 ],
              angle: [ -.2, -.1 ],
              range: [ .1, .14 ]
            }
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              mass: [ .8, .4 ],
              angle: [ -.3, -.15 ],
              range: [ .2, .3 ]
            }
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              mass: [ 1.2, .6 ],
              angle: [ -.4, -.2 ],
              range: [ .3, .45 ]
            }
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              mass: [ 1.6, .8 ],
              angle: [ -.5, -.25 ],
              range: [ .4, .6 ]
            }
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              mass: [ 2, 1 ],
              angle: [ -.6, -.3 ],
              range: [ .5, .75 ]
            }
          }
        },
        id: 97,
        modulename: [ "Sensors" ],
        name: "Long range"
      },
      Sensor_Sensor_WideAngle: {
        fdname: "Sensor_Sensor_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              power: [ .2, .1 ],
              angle: [ .2, .4 ],
              range: [ -.08, -.05 ]
            }
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              power: [ .4, .2 ],
              angle: [ .4, .8 ],
              range: [ -.16, -.08 ]
            }
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              power: [ .6, .3 ],
              angle: [ .6, 1.2 ],
              range: [ -.24, -.12 ]
            }
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              power: [ .8, .4 ],
              angle: [ .8, 1.6 ],
              range: [ -.32, -.16 ]
            }
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              power: [ 1, .5 ],
              angle: [ 1, 2 ],
              range: [ -.4, -.2 ]
            }
          }
        },
        id: 98,
        modulename: [ "Sensors" ],
        name: "Wide angle"
      },
      Sensor_SurfaceScanner_FastScan: {
        fdname: "Sensor_SurfaceScanner_FastScan",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              mass: [ .4, .2 ],
              scanrate: [ .1, .4 ]
            }
          },
          "2": {
            components: {
              "Flawed Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              mass: [ .8, .4 ],
              scanrate: [ .2, .5 ]
            }
          },
          "3": {
            components: {
              "Flawed Focus Crystals": 1,
              "Open Symmetric Keys": 1,
              Phosphorus: 1
            },
            features: {
              mass: [ 1.2, .6 ],
              scanrate: [ .3, .6 ]
            }
          },
          "4": {
            components: {
              "Atypical Encryption Archives": 1,
              "Focus Crystals": 1,
              Manganese: 1
            },
            features: {
              mass: [ 1.6, .8 ],
              scanrate: [ .4, .7 ]
            }
          },
          "5": {
            components: {
              "Adaptive Encryptors Capture": 1,
              Arsenic: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              mass: [ 2, 1 ],
              scanrate: [ .5, .8 ]
            }
          }
        },
        id: 95,
        modulename: [ "Detailed surface scanner", "DSS" ],
        name: "Fast scan"
      },
      Sensor_SurfaceScanner_LongRange: {
        fdname: "Sensor_SurfaceScanner_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              mass: [ .4, .2 ],
              range: [ .2, .4 ]
            }
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              mass: [ .8, .4 ],
              range: [ .4, .8 ]
            }
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              mass: [ 1.2, .6 ],
              range: [ .6, 1.2 ]
            }
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              mass: [ 1.6, .8 ],
              range: [ .8, 1.6 ]
            }
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              mass: [ 2, 1 ],
              range: [ 1, 2 ]
            }
          }
        },
        id: 93,
        modulename: [ "Detailed surface scanner", "DSS" ],
        name: "Long range"
      },
      Sensor_SurfaceScanner_WideAngle: {
        fdname: "Sensor_SurfaceScanner_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .4, .2 ],
              angle: [ .2, .4 ]
            }
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .8, .4 ],
              angle: [ .4, .8 ]
            }
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ 1.2, .6 ],
              angle: [ .6, 1.2 ]
            }
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              mass: [ 1.6, .8 ],
              angle: [ .8, 1.6 ]
            }
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              mass: [ 2, 1 ],
              angle: [ 1, 2 ]
            }
          }
        },
        id: 94,
        modulename: [ "Detailed surface scanner", "DSS" ],
        name: "Wide angle"
      },
      Sensor_WakeScanner_FastScan: {
        fdname: "Sensor_WakeScanner_FastScan",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.4, -.1 ],
              range: [ -.1, -.05 ],
              scantime: [ -.1, -.4 ]
            }
          },
          "2": {
            components: {
              "Flawed Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.5, -.2 ],
              range: [ -.2, -.1 ],
              scantime: [ -.2, -.5 ]
            }
          },
          "3": {
            components: {
              "Flawed Focus Crystals": 1,
              "Open Symmetric Keys": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.6, -.3 ],
              range: [ -.3, -.15 ],
              scantime: [ -.3, -.6 ]
            }
          },
          "4": {
            components: {
              "Atypical Encryption Archives": 1,
              "Focus Crystals": 1,
              Manganese: 1
            },
            features: {
              integrity: [ -.7, -.4 ],
              range: [ -.4, -.2 ],
              scantime: [ -.4, -.7 ]
            }
          },
          "5": {
            components: {
              "Adaptive Encryptors Capture": 1,
              Arsenic: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              integrity: [ -.8, -.5 ],
              range: [ -.5, -.2 ],
              scantime: [ -.5, -.8 ]
            }
          }
        },
        id: 109,
        modulename: [ "Wake scanner", "Frame shift wake scanner" ],
        name: "Fast scan"
      },
      Sensor_WakeScanner_LongRange: {
        fdname: "Sensor_WakeScanner_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              power: [ .2, .1 ],
              angle: [ -.2, -.1 ],
              range: [ .1, .2 ]
            }
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              power: [ .4, .2 ],
              angle: [ -.3, -.15 ],
              range: [ .2, .4 ]
            }
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              power: [ .6, .3 ],
              angle: [ -.4, -.2 ],
              range: [ .3, .6 ]
            }
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              power: [ .8, .4 ],
              angle: [ -.5, -.25 ],
              range: [ .4, .8 ]
            }
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              power: [ 1, .5 ],
              angle: [ -.6, -.3 ],
              range: [ .5, 1 ]
            }
          }
        },
        id: 108,
        modulename: [ "Wake scanner", "Frame shift wake scanner" ],
        name: "Long range"
      },
      Sensor_WakeScanner_WideAngle: {
        fdname: "Sensor_WakeScanner_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .4, .2 ],
              angle: [ .2, .4 ],
              scantime: [ .2, .1 ]
            }
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .8, .4 ],
              angle: [ .4, .8 ],
              scantime: [ .4, .2 ]
            }
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ 1.2, .6 ],
              angle: [ .6, 1.2 ],
              scantime: [ .6, .3 ]
            }
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              mass: [ 1.2, .6 ],
              angle: [ .8, 1.6 ],
              scantime: [ .8, .4 ]
            }
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              mass: [ 2, 1 ],
              angle: [ 1, 2 ],
              scantime: [ 1, .5 ]
            }
          }
        },
        id: 106,
        modulename: [ "Wake scanner", "Frame shift wake scanner" ],
        name: "Wide angle"
      },
      ShieldBooster_Explosive: {
        fdname: "ShieldBooster_Explosive",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              explres: [ .02, .05 ],
              kinres: [ -.02, 0 ],
              thermres: [ -.02, 0 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Iron: 1
            },
            features: {
              explres: [ .07, -.1 ],
              kinres: [ -.03, -.01 ],
              thermres: [ -.03, -.01 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Focus Crystals": 1,
              Iron: 1
            },
            features: {
              explres: [ .12, .15 ],
              kinres: [ -.04, -.02 ],
              thermres: [ -.05, -.02 ]
            }
          },
          "4": {
            components: {
              Germanium: 1,
              "Refined Focus Crystals": 1,
              "Untypical Shield Scans": 1
            },
            features: {
              explres: [ .17, .2 ],
              kinres: [ -.05, -.03 ],
              thermres: [ -.05, -.03 ]
            }
          },
          "5": {
            components: {
              "Aberrant Shield Pattern Analysis": 1,
              "Exquisite Focus Crystals": 1,
              Niobium: 1
            },
            features: {
              explres: [ .22, .25 ],
              kinres: [ -.06, -.04 ],
              thermres: [ -.06, -.04 ]
            }
          }
        },
        id: 68,
        modulename: [ "Shield booster" ],
        name: "Blast resistant"
      },
      ShieldBooster_HeavyDuty: {
        fdname: "ShieldBooster_HeavyDuty",
        grades: {
          "1": {
            components: {
              "Grid Resistors": 1
            },
            features: {
              integrity: [ 0, .03 ],
              mass: [ 1, .5 ],
              power: [ .05, 0 ],
              shieldboost: [ .03, .06 ]
            }
          },
          "2": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              "Hybrid Capacitors": 1
            },
            features: {
              integrity: [ .03, .06 ],
              mass: [ 1.5, 1 ],
              power: [ .1, .05 ],
              shieldboost: [ .08, .12 ]
            }
          },
          "3": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              "Hybrid Capacitors": 1,
              Niobium: 1
            },
            features: {
              integrity: [ .06, .09 ],
              mass: [ 2, 1.5 ],
              power: [ .15, .1 ],
              shieldboost: [ .13, .18 ]
            }
          },
          "4": {
            components: {
              "Electrochemical Arrays": 1,
              "Inconsistent Shield Soak Analysis": 1,
              Tin: 1
            },
            features: {
              integrity: [ .09, .12 ],
              mass: [ 2.5, 2 ],
              power: [ .2, .15 ],
              shieldboost: [ .18, .24 ]
            }
          },
          "5": {
            components: {
              Antimony: 1,
              "Polymer Capacitors": 1,
              "Untypical Shield Scans": 1
            },
            features: {
              integrity: [ .12, .15 ],
              mass: [ 3, 2.5 ],
              power: [ .25, .2 ],
              shieldboost: [ .23, .3 ]
            }
          }
        },
        id: 69,
        modulename: [ "Shield booster" ],
        name: "Heavy duty"
      },
      ShieldBooster_Kinetic: {
        fdname: "ShieldBooster_Kinetic",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              explres: [ -.02, 0 ],
              kinres: [ .02, .05 ],
              thermres: [ -.02, 0 ]
            }
          },
          "2": {
            components: {
              Germanium: 1,
              "Grid Resistors": 1
            },
            features: {
              explres: [ -.03, -.01 ],
              kinres: [ .07, .1 ],
              thermres: [ -.03, -.01 ]
            }
          },
          "3": {
            components: {
              "Focus Crystals": 1,
              "Hybrid Capacitors": 1,
              "Salvaged Alloys": 1
            },
            features: {
              explres: [ -.04, -.02 ],
              kinres: [ .12, .15 ],
              thermres: [ -.05, -.02 ]
            }
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Refined Focus Crystals": 1,
              "Untypical Shield Scans": 1
            },
            features: {
              explres: [ -.05, -.03 ],
              kinres: [ .17, .2 ],
              thermres: [ -.05, -.03 ]
            }
          },
          "5": {
            components: {
              "Aberrant Shield Pattern Analysis": 1,
              "Exquisite Focus Crystals": 1,
              "Phase Alloys": 1
            },
            features: {
              explres: [ -.06, -.04 ],
              kinres: [ .22, .25 ],
              thermres: [ -.06, -.04 ]
            }
          }
        },
        id: 70,
        modulename: [ "Shield booster" ],
        name: "Kinetic resistant"
      },
      ShieldBooster_Resistive: {
        fdname: "ShieldBooster_Resistive",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              explres: [ .01, .03 ],
              integrity: [ -.04, 0 ],
              kinres: [ .01, .03 ],
              power: [ .08, 0 ],
              thermres: [ .01, .03 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Phosphorus: 1
            },
            features: {
              explres: [ .025, .06 ],
              integrity: [ -.08, -.02 ],
              kinres: [ .025, .06 ],
              power: [ .16, .04 ],
              thermres: [ .025, .06 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              explres: [ .06, .075 ],
              integrity: [ -.12, -.04 ],
              kinres: [ .06, .075 ],
              power: [ .24, .08 ],
              thermres: [ .06, .075 ]
            }
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              explres: [ .075, .11 ],
              integrity: [ -.16, -.06 ],
              kinres: [ .075, .11 ],
              power: [ .32, .12 ],
              thermres: [ .075, .11 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Imperial Shielding": 1,
              "Refined Focus Crystals": 1
            },
            features: {
              explres: [ .1, .125 ],
              integrity: [ -.2, -.08 ],
              kinres: [ .1, .125 ],
              power: [ .4, .16 ],
              thermres: [ .1, .125 ]
            }
          }
        },
        id: 71,
        modulename: [ "Shield booster" ],
        name: "Resistance augmented"
      },
      ShieldBooster_Thermic: {
        fdname: "ShieldBooster_Thermic",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              explres: [ -.02, 0 ],
              kinres: [ -.02, 0 ],
              thermres: [ .02, .05 ]
            }
          },
          "2": {
            components: {
              Germanium: 1,
              "Heat Conduction Wiring": 1
            },
            features: {
              explres: [ -.03, -.01 ],
              kinres: [ -.03, -.01 ],
              thermres: [ .07, .1 ]
            }
          },
          "3": {
            components: {
              "Focus Crystals": 1,
              "Heat Conduction Wiring": 1,
              "Heat Dispersion Plate": 1
            },
            features: {
              explres: [ -.04, -.02 ],
              kinres: [ -.04, -.04 ],
              thermres: [ .12, .15 ]
            }
          },
          "4": {
            components: {
              "Heat Dispersion Plate": 1,
              "Refined Focus Crystals": 1,
              "Untypical Shield Scans": 1
            },
            features: {
              explres: [ -.05, -.03 ],
              kinres: [ -.05, -.03 ],
              thermres: [ .17, .2 ]
            }
          },
          "5": {
            components: {
              "Aberrant Shield Pattern Analysis": 1,
              "Exquisite Focus Crystals": 1,
              "Heat Exchangers": 1
            },
            features: {
              explres: [ -.06, -.04 ],
              kinres: [ -.06, -.04 ],
              thermres: [ .22, .25 ]
            }
          }
        },
        id: 72,
        modulename: [ "Shield booster" ],
        name: "Thermal resistant"
      },
      ShieldCellBank_Rapid: {
        fdname: "ShieldCellBank_Rapid",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              boot: [ .1, 0 ],
              duration: [ -.1, 0 ],
              shieldreinforcement: [ 0, .03 ],
              spinup: [ -.05, -.1 ]
            }
          },
          "2": {
            components: {
              Chromium: 1,
              "Grid Resistors": 1
            },
            features: {
              boot: [ .2, .05 ],
              duration: [ -.2, -.05 ],
              shieldreinforcement: [ .02, .06 ],
              spinup: [ -.1, -.2 ]
            }
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              "Precipitated Alloys": 1,
              Sulphur: 1
            },
            features: {
              boot: [ .3, .1 ],
              duration: [ -.3, -.1 ],
              shieldreinforcement: [ .04, .09 ],
              spinup: [ -.2, -.3 ]
            }
          }
        },
        id: 73,
        modulename: [ "Shield cell bank", "SCB" ],
        name: "Rapid charge"
      },
      ShieldCellBank_Specialised: {
        fdname: "ShieldCellBank_Specialised",
        grades: {
          "1": {
            components: {
              "Specialised Legacy Firmware": 1
            },
            features: {
              boot: [ -.04, -.08 ],
              integrity: [ -.1, 0 ],
              power: [ .1, 0 ],
              thermload: [ -.03, -.06 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              boot: [ -.08, -.16 ],
              integrity: [ -.2, -.05 ],
              power: [ .2, .05 ],
              thermload: [ -.06, -.12 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Cracked Industrial Firmware": 1,
              "Exceptional Scrambled Emission Data": 1
            },
            features: {
              boot: [ -.12, -.26 ],
              integrity: [ -.3, -.1 ],
              power: [ .3, .1 ],
              thermload: [ -.09, -.18 ]
            }
          }
        },
        id: 74,
        modulename: [ "Shield cell bank", "SCB" ],
        name: "Specialised"
      },
      ShieldGenerator_Kinetic: {
        fdname: "ShieldGenerator_Kinetic",
        grades: {
          "1": {
            components: {
              "Distorted Shield Cycle Recordings": 1
            },
            features: {
              integrity: [ 0, .2 ],
              kinres: [ .05, .1 ],
              thermres: [ -.05, 0 ]
            }
          },
          "2": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              integrity: [ .05, .25 ],
              kinres: [ .07, .2 ],
              thermres: [ -.1, -.02 ]
            }
          },
          "3": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              "Modified Consumer Firmware": 1,
              Selenium: 1
            },
            features: {
              integrity: [ .1, .2 ],
              kinres: [ .09, .3 ],
              thermres: [ -.15, -.04 ]
            }
          },
          "4": {
            components: {
              "Focus Crystals": 1,
              "Inconsistent Shield Soak Analysis": 1,
              Mercury: 1
            },
            features: {
              integrity: [ .15, .35 ],
              kinres: [ .11, .4 ],
              thermres: [ -.2, -.06 ]
            }
          },
          "5": {
            components: {
              "Refined Focus Crystals": 1,
              Ruthenium: 1,
              "Untypical Shield Scans": 1
            },
            features: {
              integrity: [ .2, .4 ],
              kinres: [ .13, .5 ],
              thermres: [ -.25, -.08 ]
            }
          }
        },
        id: 75,
        modulename: [ "Shield generator", "Shields" ],
        name: "Kinetic resistant"
      },
      ShieldGenerator_Optimised: {
        fdname: "ShieldGenerator_Optimised",
        grades: {
          "1": {
            components: {
              "Distorted Shield Cycle Recordings": 1
            },
            features: {
              integrity: [ -.1, -.05 ],
              mass: [ 0, -.08 ],
              optmass: [ -.03, 0 ],
              power: [ -.12, -.2 ]
            }
          },
          "2": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              Germanium: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.04, -.16 ],
              optmass: [ -.06, -.01 ],
              power: [ -.14, -.25 ]
            }
          },
          "3": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              Germanium: 1,
              "Precipitated Alloys": 1
            },
            features: {
              integrity: [ -.3, -.15 ],
              mass: [ -.08, -.24 ],
              optmass: [ -.09, -.02 ],
              optmul: [ 0, .02 ],
              power: [ -.16, -.3 ]
            }
          },
          "4": {
            components: {
              "Inconsistent Shield Soak Analysis": 1,
              Niobium: 1,
              "Thermic Alloys": 1
            },
            features: {
              integrity: [ -.4, -.2 ],
              mass: [ -.12, -.32 ],
              optmass: [ -.12, -.03 ],
              optmul: [ 0, .04 ],
              power: [ -.18, -.35 ]
            }
          },
          "5": {
            components: {
              "Military Grade Alloys": 1,
              Tin: 1,
              "Untypical Shield Scans": 1
            },
            features: {
              integrity: [ -.5, -.25 ],
              mass: [ -.16, -.4 ],
              optmass: [ -.15, -.04 ],
              optmul: [ 0, .06 ],
              power: [ -.2, -.4 ]
            }
          }
        },
        id: 76,
        modulename: [ "Shield generator", "Shields" ],
        name: "Enhanced low power"
      },
      ShieldGenerator_Reinforced: {
        fdname: "ShieldGenerator_Reinforced",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              brokenregen: [ -.2, -.15 ],
              explres: [ 0, .03 ],
              kinres: [ 0, .03 ],
              optmul: [ .05, .1 ],
              thermres: [ 0, .03 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Phosphorus: 1
            },
            features: {
              brokenregen: [ -.24, -.12 ],
              explres: [ .02, .06 ],
              kinres: [ .02, .06 ],
              optmul: [ .07, .15 ],
              regen: [ -.06, -.04 ],
              thermres: [ .02, .06 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Mechanical Components": 1,
              Phosphorus: 1
            },
            features: {
              brokenregen: [ -.27, -.09 ],
              distdraw: [ .05, 0 ],
              explres: [ .04, .09 ],
              kinres: [ .04, .06 ],
              optmul: [ .09, .2 ],
              regen: [ -.09, -.03 ],
              thermres: [ .04, .09 ]
            }
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              "Configurable Components": 1,
              Manganese: 1
            },
            features: {
              brokenregen: [ -.3, -.06 ],
              distdraw: [ .1, .05 ],
              explres: [ .06, .12 ],
              kinres: [ .06, .12 ],
              optmul: [ .1, .25 ],
              regen: [ -.12, -.02 ],
              thermres: [ .06, .12 ]
            }
          },
          "5": {
            components: {
              Arsenic: 1,
              "Conductive Polymers": 1,
              "Improvised Components": 1
            },
            features: {
              brokenregen: [ -.33, -.03 ],
              distdraw: [ .15, .1 ],
              explres: [ .08, .15 ],
              kinres: [ .08, .15 ],
              optmul: [ .13, .3 ],
              regen: [ -.15, -.01 ],
              thermres: [ .08, .15 ]
            }
          }
        },
        id: 77,
        modulename: [ "Shield generator", "Shields" ],
        name: "Reinforced"
      },
      ShieldGenerator_Thermic: {
        fdname: "ShieldGenerator_Thermic",
        grades: {
          "1": {
            components: {
              "Distorted Shield Cycle Recordings": 1
            },
            features: {
              integrity: [ 0, .2 ],
              kinres: [ -.05, 0 ],
              thermres: [ .05, .1 ]
            }
          },
          "2": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              Germanium: 1
            },
            features: {
              integrity: [ .05, .25 ],
              kinres: [ -.1, -.02 ],
              thermres: [ .07, .2 ]
            }
          },
          "3": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              Germanium: 1,
              Selenium: 1
            },
            features: {
              integrity: [ .1, .3 ],
              kinres: [ -.15, -.04 ],
              thermres: [ .09, .3 ]
            }
          },
          "4": {
            components: {
              "Focus Crystals": 1,
              "Inconsistent Shield Soak Analysis": 1,
              Mercury: 1
            },
            features: {
              integrity: [ .15, .35 ],
              kinres: [ -.2, -.06 ],
              thermres: [ .11, .4 ]
            }
          },
          "5": {
            components: {
              "Refined Focus Crystals": 1,
              Ruthenium: 1,
              "Untypical Shield Scans": 1
            },
            features: {
              integrity: [ .2, .4 ],
              kinres: [ -.25, -.08 ],
              thermres: [ .13, .5 ]
            }
          }
        },
        id: 78,
        modulename: [ "Shield generator", "Shields" ],
        name: "Thermal resistant"
      },
      WakeScanner_LightWeight: {
        fdname: "WakeScanner_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.1 ],
              mass: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.2 ],
              mass: [ -.4, -.5 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.4, -.3 ],
              mass: [ -.5, -.6 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.5, -.4 ],
              mass: [ -.6, -.7 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.6, -.5 ],
              mass: [ -.7, -.8 ]
            }
          }
        },
        id: 79,
        modulename: [ "Frame shift wake scanner", "Wake scanner" ],
        name: "Lightweight"
      },
      WakeScanner_Reinforced: {
        fdname: "WakeScanner_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ 1, .4 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1.5, .8 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 2, 1.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2.5, 1.6 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 3, 2 ]
            }
          }
        },
        id: 81,
        modulename: [ "Frame shift wake scanner", "Wake scanner" ],
        name: "Reinforced"
      },
      WakeScanner_Shielded: {
        fdname: "WakeScanner_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ .2, .5 ],
              power: [ .3, .2 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              power: [ .6, .4 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              power: [ .9, .6 ]
            }
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .8, 2 ],
              power: [ 1.2, .8 ]
            }
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.5 ],
              power: [ 1.5, 1 ]
            }
          }
        },
        id: 80,
        modulename: [ "Frame shift wake scanner", "Wake scanner" ],
        name: "Shielded"
      },
      Weapon_DoubleShot: {
        fdname: "Weapon_DoubleShot",
        grades: {
          "1": {
            components: {
              Carbon: 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 10, 15 ],
              clip: [ .34, .34 ],
              range: [ -.25, -.1 ]
            }
          },
          "2": {
            components: {
              Carbon: 1,
              "Mechanical Equipment": 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 11, 16 ],
              clip: [ .34, .34 ],
              range: [ -.2, -.08 ]
            }
          },
          "3": {
            components: {
              Carbon: 1,
              "Cracked Industrial Firmware": 1,
              "Mechanical Equipment": 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 12, 17 ],
              clip: [ .34, 1 ],
              range: [ -.15, -.06 ]
            }
          },
          "4": {
            components: {
              "Mechanical Components": 1,
              "Security Firmware Patch": 1,
              Vanadium: 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 13, 18 ],
              clip: [ 1, 1 ],
              range: [ -.1, -.04 ]
            }
          },
          "5": {
            components: {
              "Configurable Components": 1,
              "High Density Composites": 1,
              "Modified Embedded Firmware": 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 14, 19 ],
              clip: [ 1, 1 ],
              range: [ -.05, -.02 ]
            }
          }
        },
        id: 82,
        modulename: [ "Weapon" ],
        name: "Double shot"
      },
      Weapon_Efficient: {
        fdname: "Weapon_Efficient",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              damage: [ 0, .04 ],
              thermload: [ -.3, -.4 ]
            }
          },
          "2": {
            components: {
              "Heat Dispersion Plate": 1,
              Sulphur: 1
            },
            features: {
              damage: [ .01, .05 ],
              power: [ 0, -.1 ],
              thermload: [ -.36, -.45 ]
            }
          },
          "3": {
            components: {
              Chromium: 1,
              "Exceptional Scrambled Emission Data": 1,
              "Heat Exchangers": 1
            },
            features: {
              damage: [ .01, .07 ],
              distdraw: [ -.15, -.25 ],
              power: [ -.06, -.2 ],
              thermload: [ -.4, -.5 ]
            }
          },
          "4": {
            components: {
              "Heat Vanes": 1,
              "Irregular Emission Data": 1,
              Selenium: 1
            },
            features: {
              damage: [ .03, .08 ],
              distdraw: [ -.2, -.3 ],
              power: [ -.1, -.3 ],
              thermload: [ -.45, -.55 ]
            }
          },
          "5": {
            components: {
              Cadmium: 1,
              "Proto Heat Radiators": 1,
              "Unexpected Emission Data": 1
            },
            features: {
              damage: [ .03, .09 ],
              distdraw: [ -.25, -.36 ],
              power: [ -.14, -.4 ],
              thermload: [ -.5, -.6 ]
            }
          }
        },
        id: 83,
        modulename: [ "Weapon" ],
        name: "Efficient"
      },
      Weapon_Focused: {
        fdname: "Weapon_Focused",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              range: [ .1, .2 ],
              rof: [ -.17, -.08 ],
              thermload: [ .5, .4 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Iron: 1
            },
            features: {
              piercing: [ 0, .1 ],
              range: [ .2, .4 ],
              rof: [ -.14, -.06 ],
              thermload: [ .4, .3 ]
            }
          },
          "3": {
            components: {
              Chromium: 1,
              "Conductive Ceramics": 1,
              Iron: 1
            },
            features: {
              piercing: [ .1, .2 ],
              range: [ .3, .6 ],
              rof: [ -.1, -.04 ],
              thermload: [ .3, .2 ]
            }
          },
          "4": {
            components: {
              "Focus Crystals": 1,
              Germanium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              piercing: [ .2, .4 ],
              range: [ .4, .8 ],
              rof: [ -.08, -.02 ],
              thermload: [ .2, .1 ]
            }
          },
          "5": {
            components: {
              "Military Supercapacitors": 1,
              Niobium: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              piercing: [ .3, .6 ],
              range: [ .5, 1 ],
              rof: [ -.04, 0 ],
              thermload: [ .1, 0 ]
            }
          }
        },
        id: 84,
        modulename: [ "Weapon" ],
        name: "Focused"
      },
      Weapon_HighCapacity: {
        fdname: "Weapon_HighCapacity",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              ammo: [ .1, .6 ],
              clip: [ .1, .6 ],
              mass: [ .25, .1 ],
              power: [ .2, .1 ],
              reload: [ .2, 0 ]
            }
          },
          "2": {
            components: {
              "Mechanical Scrap": 1,
              Vanadium: 1
            },
            features: {
              ammo: [ .2, .7 ],
              clip: [ .2, .7 ],
              mass: [ .5, .2 ],
              power: [ .25, .14 ],
              reload: [ .4, .1 ]
            }
          },
          "3": {
            components: {
              "Mechanical Scrap": 1,
              Niobium: 1,
              Vanadium: 1
            },
            features: {
              ammo: [ .3, .8 ],
              clip: [ .3, .8 ],
              mass: [ .75, .3 ],
              power: [ .3, .2 ],
              reload: [ .6, .2 ]
            }
          },
          "4": {
            components: {
              "High Density Composites": 1,
              "Mechanical Equipment": 1,
              Tin: 1
            },
            features: {
              ammo: [ .4, .9 ],
              clip: [ .4, .9 ],
              mass: [ 1, .4 ],
              power: [ .35, .25 ],
              reload: [ .8, .3 ]
            }
          },
          "5": {
            components: {
              "Mechanical Components": 1,
              "Military Supercapacitors": 1,
              "Proprietary Composites": 1
            },
            features: {
              ammo: [ .5, 1 ],
              clip: [ .5, 1 ],
              mass: [ 1.25, .5 ],
              power: [ .4, .3 ],
              reload: [ 1, .4 ]
            }
          }
        },
        id: 85,
        modulename: [ "Weapon" ],
        name: "High capacity"
      },
      Weapon_LightWeight: {
        fdname: "Weapon_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              distdraw: [ -.02, -.04 ],
              integrity: [ -.2, 0 ],
              mass: [ -.1, -.15 ],
              power: [ -.02, -.04 ]
            }
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              distdraw: [ -.04, -.08 ],
              integrity: [ -.3, -.1 ],
              mass: [ -.2, -.36 ],
              power: [ -.04, -.08 ]
            }
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              distdraw: [ -.06, -.12 ],
              integrity: [ -.4, -.2 ],
              mass: [ -.3, -.55 ],
              power: [ -.06, -.12 ]
            }
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              distdraw: [ -.08, -.16 ],
              integrity: [ -.5, -.3 ],
              mass: [ -.4, -.75 ],
              power: [ -.08, -.16 ]
            }
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              distdraw: [ -.1, -.2 ],
              integrity: [ -.6, -.4 ],
              mass: [ -.5, -.9 ],
              power: [ -.1, -.2 ]
            }
          }
        },
        id: 86,
        modulename: [ "Weapon" ],
        name: "Lightweight"
      },
      Weapon_LongRange: {
        fdname: "Weapon_LongRange",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              fallofffromrange: [ 1, 1 ],
              mass: [ .1, 0 ],
              range: [ .1, .2 ],
              shotspeed: [ .1, .2 ]
            }
          },
          "2": {
            components: {
              "Modified Consumer Firmware": 1,
              Sulphur: 1
            },
            features: {
              fallofffromrange: [ 1, 1 ],
              mass: [ .2, .05 ],
              power: [ .05, 0 ],
              range: [ .2, .4 ],
              shotspeed: [ .2, .4 ]
            }
          },
          "3": {
            components: {
              "Focus Crystals": 1,
              "Modified Consumer Firmware": 1,
              Sulphur: 1
            },
            features: {
              fallofffromrange: [ 1, 1 ],
              mass: [ .3, .1 ],
              power: [ .1, .05 ],
              range: [ .3, .6 ],
              shotspeed: [ .3, .6 ]
            }
          },
          "4": {
            components: {
              "Conductive Polymers": 1,
              "Focus Crystals": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              fallofffromrange: [ 1, 1 ],
              mass: [ .4, .15 ],
              power: [ .15, .1 ],
              range: [ .4, .8 ],
              shotspeed: [ .4, .8 ]
            }
          },
          "5": {
            components: {
              "Biotech Conductors": 1,
              "Cracked Industrial Firmware": 1,
              "Thermic Alloys": 1
            },
            features: {
              fallofffromrange: [ 1, 1 ],
              mass: [ .5, .2 ],
              power: [ .2, .15 ],
              range: [ .5, 1 ],
              shotspeed: [ .5, 1 ]
            }
          }
        },
        id: 87,
        modulename: [ "Weapon" ],
        name: "Long range"
      },
      Weapon_Overcharged: {
        fdname: "Weapon_Overcharged",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              clip: [ -.05, -.04 ],
              damage: [ .14, .25 ],
              distdraw: [ .9, .45 ],
              jitter: [ 1, .4 ],
              thermload: [ .45, .3 ]
            }
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Nickel: 1
            },
            features: {
              clip: [ -.1, -.06 ],
              damage: [ .2, .3 ],
              distdraw: [ .8, .4 ],
              jitter: [ .8, .3 ],
              thermload: [ .3, .14 ]
            }
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Electrochemical Arrays": 1,
              Nickel: 1
            },
            features: {
              clip: [ -.16, -.1 ],
              damage: [ .25, .35 ],
              distdraw: [ .7, .35 ],
              jitter: [ .6, .2 ],
              thermload: [ .14, 0 ]
            }
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              "Polymer Capacitors": 1,
              Zinc: 1
            },
            features: {
              clip: [ -.2, -.12 ],
              damage: [ .3, .4 ],
              distdraw: [ .6, .3 ],
              jitter: [ .4, .1 ]
            }
          },
          "5": {
            components: {
              "Conductive Polymers": 1,
              "Modified Embedded Firmware": 1,
              Zirconium: 1
            },
            features: {
              clip: [ -.25, -.16 ],
              damage: [ .35, .45 ],
              distdraw: [ .5, .25 ]
            }
          }
        },
        id: 88,
        modulename: [ "Weapon" ],
        name: "Overcharged"
      },
      Weapon_RapidFire: {
        fdname: "Weapon_RapidFire",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              damage: [ -.07, -.06 ],
              jitter: [ 2.5, 1.25 ],
              reload: [ -.1, -.25 ],
              rof: [ .17, .25 ]
            }
          },
          "2": {
            components: {
              "Heat Dispersion Plate": 1,
              "Mechanical Scrap": 1
            },
            features: {
              damage: [ -.1, -.07 ],
              distdraw: [ -.1, -.2 ],
              jitter: [ 2, 1 ],
              reload: [ -.2, -.36 ],
              rof: [ .25, .34 ]
            }
          },
          "3": {
            components: {
              "Mechanical Equipment": 1,
              "Precipitated Alloys": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              damage: [ -.1, -.1 ],
              distdraw: [ -.15, -.25 ],
              jitter: [ 1.5, .75 ],
              reload: [ -.3, -.45 ],
              rof: [ .34, .42 ]
            }
          },
          "4": {
            components: {
              "Mechanical Components": 1,
              "Modified Consumer Firmware": 1,
              "Thermic Alloys": 1
            },
            features: {
              damage: [ -.13, -.1 ],
              distdraw: [ -.2, -.3 ],
              jitter: [ 1, .5 ],
              reload: [ -.4, -.55 ],
              rof: [ .42, .53 ]
            }
          },
          "5": {
            components: {
              "Configurable Components": 1,
              "Precipitated Alloys": 1,
              Technetium: 1
            },
            features: {
              damage: [ -.15, -.13 ],
              distdraw: [ -.25, -.36 ],
              jitter: [ .5, .25 ],
              reload: [ -.5, -.65 ],
              rof: [ .53, .66 ]
            }
          }
        },
        id: 89,
        modulename: [ "Weapon" ],
        name: "Rapid fire"
      },
      Weapon_ShortRange: {
        fdname: "Weapon_ShortRange",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              damage: [ .03, .09 ],
              range: [ -.35, -.1 ]
            }
          },
          "2": {
            components: {
              "Modified Consumer Firmware": 1,
              Nickel: 1
            },
            features: {
              damage: [ .08, .18 ],
              range: [ -.45, -.2 ],
              thermload: [ .2, .1 ]
            }
          },
          "3": {
            components: {
              "Electrochemical Arrays": 1,
              "Modified Consumer Firmware": 1,
              Nickel: 1
            },
            features: {
              damage: [ .1, .26 ],
              integrity: [ -.2, -.1 ],
              range: [ -.55, -.3 ],
              thermload: [ .3, .2 ]
            }
          },
          "4": {
            components: {
              "Conductive Polymers": 1,
              "Electrochemical Arrays": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              damage: [ .15, .35 ],
              integrity: [ -.3, -.2 ],
              range: [ -.65, -.4 ],
              thermload: [ .4, .3 ]
            }
          },
          "5": {
            components: {
              "Biotech Conductors": 1,
              "Configurable Components": 1,
              "Cracked Industrial Firmware": 1
            },
            features: {
              damage: [ .2, .45 ],
              integrity: [ -.4, -.3 ],
              range: [ -.75, -.5 ],
              thermload: [ .5, .4 ]
            }
          }
        },
        id: 90,
        modulename: [ "Weapon" ],
        name: "Short range"
      },
      Weapon_Sturdy: {
        fdname: "Weapon_Sturdy",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ .2, .5 ],
              mass: [ .5, 0 ],
              thermload: [ 0, -.1 ]
            }
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, 1 ],
              mass: [ 1, .5 ],
              thermload: [ -.06, -.15 ]
            }
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ .6, 1.5 ],
              mass: [ 1.5, 1 ],
              piercing: [ 0, .14 ],
              thermload: [ -.1, -.2 ]
            }
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ .8, 2 ],
              mass: [ 2, 1.5 ],
              piercing: [ .1, .3 ],
              thermload: [ -.15, -.25 ]
            }
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 1, 2.5 ],
              mass: [ 2.5, 2 ],
              piercing: [ .2, .45 ],
              thermload: [ -.2, -.3 ]
            }
          }
        },
        id: 91,
        modulename: [ "Weapon" ],
        name: "Sturdy"
      }
    },
    modifications: {
      ammo: {
        id: 0,
        name: "ammo",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      boot: {
        id: 1,
        name: "boot",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      brokenregen: {
        id: 2,
        name: "brokenregen",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      burst: {
        id: 3,
        name: "burst",
        type: "numeric",
        method: "overwrite",
        higherbetter: true
      },
      burstrof: {
        id: 41,
        name: "burstrof",
        type: "numeric",
        method: "overwrite",
        higherbetter: false
      },
      clip: {
        id: 4,
        name: "clip",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      damage: {
        id: 5,
        name: "damage",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      damagedist: {
        id: 40,
        name: "damage",
        type: "object",
        hidden: true,
        method: "overwrite"
      },
      distdraw: {
        id: 6,
        name: "distdraw",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      duration: {
        id: 7,
        name: "duration",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      eff: {
        id: 8,
        name: "eff",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      engcap: {
        id: 9,
        name: "engcap",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      engrate: {
        id: 10,
        name: "engrate",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      explres: {
        id: 11,
        name: "explres",
        type: "percentage",
        method: "additive",
        higherbetter: true
      },
      facinglimit: {
        id: 12,
        name: "facinglimit",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      falloff: {
        id: 45,
        name: "falloff",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      fallofffromrange: {
        id: 42,
        name: "fallofffromrange",
        type: "numeric",
        hidden: true,
        method: "overwrite"
      },
      hullboost: {
        id: 13,
        name: "hullboost",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      hullreinforcement: {
        id: 14,
        name: "hullreinforcement",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      integrity: {
        id: 15,
        name: "integrity",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      jitter: {
        id: 16,
        name: "jitter",
        type: "numeric",
        method: "additive",
        higherbetter: false
      },
      kinres: {
        id: 17,
        name: "kinres",
        type: "percentage",
        method: "additive",
        higherbetter: true
      },
      mass: {
        id: 18,
        name: "mass",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      maxfuel: {
        id: 19,
        name: "maxfuel",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      optmass: {
        id: 20,
        name: "optmass",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      optmul: {
        id: 21,
        name: "optmul",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      pgen: {
        id: 22,
        name: "pgen",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      piercing: {
        id: 23,
        name: "piercing",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      power: {
        id: 24,
        name: "power",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      protection: {
        id: 44,
        name: "protection",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      range: {
        id: 25,
        name: "range",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      ranget: {
        id: 26,
        name: "ranget",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      regen: {
        id: 27,
        name: "regen",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      reload: {
        id: 28,
        name: "reload",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      rof: {
        id: 29,
        name: "rof",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      angle: {
        id: 46,
        name: "angle",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      scanrate: {
        id: 49,
        name: "scanrate",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      scantime: {
        id: 48,
        name: "scantime",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      shield: {
        id: 30,
        name: "shield",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      shieldboost: {
        id: 31,
        name: "shieldboost",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      shotspeed: {
        id: 43,
        name: "shotspeed",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      spinup: {
        id: 32,
        name: "spinup",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      syscap: {
        id: 33,
        name: "syscap",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      sysrate: {
        id: 34,
        name: "sysrate",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      thermload: {
        id: 35,
        name: "thermload",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      thermres: {
        id: 36,
        name: "thermres",
        type: "percentage",
        method: "additive",
        higherbetter: true
      },
      wepcap: {
        id: 37,
        name: "wepcap",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      weprate: {
        id: 38,
        name: "weprate",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      shieldreinforcement: {
        id: 39,
        name: "shieldreinforcement",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      }
    },
    modifierActions: {
      OutfittingFieldType_BootTime: {
        boot: 1
      },
      OutfittingFieldType_ExplosiveResistance: {
        explres: 1
      },
      OutfittingFieldType_DefenceModifierHealthAddition: {
        hullreinforcement: 1
      },
      OutfittingFieldType_DefenceModifierHealthMultiplier: {
        hullboost: 1
      },
      OutfittingFieldType_KineticResistance: {
        kinres: 1
      },
      OutfittingFieldType_DefenceModifierShieldMultiplier: {
        shieldboost: 1
      },
      OutfittingFieldType_ThermicResistance: {
        thermres: 1
      },
      OutfittingFieldType_EngineHeatRate: {
        thermload: 1
      },
      OutfittingFieldType_EngineOptimalMass: {
        optmass: 1
      },
      OutfittingFieldType_EngineOptPerformance: {
        optmul: 1
      },
      OutfittingFieldType_FSDHeatRate: {
        thermload: 1
      },
      OutfittingFieldType_FSDMaxFuelPerJump: {
        maxfuel: 1
      },
      OutfittingFieldType_FSDOptimalMass: {
        optmass: 1
      },
      OutfittingFieldType_FSDInterdictorFacingLimit: {
        facinglimit: 1
      },
      OutfittingFieldType_FSDInterdictorRange: {
        ranget: 1
      },
      OutfittingFieldType_Integrity: {
        integrity: 1
      },
      OutfittingFieldType_Mass: {
        mass: 1
      },
      OutfittingFieldType_SensorTargetScanAngle: {
        angle: 1
      },
      OutfittingFieldType_DSS_RateMult: {
        scanrate: 1
      },
      OutfittingFieldType_ScannerTimeToScan: {
        scantime: 1
      },
      OutfittingFieldType_ScannerRange: {
        range: 1
      },
      OutfittingFieldType_MaxAngle: {
        angle: 1
      },
      OutfittingFieldType_Range: {
        range: 1
      },
      OutfittingFieldType_PowerDraw: {
        power: 1
      },
      OutfittingFieldType_EnginesCapacity: {
        engcap: 1
      },
      OutfittingFieldType_EnginesRecharge: {
        engrate: 1
      },
      OutfittingFieldType_SystemsCapacity: {
        syscap: 1
      },
      OutfittingFieldType_SystemsRecharge: {
        sysrate: 1
      },
      OutfittingFieldType_WeaponsCapacity: {
        wepcap: 1
      },
      OutfittingFieldType_WeaponsRecharge: {
        weprate: 1
      },
      OutfittingFieldType_HeatEfficiency: {
        eff: 1
      },
      OutfittingFieldType_PowerCapacity: {
        pgen: 1
      },
      OutfittingFieldType_BrokenRegenRate: {
        brokenregen: 1
      },
      OutfittingFieldType_EnergyPerRegen: {
        distdraw: 1
      },
      OutfittingFieldType_ShieldGenOptimalMass: {
        optmass: 1
      },
      OutfittingFieldType_ShieldGenStrength: {
        optmul: 1
      },
      OutfittingFieldType_RegenRate: {
        regen: 1
      },
      OutfittingFieldType_ShieldBankHeat: {
        thermload: 1
      },
      OutfittingFieldType_ShieldBankDuration: {
        duration: 1
      },
      OutfittingFieldType_ShieldBankReinforcement: {
        shieldreinforcement: 1
      },
      OutfittingFieldType_ShieldBankSpinUp: {
        spinup: 1
      },
      OutfittingFieldType_ThermalLoad: {
        thermload: 1
      },
      OutfittingFieldType_DistributorDraw: {
        distdraw: 1
      },
      OutfittingFieldType_AmmoMaximum: {
        ammo: 1
      },
      OutfittingFieldType_RateOfFire: {
        rof: 1
      },
      OutfittingFieldType_weapon_burst_rof: {
        burstrof: 1
      },
      OutfittingFieldType_weapon_burst_size: {
        burst: 1
      },
      OutfittingFieldType_AmmoClipSize: {
        clip: 1
      },
      OutfittingFieldType_weapon_clip_size_override: {
        clip: 1
      },
      OutfittingFieldType_Damage: {
        damage: 1
      },
      OutfittingFieldType_weapon_falloffrange_from_range: {},
      OutfittingFieldType_ArmourPenetration: {
        piercing: 1
      },
      OutfittingFieldType_Jitter: {
        jitter: 1
      },
      OutfittingFieldType_MaximumRange: {
        range: 1
      },
      OutfittingFieldType_ReloadTime: {
        reload: 1
      },
      special_auto_loader: {},
      special_choke_canister: {},
      special_concordant_sequence: {
        thermload: .5
      },
      special_corrosive_shell: {
        ammo: -.2
      },
      special_dispersal_field: {},
      special_distortion_field: {},
      special_drag_munitions: {},
      special_emissive_munitions: {
        thermload: 1
      },
      special_feedback_cascade: {
        breachdmg: -.2,
        damage: -.2
      },
      special_force_shell: {
        jitter: 1,
        speed: -.1667
      },
      special_fsd_interrupt: {
        damage: -.3,
        rof: .5
      },
      special_high_yield_shell: {
        rof: .1111111111111111
      },
      special_incendiary_rounds: {
        rof: .05263157894736842,
        thermload: 2,
        damagedist: {
          T: 1
        }
      },
      special_inertial_impact: {
        damage: .5,
        jitter: 3,
        damagedist: {
          K: .5,
          T: .5
        }
      },
      special_overload_munitions: {
        damagedist: {
          E: .5,
          T: .5
        }
      },
      special_phasing_sequence: {
        damage: -.1
      },
      special_plasma_slug: {
        damage: -.2
      },
      special_radiant_canister: {
        ammo: -.25
      },
      special_regeneration_sequence: {
        damage: -.1
      },
      special_reverberating_cascade: {},
      special_scramble_spectrum: {
        rof: .1111111111111111
      },
      special_screening_shell: {
        reload: -.5
      },
      special_shiftlock_canister: {
        damage: -.2
      },
      special_super_penetrator: {
        reload: .5
      },
      special_thermal_cascade: {},
      special_thermal_conduit: {
        damage: -.2
      },
      special_thermal_vent: {
        thermload: .25
      },
      special_thermalshock: {
        damage: -.2
      },
      trade_cell_heat_cell_units: {
        shieldreinforcement: -1,
        thermload: -1
      },
      trade_defence_health_add_defence_global_mult: {
        explres: .4,
        hullreinforcement: 1,
        kinres: .4,
        thermres: .4
      },
      trade_distributor_engine_charge_system_charge: {
        engcap: 1,
        syscap: -1
      },
      trade_distributor_global_charge_mass: {
        engcap: .75,
        mass: 1,
        syscap: .75,
        wepcap: .75
      },
      trade_engine_curve_mult_engine_heat: {
        optmul: .4,
        thermload: 1
      },
      trade_fsd_fuel_per_jump_fsd_heat: {
        maxfuel: .5,
        thermload: 1
      },
      trade_interdictor_range_facing_limit: {},
      trade_mass_defence_health_add: {
        hullreinforcement: -.75,
        mass: -1
      },
      trade_mass_health: {
        integrity: 1,
        mass: .4
      },
      trade_passive_power_booster_global_mult: {
        explres: .4,
        kinres: .4,
        power: -1,
        thermres: .4
      },
      trade_passive_power_boot_time: {
        boot: 1,
        power: -.5
      },
      trade_passive_power_cell_spin_up: {},
      trade_passive_power_distributor_global_rate: {
        engrate: -1,
        power: -1,
        sysrate: -1,
        weprate: -1
      },
      trade_passive_power_engine_curve: {
        optmass: -.66,
        power: -1
      },
      trade_passive_power_shield_global_mult: {
        explres: .5,
        kinres: .5,
        power: -1,
        thermres: .5
      },
      trade_passive_power_weapon_active: {
        distdraw: -.6,
        power: 1
      },
      trade_shield_curve_shield_curve_mult: {
        optmass: -1,
        optmul: -.8
      },
      trade_shield_global_mult_shield_broken_regen: {
        brokenregen: -1,
        explres: -.5,
        kinres: -.5,
        thermres: -.5
      },
      trade_shield_kinetic_shield_thermic: {
        kinres: 1,
        thermres: -1
      },
      trade_weapon_active_passive_power: {
        distdraw: -.67,
        power: 1
      },
      trade_weapon_damage_weapon_active_power: {
        damage: .5,
        distdraw: 1
      },
      trade_weapon_hardness_weapon_heat: {
        piercing: .4,
        thermload: 1
      }
    },
    modules: {
      am: {
        blueprints: {
          AFM_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "integrity", "power" ]
      },
      bh: {
        blueprints: {
          Armour_Advanced: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          Armour_Explosive: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          Armour_HeavyDuty: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          Armour_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          Armour_Thermic: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          }
        },
        modifications: [ "explres", "hullboost", "kinres", "mass", "thermres" ]
      },
      bl: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          }
        },
        modifications: [ "damage", "damagedist", "distdraw", "fallofffromrange", "integrity", "jitter", "mass", "piercing", "power", "range", "thermload" ],
        specials: [ "special_concordant_sequence", "special_regeneration_sequence", "special_thermal_conduit", "special_thermalshock", "special_thermal_vent" ]
      },
      bsg: {
        blueprints: {
          ShieldGenerator_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Optimised: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Thermic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          }
        },
        modifications: [ "boot", "brokenregen", "distdraw", "explres", "integrity", "kinres", "mass", "optmass", "optmul", "power", "regen", "thermload", "thermres" ]
      },
      c: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "distdraw", "fallofffromrange", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "shotspeed", "thermload" ],
        specials: [ "special_auto_loader", "special_dispersal_field", "special_smart_rounds", "special_force_shell", "special_high_yield_shell", "special_thermal_cascade" ]
      },
      cc: {
        blueprints: {
          CollectionLimpet_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          CollectionLimpet_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          CollectionLimpet_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      ch: {
        blueprints: {
          ChaffLauncher_ChaffCapacity: {
            grades: {
              "3": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ChaffLauncher_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ChaffLauncher_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ChaffLauncher_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          }
        },
        modifications: [ "ammo", "integrity", "mass", "power", "reload" ]
      },
      cr: {
        blueprints: {},
        modifications: []
      },
      rpl: {
        blueprints: {},
        modifications: []
      },
      cs: {
        blueprints: {
          Sensor_CargoScanner_FastScan: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          CargoScanner_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_CargoScanner_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          CargoScanner_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          CargoScanner_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_CargoScanner_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power", "angle", "range", "scantime" ]
      },
      dc: {
        blueprints: {},
        modifications: []
      },
      ec: {
        blueprints: {
          ECM_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ECM_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ECM_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      fc: {
        blueprints: {
          Weapon_DoubleShot: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          }
        },
        modifications: [ "ammo", "burst", "burstrof", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "shotspeed", "thermload" ],
        specials: [ "special_corrosive_shell", "special_blinding_shell", "special_incendiary_rounds", "special_drag_munitions", "special_screening_shell" ]
      },
      rfl: {
        blueprints: {},
        modifications: []
      },
      fh: {
        blueprints: {},
        modifications: []
      },
      fi: {
        blueprints: {
          FSDinterdictor_Expanded: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Felicity Farseer", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Colonel Bris Dekker" ]
              }
            }
          },
          FSDinterdictor_LongRange: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Felicity Farseer", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "boot", "facinglimit", "integrity", "mass", "power", "ranget" ]
      },
      fs: {
        blueprints: {
          FuelScoop_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "integrity", "power" ]
      },
      fsd: {
        blueprints: {
          FSD_FastBoot: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              },
              "5": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              }
            }
          },
          FSD_LongRange: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              },
              "5": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              }
            }
          },
          FSD_Shielded: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              },
              "5": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              }
            }
          }
        },
        modifications: [ "boot", "integrity", "mass", "maxfuel", "optmass", "power", "thermload" ]
      },
      ft: {
        blueprints: {},
        modifications: []
      },
      fx: {
        blueprints: {
          FuelTransferLimpet_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          FuelTransferLimpet_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          FuelTransferLimpet_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      hb: {
        blueprints: {
          HatchBreakerLimpet_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          HatchBreakerLimpet_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          HatchBreakerLimpet_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      hr: {
        blueprints: {
          HullReinforcement_Advanced: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          HullReinforcement_Explosive: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          HullReinforcement_HeavyDuty: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          HullReinforcement_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          HullReinforcement_Thermic: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          }
        },
        modifications: [ "hullreinforcement", "explres", "hullboost", "kinres", "mass", "thermres" ]
      },
      hs: {
        blueprints: {
          HeatSinkLauncher_HeatSinkCapacity: {
            grades: {
              "3": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          HeatSinkLauncher_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          HeatSinkLauncher_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          HeatSinkLauncher_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          }
        },
        modifications: [ "ammo", "integrity", "mass", "power", "reload" ]
      },
      kw: {
        blueprints: {
          Sensor_KillWarrantScanner_FastScan: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          KillWarrantScanner_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          KillWarrantScanner_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          KillWarrantScanner_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          KillWarrantScanner_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_KillWarrantScanner_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power", "angle", "range", "scantime" ]
      },
      ls: {
        blueprints: {
          LifeSupport_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          },
          LifeSupport_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          },
          LifeSupport_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "boot", "integrity", "mass", "power" ]
      },
      mc: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "shotspeed", "thermload" ],
        specials: [ "special_auto_loader", "special_corrosive_shell", "special_emissive_munitions", "special_incendiary_rounds", "special_smart_rounds", "special_thermalshock" ]
      },
      axmc: {
        blueprints: {},
        modifications: []
      },
      ml: {
        blueprints: {},
        modifications: []
      },
      mr: {
        blueprints: {
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "reload", "rof", "thermload" ],
        specials_S: [ "special_drag_munitions", "special_emissive_munitions", "special_overload_munitions", "special_penetrator_payload", "special_thermal_cascade" ],
        specials_D: [ "special_drag_munitions", "special_emissive_munitions", "special_fsd_interrupt", "special_overload_munitions", "special_penetrator_payload", "special_thermal_cascade" ]
      },
      axmr: {
        blueprints: {},
        modifications: []
      },
      mrp: {
        blueprints: {},
        modifications: []
      },
      nl: {
        blueprints: {
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Juri Ishmaak" ]
              },
              "5": {
                engineers: [ "Juri Ishmaak" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Juri Ishmaak" ]
              },
              "5": {
                engineers: [ "Juri Ishmaak" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Juri Ishmaak" ]
              },
              "5": {
                engineers: [ "Juri Ishmaak" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Juri Ishmaak" ]
              },
              "5": {
                engineers: [ "Juri Ishmaak" ]
              }
            }
          }
        },
        modifications: [ "ammo", "boot", "clip", "damage", "damagedist", "fallofffromrange", "integrity", "jitter", "mass", "piercing", "power", "reload", "rof", "thermload" ],
        specials: [ "special_ion_disruptor", "special_overload_munitions", "special_radiant_canister", "special_reverberating_cascade", "special_shiftlock_canister", "special_emissive_munitions" ]
      },
      pa: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_Focused: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "thermload" ],
        specials: [ "special_blinding_shell", "special_dispersal_field", "special_phasing_sequence", "special_plasma_slug", "special_lock_breaker", "special_thermal_conduit" ]
      },
      pas: {
        blueprints: {},
        modifications: []
      },
      pc: {
        blueprints: {
          ProspectingLimpet_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          ProspectingLimpet_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          ProspectingLimpet_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      pce: {
        blueprints: {},
        modifications: []
      },
      pci: {
        blueprints: {},
        modifications: []
      },
      pcm: {
        blueprints: {},
        modifications: []
      },
      pcq: {
        blueprints: {},
        modifications: []
      },
      pd: {
        blueprints: {
          PowerDistributor_HighFrequency: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          },
          PowerDistributor_PriorityEngines: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              }
            }
          },
          PowerDistributor_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          },
          PowerDistributor_Shielded: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          },
          PowerDistributor_PrioritySystems: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              }
            }
          },
          PowerDistributor_PriorityWeapons: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              }
            }
          }
        },
        modifications: [ "boot", "engcap", "engrate", "integrity", "mass", "power", "syscap", "sysrate", "wepcap", "weprate" ]
      },
      pl: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Focused: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          }
        },
        modifications: [ "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "rof", "thermload" ],
        specials: [ "special_concordant_sequence", "special_emissive_munitions", "special_phasing_sequence", "special_scramble_spectrum", "special_thermalshock" ]
      },
      po: {
        blueprints: {
          PointDefence_PointDefenseCapacity: {
            grades: {
              "3": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          PointDefence_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          PointDefence_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          PointDefence_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          }
        },
        modifications: [ "ammo", "integrity", "mass", "power", "reload" ]
      },
      pp: {
        blueprints: {
          PowerPlant_Armoured: {
            grades: {
              "1": {
                engineers: [ "Felicity Farseer", "Hera Tani", "Marco Qwent" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "4": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "5": {
                engineers: [ "Hera Tani" ]
              }
            }
          },
          PowerPlant_Stealth: {
            grades: {
              "1": {
                engineers: [ "Felicity Farseer", "Hera Tani", "Marco Qwent" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              }
            }
          },
          PowerPlant_Boosted: {
            grades: {
              "1": {
                engineers: [ "Felicity Farseer", "Hera Tani", "Marco Qwent" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "4": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "5": {
                engineers: [ "Hera Tani" ]
              }
            }
          }
        },
        modifications: [ "eff", "integrity", "mass", "pgen" ]
      },
      psg: {
        blueprints: {
          ShieldGenerator_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Optimised: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Thermic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          }
        },
        modifications: [ "boot", "brokenregen", "distdraw", "explres", "integrity", "kinres", "mass", "optmass", "optmul", "power", "regen", "thermload", "thermres" ]
      },
      pv: {
        blueprints: {},
        modifications: []
      },
      rf: {
        blueprints: {
          Refineries_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "integrity", "power" ]
      },
      rg: {
        blueprints: {
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "thermload" ],
        specials: [ "special_feedback_cascade", "special_plasma_slug", "special_super_penetrator" ]
      },
      s: {
        blueprints: {
          Sensor_Sensor_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              }
            }
          },
          Sensor_Sensor_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              }
            }
          },
          Sensor_Sensor_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power", "range", "angle" ]
      },
      sb: {
        blueprints: {
          ShieldBooster_Explosive: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Chung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          },
          ShieldBooster_HeavyDuty: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Chung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          },
          ShieldBooster_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Chung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          },
          ShieldBooster_Resistive: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Chung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          },
          ShieldBooster_Thermic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Chung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Chung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          }
        },
        modifications: [ "explres", "integrity", "kinres", "mass", "power", "shieldboost", "thermres" ]
      },
      sfn: {
        blueprints: {},
        modifications: []
      },
      sc: {
        blueprints: {},
        modifications: []
      },
      scb: {
        blueprints: {
          ShieldCellBank_Rapid: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Lori Jameson" ]
              }
            }
          },
          ShieldCellBank_Specialised: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "boot", "clip", "duration", "integrity", "mass", "power", "shieldreinforcement", "spinup", "thermload" ]
      },
      sg: {
        blueprints: {
          ShieldGenerator_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Optimised: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Thermic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          }
        },
        modifications: [ "boot", "brokenregen", "distdraw", "explres", "integrity", "kinres", "mass", "optmass", "optmul", "power", "regen", "thermload", "thermres" ]
      },
      ss: {
        blueprints: {
          Sensor_SurfaceScanner_FastScan: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson" ]
              }
            }
          },
          Sensor_SurfaceScanner_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson" ]
              }
            }
          },
          Sensor_SurfaceScanner_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Chung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Chung", "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "mass", "angle", "range", "scanrate" ]
      },
      xs: {
        blueprints: {},
        modifications: []
      },
      t: {
        blueprints: {
          Engine_Dirty: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Felicty Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Professor Palin" ]
              },
              "5": {
                engineers: [ "Professor Palin" ]
              }
            }
          },
          Engine_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Felicty Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Professor Palin" ]
              },
              "5": {
                engineers: [ "Professor Palin" ]
              }
            }
          },
          Engine_Tuned: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Felicty Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Professor Palin" ]
              },
              "5": {
                engineers: [ "Professor Palin" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "optmass", "optmul", "power", "thermload" ]
      },
      tp: {
        blueprints: {
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          }
        },
        modifications: [ "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "rof", "thermload" ],
        specials: [ "special_mass_lock_munition", "special_penetrator_payload", "special_reverberating_cascade" ]
      },
      ul: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Focused: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          }
        },
        modifications: [ "burst", "burstrof", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "rof", "thermload" ],
        specials: [ "special_concordant_sequence", "special_inertial_impact", "special_phasing_sequence", "special_scramble_spectrum", "special_thermalshock" ]
      },
      ws: {
        blueprints: {
          Sensor_WakeScanner_FastScan: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          WakeScanner_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_WakeScanner_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          WakeScanner_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          WakeScanner_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_WakeScanner_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power", "angle", "range", "scantime" ]
      }
    },
    specials: {
      special_auto_loader: {
        id: 0,
        edname: "special_auto_loader",
        name: "Auto loader"
      },
      special_choke_canister: {
        id: 1,
        edname: "special_choke_canister",
        name: "Choke canister"
      },
      special_concordant_sequence: {
        id: 2,
        edname: "special_concordant_sequence",
        name: "Concordant sequence"
      },
      special_corrosive_shell: {
        id: 3,
        edname: "special_corrosive_shell",
        name: "Corrosive shell"
      },
      special_blinding_shell: {
        id: 4,
        edname: "special_blinding_shell",
        name: "Dazzle shell"
      },
      special_dispersal_field: {
        id: 5,
        edname: "special_dispersal_field",
        name: "Dispersal field"
      },
      special_distortion_field: {
        id: 6,
        edname: "special_distortion_field",
        name: "Distortion field"
      },
      special_drag_munitions: {
        id: 7,
        edname: "special_drag_munitions",
        name: "Drag munitions"
      },
      special_emissive_munitions: {
        id: 8,
        edname: "special_emissive_munitions",
        name: "Emissive munitions"
      },
      special_feedback_cascade: {
        id: 9,
        edname: "special_feedback_cascade",
        name: "Feedback cascade"
      },
      special_force_shell: {
        id: 10,
        edname: "special_force_shell",
        name: "Force shell"
      },
      special_fsd_interrupt: {
        id: 33,
        edname: "special_fsd_interrupt",
        name: "FSD interrupt"
      },
      special_high_yield_shell: {
        id: 11,
        edname: "special_high_yield_shell",
        name: "High yield shell"
      },
      special_incendiary_rounds: {
        id: 12,
        edname: "special_incendiary_rounds",
        name: "Incendiary rounds"
      },
      special_inertial_impact: {
        id: 32,
        edname: "special_inertial_impact",
        name: "Inertial impact"
      },
      special_ion_disruptor: {
        id: 13,
        edname: "special_ion_disruptor",
        name: "Ion disruptor"
      },
      special_mass_lock_munition: {
        id: 14,
        edname: "special_mass_lock_munition",
        name: "Mass lock munition"
      },
      special_overload_munitions: {
        id: 15,
        edname: "special_overload_munitions",
        name: "Overload munitions"
      },
      special_penetrator_payload: {
        id: 16,
        edname: "special_penetrator_payload",
        name: "Penetrator payload"
      },
      special_phasing_sequence: {
        id: 17,
        edname: "special_phasing_sequence",
        name: "Phasing sequence"
      },
      special_plasma_slug: {
        id: 18,
        edname: "special_plasma_slug",
        name: "Plasma slug"
      },
      special_radiant_canister: {
        id: 19,
        edname: "special_radiant_canister",
        name: "Radiant Canister"
      },
      special_regeneration_sequence: {
        id: 20,
        edname: "special_regeneration_sequence",
        name: "Regeneration sequence"
      },
      special_reverberating_cascade: {
        id: 21,
        edname: "special_reverberating_cascade",
        name: "Reverberating cascade"
      },
      special_scramble_spectrum: {
        id: 22,
        edname: "special_scramble_spectrum",
        name: "Scramble spectrum"
      },
      special_screening_shell: {
        id: 23,
        edname: "special_screening_shell",
        name: "Screening shell"
      },
      special_shiftlock_canister: {
        id: 24,
        edname: "special_shiftlock_canister",
        name: "Shift-lock canister"
      },
      special_smart_rounds: {
        id: 25,
        edname: "special_smart_rounds",
        name: "Smart rounds"
      },
      special_super_penetrator: {
        id: 26,
        edname: "special_super_penetrator",
        name: "Super penetrator"
      },
      special_lock_breaker: {
        id: 27,
        edname: "special_lock_breaker",
        name: "Target lock breaker"
      },
      special_thermal_cascade: {
        id: 28,
        edname: "special_thermal_cascade",
        name: "Thermal cascade"
      },
      special_thermal_conduit: {
        id: 29,
        edname: "special_thermal_conduit",
        name: "Thermal conduit"
      },
      special_thermal_vent: {
        id: 30,
        edname: "special_thermal_vent",
        name: "Thermal vent"
      },
      special_thermalshock: {
        id: 31,
        edname: "special_thermalshock",
        name: "Thermal shock"
      }
    }
  }
};
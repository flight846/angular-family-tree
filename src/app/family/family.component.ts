import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.css"],
})
export class FamilyComponent implements OnInit {
  members$ = [
    {
      id: 1,
      childOf: 0,
      name: "Michael Lim",
      relationship: "Father",
      relationshipType: "elderGeneration",
      relationshipStrength: "strong",
    },
    {
      id: 9,
      childOf: "Michael Lim",
      name: "Desiree Lim",
      relationship: "Sister",
      relationshipType: "myGeneration",
      relationshipStrength: "strong",
    },
    {
      id: 10,
      childOf: 1,
      name: "Jackson Lim",
      relationship: "Brother",
      relationshipType: "myGeneration",
      relationshipStrength: "strong",
    },
    {
      id: 2,
      childOf: 1,
      name: "Me",
      relationship: "me",
      relationshipType: "myGeneration",
      relationshipStrength: "strong",
    },
    {
      id: 3,
      childOf: 1,
      name: "Jasseline Lim",
      relationship: "Wife",
      relationshipType: "myGeneration",
      relationshipStrength: "strong",
    },
    {
      id: 4,
      childOf: 2,
      name: "Gilbert Tan",
      relationship: "Son",
      relationshipType: "",
      relationshipStrength: "strong",
    },
    {
      id: 5,
      childOf: 0,
      name: "Angeline Neo",
      relationship: "Mother",
      relationshipType: "elderGeneration",
      relationshipStrength: "strong",
    },
    {
      id: 6,
      childOf: 0,
      name: "Harold Lim",
      relationship: "Uncle",
      relationshipType: "elderGeneration",
      relationshipStrength: "strong",
    },
    {
      id: 7,
      childOf: 4,
      name: "Francis Tan",
      relationship: "Grandson",
      relationshipType: "",
      relationshipStrength: "strong",
    },
    {
      id: 8,
      childOf: 2,
      name: "Lissy Tan",
      relationship: "Daughter",
      relationshipType: "",
      relationshipStrength: "strong",
    },
    {
      id: 9,
      childOf: 4,
      name: "William Tan",
      relationship: "Grandson",
      relationshipType: "",
      relationshipStrength: "strong",
    },
  ];

  currentMembers = [];

  constructor() {}

  ngOnInit() {
    this.getFamilyTree(this.members$);
  }

  getFamilyTree(arr) {
    this.currentMembers = this.unflatten(arr);
  }

  unflatten(array, parent?, tree?) {
    tree = typeof tree !== "undefined" ? tree : [];
    parent = typeof parent !== "undefined" ? parent : { id: 0 };

    const children = _.filter(array, function (child) {
      return child.childOf === parent.id;
    });

    if (!_.isEmpty(children)) {
      if (parent.id === 0) {
        tree = children;
      } else {
        parent["children"] = children;
      }
      _.each(children, (child) => this.unflatten(array, child));
    }

    return tree;
  }
}

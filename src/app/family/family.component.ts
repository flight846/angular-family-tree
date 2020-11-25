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
      "type": "family",
      "_id": "5faabdee364a1d24f49dd6a6",
      "name": "Michael Lim",
      "relationship": "father",
      "relationshipStrength": "normal",
      "birthYear": 1961,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "relationshipType": "elderGeneration",
      "marriedTo": "Agnes Neo",
      "childOf": "0",
      "id": "5faabdee364a1d24f49dd6a6"
    },
    {
      "type": "family",
      "_id": "5faabe48364a1d24f49dd6a8",
      "name": "Agnes Neo",
      "relationship": "mother",
      "relationshipStrength": "normal",
      "birthYear": 1965,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "relationshipType": "elderGeneration",
      "marriedTo": "Michael Lim",
      "childOf": "0",
      "id": "5faabe48364a1d24f49dd6a8"
    },
    {
      "type": "family",
      "_id": "5faabeda364a1d24f49dd6aa",
      "name": "Debra Lim",
      "relationship": "sister",
      "relationshipStrength": "strong",
      "birthYear": 1990,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "relationshipType": "myGeneration",
      "childOf": "5faabdee364a1d24f49dd6a6",
      "id": "5faabeda364a1d24f49dd6aa"
    },
    {
      "type": "family",
      "_id": "5faabf0e364a1d24f49dd6ab",
      "name": "Nelson Lim",
      "relationship": "brother",
      "relationshipStrength": "strong",
      "birthYear": 1992,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "relationshipType": "myGeneration",
      "childOf": "5faabdee364a1d24f49dd6a6",
      "id": "5faabf0e364a1d24f49dd6ab"
    },
    {
      "type": "nonFamily",
      "_id": "5faacd5636ca362f7d4410b8",
      "name": "Ahmad Driver",
      "relationship": "eldersOthersMale",
      "relationshipStrength": "normal",
      "birthYear": 1965,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "childOf": "0",
      "id": "5faacd5636ca362f7d4410b8"
    },
    {
      "type": "family",
      "_id": "5fb29f03336f770fd651ba89",
      "name": "Lois Phua",
      "relationship": "wife",
      "relationshipType": "myGeneration",
      "relationshipStrength": "strong",
      "birthYear": 1994,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "marriedTo": "Test Teams",
      "childOf": "5faabdee364a1d24f49dd6a6",
      "id": "5fb29f03336f770fd651ba89"
    },
    {
      "type": "family",
      "_id": "5fb29f37336f770fd651ba8b",
      "name": "Amos Lim",
      "relationship": "son",
      "relationshipType": "secondGeneration",
      "relationshipStrength": "normal",
      "birthYear": 2018,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "childOf": "5fbe7bdb502667201e42b687",
      "id": "5fb29f37336f770fd651ba8b"
    },
    {
      "type": "family",
      "_id": "5fb2a2f5336f770fd651ba8d",
      "name": "Bernies Lim",
      "relationship": "daughter",
      "relationshipType": "secondGeneration",
      "relationshipStrength": "normal",
      "birthYear": 2010,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "childOf": "5fbe7bdb502667201e42b687",
      "id": "5fb2a2f5336f770fd651ba8d"
    },
    {
      "type": "family",
      "_id": "5fb2a430336f770fd651ba8f",
      "name": "Ann Loh",
      "relationship": "grandDaughter",
      "relationshipType": "thirdGeneration",
      "relationshipStrength": "weak",
      "birthYear": 2010,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "__v": 0,
      "childOf": "5fb29f37336f770fd651ba8b",
      "isDeceased": true,
      "id": "5fb2a430336f770fd651ba8f"
    },
    {
      "type": "family",
      "_id": "5fbe7bdb502667201e42b687",
      "name": "Test Teams",
      "relationship": "me",
      "relationshipType": "myGeneration",
      "relationshipStrength": "strong",
      "birthYear": 1992,
      "familyId": "5faab7d7364a1d24f49dd6a4",
      "childOf": "5faabdee364a1d24f49dd6a6",
      "__v": 0,
      "id": "5fbe7bdb502667201e42b687"
    }
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
    parent = typeof parent !== "undefined" ? parent : { id: '0' };

    const children = _.filter(array, function (child) {
      return child.childOf === parent.id;
    });

    if (!_.isEmpty(children)) {
      if (parent.id === '0') {
        tree = children;
      } else {
        parent["children"] = children;
      }
      _.each(children, (child) => this.unflatten(array, child));
    }

    return tree;
  }
}

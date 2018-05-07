import { Component, OnInit } from '@angular/core';
// import { JsonData } from '../../../jsonFile/myJson';


@Component({
  selector: 'app-rd-details',
  templateUrl: './rd-details.component.html',
  styleUrls: ['./rd-details.component.css']
})
export class RdDetailsComponent implements OnInit {

   jsonData  = {
    'shikeisyoNo': 'shno',
    'shikeishoDescription': 'Steering',
    'orderNo': '222',
    'machineType': 'engine',
    'rdDesiredDate': '2012-02-02',
    'dataOfIssue': '2018-01-02',
    'requestNo': '123',
    'productionVolumeUnits': '100',
    'payout1': 'pay1',
    'payout2': 'pay2',
    'payout3': 'pay3',
    'requestCode': 'plant1',
    'partsDestination': 'ccd',
    'managementNo': 'mngmentNo',
    'networkNumber': 'net number',
    'materialCost': '$100',
    'designerName': 'Balaji',
    'department': 'abc',
    'group': 'rd',
    'responsiblePersonL4': 'john',
    'personInchrge': 'tom',
    'remarks': 'remarks',
    'eoNo': 'eoNo',
    'parts': [
    {
      'PrototypeCode': 'P',
      'district': 'Bangalore',
      'generation': 'gen',
      'partNumber': 'partno',
      'partName': 'partName',
      'quantity': '12',
      'internalDeliveryDate': '2018-01-02',
      'implementationInstruction': 'instructions',
      'upg': 'UPG',
      'interiorMakerName': 'maker',
      'partRemarks': 'part remark'
    },
    {
      'PrototypeCode': 'P',
      'district': 'Bangalore',
      'generation': 'gen',
      'partNumber': 'partno2',
      'partName': 'partName2',
      'quantity': '12',
      'internalDeliveryDate': '2018-01-02',
      'implementationInstruction': 'instructions',
      'upg': 'UPG',
      'interiorMakerName': 'maker',
      'partRemarks': 'part remark'
    }
    ],
  'rdApprovalImageBase64Data' : 'FFAAFF…'
  };
  showChangesIncoterm = false;
  constructor() {

   }

  ngOnInit() {
  }

}

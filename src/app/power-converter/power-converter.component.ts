import { Component, OnInit } from '@angular/core';

import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-power-converter',
  templateUrl: './power-converter.component.html',
  styleUrls: ['./power-converter.component.css']
})
export class PowerConverterComponent implements OnInit {

  convertedPower: any
  inputPower: any
  powerToConvert: string
  availablePowerConversion = ["mW to dBm", "dBm to mW"]
  isInputDisabled = true
  isBtnConverDisabled = true
  inputPowerPlaceholder = 'Please select power to convert'

  constructor() {
  }

  ngOnInit() {
  }

  convertPower() {
    if(this.inputPower != null) {
      switch(this.powerToConvert) {
        case "mW to dBm":
          this.convertedPower = (10 * Math.log10(this.inputPower)).toFixed(2) + " dBm"
          this.inputPower = null
          break
        case "dBm to mW":
          this.convertedPower = (Math.pow(10, (this.inputPower/10))).toFixed(2) + " mW"
          this.inputPower = null
          break
        default:
          this.inputPowerPlaceholder = 'Please select power to convert'
      }
    }
    else
    {
      this.convertedPower = "Error: Power to convert is empty."
    }
  }

  selectPowerConverter(selectedPowerToConvert: MatRadioChange) {
    this.convertedPower = ""
    this.isInputDisabled = false
    this.powerToConvert = selectedPowerToConvert.value
    this.inputPower = null
    switch(this.powerToConvert) {
      case "mW to dBm":
        this.inputPowerPlaceholder = 'Enter power in milliwats'
        break
      case "dBm to mW":
        this.inputPowerPlaceholder = 'Enter power in dBm'
        break
      default:
        this.inputPowerPlaceholder = 'Please select power to convert'
    }
  }
}

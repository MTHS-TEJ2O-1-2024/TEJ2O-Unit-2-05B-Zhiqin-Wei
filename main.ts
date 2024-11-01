/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daly Wei
 * Created on: Sep 2024
 * This program for show the light lightValue
 */


// variables
let lightValue: number
 let lightValuePercentage: number

input.onButtonPressed(Button.A, function () {
  // input
  lightValue = input.lightLevel()

  //process
  lightValuePercentage = (lightValue / 255) * 100
  lightValuePercentage = Math.round(lightValuePercentage)

  //output 
  basic.clearScreen()
  basic.showString('Percentage light is: ' +lightValuePercentage.toString() + "%")
}) 
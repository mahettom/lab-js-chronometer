class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1
      if (printTimeCallback) printTimeCallback()
    }, 1000)
    
    }

  getMinutes() {
    let minute = Math.floor(this.currentTime / 60)
    
    return minute
    }

  getSeconds() {
    let seconde = (this.currentTime % 60)
    return seconde;
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString()

    if (valueString.length === 1){
      return '0' + valueString
    } 
    else {
      return valueString.slice(-2);
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
    }

  split() {
    getMinutes()
    getSeconds()
    return `${this.minute}:${this.seconde}`
    }
}

const student = {
  name: "shradha",
  age: 23,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
  }
};

// To test it, you would call:
student.getAvg(); // Output: 95
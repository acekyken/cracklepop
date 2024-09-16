let cracklepop : string = ""

for (let i= 1; i<101;i++) {
  if (i%3 == 0) {
    cracklepop += "Crackle"
  }
  if (i%5 == 0) {
    cracklepop += "Pop"
  }
  if (cracklepop.length) {
    console.log(cracklepop)
  } else {
    console.log(i)
  }
  cracklepop = ""
}
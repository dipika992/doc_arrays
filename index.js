let items={
    programming:["JavaScript","Python","Ruby","Go"], input1:"languages", input2:"isChallenging",
    input3: "isRewarding", input4: "difficulty", input5: "isFun", input6: true, number: 7, input7: true,
    
    Show()
    {
        for(i=0;i<this.programming.length;i++){
            let msg=this.programming[i]
            console.log(msg)
        }
        console.log(this.input1)
        console.log(this.input2)
        console.log(this.input3)
        console.log(this.input4)
        console.log(this.input5)
        console.log(this.programming)
        console.log(this.input6)
        console.log(this.number)
        console.log(this.input7)
    }
}
items.Show()
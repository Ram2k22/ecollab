const branchIcon = document.querySelectorAll('.branches > div a');
const branches = ['ECE','CSE','EEE','MECH','CHEM','MME','CIVIL'];



for(var i = 0; i < branchIcon.length; i++){
    branchIcon[i].addEventListener('click',(event) => {
        let h1 = `<h1>Hey Welcome ${branches[i]} Buddy</h1>`;
        function BranchName(){
            welcome = document.querySelector('.welcome');
            console.log(welcome);
        }
    })
}


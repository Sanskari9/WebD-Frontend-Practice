class RailwayForm{
    submit(){
        alert("This form is submited")
    }
    cancel(){
        alert(this.name+" this form is cancelled")
    }
    filled(name, no){
        this.name = name;
        this.no = no
    }
}

let harry = new RailwayForm();
harry.filled("Santosh",110);
harry.cancel();
harry.submit();

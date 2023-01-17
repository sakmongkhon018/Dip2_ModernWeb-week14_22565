//5.optional Parameter
function showDetail(id:number,name:string, email:string,staff?:string,greeting:string="hello"):void{
   
    if(staff !=undefined){
        console.log(`${greeting}, ID: ${id},Name:${name} Email:${email},Staff:${staff}`)
    } 
    console.log(`${greeting},ID: ${id},Name:${name} Email:${email}`)
}

showDetail(101,"Mark Zuckerberg","mark@gmail.com")
showDetail(102,"Elon Mask","elon@gmail.com")
showDetail(103,"Jeeff","jeff@gmail.com","AWS CEO")
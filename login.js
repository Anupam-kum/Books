const email = document.getElementById("email");
const password = document.getElementById("password");

const books = [
    {
        "horror": [
            {
                "name":"book name",
                "imageUrl":"../images/someimage.png",
                "author": "Author name",
                "description":"Some description about the book",
                "rating": "*****",
                "price":"$20"
            },
            {
                "name":"book name",
                "imageUrl":"../images/someimage.png",
                "author": "Author name",
                "description":"Some description about the book",
                "rating": "*****",
                "price":"$20"
            }
        ],
        "horror2": [
            {
                "name":"book name",
                "imageUrl":"../images/someimage.png",
                "author": "Author name",
                "description":"Some description about the book",
                "rating": "*****",
                "price":"$20"
            },
            {
                "name":"book name",
                "imageUrl":"../images/someimage.png",
                "author": "Author name",
                "description":"Some description about the book",
                "rating": "*****",
                "price":"$20"
            }
        ]
    }
]

Login = () => {
    const errormessage= document.getElementById('errormessage')
    const user = JSON.parse(localStorage.getItem('user'))
    if(email.value !== "" && password.value != ""){
        if(email.value === user.email && password.value === user.password){
            localStorage.setItem('books', JSON.stringify(books))
            window.location.href="./nav.html";
        }else{
             alert("Invalid credentials");
        }
    }else{
        errormessage.textContent = "Your inputs are blank!!"
    }
}
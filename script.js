document.addEventListener("DOMContentLoaded", function() {
    const imgData = [
        {
            "src": "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 1",
            "caption": "This is image 1"
        },
        {
            "src": "https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 2",
            "caption": "This is image 2"
        },
        {
            "src": "https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-three-colours.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 3",
            "caption": "This is image 3"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 4",
            "caption": "This is image 4"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 5",
            "caption": "This is image 5"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 6",
            "caption": "This is image 6"
        },
        {
            "src": "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 7",
            "caption": "This is image 7"
        },
        {
            "src": "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 8",
            "caption": "This is image 8"
        },
        {
            "src": "https://images.pexels.com/photos/20147829/pexels-photo-20147829/free-photo-of-businesswoman-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 9",
            "caption": "This is image 9"
        },
        {
            "src": "https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-a-sunflower-in-a-field-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 10",
            "caption": "This is image 10"
        },
        {
            "src": "https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-a-sunflower-in-a-field-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 11",
            "caption": "This is image 11"
        },
        {
            "src": "https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-a-sunflower-in-a-field-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 12",
            "caption": "This is image 12"
        },
        {
            "src": "https://images.pexels.com/photos/13308447/pexels-photo-13308447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 13",
            "caption": "This is image 13"
        },
        {
            "src": "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 14",
            "caption": "This is image 14"
        },
        {
            "src": "https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 15",
            "caption": "This is image 15"
        },
        {
            "src": "https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-three-colours.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 16",
            "caption": "This is image 16"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 17",
            "caption": "This is image 17"
        },
        {
            "src": "https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 18",
            "caption": "This is image 18"
        },
        {
            "src": "https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-three-colours.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 19",
            "caption": "This is image 19"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 20",
            "caption": "This is image 20"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 21",
            "caption": "This is image 21"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 22",
            "caption": "This is image 22"
        },
        {
            "src": "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 23",
            "caption": "This is image 23"
        },
        {
            "src": "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 24",
            "caption": "This is image 24"
        },
        {
            "src": "https://images.pexels.com/photos/20147829/pexels-photo-20147829/free-photo-of-businesswoman-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 25",
            "caption": "This is image 25"
        }     
    ];

    const imageContainer = document.getElementById("imageContainer");

    imgData.forEach(imageData => {
        const image = document.createElement("img");
        image.src = imageData.src;
        image.alt = imageData.alt;


        const caption = document.createElement("p");
        caption.textContent = imageData.caption;
        

        const imageWrapper = document.createElement("div");
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(caption);

        imageContainer.appendChild(imageWrapper);
    });
});

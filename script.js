document.addEventListener("DOMContentLoaded", function() {
    const imgData = [
        {
            "src": "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 1",
            "caption": "Image 1"
        },
        {
            "src": "https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 2",
            "caption": "Image 2"
        },
        {
            "src": "https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-three-colours.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 3",
            "caption": "Image 3"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 4",
            "caption": "Image 4"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 5",
            "caption": "Image 5"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 6",
            "caption": "Image 6"
        },
        {
            "src": "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 7",
            "caption": "Image 7"
        },
        {
            "src": "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 8",
            "caption": "Image 8"
        },
        {
            "src": "https://images.pexels.com/photos/20147829/pexels-photo-20147829/free-photo-of-businesswoman-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 9",
            "caption": "Image 9"
        },
        {
            "src": "https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-a-sunflower-in-a-field-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 10",
            "caption": "Image 10"
        },
        {
            "src": "https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-a-sunflower-in-a-field-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 11",
            "caption": "Image 11"
        },
        {
            "src": "https://images.pexels.com/photos/18592820/pexels-photo-18592820/free-photo-of-a-sunflower-in-a-field-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 12",
            "caption": "Image 12"
        },
        {
            "src": "https://images.pexels.com/photos/13308447/pexels-photo-13308447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 13",
            "caption": "Image 13"
        },
        {
            "src": "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 14",
            "caption": "Image 14"
        },
        {
            "src": "https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 15",
            "caption": "Image 15"
        },
        {
            "src": "https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-three-colours.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 16",
            "caption": "Image 16"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 17",
            "caption": "Image 17"
        },
        {
            "src": "https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 18",
            "caption": "Image 18"
        },
        {
            "src": "https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-three-colours.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 19",
            "caption": "Image 19"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 20",
            "caption": "Image 20"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 21",
            "caption": "Image 21"
        },
        {
            "src": "https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 22",
            "caption": "Image 22"
        },
        {
            "src": "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 23",
            "caption": "Image 23"
        },
        {
            "src": "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 24",
            "caption": "Image 24"
        },
        {
            "src": "https://images.pexels.com/photos/20147829/pexels-photo-20147829/free-photo-of-businesswoman-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "alt": "Image 25",
            "caption": "Image 25"
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

const generateForms = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");
const OPENAI_API_KEY = "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";

const generateAiImages = async (userPrompt, userImgQuantity) => {
    try {
      // Send a request to the OpenAI API to generate images based on user inputs
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: userPrompt,
          n: parseInt(userImgQuantity),
          size: "512x512",
          response_format: "b64_json"
        }),
      });

         if(!response.ok) throw new Error("Failed to generate Image! Please try again");

       const {data} = await response.json();
       console.log(data);

    }catch(error){
        alert(error.message
        );
    }
}
const handleFormSubmission = (e) =>{
    e.preventDefault();

    //Get users input and image quantity values from the form

    const userPrompt = e.srcElement[0].value;
    const userImageQuantity = e.srcElement[1].value;
     
    const imgCardMarkup = Array.from({length: userImageQuantity}, () =>
    `     <div class="img-card loading">
    <img src="images/loader.svg" alt="">
    <a href="" class="download-btn">
        <img src="images/download.svg" alt="download icon">
    </a>
</div>`
).join("");

imageGallery.innerHTML = imgCardMarkup;
generateAiImages(userPrompt, userImageQuantity);
}


generateForms.addEventListener("submit", handleFormSubmission);